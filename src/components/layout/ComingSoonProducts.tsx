import React, { useState, useEffect } from 'react';
import { Package, Clock, AlertCircle } from 'lucide-react';

const ComingSoonProducts = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  
  useEffect(() => {
    // Create animation cycle
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 1500);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="text-center py-16 px-4 max-w-lg mx-auto">
      <div className="flex justify-center mb-6">
        <div className={`relative ${isAnimating ? 'animate-bounce' : ''}`}>
          <Package 
            size={64} 
            className="text-indigo-500"
          />
          <Clock 
            size={28} 
            className="text-amber-500 absolute -top-2 -right-2" 
          />
        </div>
      </div>
      
      <h2 className="text-2xl font-bold text-gray-800 mb-3">
        Coming Soon!
      </h2>
      
      <p className="text-lg text-gray-600 mb-6">
        We&lsquo;re working on adding exciting new products to this category.
        Check back soon to see what&lsquo;s new!
      </p>
      
      <div className="flex items-center justify-center text-sm text-gray-500">
        <AlertCircle size={16} className="mr-2" />
        <span>Want to be notified when products arrive? Subscribe to our newsletter!</span>
      </div>
    </div>
  );
};

export default ComingSoonProducts;