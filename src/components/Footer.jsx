import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-espresso text-brand-cream pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <h2 className="font-display text-2xl font-bold mb-4 text-brand-cream">BREW & BLOOM</h2>
            <p className="text-brand-beige/80 text-sm">Coffee. Food. Moments.</p>
          </div>
          
          {/* Explore */}
          <div>
            <h3 className="font-display text-lg mb-6 text-brand-cream">Explore</h3>
            <ul className="space-y-4">
              {['Home', 'Menu', 'About', 'Gallery', 'Contact'].map(item => (
                <li key={item}>
                  <Link to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="text-brand-beige/80 hover:text-brand-terracotta transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Visit & Hours */}
          <div>
            <h3 className="font-display text-lg mb-6 text-brand-cream">Visit</h3>
            <div className="text-brand-beige/80 text-sm space-y-4 mb-8">
              <p>123 Café Street<br />Bhubaneswar, Odisha<br />India</p>
            </div>
            <h3 className="font-display text-lg mb-4 text-brand-cream">Hours</h3>
            <div className="text-brand-beige/80 text-sm space-y-2">
              <p>Monday–Friday<br />7:30 AM – 10:00 PM</p>
              <p className="mt-2">Saturday–Sunday<br />8:00 AM – 11:00 PM</p>
            </div>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="font-display text-lg mb-6 text-brand-cream">Contact</h3>
            <div className="text-brand-beige/80 text-sm space-y-4 mb-8">
              <p>+91 90000 00000</p>
              <a href="mailto:hello@brewandbloom.com" className="hover:text-brand-terracotta transition-colors">hello@brewandbloom.com</a>
            </div>
            <div className="flex gap-4 items-center">
              <a href="#" className="text-brand-beige/80 hover:text-brand-terracotta transition-colors font-medium">IG</a>
              <a href="#" className="text-brand-beige/80 hover:text-brand-terracotta transition-colors font-medium">FB</a>
              <a href="#" className="text-brand-beige/80 hover:text-brand-terracotta transition-colors font-medium">X</a>
              <a href="#" className="p-2 bg-brand-beige/10 rounded-full hover:bg-brand-terracotta transition-colors ml-2"><MapPin size={18} /></a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-brand-beige/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-brand-beige/60">
          <p>© 2026 Brew & Bloom. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-brand-terracotta transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-terracotta transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
