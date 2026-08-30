import React, { useState } from 'react';

const Image = ({ src, alt, className = '', wrapperClassName = '', ...props }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <div className={`relative overflow-hidden w-full h-full ${wrapperClassName}`}>
      {/* Placeholder / Blur-up effect */}
      {(!isLoaded && !hasError) && (
        <div className="absolute inset-0 bg-brand-beige/50 animate-pulse z-0" />
      )}
      
      {/* Error state */}
      {hasError && (
        <div className="absolute inset-0 bg-brand-beige/30 flex items-center justify-center text-brand-espresso/50 text-sm p-4 text-center z-0">
          Failed to load image
        </div>
      )}

      {/* Actual Image */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        onError={() => {
          setIsLoaded(true);
          setHasError(true);
        }}
        className={`transition-opacity duration-700 ease-in-out relative z-10 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } ${className}`}
        {...props}
      />
    </div>
  );
};

export default Image;
