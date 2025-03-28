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
import ComingSoonProducts from "./layout/ComingSoonProducts";
import { ShoppingCart, Check } from "lucide-react";

const CategoryPage: React.FC = () => {
  const params = useParams();
  const category = params.category as string;
  const dispatch = useDispatch();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  // Track adding state for each product using its ID
  const [addingProducts, setAddingProducts] = useState<Record<string, boolean>>(
    {}
  );
  // Track confirmation state for each product using its ID
  const [confirmationProducts, setConfirmationProducts] = useState<
    Record<string, boolean>
  >({});

  // Format category name for display
  const formatCategoryName = (categorySlug: string): string => {
    if (!categorySlug) return "";
    return categorySlug
      .split("-")
      .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  // Filter products based on category
  useEffect(() => {
    if (category) {
      const filtered = products.filter(
        (product: Product) => product.category === category
      );
      setFilteredProducts(filtered);
    }
  }, [category]);

  // Format price with currency
  const formatPrice = (price: number): string => {
    return new Intl.NumberFormat("en-LK", {
      style: "currency",
      currency: "LKR",
      // currencyDisplay: "narrowSymbol", // This will use a more compact symbol (Rs.)
    }).format(price);
  };

  // Handle add to cart
  const handleAddToCart = (product: Product): void => {
    dispatch(addToCart(product));

    // Set this specific product to "adding" state
    setAddingProducts((prev) => ({
      ...prev,
      [product.id]: true,
    }));

    // Show the confirmation for this specific product
    setConfirmationProducts((prev) => ({
      ...prev,
      [product.id]: true,
    }));

    // After a short delay, return this specific product's button to normal
    setTimeout(() => {
      setAddingProducts((prev) => ({
        ...prev,
        [product.id]: false,
      }));
    }, 1000);

    // Hide the confirmation for this specific product after 3 seconds
    setTimeout(() => {
      setConfirmationProducts((prev) => ({
        ...prev,
        [product.id]: false,
      }));
    }, 1000);
  };

  return (
    <>
      {/* Fixed gradient background that covers the entire viewport */}
      <div
        className="fixed top-0 left-0 w-full h-full bg-[radial-gradient(70.71%_70.71%_at_50%_50%,_#FFE5E5_0%,_#FFE0DA_25%,_#D7FF89_100%)] -z-10"
        style={{ width: "100vw", height: "100vh" }}
      />
      <Header />
      <div className="container mx-auto px-4 lg:px-40 py-8 bg-[linear-gradient(90deg,_rgba(240,244,236,1)_7%,_rgba(241,235,226,1)_50%)]">
        <h1 className="text-3xl font-semibold mb-8 text-center">
          {formatCategoryName(category)}
        </h1>

        {filteredProducts.length === 0 ? (
          <ComingSoonProducts />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product: Product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative">
                  <div className="h-64 relative overflow-hidden">
                    <Link href={`/products/${product.id}`}>
                      <Image
                        src={product.image || "/images/placeholder.jpg"}
                        alt={product.name}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </Link>
                  </div>

                  {/* Product badges */}
                  <div className="absolute top-2 left-2 flex flex-col gap-2">
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
                </div>

                <div className="p-4">
                  <Link href={`/products/${product.id}`} className="block">
                    <h2 className="text-lg font-medium text-gray-800 hover:text-black transition-colors duration-200">
                      {product.name}
                    </h2>
                  </Link>

                  <div className="mt-2 flex items-center">
                    {product.oldPrice ? (
                      <>
                        <span className="text-sm text-gray-400 line-through mr-2">
                          {formatPrice(product.oldPrice)}
                        </span>
                        <span className="text-black font-semibold">
                          {formatPrice(product.price)}
                        </span>
                      </>
                    ) : (
                      <span className="font-semibold">
                        {formatPrice(product.price)}
                      </span>
                    )}
                  </div>

                  <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                    {product.description}
                  </p>

                  <button
                    onClick={() => handleAddToCart(product)}
                    disabled={addingProducts[product.id]}
                    className={`rounded-md py-2 mt-3 text-xs font-medium text-white w-full transition-all duration-300 transform focus:outline-none focus:ring-2 focus:ring-gray-400 flex items-center justify-center gap-2 ${
                      addingProducts[product.id]
                        ? "bg-green-500 scale-105"
                        : "bg-black hover:bg-gray-800 hover:scale-105 active:scale-95"
                    }`}
                  >
                    {addingProducts[product.id] ? (
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
                  {confirmationProducts[product.id] && (
                    <div className="fixed inset-0 flex items-center justify-center z-50">
                      <div className="bg-green-500 text-white py-3 px-6 rounded-lg shadow-lg text-center max-w-xs mx-auto transform transition-all duration-300 ease-in-out">
                        {product.name} <br /> added to cart!
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default CategoryPage;
