import React, { useState } from "react";

export interface CategoryFilterProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const categories = [
  "All",
  "Namdhari",
  "Sikh", 
  "Punjabi",
  "Sri Satguru Gobind Singh Ji",
  "Sri Satguru Jagjit Singh Ji",
  "Sri Satguru Partap Singh Ji",
  "Sri Satguru Ram Singh Ji",
  "Sri Satguru Balak Singh Ji",
  "Kooka Leher",
  "Namdhari Shaheed",
  "Stories"
];

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  activeCategory,
  onCategoryChange,
}) => {
  const [showAll, setShowAll] = useState(false);
  const displayCategories = showAll ? categories : categories.slice(0, 8);

  return (
    <div className="mb-6">
      {/* Categories Grid */}
      <div className="flex flex-wrap gap-2 mb-3">
        {displayCategories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border whitespace-nowrap
              ${
                activeCategory === category
                  ? "bg-warning text-white shadow-md border-warning transform scale-105"
                  : "bg-white text-gray-700 hover:bg-warning/10 hover:border-warning border-gray-200"
              }`}
          >
            {category}
            {activeCategory === category && (
              <span className="ml-1">✓</span>
            )}
          </button>
        ))}
      </div>

      {/* Show More/Less Button */}
      {categories.length > 8 && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="text-warning hover:text-warning/80 text-sm font-medium flex items-center gap-1 transition-colors"
        >
          <span>{showAll ? 'Show Less' : `Show ${categories.length - 8} More`}</span>
          <span className="transform transition-transform duration-200" style={{
            transform: showAll ? 'rotate(180deg)' : 'rotate(0deg)'
          }}>
            ↓
          </span>
        </button>
      )}
    </div>
  );
};

export default CategoryFilter;