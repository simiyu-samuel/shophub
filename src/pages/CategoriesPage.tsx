import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Package, TrendingUp, Users, Star } from 'lucide-react';
import { categories } from '../data/products';
import Button from '../components/UI/Button';

const CategoriesPage: React.FC = () => {
  const stats = [
    { label: 'Total Products', value: '1,200+', icon: Package },
    { label: 'Happy Customers', value: '50K+', icon: Users },
    { label: 'Categories', value: '25+', icon: TrendingUp },
    { label: 'Average Rating', value: '4.8', icon: Star }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Explore Our Categories
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Discover thousands of premium products across our carefully curated categories. 
            From the latest electronics to timeless fashion, we have everything you need.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Shop by Category</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Browse our extensive collection organized by category to find exactly what you're looking for
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category) => (
              <div
                key={category.id}
                className="group bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{category.name}</h3>
                  <p className="text-gray-600 mb-4">{category.productCount} products available</p>
                  <Button variant="outline" className="w-full group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-colors" asChild>
                    <Link to={`/products?category=${category.slug}`}>
                      Browse Collection
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Collections</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Handpicked collections featuring the best products from each category
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Electronics Feature */}
            <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-black bg-opacity-20" />
              <div className="relative p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Latest Electronics</h3>
                <p className="text-blue-100 mb-6">
                  Discover cutting-edge technology and innovative gadgets that make life easier and more enjoyable.
                </p>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600" asChild>
                  <Link to="/products?category=electronics">
                    Shop Electronics
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Fashion Feature */}
            <div className="relative bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-black bg-opacity-20" />
              <div className="relative p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Fashion Forward</h3>
                <p className="text-pink-100 mb-6">
                  Stay ahead of trends with our curated fashion collection featuring the latest styles and timeless classics.
                </p>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-pink-600" asChild>
                  <Link to="/products?category=fashion">
                    Shop Fashion
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Can't Find What You're Looking For?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Our customer service team is here to help you find the perfect product. 
            Get in touch and we'll assist you in finding exactly what you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/contact">Contact Support</Link>
            </Button>
            <Button variant="outline" size="lg" className="border-gray-600 text-gray-300 hover:bg-gray-800" asChild>
              <Link to="/products">Browse All Products</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CategoriesPage;