import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Star, 
  Users, 
  Award, 
  Shield, 
  Truck, 
  Headphones, 
  Heart,
  Target,
  Eye,
  ArrowRight
} from 'lucide-react';
import Button from '../components/UI/Button';

const AboutPage: React.FC = () => {
  const values = [
    {
      icon: Heart,
      title: 'Customer First',
      description: 'Every decision we make is centered around providing the best possible experience for our customers.'
    },
    {
      icon: Award,
      title: 'Quality Excellence',
      description: 'We partner with trusted brands and rigorously test every product to ensure it meets our high standards.'
    },
    {
      icon: Shield,
      title: 'Trust & Security',
      description: 'Your privacy and security are paramount. We use industry-leading security measures to protect your data.'
    },
    {
      icon: Target,
      title: 'Innovation',
      description: 'We continuously evolve our platform and services to stay ahead of trends and customer needs.'
    }
  ];

  const stats = [
    { number: '500K+', label: 'Happy Customers' },
    { number: '50K+', label: 'Products Sold' },
    { number: '99.9%', label: 'Uptime' },
    { number: '4.8/5', label: 'Customer Rating' }
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
      bio: 'Visionary leader with 15+ years in e-commerce and retail innovation.'
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
      bio: 'Technology expert focused on creating seamless shopping experiences.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Customer Experience',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
      bio: 'Passionate about delivering exceptional customer service and support.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center">
                <Star className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              About ShopHub
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              We're on a mission to revolutionize online shopping by providing exceptional products, 
              outstanding service, and an unparalleled customer experience.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in 2020, ShopHub began as a simple idea: to create an online marketplace 
                  that puts customers first. We noticed that many e-commerce platforms prioritized 
                  profits over people, leading to poor customer experiences and subpar products.
                </p>
                <p>
                  We set out to change that by building a platform that combines cutting-edge technology 
                  with genuine care for our customers. Every product in our catalog is carefully selected, 
                  every feature is designed with user experience in mind, and every interaction is an 
                  opportunity to exceed expectations.
                </p>
                <p>
                  Today, we're proud to serve hundreds of thousands of customers worldwide, offering 
                  everything from the latest electronics to timeless fashion pieces, all backed by 
                  our commitment to quality and service excellence.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
                alt="Our team working together"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                <Target className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To democratize access to quality products by creating an inclusive, trustworthy, 
                and innovative e-commerce platform that empowers both customers and sellers to thrive 
                in the digital marketplace.
              </p>
            </div>
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mb-4">
                <Eye className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To become the world's most trusted and customer-centric e-commerce platform, 
                where every shopping experience is seamless, secure, and satisfying, setting 
                new standards for online retail excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These core values guide everything we do and shape the way we interact with 
              our customers, partners, and each other.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-md mb-4">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Behind ShopHub is a passionate team of innovators, dreamers, and problem-solvers 
              dedicated to creating the best possible shopping experience.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose ShopHub?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We've built our platform with features that matter most to our customers
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mb-4">
                <Truck className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Fast & Free Shipping</h3>
              <p className="text-gray-600">Free shipping on orders over $50 with fast delivery options available.</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Secure Shopping</h3>
              <p className="text-gray-600">Your personal and payment information is protected with bank-level security.</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mb-4">
                <Headphones className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">24/7 Support</h3>
              <p className="text-gray-600">Our customer service team is always here to help with any questions or concerns.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Shopping?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of thousands of satisfied customers and discover why ShopHub 
            is the preferred choice for online shopping.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600" asChild>
              <Link to="/products">
                Browse Products
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/register">Create Account</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;