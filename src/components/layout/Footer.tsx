/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import Link from "next/link";
import { Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add email subscription logic here
  };

  return (
    <footer className="py-16 px-4">
      {/* Newsletter Section */}
      <div className="max-w-6xl mx-auto mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-medium text-gray-800 mb-3">
          Get 20% off your first order
        </h2>
        <p className="text-gray-600 mb-6">
          Join our email list for exclusive offers and the latest news.
        </p>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex">
            <input
              type="email"
              placeholder="Email"
              className="flex-grow px-4 py-2 rounded-l-md bg-lime-100 border border-lime-200 focus:outline-none"
              required
            />
            <button
              type="submit"
              className="bg-lime-100 border border-l-0 border-lime-200 px-4 rounded-r-md"
            >
              →
            </button>
          </div>
        </form>
      </div>

      {/* Information Columns */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Menu Column */}
        <div>
          <h3 className="font-medium text-xl mb-4 text-gray-800">Menu</h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="/skin-care"
                className="text-gray-600 hover:text-gray-800"
              >
                Skin Care
              </Link>
            </li>
            <li>
              <Link
                href="/hair-care"
                className="text-gray-600 hover:text-gray-800"
              >
                Hair Care
              </Link>
            </li>
            <li>
              <Link
                href="/body-care"
                className="text-gray-600 hover:text-gray-800"
              >
                Body Care
              </Link>
            </li>
            <li>
              <Link
                href="/nail-polish"
                className="text-gray-600 hover:text-gray-800"
              >
                Nail Polish
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-gray-600 hover:text-gray-800">
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/about-us"
                className="text-gray-600 hover:text-gray-800"
              >
                About Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Our Store Column */}
        <div>
          <h3 className="font-medium text-xl mb-4 text-gray-800">Our Store</h3>
          <p className="text-gray-600 mb-1">3455 St Laurent Blvd</p>
          <p className="text-gray-600 mb-3">Montreal, Quebec H2X 2T6</p>
          <p className="text-gray-600 mb-1">
            <span className="font-medium">Mon - Fri</span> 9 a.m. - 7 p.m.
          </p>
          <p className="text-gray-600">
            <span className="font-medium">Sat - Sun</span> 10a.m. - 6p.m.
          </p>
        </div>

        <img
          src="/images/plant.png"
          alt="Plant icon"
          className="h-72 w-72 object-fit"
        />

        {/* Our Promise Column */}
        <div className="flex flex-col md:items-start items-center">
          <h3 className="font-medium text-xl mb-4 text-gray-800">
            Our Promise
          </h3>
          <div className="flex items-center gap-4">
            <p className="text-gray-600">
              To create high quality, plant-based products that are safe for
              people and the planet.
            </p>
          </div>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="max-w-6xl mx-auto mt-12 flex justify-center space-x-6">
        <Link
          href="https://twitter.com"
          className="text-gray-600 hover:text-gray-800"
        >
          <Twitter size={20} />
        </Link>
        <Link
          href="https://facebook.com"
          className="text-gray-600 hover:text-gray-800"
        >
          <Facebook size={20} />
        </Link>
        <Link
          href="https://pinterest.com"
          className="text-gray-600 hover:text-gray-800"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M8 11.5c.5-1.5 2.5-2 4-1 2 1.5 1.5 5-1 6-1.5.5-3-.5-3-2" />
            <path d="M12 9v9" />
          </svg>
        </Link>
        <Link
          href="https://instagram.com"
          className="text-gray-600 hover:text-gray-800"
        >
          <Instagram size={20} />
        </Link>
      </div>

      {/* Copyright */}
      <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-gray-200 text-center text-gray-500 text-sm">
        © 2025, theme-sense-demo Powered by Shopify
      </div>
    </footer>
  );
};

export default Footer;
