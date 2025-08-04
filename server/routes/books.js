// routes/books.js - Book routes with simplified MongoDB schema
import express from 'express';
import Book from '../models/Book.js';

const router = express.Router();

/**
 * Helper function to transform Mongoose document _id to 'id' for frontend
 * @param {Object|Array} data - Single book object or array of book objects
 * @returns {Object|Array} - Transformed data with 'id' instead of '_id'
 */
const transformBookData = (data) => {
    if (Array.isArray(data)) {
        return data.map(book => ({
            id: book._id ? book._id.toString() : undefined, // Ensure _id exists before toString
            title: book.title,
            author: book.author,
            description: book.description,
            cover: book.cover,
            link: book.link,
            rating: book.rating,
            category: book.category,
            downloadLink: book.downloadLink,
            // Add any other fields you have in your Book model
        }));
    } else if (data && typeof data === 'object' && data._id) {
        return {
            id: data._id.toString(),
            title: data.title,
            author: data.author,
            description: data.description,
            cover: data.cover,
            link: data.link,
            rating: data.rating,
            category: data.category,
            downloadLink: data.downloadLink,
            // Add any other fields you have in your Book model
        };
    }
    return data; // Return as is if not a recognized book object/array
};


// GET /api/books - Get all books with optional filtering and pagination
// This endpoint is comprehensive and can serve as the primary one.
router.get('/', async (req, res) => {
    try {
        const {
            search,
            category,
            author,
            minRating,
            limit = 50, // Default limit
            page = 1,   // Default page
            sortBy = 'createdAt', // Default sort
            sortOrder = 'desc'    // Default sort order
        } = req.query;

        // Build query
        let query = {};

        if (search) {
            query.$or = [
                { title: new RegExp(search, 'i') },
                { author: new RegExp(search, 'i') },
                { category: new RegExp(search, 'i') }
            ];
        }

        if (category) {
            query.category = new RegExp(category, 'i');
        }

        if (author) {
            query.author = new RegExp(author, 'i');
        }

        if (minRating) {
            query.rating = { $gte: parseFloat(minRating) };
        }

        // Calculate pagination
        const pageNum = Math.max(1, parseInt(page));
        const limitNum = Math.min(100, Math.max(1, parseInt(limit))); // Cap limit to 100
        const skip = (pageNum - 1) * limitNum;

        // Sort options
        const sortOptions = {};
        sortOptions[sortBy] = sortOrder === 'asc' ? 1 : -1;

        // Execute query
        const [books, total] = await Promise.all([
            Book.find(query)
                .sort(sortOptions)
                .skip(skip)
                .limit(limitNum)
                .lean(), // Use lean() for plain JavaScript objects
            Book.countDocuments(query)
        ]);

        // Transform books data (_id to id)
        const transformedBooks = transformBookData(books);

        res.json({
            success: true,
            data: transformedBooks, // Use transformed data
            pagination: {
                currentPage: pageNum, // Changed from 'current' to 'currentPage' for frontend consistency
                limit: limitNum,      // Keep 'limit' as is, or rename to 'booksPerPage' for consistency with /paginated
                totalBooks: total,    // Changed from 'total' to 'totalBooks'
                totalPages: Math.ceil(total / limitNum), // Changed from 'pages' to 'totalPages'
            }
        });

    } catch (error) {
        console.error('Error fetching books:', error);
        res.status(500).json({
            success: false,
            error: 'Failed to fetch books',
            message: error.message
        });
    }
});

// GET /api/books/recommended - Get high-rated books (rating >= 4)
router.get('/recommended', async (req, res) => {
    try {
        const { limit = 10 } = req.query;

        const books = await Book.findHighRated(4)
            .limit(parseInt(limit))
            .lean(); // Use lean() for plain JavaScript objects

        // Transform books data (_id to id)
        const transformedBooks = transformBookData(books);

        res.json({
            success: true,
            data: transformedBooks, // Use transformed data
            count: transformedBooks.length
        });

    } catch (error) {
        console.error('Error fetching recommended books:', error);
        res.status(500).json({
            success: false,
            error: 'Failed to fetch recommended books',
            message: error.message
        });
    }
});

