/* eslint-disable @next/next/no-img-element */
"use client"
import React from 'react';
import Link from 'next/link';

interface CategoryCardProps {
  title: string;
  imageSrc: string;
  href: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ title, imageSrc, href }) => {
  return (
    <Link href={href} className="group block bg-white rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md">
      <div className="aspect-square overflow-hidden">
        <img
          src={imageSrc}
          alt={`${title} category`}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="py-5 px-4 flex items-center justify-center">
        <h3 className="text-xl font-medium text-gray-800">{title}</h3>
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
          className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1"
        >
          <path d="M5 12h14"/>
          <path d="m12 5 7 7-7 7"/>
        </svg>
      </div>
    </Link>
  );
};

const CategoryCards: React.FC = () => {
  const categories = [
    {
      title: "Skin Care",
      imageSrc: "/images/SkinCare.jpg", // Replace with actual image path
      href: "/categories/skin-care"
    },
    {
      title: "Body Care",
      imageSrc: "/images/BodyCare.jpg", // Replace with actual image path
      href: "/categories/body-care"
    },
    {
      title: "Nail Polish",
      imageSrc: "/images/NailPolish.jpg", // Replace with actual image path
      href: "/categories/nail-polish"
    }
  ];

  return (
    <div className="bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <CategoryCard
              key={index}
              title={category.title}
              imageSrc={category.imageSrc}
              href={category.href}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryCards;