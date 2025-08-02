import React from "react";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

/**
 * A beautiful responsive pagination component optimized for both desktop and mobile
 */
const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const getPageNumbers = (): (number | "...")[] => {
    const pages: (number | "...")[] = [];
    
    // Mobile: Show fewer pages (max 3 visible)
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    const maxVisible = isMobile ? 3 : 5;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
      return pages;
    }

    if (isMobile) {
      // Mobile-optimized pagination logic
      if (currentPage <= 2) {
        pages.push(1, 2, "...", totalPages);
      } else if (currentPage >= totalPages - 1) {
        pages.push(1, "...", totalPages - 1, totalPages);
      } else {
        pages.push(1, "...", currentPage, "...", totalPages);
      }
    } else {
      // Desktop pagination logic
      if (currentPage <= 3) {
        pages.push(1, 2, 3, 4, "...", totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, "...", totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages);
      }
    }

    return pages;
  };

  const handleChange = (page: number) => {
    if (page < 1 || page > totalPages || page === currentPage) return;
    onPageChange(page);
  };

  return (
    <div className="w-full">
      {/* Mobile-First Pagination */}
      <div className="flex flex-col items-center gap-4 mt-6 px-4">
        
        {/* Mobile Page Info Bar */}
        <div className="flex items-center justify-center w-full sm:hidden">
          <div className="bg-gradient-to-r from-amber-50 to-yellow-50 border-2 border-amber-200 rounded-full px-4 py-2">
            <span className="text-sm font-semibold text-amber-700">
              Page {currentPage} of {totalPages}
            </span>
          </div>
        </div>

        {/* Pagination Controls */}
        <div className="flex items-center justify-center gap-2 w-full max-w-md">
          
          {/* Previous Button */}
          <button
            onClick={() => handleChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`
              group relative flex items-center justify-center 
              w-11 h-11 sm:w-10 sm:h-10 rounded-xl 
              border-2 transition-all duration-200 ease-in-out
              touch-manipulation active:scale-95
              ${
                currentPage === 1
                  ? "bg-gray-50 border-gray-200 text-gray-300 cursor-not-allowed"
                  : "bg-white border-amber-200 text-amber-600 hover:bg-gradient-to-r hover:from-amber-400 hover:to-yellow-500 hover:text-white hover:border-amber-400 hover:shadow-lg hover:scale-105"
              }
            `}
            aria-label="Previous page"
          >
            <ChevronLeft className="w-5 h-5 sm:w-4 sm:h-4" />
            {currentPage !== 1 && (
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
            )}
          </button>

          {/* Page Numbers */}
          <div className="flex items-center gap-1 flex-1 justify-center max-w-xs overflow-x-auto scrollbar-hide">
            {getPageNumbers().map((page, i) => (
              <button
                key={i}
                onClick={() => typeof page === "number" && handleChange(page)}
                disabled={page === "..."}
                className={`
                  relative flex items-center justify-center 
                  min-w-11 h-11 sm:min-w-10 sm:h-10 px-3 rounded-xl
                  text-sm font-semibold transition-all duration-200 ease-in-out
                  touch-manipulation whitespace-nowrap
                  ${
                    page === currentPage
                      ? "bg-gradient-to-r from-amber-400 to-yellow-500 text-white shadow-lg shadow-amber-200/50 border-2 border-amber-400 scale-105 sm:scale-100 sm:hover:scale-105"
                      : page === "..."
                      ? "bg-transparent text-amber-600 cursor-default px-2"
                      : "bg-white border-2 border-amber-100 text-amber-700 hover:bg-gradient-to-r hover:from-amber-50 hover:to-yellow-50 hover:border-amber-300 hover:shadow-md hover:scale-105 active:scale-95"
                  }
                `}
                aria-label={typeof page === "number" ? `Go to page ${page}` : "More pages"}
                aria-current={page === currentPage ? "page" : undefined}
              >
                {page === currentPage && (
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-xl blur-sm opacity-30 animate-pulse"></div>
                )}
                {page === "..." ? (
                  <MoreHorizontal className="w-4 h-4 text-amber-500" />
                ) : (
                  <span className="relative z-10">{page}</span>
                )}
              </button>
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={() => handleChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`
              group relative flex items-center justify-center 
              w-11 h-11 sm:w-10 sm:h-10 rounded-xl 
              border-2 transition-all duration-200 ease-in-out
              touch-manipulation active:scale-95
              ${
                currentPage === totalPages
                  ? "bg-gray-50 border-gray-200 text-gray-300 cursor-not-allowed"
                  : "bg-white border-amber-200 text-amber-600 hover:bg-gradient-to-r hover:from-amber-400 hover:to-yellow-500 hover:text-white hover:border-amber-400 hover:shadow-lg hover:scale-105"
              }
            `}
            aria-label="Next page"
          >
            <ChevronRight className="w-5 h-5 sm:w-4 sm:h-4" />
            {currentPage !== totalPages && (
              <div className="absolute -top-1 -left-1 w-3 h-3 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
            )}
          </button>
        </div>

        {/* Desktop Page Info */}
        <div className="hidden sm:flex items-center justify-center">
          <div className="bg-gradient-to-r from-amber-50 to-yellow-50 border border-amber-200 rounded-full px-4 py-2">
            <span className="text-sm font-medium text-amber-600">
              Showing page {currentPage} of {totalPages}
            </span>
          </div>
        </div>

        {/* Mobile Navigation Hint */}
        {totalPages > 5 && (
          <div className="sm:hidden text-xs text-amber-600/70 text-center">
            <span className="bg-amber-50 px-2 py-1 rounded-full border border-amber-100">
              Swipe or tap to navigate
            </span>
          </div>
        )}
      </div>

      {/* Quick Jump for Mobile (optional - shows only on mobile with many pages) */}
      {totalPages > 10 && (
        <div className="sm:hidden mt-4 px-4">
          <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-xl p-3 border border-amber-200">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-amber-700">Quick Jump:</span>
              <div className="flex gap-2">
                <button
                  onClick={() => handleChange(1)}
                  disabled={currentPage === 1}
                  className="px-3 py-1 text-xs font-semibold bg-white border border-amber-200 rounded-lg text-amber-600 disabled:text-gray-400 disabled:border-gray-200 active:scale-95"
                >
                  First
                </button>
                <button
                  onClick={() => handleChange(totalPages)}
                  disabled={currentPage === totalPages}
                  className="px-3 py-1 text-xs font-semibold bg-white border border-amber-200 rounded-lg text-amber-600 disabled:text-gray-400 disabled:border-gray-200 active:scale-95"
                >
                  Last
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Pagination;