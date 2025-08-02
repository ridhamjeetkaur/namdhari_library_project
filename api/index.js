const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

// Database connection (serverless optimized)
let cachedDb = null;

async function connectDB() {
  if (cachedDb) {
    return cachedDb;
  }
  
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    cachedDb = conn;
    return conn;
  } catch (error) {
    console.error('Database connection error:', error);
    throw error;
  }
}

// Middleware
app.use(cors());
app.use(express.json());

// Connect to database before handling requests
app.use(async (req, res, next) => {
  try {
    await connectDB();
    next();
  } catch (error) {
    res.status(500).json({ error: 'Database connection failed' });
  }
});

// Routes
app.use('/api/books', require('./books'));

// Default route
app.get('/api', (req, res) => {
  res.json({ message: 'Namdhari Library API is running!' });
});

module.exports = app;