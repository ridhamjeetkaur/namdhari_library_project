import React from 'react';
import { Star, Download, ExternalLink } from 'lucide-react';

type Book = {
  id: number;
  title: string;
  author: string;
  cover: string;
  rating: number;
  category: string;
  link?: string;
  downloadLink?: string;
};
const SERVER_URL = 'https://namdhari-library-project.onrender.com/';
const BookCard = ({ book }: { book: Book }) => {
  const fullCoverUrl = `${SERVER_URL}${book.cover}`;
  const handleQuickAction = (e: React.MouseEvent, action: 'read' | 'download') => {
    e.stopPropagation(); // Prevent modal from opening
    
    if (action === 'read' && book.link) {
      window.open(book.link, '_blank', 'noopener,noreferrer');
    } else if (action === 'download' && book.downloadLink) {
      window.open(book.downloadLink, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 h-100">
      {/* Book Cover */}
      <div className="aspect-[3/4] bg-gray-200 relative group">
        <img
          src={fullCoverUrl}
          alt={book.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          
        />
        
        {/* Rating Badge */}
        {book.rating && (
          <div className="absolute top-2 right-2 bg-black bg-opacity-80 text-white px-2 py-1 rounded-full text-xs flex items-center space-x-1 backdrop-blur-sm">
            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
            <span className="font-medium">{book.rating}</span>
          </div>
        )}

        {/* Quick Action Buttons - Show on Hover */}
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
          {book.link && (
            <button
              onClick={(e) => handleQuickAction(e, 'read')}
              className="bg-warning hover:bg-warning/90 text-white px-3 py-2 rounded-lg text-sm font-medium flex items-center gap-1 transition-colors"
              title="Read Now"
            >
              <ExternalLink size={14} />
              <span className="hidden sm:inline">Read</span>
            </button>
          )}
          {book.downloadLink && (
            <button
              onClick={(e) => handleQuickAction(e, 'download')}
              className="bg-gray-800 hover:bg-gray-700 text-white px-3 py-2 rounded-lg text-sm font-medium flex items-center gap-1 transition-colors"
              title="Download PDF"
            >
              <Download size={14} />
              <span className="hidden sm:inline">PDF</span>
            </button>
          )}
        </div>
      </div>

      {/* Book Info */}
      <div className="p-3">
        <h5 className="font-semibold text-gray-800 mb-1 line-clamp-2 text-sm leading-tight">
          {book.title}
        </h5>
        <p className="text-gray-600 text-xs mb-2 truncate">{book.author}</p>
        <div className="flex items-center justify-between">
          <span className="bg-warning/10 text-warning px-2 py-1 rounded-full text-xs font-medium truncate">
            {book.category}
          </span>
          {book.rating && (
            <div className="flex items-center gap-1">
              <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
              <span className="text-xs text-gray-600">{book.rating}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookCard;