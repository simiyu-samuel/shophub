import React, { useState } from 'react';
import { Filter, X, ChevronDown, ChevronUp } from 'lucide-react';
import { Filter as FilterType } from '../../types';
import { categories } from '../../data/products';
import StarRating from '../UI/StarRating';
import Button from '../UI/Button';

interface ProductFiltersProps {
  filters: FilterType;
  onFiltersChange: (filters: FilterType) => void;
  onClearFilters: () => void;
  isOpen: boolean;
  onToggle: () => void;
}

const ProductFilters: React.FC<ProductFiltersProps> = ({
  filters,
  onFiltersChange,
  onClearFilters,
  isOpen,
  onToggle
}) => {
  const [expandedSections, setExpandedSections] = useState<string[]>(['category', 'price', 'rating']);

  const toggleSection = (section: string) => {
    setExpandedSections(prev =>
      prev.includes(section)
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const handleCategoryChange = (category: string) => {
    const newCategories = filters.categories.includes(category)
      ? filters.categories.filter(c => c !== category)
      : [...filters.categories, category];
    
    onFiltersChange({ ...filters, categories: newCategories });
  };

  const handleBrandChange = (brand: string) => {
    const newBrands = filters.brands.includes(brand)
      ? filters.brands.filter(b => b !== brand)
      : [...filters.brands, brand];
    
    onFiltersChange({ ...filters, brands: newBrands });
  };

  const handlePriceChange = (min: number, max: number) => {
    onFiltersChange({ ...filters, priceRange: [min, max] });
  };

  const handleRatingChange = (rating: number) => {
    onFiltersChange({ ...filters, rating });
  };

  const brands = ['AudioTech', 'FitTech', 'StyleCo', 'LightHouse', 'RunPro', 'SoundWave'];

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      {/* Mobile Filter Toggle */}
      <div className="lg:hidden">
        <button
          onClick={onToggle}
          className="w-full flex items-center justify-between p-4 text-left"
        >
          <span className="flex items-center font-medium text-gray-900">
            <Filter className="w-5 h-5 mr-2" />
            Filters
          </span>
          {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </button>
      </div>

      {/* Filters Content */}
      <div className={`${isOpen ? 'block' : 'hidden'} lg:block`}>
        <div className="p-4 border-b border-gray-200 lg:border-b-0">
          <div className="flex items-center justify-between">
            <h3 className="hidden lg:block font-medium text-gray-900">Filters</h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClearFilters}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="w-4 h-4 mr-1" />
              Clear All
            </Button>
          </div>
        </div>

        <div className="p-4 space-y-6">
          {/* Categories */}
          <div>
            <button
              onClick={() => toggleSection('category')}
              className="flex items-center justify-between w-full text-left font-medium text-gray-900 mb-3"
            >
              Categories
              {expandedSections.includes('category') ? 
                <ChevronUp className="w-4 h-4" /> : 
                <ChevronDown className="w-4 h-4" />
              }
            </button>
            {expandedSections.includes('category') && (
              <div className="space-y-2">
                {categories.map((category) => (
                  <label key={category.id} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={filters.categories.includes(category.name)}
                      onChange={() => handleCategoryChange(category.name)}
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="ml-2 text-sm text-gray-700">
                      {category.name} ({category.productCount})
                    </span>
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Brands */}
          <div>
            <button
              onClick={() => toggleSection('brand')}
              className="flex items-center justify-between w-full text-left font-medium text-gray-900 mb-3"
            >
              Brands
              {expandedSections.includes('brand') ? 
                <ChevronUp className="w-4 h-4" /> : 
                <ChevronDown className="w-4 h-4" />
              }
            </button>
            {expandedSections.includes('brand') && (
              <div className="space-y-2">
                {brands.map((brand) => (
                  <label key={brand} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={filters.brands.includes(brand)}
                      onChange={() => handleBrandChange(brand)}
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="ml-2 text-sm text-gray-700">{brand}</span>
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Price Range */}
          <div>
            <button
              onClick={() => toggleSection('price')}
              className="flex items-center justify-between w-full text-left font-medium text-gray-900 mb-3"
            >
              Price Range
              {expandedSections.includes('price') ? 
                <ChevronUp className="w-4 h-4" /> : 
                <ChevronDown className="w-4 h-4" />
              }
            </button>
            {expandedSections.includes('price') && (
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <input
                    type="number"
                    value={filters.priceRange[0]}
                    onChange={(e) => handlePriceChange(Number(e.target.value), filters.priceRange[1])}
                    placeholder="Min"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                  />
                  <span className="text-gray-500">to</span>
                  <input
                    type="number"
                    value={filters.priceRange[1]}
                    onChange={(e) => handlePriceChange(filters.priceRange[0], Number(e.target.value))}
                    placeholder="Max"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                  />
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    [0, 50],
                    [50, 100],
                    [100, 200],
                    [200, 500],
                    [500, 1000]
                  ].map(([min, max]) => (
                    <button
                      key={`${min}-${max}`}
                      onClick={() => handlePriceChange(min, max)}
                      className="px-3 py-1 text-xs border border-gray-300 rounded-full hover:bg-gray-50"
                    >
                      ${min} - ${max}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Rating */}
          <div>
            <button
              onClick={() => toggleSection('rating')}
              className="flex items-center justify-between w-full text-left font-medium text-gray-900 mb-3"
            >
              Rating
              {expandedSections.includes('rating') ? 
                <ChevronUp className="w-4 h-4" /> : 
                <ChevronDown className="w-4 h-4" />
              }
            </button>
            {expandedSections.includes('rating') && (
              <div className="space-y-2">
                {[4, 3, 2, 1].map((rating) => (
                  <label key={rating} className="flex items-center">
                    <input
                      type="radio"
                      name="rating"
                      checked={filters.rating === rating}
                      onChange={() => handleRatingChange(rating)}
                      className="border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="ml-2 flex items-center">
                      <StarRating rating={rating} />
                      <span className="ml-2 text-sm text-gray-700">& up</span>
                    </span>
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* In Stock */}
          <div>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={filters.inStock}
                onChange={(e) => onFiltersChange({ ...filters, inStock: e.target.checked })}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="ml-2 text-sm text-gray-700">In Stock Only</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFilters;