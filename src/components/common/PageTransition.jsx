import React from 'react';
import { motion } from 'framer-motion';

const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial={{ 
        y: '100vh',
        opacity: 0 
      }}
      animate={{ 
        y: 1, // Stop 1px from the top
        opacity: 1 
      }}
      exit={{ 
        y: '-100vh',
        opacity: 0 
      }}
      transition={{ 
        type: "spring",
        stiffness: 80,
        damping: 18,
        duration: 0.9,
        ease: [0.25, 0.1, 0.25, 1]
      }}
      className="min-h-screen page-transition"
      style={{
        willChange: 'transform, opacity',
        backfaceVisibility: 'hidden',
        WebkitBackfaceVisibility: 'hidden'
      }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;