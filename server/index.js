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
import { testConnection, closeConnection } from './db.js';

// Import routes
import booksRoutes from './routes/books.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json({ limit: '10mb' }));
const _dirname = path.dirname("")
const buildpath = path.join(_dirname, "../namdhari_library/dist")
app.use(express.static(buildpath));

// Middleware
app.use(cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:5173'|| 'http://localhost:5000' ||'https://digitalsikhlibrary.vercel.app/',
    credentials: true
}));

app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Serve static files (for book covers/images)
// THIS IS THE LINE TO ADD
console.log('Serving static files from:', path.join(__dirname, 'public/covers'));

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/covers', express.static(path.join(__dirname, 'public/covers')));

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
            timestamp: new Date().toISOString()
        });
    } catch (error) {
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
        endpoints: {
            books: '/api/books',
            recommended: '/api/books/recommended',
            paginated: '/api/books/paginated',
            health: '/api/health'
        }
    });
});

// 404 handler
app.use((req, res, next) => {
    res.status(404).json({
        error: 'Route not found',
        message: `The requested URL ${req.originalUrl} was not found on this server.`
    });
});

// Global error handler
app.use((error, req, res, next) => {
    console.error('Global error handler:', error);

    res.status(error.status || 500).json({
        error: 'Internal Server Error',
        message: process.env.NODE_ENV === 'development' ? error.message : 'Something went wrong',
        ...(process.env.NODE_ENV === 'development' && { stack: error.stack })
    });
});

// Graceful shutdown
process.on('SIGINT', async () => {
    console.log('\n🔄 Shutting down server gracefully...');

    try {
        await closeConnection();
        console.log('✅ Server shut down successfully');
        process.exit(0);
    } catch (error) {
        console.error('❌ Error during shutdown:', error);
        process.exit(1);
    }
});

// Start server
const startServer = async () => {
    try {
        // Test database connection
        const dbConnected = await testConnection();

        if (!dbConnected) {
            console.error('❌ Cannot start server: Database connection failed');
            process.exit(1);
        }

        // Start listening
        app.listen(PORT, () => {
            console.log('🚀 Server started successfully!');
            console.log(`📍 Server running on: http://localhost:${PORT}`);
            console.log(`🌍 Environment: ${process.env.NODE_ENV || 'development'}`);
            console.log(`🗄️  Database: MongoDB`);
            console.log(`📚 API Endpoints:`);
            console.log(`   - Health: http://localhost:${PORT}/api/health`);
            console.log(`   - Books: http://localhost:${PORT}/api/books`);
            console.log(`   - Recommended: http://localhost:${PORT}/api/books/recommended`);
            console.log(`   - Paginated: http://localhost:${PORT}/api/books/paginated`);
        });

    } catch (error) {
        console.error('❌ Failed to start server:', error);
        process.exit(1);
    }
};

// Initialize server
startServer();

export default app;