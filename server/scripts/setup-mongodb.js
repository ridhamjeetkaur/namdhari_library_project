// scripts/setup-mongodb.js - Setup MongoDB database with your Book schema
import { connectDB, closeConnection } from '../db.js';
import Book from '../models/Book.js';

// Sample data matching your Book type
const sampleBooks = [
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        cover: "https://covers.openlibrary.org/b/isbn/9780743273565-L.jpg",
        rating: 4.2,
        category: "Classic Literature",
        link: "https://www.goodreads.com/book/show/4671.The_Great_Gatsby",
        downloadLink: "https://www.gutenberg.org/files/64317/64317-h/64317-h.htm"
    },
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        cover: "https://covers.openlibrary.org/b/isbn/9780061120084-L.jpg",
        rating: 4.5,
        category: "Classic Literature",
        link: "https://www.goodreads.com/book/show/2657.To_Kill_a_Mockingbird"
    },
    {
        title: "1984",
        author: "George Orwell",
        cover: "https://covers.openlibrary.org/b/isbn/9780451524935-L.jpg",
        rating: 4.4,
        category: "Dystopian Fiction",
        link: "https://www.goodreads.com/book/show/40961427-1984",
        downloadLink: "https://www.planetebook.com/free-ebooks/1984.pdf"
    },
    {
        title: "Pride and Prejudice",
        author: "Jane Austen",
        cover: "https://covers.openlibrary.org/b/isbn/9780141439518-L.jpg",
        rating: 4.3,
        category: "Romance",
        link: "https://www.goodreads.com/book/show/1885.Pride_and_Prejudice",
        downloadLink: "https://www.gutenberg.org/files/1342/1342-h/1342-h.htm"
    },
    {
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        cover: "https://covers.openlibrary.org/b/isbn/9780316769174-L.jpg",
        rating: 3.8,
        category: "Coming of Age",
        link: "https://www.goodreads.com/book/show/5107.The_Catcher_in_the_Rye"
    },
    {
        title: "Harry Potter and the Philosopher's Stone",
        author: "J.K. Rowling",
        cover: "https://covers.openlibrary.org/b/isbn/9780747532699-L.jpg",
        rating: 4.7,
        category: "Fantasy",
        link: "https://www.goodreads.com/book/show/3.Harry_Potter_and_the_Sorcerer_s_Stone"
    },
    {
        title: "The Lord of the Rings",
        author: "J.R.R. Tolkien",
        cover: "https://covers.openlibrary.org/b/isbn/9780544003415-L.jpg",
        rating: 4.6,
        category: "Fantasy",
        link: "https://www.goodreads.com/book/show/33.The_Lord_of_the_Rings"
    },
    {
            title: "Dune",
            author: "Frank Herbert",
            cover: "https://covers.openlibrary.org/b/isbn/9780441172719-L.jpg",
            rating: 4.3,
            category: "Science Fiction",
            link: "https://www.goodreads.com/book/show/234225.Dune"
    },
    {
        title: "The Alchemist",
        author: "Paulo Coelho",
        cover: "https://covers.openlibrary.org/b/isbn/9780062315007-L.jpg",
        rating: 3.9,
        category: "Philosophy",
        link: "https://www.goodreads.com/book/show/865.The_Alchemist"
    },
    {
        title: "The Da Vinci Code",
        author: "Dan Brown",
        cover: "https://covers.openlibrary.org/b/isbn/9780385504201-L.jpg",
        rating: 3.8,
        category: "Mystery",
        link: "https://www.goodreads.com/book/show/968.The_Da_Vinci_Code"
    }
];

const setupDatabase = async () => {
    try {
        console.log('🔄 Setting up MongoDB database...');

        // Connect to database
        await connectDB();

        // Clear existing data (optional - remove this line if you want to keep existing data)
        console.log('🗑️  Clearing existing books...');
        await Book.deleteMany({});

        // Insert sample data
        console.log('📚 Inserting sample books...');
        const books = await Book.insertMany(sampleBooks);
        console.log(`✅ Inserted ${books.length} sample books`);

        // Create indexes
        console.log('📊 Creating database indexes...');
        await Book.createIndexes();
        console.log('✅ Database indexes created');

        // Display collection stats
        const totalBooks = await Book.countDocuments();
        const highRatedBooks = await Book.countDocuments({ rating: { $gte: 4 } });
        const categories = await Book.distinct('category');

        console.log('\n📊 Database Statistics:');
        console.log(`   📚 Total Books: ${totalBooks}`);
        console.log(`   ⭐ High Rated Books (4+): ${highRatedBooks}`);
        console.log(`   📂 Categories: ${categories.length} (${categories.join(', ')})`);

        // Display some example books
        console.log('\n📖 Sample Books:');
        const sampleBooksFromDB = await Book.find().limit(3).lean();
        sampleBooksFromDB.forEach((book, index) => {
            console.log(`   ${index + 1}. "${book.title}" by ${book.author} (${book.category}) - Rating: ${book.rating}`);
        });

        console.log('\n✅ Database setup completed successfully!');
        console.log('\nYou can now start your server with: npm start');

    } catch (error) {
        console.error('❌ Error setting up database:', error);
        throw error;
    } finally {
        await closeConnection();
    }
};

// Run the setup if this file is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
    setupDatabase()
        .then(() => {
            console.log('🎉 Setup completed!');
            process.exit(0);
        })
        .catch((error) => {
            console.error('💥 Setup failed:', error);
            process.exit(1);
        });
}

export default setupDatabase;