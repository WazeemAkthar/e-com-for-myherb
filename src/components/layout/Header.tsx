"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import Image from "next/image";
import CartSidebar from "./CartSidebar";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [menuClass, setMenuClass] = useState("transform -translate-x-full");
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [cartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    if (mobileMenuOpen) {
      setMenuClass(
        "transform translate-x-0 transition-transform ease-in duration-300"
      );
    } else {
      setMenuClass(
        "transform -translate-x-full transition-transform ease-out duration-300"
      );
    }
  }, [mobileMenuOpen]);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

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

  // Lock body scroll when cart is open
  useEffect(() => {
    if (cartOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [cartOpen]);

  return (
    <>
      {/* <div className="text-center text-sm py-2">
        Save 15% on orders over $50 • Use code MGVF at checkout
      </div> */}
      <header
        className={`sticky top-0 z-40 shadow-sm transition-transform duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex flex-col bg-[linear-gradient(90deg,_rgba(240,244,236,1)_7%,_rgba(241,235,226,1)_50%)] justify-between items-center px-4 py-4">
          <div className="flex justify-between w-[-webkit-fill-available] items-center md:px-24">
            <button
              aria-label="Search"
              className="text-gray-700 hover:text-black"
            >
              {/* <svg
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
              </svg> */}
            </button>

            <Link
              href="/"
              className="flex h-[6rem] justify-center items-center"
            >
              <Image
                src="/images/MYHERB.svg"
                alt="Logo"
                width={200}
                height={50}
              />
            </Link>

            {/* Cart button that opens sidebar */}
            <button
              onClick={() => setCartOpen(true)}
              className="text-gray-700 hover:text-black relative"
              aria-label="Open Cart"
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
                <span className="flex bg-black h-5 justify-center rounded-full text-white text-xs w-5 -right-2 -top-2 absolute items-center">
                  {cartItemCount}
                </span>
              )}
            </button>

            {/* Mobile menu button */}
            <button
              className="text-gray-700 md:hidden"
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
              className="text-gray-700 group hover:text-black relative"
            >
              Skin Care
              <span className="bg-black h-0.5 w-0 absolute bottom-0 duration-300 ease-in-out group-hover:w-full left-0 transition-all"></span>
            </Link>
            <Link
              href="/hair-care"
              className="text-gray-700 group hover:text-black relative"
            >
              <span className="bg-black h-0.5 w-0 absolute bottom-0 duration-300 ease-in-out group-hover:w-full left-0 transition-all"></span>
              Hair Care
            </Link>
            <Link
              href="/body-care"
              className="text-gray-700 group hover:text-black relative"
            >
              <span className="bg-black h-0.5 w-0 absolute bottom-0 duration-300 ease-in-out group-hover:w-full left-0 transition-all"></span>
              Body Care
            </Link>
            <Link
              href="/nail-polish"
              className="text-gray-700 group hover:text-black relative"
            >
              Nail Polish
              <span className="bg-black h-0.5 w-0 absolute bottom-0 duration-300 ease-in-out group-hover:w-full left-0 transition-all"></span>
            </Link>
            {/* <Link
              href="/blog"
              className="text-gray-700 group hover:text-black relative"
            >
              Blog
              <span className="bg-black h-0.5 w-0 absolute bottom-0 duration-300 ease-in-out group-hover:w-full left-0 transition-all"></span>
            </Link>
            <Link
              href="/about"
              className="text-gray-700 group hover:text-black relative"
            >
              About Us
              <span className="bg-black h-0.5 w-0 absolute bottom-0 duration-300 ease-in-out group-hover:w-full left-0 transition-all"></span>
            </Link> */}
          </nav>
        </div>
      </header>
      {/* Mobile Navigation */}
      <header className="relative">
        {/* Mobile menu with animation */}
        <nav
          className={`fixed top-0 left-0 h-full w-full bg-white border-r shadow-lg z-50 ${menuClass} bg-[linear-gradient(90deg,_rgba(240,244,236,1)_7%,_rgba(241,235,226,1)_50%)]`}
        >
          <div className="flex justify-between items-center p-4">
            <Link
              href="/"
              className="flex h-[6rem] justify-center items-center"
            >
              <Image
                src="/images/MYHERB.svg"
                alt="Logo"
                width={200}
                height={50}
              />
            </Link>

            <button
              onClick={toggleMenu}
              className="text-white p-2 rounded bg-red-500 hover:bg-red-600 transition-colors border border-red-600 flex items-center justify-center"
              aria-label="Close menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          <ul className="px-10 space-y-4">
            <li>
              <Link
                href="/skin-care"
                className="text-gray-700 block hover:underline-offset-1 py-2"
              >
                Skin Care
              </Link>
            </li>
            <li>
              <Link href="/hair-care" className="text-gray-700 block py-2">
                Hair Care
              </Link>
            </li>
            <li>
              <Link href="/body-care" className="text-gray-700 block py-2">
                Body Care
              </Link>
            </li>
            <li>
              <Link href="/nail-polish" className="text-gray-700 block py-2">
                Nail Polish
              </Link>
            </li>
            {/* <li>
              <Link href="/blog" className="text-gray-700 block py-2">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-700 block py-2">
                About Us
              </Link>
            </li> */}
          </ul>
        </nav>

        {/* Optional overlay to close the menu when clicking outside */}
        {mobileMenuOpen && (
          <div
            className="bg-black bg-opacity-25 fixed inset-0 md:hidden z-40"
            onClick={toggleMenu}
          />
        )}
      </header>

      {/* Cart Sidebar Component */}
      <CartSidebar isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
};

export default Header;
