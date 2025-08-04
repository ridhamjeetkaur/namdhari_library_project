// db.js - MongoDB connection using Mongoose
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

// Connection state
let isConnected = false;

// MongoDB connection options
const options = {
    maxPoolSize: 10, // Maintain up to 10 socket connections
    serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    bufferCommands: false, // Disable mongoose buffering
};

// Connect to MongoDB
export const getDb = async () => {
    if (isConnected) {
        console.log('📊 Already connected to MongoDB');
        return true;
    }

    try {
        const mongoUri = process.env.MONGODB_URI;
        
        if (!mongoUri) {
            throw new Error('MONGODB_URI is not defined in environment variables');
        }

        console.log('🔄 Connecting to MongoDB...');
        
        const conn = await mongoose.connect(mongoUri, options);
        
        isConnected = true;
        console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
        console.log(`📚 Database: ${conn.connection.name}`);
        
        return true;
        
    } catch (error) {
        console.error('❌ MongoDB connection error:', error.message);
        isConnected = false;
        return false;
    }
};

// Test database connection
export const testConnection = async () => {
    try {
        if (!isConnected) {
            await connectDB();
        }
        
        // Test the connection
        await mongoose.connection.db.admin().ping();
        console.log('✅ Database connection test successful');
        return true;
        
    } catch (error) {
        console.error('❌ Database connection test failed:', error.message);
        return false;
    }
};

// Close database connection
export const closeConnection = async () => {
    try {
        if (isConnected) {
            await mongoose.connection.close();
            isConnected = false;
            console.log('✅ MongoDB connection closed');
        }
    } catch (error) {
        console.error('❌ Error closing MongoDB connection:', error.message);
        throw error;
    }
};

// Handle connection events
mongoose.connection.on('connected', () => {
    console.log('📊 Mongoose connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
    console.error('❌ Mongoose connection error:', err);
    isConnected = false;
});

mongoose.connection.on('disconnected', () => {
    console.log('📊 Mongoose disconnected from MongoDB');
    isConnected = false;
});

// For backwards compatibility with your existing code
export const closePool = closeConnection;

export default mongoose;