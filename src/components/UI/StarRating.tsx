import React from 'react';
import { Star } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  maxRating?: number;
  size?: 'sm' | 'md' | 'lg';
  showNumber?: boolean;
  className?: string;
}

const StarRating: React.FC<StarRatingProps> = ({
  rating,
  maxRating = 5,
  size = 'sm',
  showNumber = false,
  className = ''
}) => {
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  };

  const iconSize = sizes[size];

  return (
    <div className={`flex items-center ${className}`}>
      <div className="flex items-center">
        {[...Array(maxRating)].map((_, index) => (
          <Star
            key={index}
            className={`${iconSize} ${
              index < Math.floor(rating)
                ? 'text-yellow-400 fill-current'
                : index < rating
                ? 'text-yellow-400 fill-current opacity-50'
                : 'text-gray-300'
            }`}
          />
        ))}
      </div>
      {showNumber && (
        <span className="ml-2 text-sm text-gray-600">
          {rating.toFixed(1)}
        </span>
      )}
    </div>
  );
};

export default StarRating;