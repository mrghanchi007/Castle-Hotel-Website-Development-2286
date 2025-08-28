import React, { useState } from 'react';
import { motion } from 'framer-motion';

const LazyImage = ({ src, alt, className = '', placeholder = null, ...props }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
    setIsLoaded(true);
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 image-placeholder rounded-lg" />
      )}
      
      {hasError ? (
        <div className="absolute inset-0 bg-gray-200 flex items-center justify-center rounded-lg">
          <span className="text-gray-500 text-sm">Image not available</span>
        </div>
      ) : (
        <motion.img
          src={src}
          alt={alt}
          onLoad={handleLoad}
          onError={handleError}
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className={`w-full h-full object-cover ${className}`}
          loading="lazy"
          {...props}
        />
      )}
    </div>
  );
};

export default LazyImage;