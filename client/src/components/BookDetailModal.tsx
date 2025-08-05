import React, { useEffect } from "react";
import { Star, Book as BookIcon, Download, ExternalLink, X, Clock, Users, MessageSquare, Sparkles } from "lucide-react";
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
      document.body.style.overflow = 'hidden';
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
    readingTime: Math.ceil(((book as any).pages || 300) / 250)
  };

  const SERVER_URL = 'https://namdhari-library-project.onrender.com/';
  const fullCoverUrl = `${SERVER_URL}${book.cover}`;

  return (
    <>
      {/* Enhanced Backdrop */}
      <div 
        className="fixed inset-0 z-50 bg-gradient-to-br from-black/60 via-[#231650]/30 to-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4">
        <div className="bg-gradient-to-br from-[#fffef0] to-white rounded-2xl sm:rounded-3xl max-w-6xl w-full max-h-[95vh] overflow-hidden shadow-2xl transform transition-all border border-[#FED172]/30">
          
          {/* Mobile Layout */}
          <div className="block lg:hidden">
            {/* Mobile Header */}
            <div className="flex justify-between items-center p-4 sm:p-6 bg-gradient-to-r from-[#F3742B] to-[#B83A14] text-white">
              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-xl">
                  <BookIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h2 className="text-base sm:text-lg font-bold truncate">Book Details</h2>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-white/20 rounded-xl transition-colors"
              >
                <X size={20} className="text-white" />
              </button>
            </div>

            {/* Mobile Content */}
            <div className="p-4 sm:p-6 max-h-[80vh] overflow-y-auto">
              {/* Book Cover & Basic Info */}
              <div className="flex gap-4 sm:gap-6 mb-6 sm:mb-8">
                <div className="w-24 h-32 sm:w-28 sm:h-36 bg-gradient-to-br from-[#FED172]/20 to-[#F3742B]/10 rounded-xl overflow-hidden flex-shrink-0 shadow-lg border border-[#FED172]/30">
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
                  <h3 className="text-lg sm:text-xl font-bold text-[#231650] mb-2 leading-tight line-clamp-2">
                    {book.title}
                  </h3>
                  <p className="text-[#612E37] mb-3 text-sm sm:text-base font-medium">{book.author}</p>
                  
                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-3 sm:mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className={
                          i < fullStars
                            ? "fill-[#F3742B] text-[#F3742B]"
                            : i === fullStars && hasHalfStar
                            ? "fill-[#F3742B]/50 text-[#F3742B]"
                            : "text-gray-300"
                        }
                      />
                    ))}
                    <span className="ml-2 text-sm font-bold text-[#231650]">{book.rating}</span>
                    <span className="text-xs text-[#612E37]">({bookStats.ratingsCount})</span>
                  </div>

                  <span className="inline-block bg-gradient-to-r from-[#FED172] to-[#F3742B] text-white px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                    {book.category}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                {book.link && (
                  <a
                    href={book.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-[#F3742B] to-[#B83A14] hover:from-[#B83A14] hover:to-[#612E37] text-white py-3 sm:py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105 shadow-lg"
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
                    className="bg-gradient-to-r from-[#612E37] to-[#231650] hover:from-[#231650] hover:to-[#612E37] text-white py-3 sm:py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105 shadow-lg"
                    download
                  >
                    <Download size={18} />
                    Download
                  </a>
                )}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8 text-center">
                {[
                  { value: bookStats.pages, label: "Pages", icon: "📄" },
                  { value: bookStats.ratingsCount, label: "Ratings", icon: "⭐" },
                  { value: `${bookStats.readingTime}h`, label: "Read Time", icon: "⏰" }
                ].map((stat, index) => (
                  <div key={index} className="bg-gradient-to-br from-[#fffef0] to-[#FED172]/20 p-3 sm:p-4 rounded-xl shadow-sm border border-[#FED172]/30">
                    <div className="text-lg sm:text-xl mb-1">{stat.icon}</div>
                    <p className="text-base sm:text-lg font-bold text-[#231650]">{stat.value}</p>
                    <span className="text-xs text-[#612E37]">{stat.label}</span>
                  </div>
                ))}
              </div>

              {/* Description */}
              <div className="bg-gradient-to-br from-[#fffef0] via-[#FED172]/10 to-[#F3742B]/5 p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-sm border border-[#FED172]/30">
                <h4 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-[#231650] flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-[#F3742B]" />
                  About this book
                </h4>
                <p className="text-[#612E37] leading-relaxed text-sm sm:text-base">
                  {book.description || "This book offers valuable insights and knowledge in its field. A comprehensive resource that provides readers with both theoretical understanding and practical applications. Perfect for anyone looking to expand their knowledge and gain new perspectives on the subject matter."}
                </p>
              </div>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:flex h-full max-h-[95vh]">
            {/* Left Panel - Book Cover & Info */}
            <div className="w-2/5 bg-gradient-to-br from-[#F3742B] via-[#B83A14] to-[#612E37] text-white p-8 xl:p-10 relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white/20 -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full bg-white/10 translate-y-12 -translate-x-12"></div>
                <div className="absolute top-1/2 left-1/4 w-20 h-20 rounded-full bg-white/5"></div>
              </div>

              <div className="relative z-10 h-full flex flex-col">
                {/* Book Cover */}
                <div className="aspect-[3/4] bg-white/10 backdrop-blur-sm rounded-2xl mb-6 xl:mb-8 overflow-hidden border border-white/20 shadow-2xl max-w-sm mx-auto">
                  <img
                    src={fullCoverUrl}
                    alt={book.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/src/assets/images/book-placeholder.png';
                    }}
                  />
                </div>

                {/* Book Info */}
                <div className="flex-1">
                  <h2 className="text-2xl xl:text-3xl font-bold mb-3 xl:mb-4 leading-tight">
                    {book.title}
                  </h2>
                  <p className="text-white/80 mb-4 xl:mb-6 text-lg xl:text-xl font-medium">{book.author}</p>

                  {/* Rating */}
                  <div className="flex items-center gap-3 mb-6 xl:mb-8">
                    <div className="flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          size={20}
                          className={
                            i < fullStars
                              ? "fill-[#FED172] text-[#FED172]"
                              : i === fullStars && hasHalfStar
                              ? "fill-[#FED172]/50 text-[#FED172]"
                              : "text-white/40"
                          }
                        />
                      ))}
                    </div>
                    <span className="text-2xl font-bold">{book.rating}</span>
                    <span className="text-white/60 text-sm">({bookStats.ratingsCount} reviews)</span>
                  </div>

                  {/* Category Badge */}
                  <div className="mb-8">
                    <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-bold border border-white/30 shadow-lg">
                      📚 {book.category}
                    </span>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-8 xl:mb-10">
                    {[
                      { icon: Clock, value: `${bookStats.readingTime}h`, label: "Reading Time" },
                      { icon: BookIcon, value: bookStats.pages, label: "Pages" },
                      { icon: Users, value: bookStats.reviews, label: "Reviews" }
                    ].map((stat, index) => (
                      <div key={index} className="text-center">
                        <div className="flex items-center justify-center mb-3">
                          <div className="bg-white/20 p-2 rounded-xl">
                            <stat.icon size={24} className="text-white/80" />
                          </div>
                        </div>
                        <p className="text-2xl xl:text-3xl font-bold">{stat.value}</p>
                        <span className="text-white/70 text-sm">{stat.label}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-4 mt-auto">
                    {book.link && (
                      <a
                        href={book.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-white hover:bg-gray-100 text-[#231650] py-4 px-6 rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
                      >
                        <ExternalLink size={24} />
                        Read Now
                      </a>
                    )}
                    {book.downloadLink && (
                      <a
                        href={book.downloadLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 text-white py-4 px-6 rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition-all hover:scale-105 shadow-lg"
                        download
                      >
                        <Download size={24} />
                        Download PDF
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Panel - Description & Details */}
            <div className="w-3/5 bg-gradient-to-br from-[#fffef0] to-white p-8 xl:p-10 overflow-y-auto">
              {/* Header */}
              <div className="flex justify-between items-start mb-8 xl:mb-10">
                <div>
                  <h3 className="text-3xl xl:text-4xl font-bold text-[#231650] mb-3 flex items-center gap-3">
                    <Sparkles className="w-8 h-8 text-[#F3742B]" />
                    About this book
                  </h3>
                  <p className="text-[#612E37] text-lg">Discover what makes this book special</p>
                </div>
                <button
                  onClick={onClose}
                  className="p-3 hover:bg-[#FED172]/20 rounded-xl transition-colors group border border-[#FED172]/30"
                >
                  <X size={28} className="text-[#612E37] group-hover:text-[#231650]" />
                </button>
              </div>

              {/* Description */}
              <div className="prose prose-gray max-w-none">
                <div className="bg-gradient-to-br from-[#fffef0] via-[#FED172]/10 to-[#F3742B]/5 p-6 xl:p-8 rounded-2xl border border-[#FED172]/30 shadow-sm mb-8">
                  <p className="text-[#612E37] leading-relaxed text-lg xl:text-xl mb-0">
                    {book.description || "This book offers a comprehensive exploration of its subject matter, providing readers with both theoretical insights and practical applications. Through engaging narrative and expert analysis, it delivers valuable knowledge that can be applied in real-world scenarios. The author's expertise shines through in every chapter, making complex concepts accessible to readers of all backgrounds."}
                  </p>
                </div>

                {/* Reader Reviews Section */}
                <div className="bg-gradient-to-br from-[#fffef0] to-[#FED172]/20 p-6 xl:p-8 rounded-2xl border border-[#FED172]/30 shadow-sm">
                  <h4 className="text-2xl font-bold mb-6 flex items-center gap-3 text-[#231650]">
                    <MessageSquare size={28} className="text-[#F3742B]" />
                    What readers are saying
                  </h4>
                  <div className="space-y-6">
                    {[
                      {
                        text: "An exceptional read that provides valuable insights and practical knowledge. The author's writing style is engaging and accessible.",
                        author: "Verified Reader",
                        rating: 5
                      },
                      {
                        text: "Well-written and thoroughly researched. This book has become an essential reference in my library. Highly recommended!",
                        author: "Academic Reviewer",
                        rating: 5
                      },
                      {
                        text: "Clear explanations and excellent examples throughout. Perfect for both beginners and advanced readers.",
                        author: "Book Enthusiast",
                        rating: 4
                      }
                    ].map((review, index) => (
                      <div key={index} className="bg-white/60 backdrop-blur-sm p-4 xl:p-6 rounded-xl border-l-4 border-[#F3742B] shadow-sm">
                        <div className="flex items-center gap-1 mb-3">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              size={16}
                              className={i < review.rating ? "fill-[#F3742B] text-[#F3742B]" : "text-gray-300"}
                            />
                          ))}
                        </div>
                        <p className="text-[#612E37] italic leading-relaxed mb-3">"{review.text}"</p>
                        <p className="text-sm text-[#612E37]/70 font-medium">- {review.author}</p>
                      </div>
                    ))}
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