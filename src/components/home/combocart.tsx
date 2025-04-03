"use client";
/* eslint-disable @next/next/no-img-element */
import React from 'react';

const Combocart = () => {
  return (
    <section className="py-8 px-4 bg-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-9 md:grid-rows-8 gap-8">
        {/* First row */}
        <div className="col-span-1 md:col-span-3 md:row-span-4 md:col-start-2 bg-white rounded shadow">
          <div className="">
            <div className="relative">
              <img 
                src="/images/products/BRIGHTENINGSOLUTION.jpg"
                alt="BRIGHTENINGSOLUTION" 
                className="w-full h-auto object-cover rounded-t"
              />
              <div className="absolute bottom-2 left-2 bg-gray-800 text-white text-xs px-2 py-1 rounded">
                Sold out
              </div>
            </div>
            <div className="p-4 text-center">
              <h3 className="font-medium text-gray-800">Body Lotion</h3>
              <p className="mt-2 text-gray-700">$36.00 CAD</p>
            </div>
          </div>
        </div>
        
        <div className="col-span-1 md:col-span-3 md:row-span-4 md:col-start-2 md:row-start-5 bg-white rounded shadow">
          <div className="">
            <div className="relative">
              <img 
                src="/images/products/BRIGHTENINGSOLUTION.jpg" 
                alt="Monoi Shampoo" 
                className="w-full h-auto object-cover rounded-t"
              />
              <div className="absolute bottom-2 left-2 bg-purple-700 text-white text-xs px-2 py-1 rounded">
                Sale
              </div>
            </div>
            <div className="p-4 text-center">
              <h3 className="font-medium text-gray-800">Monoi Shampoo</h3>
              <p className="mt-2">
                <span className="text-gray-500 line-through mr-2">$32.00 CAD</span>
                <span className="text-gray-700">$28.00 CAD</span>
              </p>
            </div>
          </div>
        </div>
        
        {/* Second row */}
        <div className="col-span-1 md:col-span-4 md:row-span-81 md:col-start-5 md:row-start-1 bg-white rounded shadow">
          <div className="">
            <div className="relative">
              <img 
                src="/images/products/BRIGHTENINGSOLUTION.jpg" 
                alt="Everything Body Soap" 
                className="w-full h-auto object-cover rounded-t"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="font-medium text-gray-800">Everything Body Soap</h3>
              <p className="mt-2 text-gray-700">$10.00 CAD</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Combocart;