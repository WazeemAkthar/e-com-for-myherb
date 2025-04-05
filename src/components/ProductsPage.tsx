"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/slices/cartSlice";
import { products } from "@/mock/products";
import { Product } from "@/types/product";
import ComingSoonProducts from "./layout/ComingSoonProducts";
import { ShoppingCart, Check, Filter, ChevronDown } from "lucide-react";

const ProductsPage: React.FC = () => {
  const dispatch = useDispatch();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [addingProducts, setAddingProducts] = useState<Record<string, boolean>>({});
  const [confirmationProducts, setConfirmationProducts] = useState<Record<string, boolean>>({});
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);
  const filterRef = useRef<HTMLDivElement>(null);

  // Get unique categories from products
  const categories = ["all", ...Array.from(new Set(products.map(product => product.category)))];

  // Format category name for display
  const formatCategoryName = (categorySlug: string): string => {
    if (!categorySlug) return "";
    return categorySlug
      .split("-")
      .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  // Filter products based on selected category
  useEffect(() => {
    if (selectedCategory === "all") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(
        (product: Product) => product.category === selectedCategory
      );
      setFilteredProducts(filtered);
    }
  }, [selectedCategory]);

  // Close filter dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (filterRef.current && !filterRef.current.contains(event.target as Node)) {
        setIsFilterOpen(false);
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [filterRef]);

  // Format price with currency
  const formatPrice = (price: number): string => {
    return new Intl.NumberFormat("en-LK", {
      style: "currency",
      currency: "LKR",
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

  // Handle category selection and close dropdown
  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setIsFilterOpen(false);
  };

  return (
    <>
      {/* Fixed gradient background that covers the entire viewport */}
      <div
        className="fixed top-0 left-0 w-full h-full bg-[radial-gradient(70.71%_70.71%_at_50%_50%,_#FFE5E5_0%,_#FFE0DA_25%,_#D7FF89_100%)] -z-10"
        style={{ width: "100vw", height: "100vh" }}
      />
      <div className="container mx-auto px-4 lg:px-40 py-8 bg-[linear-gradient(90deg,_rgba(240,244,236,1)_7%,_rgba(241,235,226,1)_50%)]">
        <h1 className="text-3xl font-semibold mb-6 text-center">
          Our Products
        </h1>

        {/* Filter Dropdown Button - positioned at the top */}
        <div className="flex justify-center mb-8" ref={filterRef}>
          <div className="relative">
            <button 
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-md"
            >
              <Filter size={16} />
              <span>Filter by {formatCategoryName(selectedCategory)}</span>
              <ChevronDown size={16} className={`transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {/* Dropdown Menu */}
            {isFilterOpen && (
              <div className="absolute z-10 mt-1 w-48 bg-white rounded-md shadow-lg py-1 max-h-60 overflow-auto">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => handleCategorySelect(category)}
                    className={`block w-full text-left px-4 py-2 text-sm transition-colors ${
                      selectedCategory === category
                        ? "bg-black text-white"
                        : "hover:bg-gray-100 text-gray-800"
                    }`}
                  >
                    {formatCategoryName(category)}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Products Grid */}
        <div className="w-full">
          {filteredProducts.length === 0 ? (
            <ComingSoonProducts />
          ) : (
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {filteredProducts.map((product: Product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-lg shadow-xl overflow-hidden hover:shadow-lg transition-shadow duration-300 h-[16.5rem] md:h-auto flex flex-col justify-between"
                >
                  <div className="relative">
                    <div className="md:h-64 h-32 relative overflow-hidden">
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

                  <div className="p-4 flex flex-col justify-between h-36">
                    {/* <div className="text-xs text-gray-500 mb-1">
                      {formatCategoryName(product.category)}
                    </div> */}
                    <Link href={`/products/${product.id}`} className="block">
                      <h2 className="md:text-lg text-sm font-medium text-gray-800 hover:text-black transition-colors duration-200 flex flex-col justify-between line-clamp-2">
                        {product.name}
                      </h2>
                    </Link>

                    <div className="mt-2 flex items-center">
                      {product.oldPrice ? (
                        <>
                          <span className="text-sm text-gray-400 line-through mr-2">
                            {formatPrice(product.oldPrice)}
                          </span>
                          <span className="text-black text-sm font-semibold md:text-base">
                            {formatPrice(product.price)}
                          </span>
                        </>
                      ) : (
                        <span className="font-semibold text-sm md:text-base text-black">
                          {formatPrice(product.price)}
                        </span>
                      )}
                    </div>

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
      </div>
    </>
  );
};

export default ProductsPage;