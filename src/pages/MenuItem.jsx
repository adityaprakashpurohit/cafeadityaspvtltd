import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Minus, Plus, Star, Leaf, Coffee, Share2, MessageCircle } from 'lucide-react';
import { menuItems } from '../data/menu';
import { useCart } from '../context/CartContext';
import Button from '../components/Button';
import usePageMetadata from '../hooks/usePageMetadata';
import Image from '../components/Image';

const MenuItem = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const item = menuItems.find(i => i.id === id);
  
  const [quantity, setQuantity] = useState(1);
  const [options, setOptions] = useState({});
  const [totalPrice, setTotalPrice] = useState(item?.price || 0);

  // Use dynamic metadata if item is found, fallback otherwise
  usePageMetadata(
    item ? `${item.name} | Brew & Bloom` : 'Item Not Found | Brew & Bloom',
    item ? item.description : 'Menu item details.'
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (item) {
      // Calculate dynamic price based on options
      let extrasCost = 0;
      if (options.size === 'Large') extrasCost += 40;
      if (options.milk === 'Oat') extrasCost += 50;
      if (options.milk === 'Almond') extrasCost += 50;
      if (options.extras?.includes('Extra Shot')) extrasCost += 50;
      if (options.extras?.includes('Vanilla')) extrasCost += 30;
      if (options.extras?.includes('Caramel')) extrasCost += 30;
      
      setTotalPrice((item.price + extrasCost) * quantity);
    }
  }, [quantity, options, item]);

  if (!item) {
    return (
      <div className="pt-32 pb-20 text-center min-h-[60vh] flex flex-col items-center justify-center">
        <h2 className="font-display text-3xl font-bold mb-4">Item not found</h2>
        <Link to="/menu">
          <Button>Back to Menu</Button>
        </Link>
      </div>
    );
  }

  const handleOptionChange = (category, value) => {
    setOptions(prev => ({
      ...prev,
      [category]: value
    }));
  };

  const handleExtraToggle = (extra) => {
    setOptions(prev => {
      const currentExtras = prev.extras || [];
      if (currentExtras.includes(extra)) {
        return { ...prev, extras: currentExtras.filter(e => e !== extra) };
      } else {
        return { ...prev, extras: [...currentExtras, extra] };
      }
    });
  };

  const handleAddToCart = () => {
    addToCart(item, quantity, options);
  };

  const handleShare = (platform) => {
    const text = `Check out this amazing ${item.name} at Brew & Bloom!`;
    const url = window.location.href;
    
    if (platform === 'whatsapp') {
      window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text + ' ' + url)}`, '_blank');
    } else if (platform === 'twitter') {
      window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
    } else {
      if (navigator.share) {
        navigator.share({ title: 'Brew & Bloom', text, url });
      } else {
        navigator.clipboard.writeText(url);
        alert('Link copied to clipboard!');
      }
    }
  };

  return (
    <div className="pt-28 pb-24 min-h-screen bg-brand-cream">
      <div className="container mx-auto px-6 max-w-5xl">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-brand-espresso/70 hover:text-brand-espresso mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="font-medium text-sm">Back to Menu</span>
        </button>

        <div className="bg-white rounded-[2rem] shadow-soft border border-brand-beige overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Image Section */}
            <div className="h-80 md:h-auto relative animate-fade-in-up">
              <Image 
                src={item.image} 
                alt={item.name} 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-6 left-6 right-6 flex justify-between">
                {item.bestseller && (
                  <div className="bg-brand-terracotta text-white text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider shadow-lg">
                    Bestseller
                  </div>
                )}
                {item.vegetarian && (
                  <div className="bg-white/90 px-3 py-2 rounded-full backdrop-blur-sm shadow-sm flex items-center gap-2" title="Vegetarian">
                    <div className="w-2.5 h-2.5 rounded-full bg-brand-green"></div>
                    <span className="text-xs font-bold text-brand-green uppercase">Veg</span>
                  </div>
                )}
              </div>
            </div>

            {/* Details Section */}
            <div className="p-8 md:p-12 flex flex-col">
              <p className="text-sm font-bold text-brand-terracotta uppercase tracking-wider mb-2">{item.category}</p>
              <div className="flex justify-between items-start mb-4">
                <h1 className="font-display text-4xl font-bold text-brand-espresso">{item.name}</h1>
              </div>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-1.5 bg-brand-cream px-3 py-1.5 rounded-lg border border-brand-beige">
                  <Star className="w-4 h-4 fill-brand-espresso text-brand-espresso" />
                  <span className="font-bold text-sm">{item.rating}</span>
                </div>
                <span className="text-2xl font-bold">₹{item.price}</span>
              </div>

              <p className="text-brand-espresso/80 text-lg mb-8 leading-relaxed">
                "{item.description}"
              </p>

              {/* Options */}
              {item.category === 'Coffee' || item.category === 'Tea' ? (
                <div className="space-y-6 mb-8">
                  <div>
                    <h4 className="font-bold mb-3">Milk</h4>
                    <div className="flex flex-wrap gap-3">
                      {['Whole', 'Oat (+₹50)', 'Almond (+₹50)'].map(milk => {
                        const baseMilk = milk.split(' ')[0];
                        return (
                          <button
                            key={milk}
                            onClick={() => handleOptionChange('milk', baseMilk)}
                            className={`px-4 py-2 rounded-full border text-sm font-medium transition-colors ${
                              options.milk === baseMilk 
                                ? 'bg-brand-espresso text-white border-brand-espresso' 
                                : 'bg-white border-brand-beige text-brand-espresso hover:border-brand-espresso'
                            }`}
                          >
                            {milk}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-bold mb-3">Size</h4>
                    <div className="flex flex-wrap gap-3">
                      {['Regular', 'Large (+₹40)'].map(size => {
                        const baseSize = size.split(' ')[0];
                        return (
                          <button
                            key={size}
                            onClick={() => handleOptionChange('size', baseSize)}
                            className={`px-4 py-2 rounded-full border text-sm font-medium transition-colors ${
                              options.size === baseSize 
                                ? 'bg-brand-espresso text-white border-brand-espresso' 
                                : 'bg-white border-brand-beige text-brand-espresso hover:border-brand-espresso'
                            }`}
                          >
                            {size}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold mb-3">Extras</h4>
                    <div className="flex flex-wrap gap-3">
                      {['Extra Shot', 'Vanilla', 'Caramel'].map(extra => {
                        const cost = extra === 'Extra Shot' ? 50 : 30;
                        const isSelected = options.extras?.includes(extra);
                        return (
                          <button
                            key={extra}
                            onClick={() => handleExtraToggle(extra)}
                            className={`px-4 py-2 rounded-full border text-sm font-medium transition-colors ${
                              isSelected 
                                ? 'bg-brand-espresso text-white border-brand-espresso' 
                                : 'bg-white border-brand-beige text-brand-espresso hover:border-brand-espresso'
                            }`}
                          >
                            {extra} (+₹{cost})
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              ) : null}

              {/* Ingredients */}
              {item.ingredients && (
                <div className="mb-6">
                  <h4 className="font-bold mb-3">Ingredients</h4>
                  <ul className="flex flex-wrap gap-2 text-sm text-brand-espresso/70">
                    {item.ingredients.map((ing, i) => (
                      <li key={i} className="bg-brand-cream px-3 py-1 rounded-md border border-brand-beige">
                        {ing}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Barista Tip */}
              {item.baristaTip && (
                <div className="mb-8 bg-brand-terracotta/10 border border-brand-terracotta/20 rounded-xl p-4 flex gap-3 items-start">
                  <div className="bg-brand-terracotta/20 p-2 rounded-full text-brand-terracotta mt-0.5">
                    <Coffee className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-terracotta text-sm uppercase tracking-wider mb-1">Barista Tip</h4>
                    <p className="text-sm text-brand-espresso/80 leading-relaxed">{item.baristaTip}</p>
                  </div>
                </div>
              )}

              {/* Add to Cart Section */}
              <div className="mt-auto pt-8 border-t border-brand-beige">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-4 border border-brand-beige rounded-full px-2 py-1 bg-brand-cream">
                    <button 
                      onClick={() => setQuantity(q => Math.max(1, q - 1))}
                      className="w-10 h-10 flex items-center justify-center text-brand-espresso/70 hover:text-brand-espresso hover:bg-brand-beige rounded-full transition-colors"
                      aria-label="Decrease Quantity"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="text-lg font-bold w-4 text-center">{quantity}</span>
                    <button 
                      onClick={() => setQuantity(q => q + 1)}
                      className="w-10 h-10 flex items-center justify-center text-brand-espresso/70 hover:text-brand-espresso hover:bg-brand-beige rounded-full transition-colors"
                      aria-label="Increase Quantity"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="text-right flex-grow">
                    <p className="text-sm text-brand-espresso/60 font-medium">Total</p>
                    <p className="text-2xl font-bold">₹{totalPrice.toFixed(2)}</p>
                  </div>
                </div>
                
                
                <Button fullWidth size="lg" onClick={handleAddToCart} className="mb-6">
                  Add to Cart — ₹{totalPrice.toFixed(2)}
                </Button>

                {/* Share Section */}
                <div className="flex items-center justify-center gap-4 text-brand-espresso/60 pt-4 border-t border-brand-beige/50">
                  <span className="text-sm font-medium">Share:</span>
                  <button onClick={() => handleShare('whatsapp')} className="hover:text-brand-terracotta transition-colors p-2 rounded-full hover:bg-brand-cream" aria-label="Share on WhatsApp">
                    <MessageCircle className="w-5 h-5" />
                  </button>
                  <button onClick={() => handleShare('twitter')} className="hover:text-brand-terracotta transition-colors p-2 rounded-full hover:bg-brand-cream" aria-label="Share on X">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </button>
                  <button onClick={() => handleShare('other')} className="hover:text-brand-terracotta transition-colors p-2 rounded-full hover:bg-brand-cream" aria-label="Share">
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
