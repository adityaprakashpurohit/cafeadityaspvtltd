import React from 'react';
import { Plus, Star } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import Image from './Image';

const MenuCard = ({ item }) => {
  const { addToCart } = useCart();

  return (
    <div className="card group flex flex-col h-full bg-white rounded-2xl overflow-hidden border border-brand-beige print:shadow-none print:border-b print:border-brand-beige print:rounded-none print:mb-4 print:pb-4 print:page-break-inside-avoid">
      {/* Image Container */}
      <Link to={`/menu/${item.id}`} className="relative h-64 overflow-hidden block print:hidden">
        <Image 
          src={item.image} 
          alt={item.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {item.bestseller && (
          <div className="absolute top-4 left-4 bg-brand-terracotta text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
            Bestseller
          </div>
        )}
        {item.vegetarian && (
          <div className="absolute top-4 right-4 bg-white/90 p-1.5 rounded-md backdrop-blur-sm shadow-sm" title="Vegetarian">
            <div className="w-3 h-3 rounded-full bg-brand-green border border-brand-green"></div>
          </div>
        )}
      </Link>
      
      {/* Content */}
      <div className="p-6 flex flex-col flex-grow print:p-0">
        <div className="flex justify-between items-start mb-2">
          <div>
            {item.category && (
              <span className="text-xs font-bold text-brand-terracotta uppercase tracking-wider mb-2 block print:hidden">
                {item.category}
              </span>
            )}
            <Link to={`/menu/${item.id}`}>
              <h3 className="font-display text-xl font-bold group-hover:text-brand-terracotta transition-colors print:text-black">{item.name}</h3>
            </Link>
          </div>
          <div className="flex items-center gap-1 bg-brand-cream px-2 py-1 rounded-lg border border-brand-beige print:hidden">
            <Star className="w-3.5 h-3.5 fill-brand-espresso text-brand-espresso" />
            <span className="text-sm font-bold">{item.rating}</span>
          </div>
        </div>
        
        <p className="text-brand-espresso/70 text-sm mb-6 flex-grow print:text-black print:mb-2">
          {item.description}
        </p>
        
        <div className="flex items-center justify-between pt-4 border-t border-brand-beige mt-auto print:border-none print:pt-0">
          <span className="font-bold text-lg print:text-black">₹{item.price}</span>
          <button 
            onClick={(e) => {
              e.preventDefault();
              addToCart(item);
            }}
            className="w-10 h-10 rounded-full bg-brand-espresso text-white flex items-center justify-center hover:bg-brand-terracotta transition-all shadow-md hover:shadow-xl hover:-translate-y-1 active:scale-90 duration-300 print:hidden"
            aria-label={`Add ${item.name} to cart`}
          >
            <Plus className="w-5 h-5 transition-transform group-hover:rotate-90 duration-300" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
