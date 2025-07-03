import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart, Eye } from 'lucide-react';
import { Product } from '../../types';
import { useCart } from '../../context/CartContext';
import StarRating from '../UI/StarRating';
import Badge from '../UI/Badge';
import Button from '../UI/Button';

interface ProductCardProps {
  product: Product;
  className?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, className = '' }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className={`group bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300 ${className}`}>
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-square overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          
          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {product.isNew && (
              <Badge variant="info" size="sm">New</Badge>
            )}
            {product.isSale && discountPercentage > 0 && (
              <Badge variant="error" size="sm">-{discountPercentage}%</Badge>
            )}
            {!product.inStock && (
              <Badge variant="warning" size="sm">Out of Stock</Badge>
            )}
          </div>

          {/* Quick Actions */}
          <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors">
              <Heart className="w-4 h-4 text-gray-600" />
            </button>
            <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors">
              <Eye className="w-4 h-4 text-gray-600" />
            </button>
          </div>

          {/* Add to Cart Button */}
          <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Button
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className="w-full"
              size="sm"
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              Add to Cart
            </Button>
          </div>
        </div>

        <div className="p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-500">{product.brand}</span>
            <StarRating rating={product.rating} />
          </div>
          
          <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
            {product.name}
          </h3>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-lg font-bold text-gray-900">
                ${product.price.toFixed(2)}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-gray-500 line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>
            <span className="text-sm text-gray-500">
              ({product.reviewCount} reviews)
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;