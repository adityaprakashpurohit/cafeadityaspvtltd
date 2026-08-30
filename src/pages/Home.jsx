import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import { Button } from '../components/Button';
import { menuData } from '../data/menu';
import { testimonials } from '../data/testimonials';

export default function Home() {
  const favorites = menuData.filter(item => item.bestseller).slice(0, 6);

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1 space-y-8 animate-fade-in-up">
            <p className="text-sm font-semibold tracking-widest text-brand-terracotta uppercase">
              SPECIALTY COFFEE • FRESHLY BAKED • LOCALLY LOVED
            </p>
            <h1 className="text-5xl lg:text-7xl font-display font-medium leading-tight text-brand-espresso">
              Your daily ritual, brewed beautifully.
            </h1>
            <p className="text-lg text-brand-espresso/80 max-w-xl leading-relaxed">
              "Slow mornings, good conversations, handcrafted coffee, and food made with care."
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/menu">
                <Button variant="primary" className="w-full sm:w-auto">Explore Menu</Button>
              </Link>
              <Link to="/reservation">
                <Button variant="secondary" className="w-full sm:w-auto">Book a Table</Button>
              </Link>
            </div>
          </div>
          
          <div className="flex-1 relative animate-scale-in">
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl relative">
              <img 
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1200&q=80" 
                alt="Beautiful cafe interior" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-espresso/40 to-transparent"></div>
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-brand-beige hidden md:block">
              <p className="text-sm font-semibold text-brand-terracotta uppercase tracking-wider mb-1">Open Today</p>
              <p className="font-medium text-brand-espresso">7:30 AM — 10:00 PM</p>
            </div>
          </div>
        </div>
      </section>

      {/* Favorites Section */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-display mb-4 text-brand-espresso">Our favourites</h2>
            <p className="text-brand-espresso/70 text-lg">"Customer-loved classics, crafted with better ingredients."</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {favorites.map((item) => (
              <div key={item.id} className="card group cursor-pointer">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {item.rating && (
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1 shadow-sm">
                      <Star size={14} className="fill-brand-terracotta text-brand-terracotta" />
                      {item.rating}
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <p className="text-sm font-medium text-brand-terracotta mb-2">{item.category}</p>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-display text-xl">{item.name}</h3>
                    <span className="font-medium">₹{item.price}</span>
                  </div>
                  <p className="text-brand-espresso/70 text-sm mb-6 line-clamp-2">{item.description}</p>
                  <Button variant="ghost" className="w-full border border-brand-beige hover:border-brand-espresso">
                    Add to order
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/menu">
              <Button variant="secondary">View Full Menu</Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-24 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-display text-center mb-16 text-brand-espresso">Loved by our community</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map(testimonial => (
              <div key={testimonial.id} className="bg-white p-8 rounded-2xl shadow-soft border border-brand-beige">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className={i < Math.floor(testimonial.rating) ? "fill-brand-terracotta text-brand-terracotta" : "text-brand-beige"} />
                  ))}
                </div>
                <p className="text-lg text-brand-espresso/80 italic mb-8">"{testimonial.text}"</p>
                <div className="flex items-center gap-4">
                  <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <h4 className="font-medium text-brand-espresso">{testimonial.name}</h4>
                    {testimonial.location && <p className="text-sm text-brand-espresso/60">{testimonial.location}</p>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
