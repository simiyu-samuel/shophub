import React from 'react';
import { X, ShoppingBag, Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import Button from '../UI/Button';

const CartDrawer: React.FC = () => {
  const { isOpen, toggleCart, items, updateQuantity, removeFromCart, totalPrice } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={toggleCart}
      />
      
      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900 flex items-center">
              <ShoppingBag className="w-5 h-5 mr-2" />
              Shopping Cart ({items.length})
            </h2>
            <button
              onClick={toggleCart}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full p-8 text-center">
                <ShoppingBag className="w-16 h-16 text-gray-300 mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">Your cart is empty</h3>
                <p className="text-gray-500 mb-6">Start shopping to add items to your cart</p>
                <Button onClick={toggleCart} asChild>
                  <Link to="/products">Browse Products</Link>
                </Button>
              </div>
            ) : (
              <div className="p-4 space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4 p-3 border border-gray-200 rounded-lg">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-16 h-16 object-cover rounded-md"
                    />
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900 text-sm">{item.product.name}</h4>
                      <p className="text-sm text-gray-500">{item.product.brand}</p>
                      {item.selectedColor && (
                        <p className="text-xs text-gray-500">Color: {item.selectedColor}</p>
                      )}
                      {item.selectedSize && (
                        <p className="text-xs text-gray-500">Size: {item.selectedSize}</p>
                      )}
                      <p className="font-semibold text-gray-900">${item.product.price.toFixed(2)}</p>
                    </div>
                    <div className="flex flex-col items-end space-y-2">
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="p-1 text-red-500 hover:text-red-700 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 hover:bg-gray-100 rounded"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-8 text-center text-sm">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 hover:bg-gray-100 rounded"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-gray-200 p-4 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold text-gray-900">Total:</span>
                <span className="text-lg font-bold text-gray-900">${totalPrice.toFixed(2)}</span>
              </div>
              <div className="space-y-2">
                <Button 
                  onClick={toggleCart}
                  asChild
                  className="w-full"
                >
                  <Link to="/checkout">Checkout</Link>
                </Button>
                <Button 
                  variant="outline"
                  onClick={toggleCart}
                  asChild
                  className="w-full"
                >
                  <Link to="/cart">View Cart</Link>
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartDrawer;