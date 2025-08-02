import { useState, useCallback, useEffect } from "react";
import BookCard from "./BookCard";
import CategoryFilter from "./CategoryFilter";
import Pagination from "./Pagination";
import BookDetailModal from "./BookDetailModal";

export type Book = {
  description: string;
  id: number;
  title: string;
  author: string;
  cover: string;
  link: string;
  rating: number;
  category: string;
  downloadLink: string;
};

// API Base URL - make sure this matches your backend
// With:
const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? '' // Empty for production (same domain)
  : 'http://localhost:5000/api'; // For local development


// API service functions - FIXED to match backend response format
const bookService = {
  // Fetch all books from database
  async getAllBooks(): Promise<Book[]> {
    try {
      const response = await fetch(`${API_BASE_URL}/books`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      console.log('getAllBooks response:', result);
      
      // Backend returns { success: true, data: [...] }
      if (result.success && result.data) {
        return result.data;
      }
      throw new Error(result.message || 'Failed to fetch books');
    } catch (error) {
      console.error('Error fetching books:', error);
      throw error;
    }
  },

  // Fetch books by category - Note: This should use the paginated endpoint
  async getBooksByCategory(category: string): Promise<Book[]> {
    try {
      const response = await fetch(`${API_BASE_URL}/books/paginated?category=${encodeURIComponent(category)}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      console.log('getBooksByCategory response:', result);
      
      if (result.success && result.data) {
        return result.data;
      }
      throw new Error(result.message || 'Failed to fetch books by category');
    } catch (error) {
      console.error('Error fetching books by category:', error);
      throw error;
    }
  },

  // Fetch recommended books (high rated) - FIXED
  async getRecommendedBooks(limit?: number): Promise<Book[]> {
    try {
      const url = limit 
        ? `${API_BASE_URL}/books/recommended?limit=${limit}` 
        : `${API_BASE_URL}/books/recommended`;
      
      console.log('Fetching recommended books from:', url);
      
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      console.log('getRecommendedBooks response:', result);
      
      // Backend returns { success: true, data: [...] }
      if (result.success && result.data) {
        return result.data;
      }
      throw new Error(result.message || 'Failed to fetch recommended books');
    } catch (error) {
      console.error('Error fetching recommended books:', error);
      throw error;
    }
  },

  // Fetch books with pagination - FIXED
  async getBooksPaginated(page: number, limit: number, category?: string): Promise<{
    books: Book[];
    total: number;
    totalPages: number;
    currentPage: number;
  }> {
    try {
      const params = new URLSearchParams({
        page: page.toString(),
        limit: limit.toString(),
        ...(category && category !== 'All' && { category })
      });
      
      const url = `${API_BASE_URL}/books/paginated?${params}`;
      console.log('Fetching paginated books from:', url);
      
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      console.log('getBooksPaginated response:', result);
      
      // Backend returns { success: true, data: [...], pagination: {...} }
      if (result.success && result.data && result.pagination) {
        return {
          books: result.data,
          total: result.pagination.totalBooks,
          totalPages: result.pagination.totalPages,
          currentPage: result.pagination.currentPage
        };
      }
      throw new Error(result.message || 'Failed to fetch paginated books');
    } catch (error) {
      console.error('Error fetching paginated books:', error);
      throw error;
    }
  }
};

const BOOKS_PER_PAGE_MOBILE = 6;
const BOOKS_PER_PAGE_DESKTOP = 10;

const MainContent = () => {
  // State management
  const [books, setBooks] = useState<Book[]>([]);
  const [recommendedBooks, setRecommendedBooks] = useState<Book[]>([]);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const [showAllRecommended, setShowAllRecommended] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [totalBooks, setTotalBooks] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const booksPerPage = isMobile ? BOOKS_PER_PAGE_MOBILE : BOOKS_PER_PAGE_DESKTOP;

  // Load recommended books separately
  const loadRecommendedBooks = useCallback(async () => {
    try {
      console.log('Loading recommended books...');
      const limit = showAllRecommended ? (isMobile ? 6 : 8) : (isMobile ? 2 : 4);
      const recommended = await bookService.getRecommendedBooks(limit);
      console.log('Loaded recommended books:', recommended.length);
      setRecommendedBooks(recommended);
    } catch (error) {
      console.error('Error loading recommended books:', error);
      // Don't set error state for recommended books failure
    }
  }, [showAllRecommended, isMobile]);

  // Load books when category or page changes
  const loadBooks = useCallback(async (category: string, page: number) => {
    try {
      setIsLoading(true);
      setError(null);
      
      console.log(`Loading books - Category: ${category}, Page: ${page}, Limit: ${booksPerPage}`);

      const paginatedData = await bookService.getBooksPaginated(
        page,
        booksPerPage,
        category === 'All' ? undefined : category
      );
      
      console.log('Loaded books:', paginatedData);
      
      setBooks(paginatedData.books);
      setTotalBooks(paginatedData.total);
      setTotalPages(paginatedData.totalPages);

    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to load books';
      setError(errorMessage);
      console.error('Error loading books:', error);
    } finally {
      setIsLoading(false);
    }
  }, [booksPerPage]);

  // Initial data loading
  useEffect(() => {
    const loadInitialData = async () => {
      try {
        setIsInitialLoading(true);
        setError(null);

        console.log('Loading initial data...');

        // Load both recommended books and paginated books
        await Promise.all([
          loadRecommendedBooks(),
          loadBooks(activeCategory, currentPage)
        ]);

      } catch (error) {
        setError('Failed to load books. Please try again later.');
        console.error('Error loading initial data:', error);
      } finally {
        setIsInitialLoading(false);
      }
    };

    loadInitialData();
  }, []); // Only run on mount

  // Load books when dependencies change (but not on initial mount)
  useEffect(() => {
    if (!isInitialLoading) {
      loadBooks(activeCategory, currentPage);
    }
  }, [activeCategory, currentPage, booksPerPage, loadBooks, isInitialLoading]);

  // Load recommended books when dependencies change
  useEffect(() => {
    if (!isInitialLoading) {
      loadRecommendedBooks();
    }
  }, [showAllRecommended, isMobile, loadRecommendedBooks, isInitialLoading]);

  // Optimized handlers with useCallback
  const handleCategoryChange = useCallback((category: string) => {
    console.log('Category changed to:', category);
    setActiveCategory(category);
    setCurrentPage(1);
    // Don't call loadBooks here as useEffect will handle it
  }, []);

  const handlePageChange = useCallback((page: number) => {
    console.log('Page changed to:', page);
    setCurrentPage(page);
    
    // Smooth scroll to top of books section
    setTimeout(() => {
      document.querySelector('.books-grid')?.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }, 100);
  }, []);

  const handleBookClick = useCallback((book: Book) => {
    setSelectedBook(book);
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setSelectedBook(null);
  }, []);

  const toggleRecommended = useCallback(() => {
    setShowAllRecommended(prev => !prev);
  }, []);

  const retryLoad = useCallback(() => {
    loadBooks(activeCategory, currentPage);
    loadRecommendedBooks();
  }, [activeCategory, currentPage, loadBooks, loadRecommendedBooks]);

  // Loading state for initial load
  if (isInitialLoading) {
    return (
      <div className="flex-1 bg-light d-flex justify-content-center align-items-center" style={{ minHeight: '60vh' }}>
        <div className="text-center">
          <div className="spinner-border text-warning mb-3" role="status" style={{ width: '3rem', height: '3rem' }}>
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="text-secondary">Loading your library...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (error && books.length === 0) {
    return (
      <div className="flex-1 bg-light d-flex justify-content-center align-items-center" style={{ minHeight: '60vh' }}>
        <div className="text-center">
          <div className="mb-3">
            <span className="fs-1 text-danger">⚠️</span>
          </div>
          <h3 className="text-danger mb-3">Oops! Something went wrong</h3>
          <p className="text-secondary mb-3">{error}</p>
          <button className="btn btn-warning" onClick={retryLoad}>
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="flex-1 bg-light overflow-y-auto">
        <div className="container-fluid px-3 px-md-4 py-4">
          {/* Recommended Section */}
          {recommendedBooks.length > 0 && (
            <section className="mb-5">
              <div className="d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center mb-3 gap-2">
                <h2 className="text-warning-emphasis fw-bold fs-4 fs-md-3 mb-0 d-flex align-items-center gap-2">
                  <span className="fs-5">📚</span>
                  <span>Recommended Reads</span>
                </h2>
                <button
                  className="btn btn-sm btn-outline-warning d-flex align-items-center gap-1"
                  onClick={toggleRecommended}
                >
                  <span>{showAllRecommended ? 'Show Less' : 'See All'}</span>
                  <span>{showAllRecommended ? '↑' : '→'}</span>
                </button>
              </div>

              <div className={`row g-3 g-md-4 ${isMobile ? 'row-cols-2' : showAllRecommended ? 'row-cols-2 row-cols-md-4 row-cols-lg-4' : 'row-cols-2 row-cols-md-4'}`}>
                {recommendedBooks.map((book) => (
                  <div key={`rec-${book.id}`} className="col">
                    <div
                      onClick={() => handleBookClick(book)}
                      className="cursor-pointer h-100"
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => e.key === 'Enter' && handleBookClick(book)}
                    >
                      <BookCard book={book} />
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Categories Section */}
          <section>
            <div className="d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center mb-3 gap-2">
              <h2 className="text-warning-emphasis fw-bold fs-4 fs-md-3 mb-0 d-flex align-items-center gap-2">
                <span className="fs-5">📖</span>
                <span>Browse by Category</span>
              </h2>
              <div className="d-flex flex-column flex-sm-row align-items-start align-items-sm-center gap-2">
                <small className="text-secondary">
                  Showing <span className="fw-semibold">{books.length}</span> of{' '}
                  <span className="fw-semibold">{totalBooks}</span>{' '}
                  {activeCategory === "All" ? "books" : `${activeCategory} books`}
                </small>
              </div>
            </div>

            <div className="mb-4">
              <CategoryFilter
                activeCategory={activeCategory}
                onCategoryChange={handleCategoryChange}
              />
            </div>

            {/* Error banner */}
            {error && books.length > 0 && (
              <div className="alert alert-warning d-flex align-items-center mb-3" role="alert">
                <span className="me-2">⚠️</span>
                <div className="flex-grow-1">{error}</div>
                <button className="btn btn-sm btn-outline-warning ms-2" onClick={retryLoad}>
                  Retry
                </button>
              </div>
            )}

            {/* Loading State */}
            {isLoading && (
              <div className="text-center py-4">
                <div className="spinner-border text-warning" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            )}

            {/* Books Grid */}
            {!isLoading && (
              <div className="books-grid">
                <div className={`row g-3 g-md-4 min-vh-25 ${isMobile ? 'row-cols-2' : 'row-cols-2 row-cols-md-5'}`}>
                  {books.map((book) => (
                    <div key={book.id} className="col">
                      <div
                        onClick={() => handleBookClick(book)}
                        className="cursor-pointer h-100"
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => e.key === 'Enter' && handleBookClick(book)}
                      >
                        <BookCard book={book} />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Empty State */}
                {books.length === 0 && !isLoading && (
                  <div className="text-center text-secondary py-5">
                    <div className="mb-3">
                      <span className="fs-1">📚</span>
                    </div>
                    <p className="fs-5 mb-2">No books found in "{activeCategory}" category.</p>
                    <p className="text-muted">Try selecting a different category or browse all books.</p>
                    <button
                      className="btn btn-outline-warning mt-2"
                      onClick={() => handleCategoryChange("All")}
                    >
                      Browse All Books
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Pagination */}
            {!isLoading && totalPages > 1 && (
              <div className="mt-4 d-flex justify-content-center">
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />
              </div>
            )}
          </section>
        </div>

        {/* Modal */}
        <BookDetailModal
          book={selectedBook}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      </div>
    </>
  );
};

export default MainContent;
