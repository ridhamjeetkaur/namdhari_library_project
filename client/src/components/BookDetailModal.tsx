import React, { useEffect } from "react";
import { Star, Book as BookIcon, Download, ExternalLink, X, Clock, Users, MessageSquare } from "lucide-react";
import type { Book } from "./MainContent";

export interface BookDetailModalProps {
  book: Book | null;
  isOpen: boolean;
  onClose: () => void;
}

const BookDetailModal: React.FC<BookDetailModalProps> = ({
  book,
  isOpen,
  onClose,
}) => {
  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden'; // Prevent background scroll
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !book) return null;

  const fullStars = Math.floor(book.rating || 0);
  const hasHalfStar = (book.rating || 0) % 1 >= 0.5;

  // Mock data for enhanced display
  const bookStats = {
    pages: (book as any).pages || Math.floor(Math.random() * 400) + 200,
    ratingsCount: (book as any).ratingsCount || Math.floor(Math.random() * 1000) + 100,
    reviews: (book as any).reviews || Math.floor(Math.random() * 200) + 50,
    readingTime: Math.ceil(((book as any).pages || 300) / 250) // ~250 words per page, 250 words per minute
  };

   const fullCoverUrl = `${process.env.SERVER_URL}${book.cover}`;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-xl max-w-5xl w-full max-h-[95vh] overflow-hidden shadow-2xl transform transition-all">
          
          {/* Mobile Layout */}
          <div className="block lg:hidden">
            {/* Header */}
            <div className="flex justify-between items-center p-4 border-b bg-gray-50">
              <h2 className="text-lg font-bold text-gray-800 truncate pr-4">Book Details</h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-200 rounded-full transition-colors"
              >
                <X size={20} className="text-gray-600" />
              </button>
            </div>

            {/* Mobile Content */}
            <div className="p-4 max-h-[80vh] overflow-y-auto">
              {/* Book Cover & Basic Info */}
              <div className="flex gap-4 mb-6">
                <div className="w-24 h-32 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
                  <img
                    src={fullCoverUrl}
                    alt={book.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/src/assets/images/book-placeholder.png';
                    }}
                  />
                </div>
                
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-bold text-gray-800 mb-1 line-clamp-2">
                    {book.title}
                  </h3>
                  <p className="text-gray-600 mb-2">{book.author}</p>
                  
                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-3">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className={
                          i < fullStars
                            ? "fill-yellow-400 text-yellow-400"
                            : i === fullStars && hasHalfStar
                            ? "fill-yellow-400/50 text-yellow-400"
                            : "text-gray-300"
                        }
                      />
                    ))}
                    <span className="ml-1 text-sm font-medium">{book.rating}</span>
                  </div>

                  <span className="inline-block bg-warning/10 text-warning px-2 py-1 rounded-full text-xs font-medium">
                    {book.category}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {book.link && (
                  <a
                    href={book.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-warning hover:bg-warning/90 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors"
                  >
                    <ExternalLink size={18} />
                    Read Now
                  </a>
                )}
                {book.downloadLink && (
                  <a
                    href={book.downloadLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 hover:bg-gray-700 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors"
                    download
                  >
                    <Download size={18} />
                    Download
                  </a>
                )}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-lg font-bold text-gray-800">{bookStats.pages}</p>
                  <span className="text-xs text-gray-600">Pages</span>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-lg font-bold text-gray-800">{bookStats.ratingsCount}</p>
                  <span className="text-xs text-gray-600">Ratings</span>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-lg font-bold text-gray-800">{bookStats.readingTime}h</p>
                  <span className="text-xs text-gray-600">Read Time</span>
                </div>
              </div>

              {/* Description */}
              <div>
                <h4 className="text-lg font-semibold mb-3">About this book</h4>
                <p className="text-gray-700 leading-relaxed text-sm">
                  {book.description || "This book offers valuable insights and knowledge in its field. A comprehensive resource that provides readers with both theoretical understanding and practical applications. Perfect for anyone looking to expand their knowledge and gain new perspectives on the subject matter."}
                </p>
              </div>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:flex h-full">
            {/* Left Panel - Book Cover & Info */}
            <div className="w-2/5 bg-gradient-to-br from-warning to-orange-600 text-white p-8 relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white/20 -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full bg-white/10 translate-y-12 -translate-x-12"></div>
              </div>

              <div className="relative z-10 h-full flex flex-col">
                {/* Book Cover */}
                <div className="aspect-[3/4] bg-white/10 backdrop-blur-sm rounded-xl mb-6 overflow-hidden border border-white/20 shadow-2xl">
                  <img
                    src={book.cover}
                    alt={book.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/src/assets/images/book-placeholder.png';
                    }}
                  />
                </div>

                {/* Book Info */}
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-2 leading-tight">
                    {book.title}
                  </h2>
                  <p className="text-white/80 mb-4 text-lg">{book.author}</p>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          size={18}
                          className={
                            i < fullStars
                              ? "fill-yellow-400 text-yellow-400"
                              : i === fullStars && hasHalfStar
                              ? "fill-yellow-400/50 text-yellow-400"
                              : "text-white/40"
                          }
                        />
                      ))}
                    </div>
                    <span className="text-xl font-semibold">{book.rating}</span>
                    <span className="text-white/60">({bookStats.ratingsCount} reviews)</span>
                  </div>

                  {/* Category Badge */}
                  <div className="mb-6">
                    <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium border border-white/30">
                      {book.category}
                    </span>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-2">
                        <Clock size={20} className="text-white/80" />
                      </div>
                      <p className="text-2xl font-bold">{bookStats.readingTime}h</p>
                      <span className="text-white/70 text-sm">Reading Time</span>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-2">
                        <BookIcon size={20} className="text-white/80" />
                      </div>
                      <p className="text-2xl font-bold">{bookStats.pages}</p>
                      <span className="text-white/70 text-sm">Pages</span>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-2">
                        <Users size={20} className="text-white/80" />
                      </div>
                      <p className="text-2xl font-bold">{bookStats.reviews}</p>
                      <span className="text-white/70 text-sm">Reviews</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-3 mt-auto">
                    {book.link && (
                      <a
                        href={book.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-white hover:bg-gray-100 text-gray-800 py-3 px-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all transform hover:scale-105 shadow-lg"
                      >
                        <ExternalLink size={20} />
                        Read Now
                      </a>
                    )}
                    {book.downloadLink && (
                      <a
                        href={book.downloadLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 text-white py-3 px-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all"
                        download
                      >
                        <Download size={20} />
                        Download PDF
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Panel - Description & Details */}
            <div className="w-3/5 p-8 bg-white overflow-y-auto">
              {/* Header */}
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h3 className="text-3xl font-bold text-gray-800 mb-2">About this book</h3>
                  <p className="text-gray-600">Discover what makes this book special</p>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors group"
                >
                  <X size={24} className="text-gray-500 group-hover:text-gray-700" />
                </button>
              </div>

              {/* Description */}
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-700 leading-relaxed text-lg mb-6">
                  {book.description || "This book offers a comprehensive exploration of its subject matter, providing readers with both theoretical insights and practical applications. Through engaging narrative and expert analysis, it delivers valuable knowledge that can be applied in real-world scenarios. The author's expertise shines through in every chapter, making complex concepts accessible to readers of all backgrounds."}
                </p>

                {/* Additional Sections */}
                <div className="grid grid-cols-1 gap-6 mt-8">
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h4 className="text-xl font-semibold mb-3 flex items-center gap-2">
                      <MessageSquare size={20} className="text-warning" />
                      What readers are saying
                    </h4>
                    <div className="space-y-3">
                      <div className="border-l-4 border-warning pl-4">
                        <p className="text-gray-700 italic">"An exceptional read that provides valuable insights and practical knowledge."</p>
                        <p className="text-sm text-gray-500 mt-1">- Reader Review</p>
                      </div>
                      <div className="border-l-4 border-warning pl-4">
                        <p className="text-gray-700 italic">"Well-written and thoroughly researched. Highly recommended!"</p>
                        <p className="text-sm text-gray-500 mt-1">- Reader Review</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookDetailModal;