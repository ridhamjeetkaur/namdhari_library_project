// routes/books.js - Book routes with Mongoose
import express from 'express';
import Book from '../models/Book.js';

const router = express.Router();

/**
 * Helper function to transform Mongoose document _id to 'id' for frontend
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
            updatedAt: book.updatedAt,
            isbn: book.isbn,
            publishedYear: book.publishedYear,
            pages: book.pages,
            language: book.language,
            tags: book.tags,
            isAvailable: book.isAvailable,
            views: book.views,
            downloads: book.downloads
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
            updatedAt: data.updatedAt,
            isbn: data.isbn,
            publishedYear: data.publishedYear,
            pages: data.pages,
            language: data.language,
            tags: data.tags,
            isAvailable: data.isAvailable,
            views: data.views,
            downloads: data.downloads
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

        // Build query
        let query = {};

        if (search) {
            query.$or = [
                { title: new RegExp(search, 'i') },
                { author: new RegExp(search, 'i') },
                { category: new RegExp(search, 'i') },
                { description: new RegExp(search, 'i') }
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
        const limitNum = Math.min(100, Math.max(1, parseInt(limit)));
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
                .lean(),
            Book.countDocuments(query)
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

        const books = await Book.findHighRated(4)
            .limit(parseInt(limit))
            .lean();

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

        const pageNum = Math.max(1, parseInt(page));
        const limitNum = Math.min(100, Math.max(1, parseInt(limit)));
        const skip = (pageNum - 1) * limitNum;

        // Build query for category
        let query = {};
        if (category && category !== 'All') {
            query.category = new RegExp(category, 'i');
        }

        const [books, total] = await Promise.all([
            Book.find(query)
                .sort({ createdAt: -1 })
                .skip(skip)
                .limit(limitNum)
                .lean(),
            Book.countDocuments(query)
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

// GET /api/books/search - Search books
router.get('/search', async (req, res) => {
    try {
        const { q: searchTerm, limit = 20 } = req.query;

        if (!searchTerm) {
            return res.status(400).json({
                success: false,
                error: 'Search term is required'
            });
        }

        const books = await Book.searchBooks(searchTerm)
            .limit(parseInt(limit))
            .lean();

        const transformedBooks = transformBookData(books);

        res.json({
            success: true,
            data: transformedBooks,
            count: transformedBooks.length,
            searchTerm
        });

    } catch (error) {
        console.error('Error searching books:', error);
        res.status(500).json({
            success: false,
            error: 'Failed to search books',
            message: error.message
        });
    }
});

// GET /api/books/category/:category - Get books by category
router.get('/category/:category', async (req, res) => {
    try {
        const { category } = req.params;
        const { limit = 20 } = req.query;

        const books = await Book.findByCategory(category)
            .limit(parseInt(limit))
            .lean();

        const transformedBooks = transformBookData(books);

        res.json({
            success: true,
            data: transformedBooks,
            count: transformedBooks.length,
            category
        });

    } catch (error) {
        console.error('Error fetching books by category:', error);
        res.status(500).json({
            success: false,
            error: 'Failed to fetch books by category',
            message: error.message
        });
    }
});

// GET /api/books/:id - Get single book
router.get('/:id', async (req, res) => {
    try {
        const book = await Book.findById(req.params.id).lean();

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

        const transformedBook = transformBookData(book.toObject());

        res.status(201).json({
            success: true,
            data: transformedBook,
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
                new: true,
                runValidators: true,
                context: 'query'
            }
        ).lean();

        if (!book) {
            return res.status(404).json({
                success: false,
                error: 'Book not found'
            });
        }

        const transformedBook = transformBookData(book);

        res.json({
            success: true,
            data: transformedBook,
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
        const book = await Book.findByIdAndDelete(req.params.id).lean();

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

// PUT /api/books/:id/view - Increment book views
router.put('/:id/view', async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);

        if (!book) {
            return res.status(404).json({
                success: false,
                error: 'Book not found'
            });
        }

        await book.incrementViews();

        res.json({
            success: true,
            message: 'Book view count updated',
            views: book.views
        });

    } catch (error) {
        console.error('Error updating book views:', error);
        res.status(500).json({
            success: false,
            error: 'Failed to update book views',
            message: error.message
        });
    }
});

// PUT /api/books/:id/download - Increment book downloads
router.put('/:id/download', async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);

        if (!book) {
            return res.status(404).json({
                success: false,
                error: 'Book not found'
            });
        }

        await book.incrementDownloads();

        res.json({
            success: true,
            message: 'Book download count updated',
            downloads: book.downloads
        });

    } catch (error) {
        console.error('Error updating book downloads:', error);
        res.status(500).json({
            success: false,
            error: 'Failed to update book downloads',
            message: error.message
        });
    }
});

export default router;