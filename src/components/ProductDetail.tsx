"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/slices/cartSlice";
import { products } from "@/mock/products";
import { Product } from "@/types/product";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import { ShoppingCart, Check } from "lucide-react";

const ProductDetail: React.FC = () => {
  const params = useParams();
  const productId = params.id as string;
  const dispatch = useDispatch();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [isAdding, setIsAdding] = useState(false);

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
    return new Intl.NumberFormat("en-LK", {
      style: "currency",
      currency: "LKR",
      // currencyDisplay: "narrowSymbol", // This will use a more compact symbol (Rs.)
    }).format(price);
  };

  // Handle add to cart
  const handleAddToCart = (): void => {
    if (product) {
      // Add product to cart with selected quantity
      for (let i = 0; i < quantity; i++) {
        dispatch(addToCart(product));
        setIsAdding(true);

        // Show the confirmation
        setShowConfirmation(true);

        // After a short delay, return button to normal
        setTimeout(() => {
          setIsAdding(false);
        }, 1000);

        // Hide the confirmation after 3 seconds
        setTimeout(() => {
          setShowConfirmation(false);
        }, 1000);
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
    <>
      {/* Fixed gradient background that covers the entire viewport */}
      <div
        className="fixed top-0 left-0 w-full h-full bg-[radial-gradient(70.71%_70.71%_at_50%_50%,_#FFE5E5_0%,_#FFE0DA_25%,_#D7FF89_100%)] -z-10"
        style={{ width: "100vw", height: "100vh" }}
      />
      <Header />
      <div className="container mx-auto px-4 py-8 bg-[linear-gradient(90deg,_rgba(240,244,236,1)_7%,_rgba(241,235,226,1)_50%)]">
        <nav className="mb-8">
          <ol className="flex text-sm">
            <li className="mr-2">
              <Link href="/" className="text-gray-500 hover:text-black">
                Home
              </Link>
            </li>
            <li className="mx-2 text-gray-400">/</li>
            <li className="mr-2">
              <Link
                href={`/${product.category}`}
                className="text-gray-500 hover:text-black"
              >
                {product.category
                  .split("-")
                  .map(
                    (word: string) =>
                      word.charAt(0).toUpperCase() + word.slice(1)
                  )
                  .join(" ")}
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
            <h1 className="text-3xl font-medium text-gray-900 mb-4">
              {product.name}
            </h1>

            <div className="mb-6">
              {product.oldPrice ? (
                <div className="flex items-center">
                  <span className="text-xl text-gray-400 line-through mr-3">
                    {formatPrice(product.oldPrice)}
                  </span>
                  <span className="text-2xl text-black font-medium">
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
                  onChange={(e) =>
                    setQuantity(Math.max(1, parseInt(e.target.value) || 1))
                  }
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
              disabled={isAdding}
              className={`rounded-md py-2 text-xs font-medium text-white w-full transition-all duration-300 transform focus:outline-none focus:ring-2 focus:ring-gray-400 flex items-center justify-center gap-2 ${
                isAdding
                  ? "bg-green-500 scale-105"
                  : "bg-black hover:bg-gray-800 hover:scale-105 active:scale-95"
              }`}
            >
              {isAdding ? (
                <>
                  <Check size={16} className="animate-bounce" />
                  <span>Added to Cart!</span>
                </>
              ) : (
                <>
                  <ShoppingCart size={16} />
                  <span>Add to Cart</span>
                </>
              )}
            </button>

            {/* Confirmation message */}
            {showConfirmation && (
              <div className="fixed inset-0 flex items-center justify-center z-50">
                <div className="bg-green-500 text-white py-3 px-6 rounded-lg shadow-lg text-center max-w-xs mx-auto transform transition-all duration-300 ease-in-out">
                  {product.name} <br /> added to cart!
                </div>
              </div>
            )}

            {/* Product details accordion */}
            <div className="border-t border-gray-200 pt-6">
              <details className="mb-4">
                <summary className="font-medium text-lg cursor-pointer pb-2">
                  Ingredients
                </summary>
                <div className="pl-4 pt-2 pb-4">
                  <ul className="list-inside space-y-1 list-emoji list-emoji-check">
                    {product.ingredients?.map(
                      (ingredient: string, index: number) => (
                        <li key={index} className="text-gray-700">
                          {ingredient}
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </details>

              <details className="mb-4">
                <summary className="font-medium text-lg cursor-pointer pb-2">
                  How to Use
                </summary>
                <div className="pl-4 pt-2 pb-4">
                  <p className="text-gray-700"></p>
                </div>
                <ol className="list-decimal list-inside space-y-1">
                  {product.howToUse?.map((howToUse: string, index: number) => (
                    <li key={index} className="text-gray-700">
                      {howToUse}
                    </li>
                  ))}
                </ol>
              </details>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetail;
