"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import Image from "next/image";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const cartItems = useSelector((state: RootState) => state.cart.items);
  const cartItemCount = cartItems.reduce(
    (count, item) => count + item.quantity,
    0
  );

  useEffect(() => {
    const controlHeader = () => {
      const currentScrollY = window.scrollY;

      // Determine if scrolling up or down
      if (currentScrollY > lastScrollY && isVisible && currentScrollY > 100) {
        // Scrolling down & header is visible & scrolled past the initial area
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY && !isVisible) {
        // Scrolling up & header is hidden
        setIsVisible(true);
      }

      // Update last scroll position
      setLastScrollY(currentScrollY);
    };

    // Add scroll event listener
    window.addEventListener("scroll", controlHeader);

    // Clean up
    return () => {
      window.removeEventListener("scroll", controlHeader);
    };
  }, [lastScrollY, isVisible]);

  return (
    <>
      <div className="py-2 text-center text-sm">
        Save 15% on orders over $50 • Use code MGVF at checkout
      </div>
      <header
        className={`sticky top-0 z-50 shadow-sm transition-transform duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="px-4 py-4 flex items-center flex-col justify-between bg-[linear-gradient(90deg,_rgba(240,244,236,1)_7%,_rgba(241,235,226,1)_50%)]">
          <div className="w-[-webkit-fill-available] flex items-center px-24 justify-between">
            <button
              aria-label="Search"
              className="text-gray-700 hover:text-black"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>

            <Link href="/" className="h-[6rem] flex justify-center items-center">
              <Image
                src="/images/MYHERB.svg"
                alt="Logo"
                width={200}
                height={50}
              />
            </Link>

            <Link
              href="/cart"
              className="text-gray-700 hover:text-black relative"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 h-5 w-5 bg-black text-white text-xs rounded-full flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Link>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link
              href="/skin-care"
              className="text-gray-700 hover:text-black relative group"
            >
              Skin Care
              <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-black transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </Link>
            <Link
              href="/hair-care"
              className="text-gray-700 hover:text-black relative group"
            >
              <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-black transition-all duration-300 ease-in-out group-hover:w-full"></span>
              Hair Care
            </Link>
            <Link
              href="/body-care"
              className="text-gray-700 hover:text-black relative group"
            >
              <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-black transition-all duration-300 ease-in-out group-hover:w-full"></span>
              Body Care
            </Link>
            <Link
              href="/nail-polish"
              className="text-gray-700 hover:text-black relative group"
            >
              Nail Polish
              <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-black transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </Link>
            <Link
              href="/blog"
              className="text-gray-700 hover:text-black relative group"
            >
              Blog
              <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-black transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-black relative group"
            >
              About Us
              <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-black transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </Link>
          </nav>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden px-4 py-4 bg-white border-t">
            <ul className="space-y-4">
              <li>
                <Link
                  href="/skin-care"
                  className="block py-2 text-gray-700 hover:underline-offset-1"
                >
                  Skin Care
                </Link>
              </li>
              <li>
                <Link href="/hair-care" className="block py-2 text-gray-700">
                  Hair Care
                </Link>
              </li>
              <li>
                <Link href="/body-care" className="block py-2 text-gray-700">
                  Body Care
                </Link>
              </li>
              <li>
                <Link href="/nail-polish" className="block py-2 text-gray-700">
                  Nail Polish
                </Link>
              </li>
              <li>
                <Link href="/blog" className="block py-2 text-gray-700">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/about" className="block py-2 text-gray-700">
                  About Us
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </header>
    </>
  );
};

export default Header;
