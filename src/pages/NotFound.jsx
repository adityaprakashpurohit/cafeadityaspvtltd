import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 py-24">
      <div className="w-32 h-32 bg-brand-beige rounded-full flex items-center justify-center mb-8">
        <span className="text-5xl">☕</span>
      </div>
      <h1 className="text-4xl md:text-5xl font-display text-brand-espresso mb-4">
        Looks like this page needs another cup of coffee.
      </h1>
      <p className="text-lg text-brand-espresso/70 max-w-md mx-auto mb-8">
        We couldn't find the page you were looking for. It might have been moved or doesn't exist.
      </p>
      <Link to="/">
        <Button variant="primary">Back to Home</Button>
      </Link>
    </div>
  );
}
