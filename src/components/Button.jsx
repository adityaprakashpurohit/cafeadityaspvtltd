import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function Button({ children, variant = 'primary', className, ...props }) {
  const baseClasses = "px-6 py-3 rounded-full transition-all duration-300 font-medium inline-flex items-center justify-center gap-2";
  const variants = {
    primary: "bg-brand-espresso text-brand-cream hover:bg-brand-espresso/90",
    secondary: "border border-brand-espresso text-brand-espresso hover:bg-brand-espresso hover:text-brand-cream",
    ghost: "text-brand-espresso hover:bg-brand-beige"
  };
  
  return (
    <button className={twMerge(clsx(baseClasses, variants[variant], className))} {...props}>
      {children}
    </button>
  );
}
