import React from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle } from 'lucide-react';
import Button from '../components/UI/Button';

const NotFoundPage: React.FC = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
    <AlertTriangle className="w-24 h-24 text-yellow-400 mb-6" />
    <h1 className="text-5xl font-bold text-gray-900 mb-4">404</h1>
    <h2 className="text-2xl font-semibold text-gray-700 mb-2">Page Not Found</h2>
    <p className="text-gray-500 mb-8">Sorry, the page you are looking for does not exist or has been moved.</p>
    <Button asChild>
      <Link to="/">Go to Homepage</Link>
    </Button>
  </div>
);

export default NotFoundPage; 