'use client';

import React from 'react';
import ProductCard from '../products/ProductCard';
import { products } from '@/mock/products';

const FeaturedProducts = () => {
  // Filter to show only 4 featured products
  const featuredProducts = products.slice(0, 4);
  
  return (
    <div className=" lg:px-40 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {featuredProducts.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default FeaturedProducts;