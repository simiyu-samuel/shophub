import { Product, Category } from '../types';

export const categories: Category[] = [
  {
    id: '1',
    name: 'Electronics',
    slug: 'electronics',
    image: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg',
    productCount: 245
  },
  {
    id: '2',
    name: 'Fashion',
    slug: 'fashion',
    image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg',
    productCount: 387
  },
  {
    id: '3',
    name: 'Home & Living',
    slug: 'home-living',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
    productCount: 156
  },
  {
    id: '4',
    name: 'Sports & Outdoors',
    slug: 'sports-outdoors',
    image: 'https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg',
    productCount: 203
  }
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    price: 299.99,
    originalPrice: 399.99,
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg',
    images: [
      'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg',
      'https://images.pexels.com/photos/3394651/pexels-photo-3394651.jpeg',
      'https://images.pexels.com/photos/3394652/pexels-photo-3394652.jpeg'
    ],
    category: 'Electronics',
    brand: 'AudioTech',
    rating: 4.8,
    reviewCount: 247,
    description: 'Experience superior sound quality with our premium wireless headphones featuring active noise cancellation and 30-hour battery life.',
    features: [
      'Active Noise Cancellation',
      '30-hour battery life',
      'Premium leather cushions',
      'Bluetooth 5.0 connectivity',
      'Quick charge support'
    ],
    inStock: true,
    isNew: true,
    isSale: true,
    colors: ['black', 'white', 'silver']
  },
  {
    id: '2',
    name: 'Smart Fitness Watch',
    price: 199.99,
    image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg',
    images: [
      'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg',
      'https://images.pexels.com/photos/437038/pexels-photo-437038.jpeg'
    ],
    category: 'Electronics',
    brand: 'FitTech',
    rating: 4.6,
    reviewCount: 189,
    description: 'Track your fitness goals with this advanced smartwatch featuring GPS, heart rate monitoring, and water resistance.',
    features: [
      'GPS tracking',
      'Heart rate monitor',
      'Water resistant',
      '7-day battery life',
      'Multiple sport modes'
    ],
    inStock: true,
    colors: ['black', 'white', 'rose-gold']
  },
  {
    id: '3',
    name: 'Designer Leather Jacket',
    price: 459.99,
    image: 'https://images.pexels.com/photos/1124468/pexels-photo-1124468.jpeg',
    images: [
      'https://images.pexels.com/photos/1124468/pexels-photo-1124468.jpeg',
      'https://images.pexels.com/photos/1124469/pexels-photo-1124469.jpeg'
    ],
    category: 'Fashion',
    brand: 'StyleCo',
    rating: 4.9,
    reviewCount: 95,
    description: 'Crafted from premium leather, this jacket combines style and durability for the modern individual.',
    features: [
      'Genuine leather',
      'Premium stitching',
      'Multiple pockets',
      'Adjustable fit',
      'Timeless design'
    ],
    inStock: true,
    isNew: true,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['black', 'brown', 'tan']
  },
  {
    id: '4',
    name: 'Modern Table Lamp',
    price: 89.99,
    originalPrice: 129.99,
    image: 'https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg',
    images: [
      'https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg',
      'https://images.pexels.com/photos/1112599/pexels-photo-1112599.jpeg'
    ],
    category: 'Home & Living',
    brand: 'LightHouse',
    rating: 4.4,
    reviewCount: 78,
    description: 'Illuminate your space with this sleek modern table lamp featuring adjustable brightness and USB charging port.',
    features: [
      'Adjustable brightness',
      'USB charging port',
      'Touch control',
      'LED technology',
      'Modern design'
    ],
    inStock: true,
    isSale: true,
    colors: ['white', 'black', 'copper']
  },
  {
    id: '5',
    name: 'Professional Running Shoes',
    price: 159.99,
    image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg',
    images: [
      'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg',
      'https://images.pexels.com/photos/2529149/pexels-photo-2529149.jpeg'
    ],
    category: 'Sports & Outdoors',
    brand: 'RunPro',
    rating: 4.7,
    reviewCount: 324,
    description: 'Engineered for performance with advanced cushioning technology and breathable materials.',
    features: [
      'Advanced cushioning',
      'Breathable mesh',
      'Durable outsole',
      'Lightweight design',
      'Arch support'
    ],
    inStock: true,
    sizes: ['6', '7', '8', '9', '10', '11', '12'],
    colors: ['black', 'white', 'blue', 'red']
  },
  {
    id: '6',
    name: 'Wireless Bluetooth Speaker',
    price: 79.99,
    image: 'https://images.pexels.com/photos/1279813/pexels-photo-1279813.jpeg',
    images: [
      'https://images.pexels.com/photos/1279813/pexels-photo-1279813.jpeg',
      'https://images.pexels.com/photos/1279814/pexels-photo-1279814.jpeg'
    ],
    category: 'Electronics',
    brand: 'SoundWave',
    rating: 4.5,
    reviewCount: 156,
    description: 'Portable speaker with 360-degree sound, waterproof design, and 12-hour battery life.',
    features: [
      '360-degree sound',
      'Waterproof design',
      '12-hour battery',
      'Bluetooth 5.0',
      'Compact design'
    ],
    inStock: true,
    colors: ['black', 'blue', 'red', 'white']
  }
];

export const featuredProducts = products.slice(0, 4);
export const newProducts = products.filter(p => p.isNew);
export const saleProducts = products.filter(p => p.isSale);