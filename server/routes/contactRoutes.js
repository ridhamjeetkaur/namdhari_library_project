// routes/contactRoutes.js
import express from 'express';
import ContactMessage from '../models/ContactMessage.js';

const router = express.Router();

// @route   POST /api/contact
// @desc    Handles new contact form submissions
// @access  Public
router.post('/', async (req, res) => {
    const { name, email, subject, message } = req.body;

    // Simple validation
    if (!name || !email || !subject || !message) {
        return res.status(400).json({ message: 'All fields are required.' });
    }

    try {
        const newContactMessage = new ContactMessage({
            name,
            email,
            subject,
            message
        });

        await newContactMessage.save();

        res.status(201).json({ 
            message: 'Your message has been received successfully!',
            data: newContactMessage
        });

    } catch (error) {
        console.error('Error saving contact message:', error);
        
        // Handle Mongoose validation errors
        if (error.name === 'ValidationError') {
            const errors = {};
            for (const field in error.errors) {
                errors[field] = error.errors[field].message;
            }
            return res.status(400).json({ message: 'Validation failed', errors });
        }
        
        res.status(500).json({ message: 'Server error. Please try again later.' });
    }
});

export default router;