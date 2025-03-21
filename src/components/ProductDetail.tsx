"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/slices/cartSlice";
import { products } from "@/mock/products";
// Import the Product type
import { Product } from "@/types/product"; // Adjust the path as needed

const ProductDetail: React.FC = () => {
  const params = useParams();
  const productId = params.id as string;
  const dispatch = useDispatch();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);

  // Fetch product based on ID
  useEffect(() => {
    if (productId) {
      const foundProduct = products.find((p: Product) => p.id === productId);
      if (foundProduct) {
        setProduct(foundProduct);
      }
    }
  }, [productId]);

  // Format price with currency
  const formatPrice = (price: number): string => {
    return new Intl.NumberFormat('en-ZA', {
      style: 'currency',
      currency: 'ZAR'
    }).format(price / 100);
  };

  // Handle add to cart
  const handleAddToCart = (): void => {
    if (product) {
      // Add product to cart with selected quantity
      for (let i = 0; i < quantity; i++) {
        dispatch(addToCart(product));
      }
    }
  };

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <p className="text-xl">Loading product information...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <nav className="mb-8">
        <ol className="flex text-sm">
          <li className="mr-2">
            <Link href="/" className="text-gray-500 hover:text-black">
              Home
            </Link>
          </li>
          <li className="mx-2 text-gray-400">/</li>
          <li className="mr-2">
            <Link href={`/${product.category}`} className="text-gray-500 hover:text-black">
              {product.category.split('-').map((word: string) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
            </Link>
          </li>
          <li className="mx-2 text-gray-400">/</li>
          <li className="text-gray-800">{product.name}</li>
        </ol>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Image */}
        <div className="relative h-96 md:h-full">
          <div className="absolute top-2 left-2 flex flex-col gap-2 z-10">
            {product.isNew && (
              <span className="bg-black text-white text-xs font-semibold px-3 py-1">
                NEW
              </span>
            )}
            {product.isSale && (
              <span className="bg-red-600 text-white text-xs font-semibold px-3 py-1">
                SALE
              </span>
            )}
          </div>
          <Image
            src={product.image || "/images/placeholder.jpg"}
            alt={product.name}
            fill
            className="object-contain rounded-lg"
          />
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-medium text-gray-900 mb-4">{product.name}</h1>
          
          <div className="mb-6">
            {product.oldPrice ? (
              <div className="flex items-center">
                <span className="text-xl text-gray-400 line-through mr-3">
                  {formatPrice(product.oldPrice)}
                </span>
                <span className="text-2xl text-red-600 font-medium">
                  {formatPrice(product.price)}
                </span>
              </div>
            ) : (
              <span className="text-2xl font-medium">
                {formatPrice(product.price)}
              </span>
            )}
          </div>
          
          <p className="text-gray-700 mb-6">{product.description}</p>
          
          {/* Quantity selector */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Quantity
            </label>
            <div className="flex items-center border border-gray-300 w-32">
              <button 
                className="px-3 py-1"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                -
              </button>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                className="w-full text-center focus:outline-none"
              />
              <button 
                className="px-3 py-1"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>
          </div>
          
          <button
            onClick={handleAddToCart}
            className="w-full bg-black text-white py-3 font-medium hover:bg-gray-800 transition-colors duration-200 mb-8"
          >
            Add to Cart
          </button>
          
          {/* Product details accordion */}
          <div className="border-t border-gray-200 pt-6">
            <details className="mb-4">
              <summary className="font-medium text-lg cursor-pointer pb-2">Ingredients</summary>
              <div className="pl-4 pt-2 pb-4">
                <ul className="list-disc list-inside space-y-1">
                  {product.ingredients?.map((ingredient: string, index: number) => (
                    <li key={index} className="text-gray-700">{ingredient}</li>
                  ))}
                </ul>
              </div>
            </details>
            
            <details className="mb-4">
              <summary className="font-medium text-lg cursor-pointer pb-2">How to Use</summary>
              <div className="pl-4 pt-2 pb-4">
                <p className="text-gray-700">{product.howToUse}</p>
              </div>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;