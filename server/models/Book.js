// models/Book.js - MongoDB Book Schema matching your Book type
import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Book title is required'],
        trim: true,
        maxlength: [255, 'Title cannot exceed 255 characters']
    },
    author: {
        type: String,
        required: [true, 'Author is required'],
        trim: true,
        maxlength: [255, 'Author name cannot exceed 255 characters']
    },
    cover: {
        type: String,
        required: [true, 'Cover image is required'],
        trim: true
    },
    rating: {
        type: Number,
        required: [true, 'Rating is required'],
        min: [0, 'Rating cannot be less than 0'],
        max: [5, 'Rating cannot be more than 5'],
        default: 0
    },
    category: {
        type: String,
        required: [true, 'Category is required'],
        trim: true,
        maxlength: [100, 'Category cannot exceed 100 characters']
    },
    // Added description field
    description: {
        type: String,
        required: [true, 'Book description is required'],
        trim: true,
        maxlength: [2000, 'Description cannot exceed 2000 characters'] // Added a reasonable max length
    },
    link: {
        type: String,
        trim: true,
        validate: {
            validator: function(v) {
                // Only validate if link is provided (it's optional)
                if (!v) return true;
                return /^https?:\/\/.+/.test(v);
            },
            message: 'Link must be a valid URL'
        }
    },
    downloadLink: {
        type: String,
        trim: true,
        validate: {
            validator: function(v) {
                // Only validate if downloadLink is provided (it's optional)
                if (!v) return true;
                return /^https?:\/\/.+/.test(v);
            },
            message: 'Download link must be a valid URL'
        }
    }
}, {
    timestamps: true, // Adds createdAt and updatedAt automatically
    versionKey: false // Removes __v field
});

// Indexes for better performance
bookSchema.index({ title: 1 });
bookSchema.index({ author: 1 });
bookSchema.index({ category: 1 });
bookSchema.index({ rating: -1 });
bookSchema.index({ title: 'text', author: 'text' }); // For text search

// Static methods for common queries
bookSchema.statics.findByCategory = function(category) {
    return this.find({ category: new RegExp(category, 'i') });
};

bookSchema.statics.findHighRated = function(minRating = 4) {
    return this.find({ rating: { $gte: minRating } }).sort({ rating: -1 });
};

bookSchema.statics.searchBooks = function(searchTerm) {
    return this.find({
        $or: [
            { title: new RegExp(searchTerm, 'i') },
            { author: new RegExp(searchTerm, 'i') },
            { category: new RegExp(searchTerm, 'i') }
        ]
    });
};

// Instance methods
bookSchema.methods.hasDownloadLink = function() {
    return !!this.downloadLink;
};

bookSchema.methods.hasLink = function() {
    return !!this.link;
};

// Transform output to match your Book type exactly
bookSchema.methods.toJSON = function() {
    const book = this.toObject();
    
    // Convert MongoDB _id to id for consistency with your Book type
    book.id = book._id;
    delete book._id;
    
    // Remove timestamps if you don't want them in the API response
    // delete book.createdAt;
    // delete book.updatedAt;
    
    return book;
};

const Book = mongoose.model('Book', bookSchema);

export default Book;