// GET /api/books/paginated - Get paginated books (now includes category filtering)
// This endpoint is what your frontend's `bookService.getBooksPaginated` calls.
router.get('/paginated', async (req, res) => {
    try {
        const { page = 1, limit = 10, category } = req.query; // Added category

        const pageNum = Math.max(1, parseInt(page));
        const limitNum = Math.min(100, Math.max(1, parseInt(limit)));
        const skip = (pageNum - 1) * limitNum;

        // Build query for category
        let query = {};
        if (category && category !== 'All') { // 'All' is a common frontend value for no filter
            query.category = new RegExp(category, 'i');
        }

        const [books, total] = await Promise.all([
            Book.find(query) // Use the query for filtering
                .sort({ createdAt: -1 })
                .skip(skip)
                .limit(limitNum)
                .lean(), // Use lean() for plain JavaScript objects
            Book.countDocuments(query) // Use the query for count
        ]);

        // Transform books data (_id to id)
        const transformedBooks = transformBookData(books);

        res.json({
            success: true,
            data: transformedBooks, // Changed from 'books' to 'data' for consistency with MainContent's expectation
            pagination: {
                currentPage: pageNum,
                totalPages: Math.ceil(total / limitNum),
                totalBooks: total,
                booksPerPage: limitNum,
                hasNext: pageNum < Math.ceil(total / limitNum),
                hasPrev: pageNum > 1
            }
        });

    } catch (error) {
        console.error('Error fetching paginated books:', error);
        res.status(500).json({
            success: false,
            error: 'Failed to fetch books',
            message: error.message
        });
    }
});

// GET /api/books/categories - Get all unique categories
router.get('/categories', async (req, res) => {
    try {
        const categories = await Book.distinct('category');

        res.json({
            success: true,
            data: categories.sort(),
            count: categories.length
        });

    } catch (error) {
        console.error('Error fetching categories:', error);
        res.status(500).json({
            success: false,
            error: 'Failed to fetch categories',
            message: error.message
        });
    }
});

// GET /api/books/:id - Get single book
router.get('/:id', async (req, res) => {
    try {
        const book = await Book.findById(req.params.id).lean(); // Use lean() here too

        if (!book) {
            return res.status(404).json({
                success: false,
                error: 'Book not found'
            });
        }

        // Transform book data (_id to id)
        const transformedBook = transformBookData(book);

        res.json({
            success: true,
            data: transformedBook // Use transformed data
        });

    } catch (error) {
        console.error('Error fetching book:', error);

        if (error.name === 'CastError') {
            return res.status(400).json({
                success: false,
                error: 'Invalid book ID format'
            });
        }

        res.status(500).json({
            success: false,
            error: 'Failed to fetch book',
            message: error.message
        });
    }
});

// POST /api/books - Create new book
router.post('/', async (req, res) => {
    try {
        const book = new Book(req.body);
        await book.save();

        // Transform newly created book data (_id to id)
        const transformedBook = transformBookData(book.toObject()); // Convert Mongoose doc to plain object first

        res.status(201).json({
            success: true,
            data: transformedBook, // Use transformed data
            message: 'Book created successfully'
        });

    } catch (error) {
        console.error('Error creating book:', error);

        if (error.name === 'ValidationError') {
            return res.status(400).json({
                success: false,
                error: 'Validation failed',
                details: Object.values(error.errors).map(err => err.message)
            });
        }

        res.status(500).json({
            success: false,
            error: 'Failed to create book',
            message: error.message
        });
    }
});

// PUT /api/books/:id - Update book
router.put('/:id', async (req, res) => {
    try {
        const book = await Book.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true, // Return the modified document rather than the original
                runValidators: true,
                context: 'query'
            }
        ).lean(); // Use lean() here too

        if (!book) {
            return res.status(404).json({
                success: false,
                error: 'Book not found'
            });
        }

        // Transform updated book data (_id to id)
        const transformedBook = transformBookData(book);

        res.json({
            success: true,
            data: transformedBook, // Use transformed data
            message: 'Book updated successfully'
        });

    } catch (error) {
        console.error('Error updating book:', error);

        if (error.name === 'ValidationError') {
            return res.status(400).json({
                success: false,
                error: 'Validation failed',
                details: Object.values(error.errors).map(err => err.message)
            });
        }

        if (error.name === 'CastError') {
            return res.status(400).json({
                success: false,
                error: 'Invalid book ID format'
            });
        }

        res.status(500).json({
            success: false,
            error: 'Failed to update book',
            message: error.message
        });
    }
});

// DELETE /api/books/:id - Delete book
router.delete('/:id', async (req, res) => {
    try {
        const book = await Book.findByIdAndDelete(req.params.id).lean(); // Use lean()

        if (!book) {
            return res.status(404).json({
                success: false,
                error: 'Book not found'
            });
        }

        res.json({
            success: true,
            message: 'Book deleted successfully'
        });

    } catch (error) {
        console.error('Error deleting book:', error);

        if (error.name === 'CastError') {
            return res.status(400).json({
                success: false,
                error: 'Invalid book ID format'
            });
        }

        res.status(500).json({
            success: false,
            error: 'Failed to delete book',
            message: error.message
        });
    }
});

export default router;