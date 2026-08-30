import React, { useState } from 'react';
import { galleryData, galleryCategories } from '../data/gallery';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredGallery = galleryData.filter(item => 
    activeCategory === 'All' || item.category === activeCategory
  );

  return (
    <div className="pt-24 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-display text-brand-espresso mb-4">A little taste of Brew & Bloom</h1>
      </div>

      <div className="flex gap-2 overflow-x-auto w-full justify-center pb-8 hide-scrollbar">
        {galleryCategories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`whitespace-nowrap px-6 py-2 rounded-full text-sm font-medium transition-colors border ${
              activeCategory === cat 
                ? 'bg-brand-espresso text-brand-cream border-brand-espresso' 
                : 'bg-white text-brand-espresso border-brand-beige hover:border-brand-espresso'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {filteredGallery.map(item => (
          <div key={item.id} className="break-inside-avoid relative group rounded-2xl overflow-hidden cursor-pointer shadow-soft">
            <img src={item.image} alt={item.alt} className="w-full transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-brand-espresso/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="text-white font-medium border border-white/50 px-4 py-2 rounded-full backdrop-blur-sm">View</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
