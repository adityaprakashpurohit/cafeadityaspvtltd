import React, { useState } from 'react';
import { Search, Star } from 'lucide-react';
import { menuData, menuCategories } from '../data/menu';
import { useCart } from '../context/CartContext';
import { Button } from '../components/Button';

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const { addToCart } = useCart();

  const filteredMenu = menuData.filter(item => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-display text-brand-espresso mb-6">The Menu</h1>
          <p className="text-xl text-brand-espresso/70">"From your first coffee to your last sweet bite."</p>
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
          {/* Categories */}
          <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 hide-scrollbar snap-x">
            {menuCategories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`snap-start whitespace-nowrap px-6 py-2 rounded-full text-sm font-medium transition-colors border ${
                  activeCategory === cat 
                    ? 'bg-brand-espresso text-brand-cream border-brand-espresso' 
                    : 'bg-white text-brand-espresso border-brand-beige hover:border-brand-espresso'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-espresso/40" size={18} />
            <input 
              type="text" 
              placeholder="Search coffee, pancakes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white border border-brand-beige rounded-full focus:outline-none focus:border-brand-espresso transition-colors text-sm"
            />
          </div>
        </div>

        {/* Menu Grid */}
        {filteredMenu.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMenu.map(item => (
              <div key={item.id} className="card group flex flex-col h-full">
                <div className="aspect-[4/3] overflow-hidden relative bg-brand-beige">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {item.bestseller && (
                    <div className="absolute top-4 left-4 bg-brand-terracotta text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider shadow-sm">
                      Bestseller
                    </div>
                  )}
                  {item.vegetarian && (
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-1.5 rounded-full shadow-sm" title="Vegetarian">
                      <div className="w-3 h-3 bg-brand-green rounded-full border-2 border-white"></div>
                    </div>
                  )}
                </div>
                
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-sm font-medium text-brand-terracotta mb-2">{item.category}</p>
                  <div className="flex justify-between items-start mb-2 gap-4">
                    <h3 className="font-display text-xl leading-tight">{item.name}</h3>
                    <span className="font-medium whitespace-nowrap">₹{item.price}</span>
                  </div>
                  <p className="text-brand-espresso/70 text-sm mb-6 flex-1">{item.description}</p>
                  
                  <Button 
                    variant="ghost" 
                    className="w-full border border-brand-beige hover:border-brand-espresso hover:bg-brand-espresso hover:text-white mt-auto"
                    onClick={() => addToCart(item)}
                  >
                    Add to cart
                  </Button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-24 text-center">
            <h3 className="text-2xl font-display text-brand-espresso mb-2">No coffee found</h3>
            <p className="text-brand-espresso/60">"Try searching for something else."</p>
            <Button 
              variant="secondary" 
              className="mt-6"
              onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
            >
              Clear filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
