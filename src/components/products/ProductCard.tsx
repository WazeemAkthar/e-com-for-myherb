'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/redux/slices/cartSlice';
import { Product } from '@/types/product';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const dispatch = useDispatch();
  
  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

//   const handleWhatsAppContact = () => {
//     // Business owner's phone number (replace with actual number)
//     const businessPhoneNumber = '+94778132025'; // Format: country code + phone number without any symbols
    
//     // Get the current origin (domain) to create absolute URL
//     const origin = typeof window !== 'undefined' ? window.location.origin : '';
    
//     // Create absolute URL for the product image
//     const absoluteImageUrl = product.image.startsWith('http') 
//       ? product.image 
//       : `${origin}${product.image}`;
    
//     // Create a message about customer interest in the product including the full image URL
//     const message = `Hi, I'm interested in buying this product: ${product.name} - ${product.price.toFixed(2)} CAD. 
// Product image: ${absoluteImageUrl}
// Can you provide more information?`;
    
//     // Encode the message for URL
//     const encodedMessage = encodeURIComponent(message);
    
//     // Open WhatsApp with the pre-filled message to the business number
//     window.open(`https://wa.me/${businessPhoneNumber}?text=${encodedMessage}`, '_blank');
//   };
  
  return (
    <div className="group relative bg-white rounded-lg shadow-sm">
      <div className="relative aspect-square overflow-hidden rounded-t-lg bg-gray-100">
        <Link href={`/product/${product.id}`}>
          <div className="relative w-full h-full">
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </Link>
        
        {product.isSale && (
          <div className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded">
            Sale
          </div>
        )}
        
        {product.isNew && (
          <div className="absolute top-2 left-2 bg-lime-500 text-white text-xs px-2 py-1 rounded">
            New
          </div>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-md font-medium">
          <Link href={`/product/${product.id}`}>
            {product.name}
          </Link>
        </h3>
        
        <div className="mt-1 flex items-center">
          {product.oldPrice ? (
            <>
              <span className="text-sm line-through text-gray-500">Rs. {product.oldPrice.toFixed(2)}/=</span>
              <span className="ml-2 text-sm font-medium text-black">Rs. {product.price.toFixed(2)}/=</span>
            </>
          ) : (
            <span className="text-sm font-medium text-black">Rs. {product.price.toFixed(2)}/=</span>
          )}
        </div>
        
        <div className="mt-3">
          <button
            onClick={handleAddToCart}
            className="rounded-md bg-black py-2 text-xs font-medium text-white hover:bg-gray-800 transition-colors w-full"
          >
            Add to Cart
          </button>
          
          {/* <button
            onClick={handleWhatsAppContact}
            className="rounded-md bg-green-600 py-2 text-xs font-medium text-white hover:bg-green-700 transition-colors flex items-center justify-center"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-4 w-4 mr-1" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Contact Us
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;