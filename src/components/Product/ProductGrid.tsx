import React from 'react';
import { Product } from '../../types';
import ProductCard from './ProductCard';

interface ProductGridProps {
  products: Product[];
  columns?: 2 | 3 | 4;
  className?: string;
}

const ProductGrid: React.FC<ProductGridProps> = ({ 
  products, 
  columns = 4, 
  className = '' 
}) => {
  const gridCols = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
  };

  return (
    <div className={`grid ${gridCols[columns]} gap-6 ${className}`}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;