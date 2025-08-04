// routes/books.js - Raw MongoDB version
import express from 'express';
import { getDb } from '../db.js';
import { ObjectId } from 'mongodb';

const router = express.Router();

/**
 * Helper function to transform MongoDB _id to 'id' for frontend
 */
const transformBookData = (data) => {
    if (Array.isArray(data)) {
        return data.map(book => ({
            id: book._id ? book._id.toString() : undefined,
            title: book.title,
            author: book.author,
            description: book.description,
            cover: book.cover,
            link: book.link,
            rating: book.rating,
            category: book.category,
            downloadLink: book.downloadLink,
            createdAt: book.createdAt,
            updatedAt: book.updatedAt
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
            createdAt: data.createdAt,
            updatedAt: data.updatedAt
        };
    }
    return data;
};

// GET /api/books - Get all books with optional filtering and pagination
router.get('/', async (req, res) => {
    try {
        const {
            search,
            category,
            author,
            minRating,
            limit = 50,
            page = 1,
            sortBy = 'createdAt',
            sortOrder = 'desc'
        } = req.query;

        const db = getDb();
        const collection = db.collection('books');

        // Build query
        let query = {};

        if (search) {
            query.$or = [
                { title: { $regex: search, $options: 'i' } },
                { author: { $regex: search, $options: 'i' } },
                { category: { $regex: search, $options: 'i' } }
            ];
        }

        if (category) {
            query.category = { $regex: category, $options: 'i' };
        }

        if (author) {
            query.author = { $regex: author, $options: 'i' };
        }

        if (minRating) {
            query.rating = { $gte: parseFloat(minRating) };
        }

        // Calculate pagination
        const pageNum = Math.max(1, parseInt(page));
        const limitNum = Math.min(100, Math.max(1, parseInt(limit)));
        const skip = (pageNum - 1) * limitNum;

        // Sort options
        const sortOptions = {};
        sortOptions[sortBy] = sortOrder === 'asc' ? 1 : -1;

        // Execute query
        const [books, total] = await Promise.all([
            collection.find(query)
                .sort(sortOptions)
                .skip(skip)
                .limit(limitNum)
                .toArray(),
            collection.countDocuments(query)
        ]);

        const transformedBooks = transformBookData(books);

        res.json({
            success: true,
            data: transformedBooks,
            pagination: {
                currentPage: pageNum,
                limit: limitNum,
                totalBooks: total,
                totalPages: Math.ceil(total / limitNum),
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
        const db = getDb();
        const collection = db.collection('books');

        const books = await collection.find({ rating: { $gte: 4 } })
            .limit(parseInt(limit))
            .toArray();

        const transformedBooks = transformBookData(books);

        res.json({
            success: true,
            data: transformedBooks,
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

// GET /api/books/paginated - Get paginated books
router.get('/paginated', async (req, res) => {
    try {
        const { page = 1, limit = 10, category } = req.query;
        const db = getDb();
        const collection = db.collection('books');

        const pageNum = Math.max(1, parseInt(page));
        const limitNum = Math.min(100, Math.max(1, parseInt(limit)));
        const skip = (pageNum - 1) * limitNum;

        // Build query for category
        let query = {};
        if (category && category !== 'All') {
            query.category = { $regex: category, $options: 'i' };
        }

        const [books, total] = await Promise.all([
            collection.find(query)
                .sort({ createdAt: -1 })
                .skip(skip)
                .limit(limitNum)
                .toArray(),
            collection.countDocuments(query)
        ]);

        const transformedBooks = transformBookData(books);

        res.json({
            success: true,
            data: transformedBooks,
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
        const db = getDb();
        const collection = db.collection('books');
        
        const categories = await collection.distinct('category');

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
        const { id } = req.params;
        
        // Validate ObjectId
        if (!ObjectId.isValid(id)) {
            return res.status(400).json({
                success: false,
                error: 'Invalid book ID format'
            });
        }

        const db = getDb();
        const collection = db.collection('books');
        const book = await collection.findOne({ _id: new ObjectId(id) });

        if (!book) {
            return res.status(404).json({
                success: false,
                error: 'Book not found'
            });
        }

        const transformedBook = transformBookData(book);

        res.json({
            success: true,
            data: transformedBook
        });

    } catch (error) {
        console.error('Error fetching book:', error);
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
        const db = getDb();
        const collection = db.collection('books');
        
        const bookData = {
            ...req.body,
            createdAt: new Date(),
            updatedAt: new Date()
        };

        const result = await collection.insertOne(bookData);
        const newBook = await collection.findOne({ _id: result.insertedId });
        
        const transformedBook = transformBookData(newBook);

        res.status(201).json({
            success: true,
            data: transformedBook,
            message: 'Book created successfully'
        });

    } catch (error) {
        console.error('Error creating book:', error);
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
        const { id } = req.params;
        
        // Validate ObjectId
        if (!ObjectId.isValid(id)) {
            return res.status(400).json({
                success: false,
                error: 'Invalid book ID format'
            });
        }

        const db = getDb();
        const collection = db.collection('books');

        const updateData = {
            ...req.body,
            updatedAt: new Date()
        };

        const result = await collection.findOneAndUpdate(
            { _id: new ObjectId(id) },
            { $set: updateData },
            { returnDocument: 'after' }
        );

        if (!result.value) {
            return res.status(404).json({
                success: false,
                error: 'Book not found'
            });
        }

        const transformedBook = transformBookData(result.value);

        res.json({
            success: true,
            data: transformedBook,
            message: 'Book updated successfully'
        });

    } catch (error) {
        console.error('Error updating book:', error);
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
        const { id } = req.params;
        
        // Validate ObjectId
        if (!ObjectId.isValid(id)) {
            return res.status(400).json({
                success: false,
                error: 'Invalid book ID format'
            });
        }

        const db = getDb();
        const collection = db.collection('books');

        const result = await collection.deleteOne({ _id: new ObjectId(id) });

        if (result.deletedCount === 0) {
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
        res.status(500).json({
            success: false,
            error: 'Failed to delete book',
            message: error.message
        });
    }
});

export default router;