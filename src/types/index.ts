export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  images: string[];
  category: string;
  brand: string;
  rating: number;
  reviewCount: number;
  description: string;
  features: string[];
  inStock: boolean;
  isNew?: boolean;
  isSale?: boolean;
  colors?: string[];
  sizes?: string[];
}

export interface CartItem {
  id: string;
  product: Product;
  quantity: number;
  selectedColor?: string;
  selectedSize?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  image: string;
  productCount: number;
}

export interface Filter {
  categories: string[];
  brands: string[];
  priceRange: [number, number];
  rating: number;
  inStock: boolean;
}

export interface Review {
  id: string;
  userId: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}