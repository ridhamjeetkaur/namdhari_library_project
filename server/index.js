// index.js - Main Express server file with MongoDB
import express from 'express';
import cors from 'cors';
import path from 'path';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
dotenv.config();

// Get __dirname equivalent for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Import database connection
import { connectDB, testConnection, closeConnection } from './db.js';

// Import routes
import booksRoutes from './routes/books.js';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware - Order is important!
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// CORS Configuration - Updated for production
app.use(cors({
    origin: [
        'http://localhost:5173',
        'http://localhost:3000', 
        'http://localhost:5000',
        process.env.FRONTEND_URL,
        // Add your Vercel domain here when you deploy
        // 'https://your-app-name.vercel.app'
    ].filter(Boolean), // Remove undefined values
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

// Serve static files (for book covers/images)
console.log('Serving static files from:', path.join(__dirname, 'public/covers'));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/covers', express.static(path.join(__dirname, 'public/covers')));

// Create uploads and covers directories if they don't exist
import fs from 'fs';
const uploadsDir = path.join(__dirname, 'uploads');
const coversDir = path.join(__dirname, 'public/covers');

if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir, { recursive: true });
    console.log('📁 Created uploads directory');
}

if (!fs.existsSync(coversDir)) {
    fs.mkdirSync(coversDir, { recursive: true });
    console.log('📁 Created covers directory');
}

// API Routes
app.use('/api/books', booksRoutes);

// Health check endpoint
app.get('/api/health', async (req, res) => {
    try {
        const dbConnected = await testConnection();
        res.json({
            status: 'OK',
            message: 'Namdhari Library Server is running',
            database: dbConnected ? 'Connected' : 'Disconnected',
            environment: process.env.NODE_ENV || 'development',
            port: PORT,
            timestamp: new Date().toISOString()
        });
    } catch (error) {
        console.error('Health check error:', error);
        res.status(500).json({
            status: 'Error',
            message: 'Health check failed',
            error: error.message,
            timestamp: new Date().toISOString()
        });
    }
});

// Root endpoint
app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to Namdhari Library API',
        version: '1.0.0',
        database: 'MongoDB',
        environment: process.env.NODE_ENV || 'development',
        endpoints: {
            books: '/api/books',
            recommended: '/api/books/recommended',
            paginated: '/api/books/paginated',
            health: '/api/health'
        }
    });
});

// Catch-all for API routes that don't exist
app.use('/api/*', (req, res) => {
    res.status(404).json({
        error: 'API Route not found',
        message: `The API endpoint ${req.originalUrl} was not found.`,
        availableEndpoints: [
            '/api/books',
            '/api/books/recommended', 
            '/api/books/paginated',
            '/api/health'
        ]
    });
});

// 404 handler for non-API routes
app.use((req, res, next) => {
    res.status(404).json({
        error: 'Route not found',
        message: `The requested URL ${req.originalUrl} was not found on this server.`
    });
});

// Global error handler
app.use((error, req, res, next) => {
    console.error('Global error handler:', error);

    // Don't send stack trace in production
    const isDevelopment = process.env.NODE_ENV === 'development';
    
    res.status(error.status || 500).json({
        error: 'Internal Server Error',
        message: isDevelopment ? error.message : 'Something went wrong',
        ...(isDevelopment && { 
            stack: error.stack,
            details: error
        })
    });
});

// Graceful shutdown handlers
const gracefulShutdown = async (signal) => {
    console.log(`\n🔄 Received ${signal}. Shutting down server gracefully...`);

    try {
        await closeConnection();
        console.log('✅ Database connection closed');
        console.log('✅ Server shut down successfully');
        process.exit(0);
    } catch (error) {
        console.error('❌ Error during shutdown:', error);
        process.exit(1);
    }
};

process.on('SIGINT', () => gracefulShutdown('SIGINT'));
process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));

// Handle uncaught exceptions
process.on('uncaughtException', (error) => {
    console.error('❌ Uncaught Exception:', error);
    gracefulShutdown('uncaughtException');
});

process.on('unhandledRejection', (reason, promise) => {
    console.error('❌ Unhandled Rejection at:', promise, 'reason:', reason);
    gracefulShutdown('unhandledRejection');
});

// Start server
const startServer = async () => {
    try {
        console.log('🔄 Starting Namdhari Library Server...');
        
        // Connect to database
        console.log('🔄 Connecting to database...');
        const dbConnected = await connectDB();

        if (!dbConnected) {
            console.error('❌ Cannot start server: Database connection failed');
            console.error('   Please check your MONGODB_URI environment variable');
            process.exit(1);
        }
        
        console.log('✅ Database connection successful');

        // Start listening - Render requires binding to 0.0.0.0
        const server = app.listen(PORT, '0.0.0.0', () => {
            console.log('🚀 Server started successfully!');
            console.log(`📍 Server running on: http://0.0.0.0:${PORT}`);
            console.log(`🌍 Environment: ${process.env.NODE_ENV || 'development'}`);
            console.log(`🗄️  Database: MongoDB ${dbConnected ? '✅' : '❌'}`);
            console.log(`📚 API Endpoints:`);
            console.log(`   - Health: /api/health`);
            console.log(`   - Books: /api/books`);
            console.log(`   - Recommended: /api/books/recommended`);
            console.log(`   - Paginated: /api/books/paginated`);
            console.log(`📁 Static files served from:`);
            console.log(`   - Uploads: /uploads`);
            console.log(`   - Covers: /covers`);
        });

        // Handle server errors
        server.on('error', (error) => {
            if (error.code === 'EADDRINUSE') {
                console.error(`❌ Port ${PORT} is already in use`);
            } else {
                console.error('❌ Server error:', error);
            }
            process.exit(1);
        });

        return server;

    } catch (error) {
        console.error('❌ Failed to start server:', error);
        process.exit(1);
    }
};

// Initialize server
startServer();

export default app;