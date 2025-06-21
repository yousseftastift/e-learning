
import React from 'react';
import { StarIconSolid, StarIconOutline } from './IconComponents';

interface StarRatingProps {
  rating: number;
  maxRating?: number;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  showText?: boolean;
  reviewCount?: number;
}

const StarRating: React.FC<StarRatingProps> = ({ 
  rating, 
  maxRating = 5, 
  size = 'md', 
  className = '',
  showText = false,
  reviewCount
}) => {
  const iconSizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-5 w-5',
    lg: 'h-6 w-6',
  };

  const stars = Array.from({ length: maxRating }, (_, index) => {
    const starNumber = index + 1;
    return (
      <span key={starNumber}>
        {starNumber <= rating ? (
          <StarIconSolid className={`${iconSizeClasses[size]} text-amber-400`} />
        ) : (
          <StarIconOutline className={`${iconSizeClasses[size]} text-amber-400`} />
        )}
      </span>
    );
  });

  return (
    <div className={`flex items-center ${className}`}>
      {stars}
      {showText && (
        <span className={`ml-2 text-sm ${size === 'sm' ? 'text-xs' : ''} text-neutral`}>
          {rating.toFixed(1)}
          {reviewCount !== undefined && ` (${reviewCount} reviews)`}
        </span>
      )}
    </div>
  );
};

export default StarRating;
