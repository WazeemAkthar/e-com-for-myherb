'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const cartItemCount = cartItems.reduce((count, item) => count + item.quantity, 0);
  
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="bg-[radial-gradient(70.71%_70.71%_at_50%_50%,_#FFE5E5_0%,_#FFE0DA_25%,_#D7FF89_100%)] py-2 text-center text-sm">
        Save 15% on orders over $50 • Use code MGVF at checkout
      </div>
      
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold">SENSE</Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/skin-care" className="text-gray-700 hover:text-black">Skin Care</Link>
          <Link href="/hair-care" className="text-gray-700 hover:text-black">Hair Care</Link>
          <Link href="/body-care" className="text-gray-700 hover:text-black">Body Care</Link>
          <Link href="/nail-polish" className="text-gray-700 hover:text-black">Nail Polish</Link>
          <Link href="/blog" className="text-gray-700 hover:text-black">Blog</Link>
          <Link href="/about" className="text-gray-700 hover:text-black">About Us</Link>
        </nav>
        
        <div className="flex items-center space-x-4">
          <button aria-label="Search" className="text-gray-700 hover:text-black">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          
          <Link href="/cart" className="text-gray-700 hover:text-black relative">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
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
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden px-4 py-4 bg-white border-t">
          <ul className="space-y-4">
            <li><Link href="/skin-care" className="block py-2 text-gray-700">Skin Care</Link></li>
            <li><Link href="/hair-care" className="block py-2 text-gray-700">Hair Care</Link></li>
            <li><Link href="/body-care" className="block py-2 text-gray-700">Body Care</Link></li>
            <li><Link href="/nail-polish" className="block py-2 text-gray-700">Nail Polish</Link></li>
            <li><Link href="/blog" className="block py-2 text-gray-700">Blog</Link></li>
            <li><Link href="/about" className="block py-2 text-gray-700">About Us</Link></li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;