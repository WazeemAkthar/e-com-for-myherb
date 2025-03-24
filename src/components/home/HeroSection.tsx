/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';

const HeroSection = () => {
  return (
<div className="relative overflow-hidden py-8 md:py-12 bg-[linear-gradient(90deg,_rgba(240,244,236,1)_7%,_rgba(241,235,226,1)_50%)]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center">
          {/* Text Content */}
          <div className="relative z-10 md:w-1/2 max-w-md order-2 md:order-1 -mt-24 md:mt-0 md:-mr-12 h-72">
            <div className="bg-[radial-gradient(70.71%_70.71%_at_50%_50%,_#FFE5E5_0%,_#FFE0DA_25%,_#D7FF89_100%)] p-8 md:p-10 rounded-3xl shadow-sm">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 leading-tight">
                Glowing skin, naturally
              </h1>
              <p className="mb-8 text-gray-600 text-lg">
                Indulge in plant-based skin care for naturally radiant results.
              </p>
              <Link 
                href="/skin-care"
                className="inline-block bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Shop now
              </Link>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative order-1 md:order-2 md:w-1/2 mb-8 md:mb-0">
            <div className="rounded-3xl overflow-hidden">
              <img
                src="/images/applying.jpg"
                alt="Woman applying skincare product to her cheek"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;