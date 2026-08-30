import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Mail, Lock, User } from 'lucide-react';
import Button from '../components/Button';
import Image from '../components/Image';
import usePageMetadata from '../hooks/usePageMetadata';
import { useToast } from '../context/ToastContext';

const Register = () => {
  usePageMetadata('Sign Up | Brew & Bloom', 'Create a new Brew & Bloom account.');
  const navigate = useNavigate();
  const { addToast } = useToast();
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    
    if (formData.password.length < 8) {
      setError('Password must be at least 8 characters');
      return;
    }
    
    setIsLoading(true);
    
    // Mock registration process
    setTimeout(() => {
      setIsLoading(false);
      addToast('Account created successfully!', 'success');
      navigate('/');
    }, 1500);
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
          <div className="text-center lg:text-left mb-10 mt-8">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-3 text-brand-espresso">Create account</h1>
            <p className="text-brand-espresso/70 text-lg">Join the Brew & Bloom community.</p>
          </div>
          
          {error && (
            <div className="bg-brand-terracotta/10 border border-brand-terracotta/20 text-brand-terracotta text-sm px-4 py-3 rounded-lg mb-6 flex items-center">
              <span className="font-bold mr-2">Error:</span> {error}
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-bold mb-2">First Name</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                    <User className="w-5 h-5 text-brand-espresso/40" />
                  </div>
                  <input 
                    type="text" 
                    id="firstName"
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                    className="w-full bg-white border border-brand-beige rounded-xl py-3 pl-11 pr-4 focus:outline-none focus:border-brand-terracotta transition-colors shadow-sm"
                    placeholder="Jane"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-bold mb-2">Last Name</label>
                <input 
                  type="text" 
                  id="lastName"
                  required
                  value={formData.lastName}
                  onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                  className="w-full bg-white border border-brand-beige rounded-xl py-3 px-4 focus:outline-none focus:border-brand-terracotta transition-colors shadow-sm"
                  placeholder="Doe"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-bold mb-2">Email Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                  <Mail className="w-5 h-5 text-brand-espresso/40" />
                </div>
                <input 
                  type="email" 
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-white border border-brand-beige rounded-xl py-3 pl-11 pr-4 focus:outline-none focus:border-brand-terracotta transition-colors shadow-sm"
                  placeholder="jane@example.com"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-bold mb-2">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                  <Lock className="w-5 h-5 text-brand-espresso/40" />
                </div>
                <input 
                  type="password" 
                  id="password"
                  required
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                  className="w-full bg-white border border-brand-beige rounded-xl py-3 pl-11 pr-4 focus:outline-none focus:border-brand-terracotta transition-colors shadow-sm"
                  placeholder="••••••••"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-bold mb-2">Confirm Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                  <Lock className="w-5 h-5 text-brand-espresso/40" />
                </div>
                <input 
                  type="password" 
                  id="confirmPassword"
                  required
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                  className="w-full bg-white border border-brand-beige rounded-xl py-3 pl-11 pr-4 focus:outline-none focus:border-brand-terracotta transition-colors shadow-sm"
                  placeholder="••••••••"
                />
              </div>
            </div>
            
            <Button type="submit" fullWidth size="lg" className="mt-6">
              {isLoading ? 'Creating account...' : 'Create Account'}
            </Button>
          </form>
          
          <p className="text-center text-brand-espresso/70 mt-8 text-sm">
            Already have an account?{' '}
            <Link to="/login" className="text-brand-terracotta font-bold hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>
      
      {/* Image Section */}
      <div className="hidden lg:block lg:w-1/2 relative bg-brand-espresso">
        <Image 
          src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=1200" 
          alt="Coffee Beans" 
          wrapperClassName="absolute inset-0"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-espresso/90 via-transparent to-transparent flex items-end p-20">
          <div>
            <h2 className="text-white font-display text-4xl font-bold mb-4">Join our community.</h2>
            <p className="text-white/80 text-lg max-w-md">Earn rewards, get early access to new blends, and easily manage your favorite orders.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
