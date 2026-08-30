import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Button } from './Button';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { getCartItemCount, setIsCartOpen } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'About', path: '/about' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-cream/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <Link to="/" className="text-2xl font-display font-bold tracking-tight text-brand-espresso">
          BREW & BLOOM
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.path} className={`text-sm font-medium hover:text-brand-terracotta transition-colors ${location.pathname === link.path ? 'text-brand-terracotta' : 'text-brand-espresso'}`}>
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <button className="p-2 hover:text-brand-terracotta transition-colors">
            <Search size={20} />
          </button>
          <button className="p-2 hover:text-brand-terracotta transition-colors relative" onClick={() => setIsCartOpen(true)}>
            <ShoppingBag size={20} />
            {getCartItemCount() > 0 && (
              <span className="absolute top-0 right-0 bg-brand-terracotta text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                {getCartItemCount()}
              </span>
            )}
          </button>
          <Button variant="primary">Book a Table</Button>
        </div>

        {/* Mobile Nav Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button className="p-2 relative" onClick={() => setIsCartOpen(true)}>
            <ShoppingBag size={20} />
            {getCartItemCount() > 0 && (
              <span className="absolute top-0 right-0 bg-brand-terracotta text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                {getCartItemCount()}
              </span>
            )}
          </button>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-brand-cream border-t border-brand-beige py-4 px-4 shadow-lg flex flex-col gap-4 animate-fade-in">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.path} onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium p-2 hover:text-brand-terracotta transition-colors">
              {link.name}
            </Link>
          ))}
          <Button variant="primary" className="w-full mt-4">Book a Table</Button>
        </div>
      )}
    </header>
  );
}
