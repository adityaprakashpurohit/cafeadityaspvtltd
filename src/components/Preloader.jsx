import React, { useState, useEffect } from 'react';
import { Coffee } from 'lucide-react';

const Preloader = () => {
  const [loading, setLoading] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    // Start fading out after 1.5 seconds
    const fadeTimer = setTimeout(() => {
      setFading(true);
    }, 1500);

    // Completely remove from DOM after fade animation (0.5s)
    const removeTimer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!loading) return null;

  return (
    <div 
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-brand-cream dark:bg-[#221A15] transition-opacity duration-500 ease-in-out ${
        fading ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="flex flex-col items-center animate-fade-in-up">
        <Coffee className="w-16 h-16 text-brand-terracotta mb-6 animate-pulse" />
        <h1 className="font-display text-4xl font-bold tracking-widest text-brand-espresso mb-2">
          BREW & BLOOM
        </h1>
        <p className="text-brand-espresso/60 uppercase tracking-[0.3em] text-sm font-medium">
          Loading
        </p>
      </div>
    </div>
  );
};

export default Preloader;
