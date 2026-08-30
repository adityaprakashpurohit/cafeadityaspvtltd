import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Mail, Lock } from 'lucide-react';
import Button from '../components/Button';
import Image from '../components/Image';
import usePageMetadata from '../hooks/usePageMetadata';
import { useToast } from '../context/ToastContext';

const Login = () => {
  usePageMetadata('Sign In | Brew & Bloom', 'Sign in to your Brew & Bloom account.');
  const navigate = useNavigate();
  const { addToast } = useToast();
  
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Mock login process
    setTimeout(() => {
      setIsLoading(false);
      addToast('Successfully signed in!', 'success');
      navigate('/');
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-brand-cream flex">
      {/* Form Section */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 sm:px-12 md:px-20 lg:px-24 py-12 relative z-10">
        <Link 
          to="/" 
          className="absolute top-8 left-6 sm:left-12 lg:left-24 z-50 flex items-center gap-2 text-brand-espresso/70 hover:text-brand-espresso transition-colors font-medium text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
        
        <div className="w-full max-w-md mx-auto">
          <div className="text-center lg:text-left mb-10">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-3 text-brand-espresso">Welcome back</h1>
            <p className="text-brand-espresso/70 text-lg">Sign in to your account to continue.</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="email" className="block text-sm font-bold mb-2">Email Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="w-5 h-5 text-brand-espresso/40" />
                </div>
                <input 
                  type="email" 
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-white border border-brand-beige rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:border-brand-terracotta transition-colors shadow-sm"
                  placeholder="name@example.com"
                />
              </div>
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-2">
                <label htmlFor="password" className="block text-sm font-bold">Password</label>
                <a href="#" className="text-xs text-brand-terracotta hover:underline font-medium">Forgot password?</a>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="w-5 h-5 text-brand-espresso/40" />
                </div>
                <input 
                  type="password" 
                  id="password"
                  required
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                  className="w-full bg-white border border-brand-beige rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:border-brand-terracotta transition-colors shadow-sm"
                  placeholder="••••••••"
                />
              </div>
            </div>
            
            <Button type="submit" fullWidth size="lg" className="mt-8">
              {isLoading ? 'Signing in...' : 'Sign In'}
            </Button>
          </form>
          
          <p className="text-center text-brand-espresso/70 mt-8 text-sm">
            Don't have an account?{' '}
            <Link to="/register" className="text-brand-terracotta font-bold hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
      
      {/* Image Section */}
      <div className="hidden lg:block lg:w-1/2 relative bg-brand-espresso">
        <Image 
          src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=1200" 
          alt="Coffee Pouring" 
          wrapperClassName="absolute inset-0"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-espresso/90 via-transparent to-transparent flex items-end p-20">
          <div>
            <h2 className="text-white font-display text-4xl font-bold mb-4">Your daily ritual.</h2>
            <p className="text-white/80 text-lg max-w-md">Experience the perfect pour, every time. Sign in to order ahead or manage your subscription.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
