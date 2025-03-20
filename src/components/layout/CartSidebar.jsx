"use client";

import React from "react";
import Image from "next/image";
import { useSelector, useDispatch } from 'react-redux';
import { updateQuantity } from '@/redux/slices/cartSlice';

const CartSidebar = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const cartItemCount = useSelector(state => state.cart.totalQuantity);
  const totalPrice = useSelector(state => state.cart.totalAmount);

  const handleQuantityChange = (id, quantity) => {
    dispatch(updateQuantity({ id, quantity }));
  };

  return (
    <>
      {/* Overlay */}
      <div 
        className={`fixed inset-0 z-50 bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out ${
          isOpen ? 'opacity-50' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <div 
        className={`fixed top-0 right-0 h-full w-full max-w-md z-50 bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } flex flex-col`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold">Your Cart ({cartItemCount} items)</h2>
          <button 
            onClick={onClose}
            className="text-gray-700 hover:text-black"
            aria-label="Close Cart"
          >
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
          </button>
        </div>

        <div className="flex-grow overflow-y-auto p-4">
          {cartItems.length === 0 ? (
            <EmptyCart onClose={onClose} />
          ) : (
            <CartItemsList 
              items={cartItems} 
              handleQuantityChange={handleQuantityChange} 
            />
          )}
        </div>

        {cartItems.length > 0 && (
          <CartFooter 
            totalPrice={totalPrice} 
            onClose={onClose} 
          />
        )}
      </div>
    </>
  );
};

const EmptyCart = ({ onClose }) => (
  <div className="flex flex-col items-center justify-center h-full text-center">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-16 w-16 text-gray-400 mb-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1}
        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
      />
    </svg>
    <p className="mb-4">Your cart is empty</p>
    <button 
      onClick={onClose}
      className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
    >
      Continue Shopping
    </button>
  </div>
);

const CartItemsList = ({ items, handleQuantityChange }) => (
  <ul className="space-y-4">
    {items.map((item) => (
      <CartItem 
        key={item.id} 
        item={item} 
        handleQuantityChange={handleQuantityChange} 
      />
    ))}
  </ul>
);

const CartItem = ({ item, handleQuantityChange }) => (
  <li className="flex border-b pb-4">
    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200 relative">
      <Image
        src={item.image || "/images/placeholder.jpg"}
        alt={item.name}
        fill
        sizes="96px"
        className="object-cover object-center"
      />
    </div>

    <div className="ml-4 flex flex-1 flex-col">
      <div>
        <div className="flex justify-between text-base font-medium text-gray-900">
          <h3>{item.name}</h3>
          <p className="ml-4">Rs. {(item.price * item.quantity).toFixed(2)}/=</p>
        </div>
        <p className="mt-1 text-sm text-gray-500">{item.variant || ""}</p>
      </div>
      <div className="flex flex-1 items-end justify-between text-sm">
        <div className="flex items-center border rounded">
          <button 
            className="px-3 py-1 text-gray-600 hover:bg-gray-100"
            onClick={() => handleQuantityChange(item.id, Math.max(1, item.quantity - 1))}
            disabled={item.quantity <= 1}
          >
            -
          </button>
          <span className="px-3 py-1">{item.quantity}</span>
          <button 
            className="px-3 py-1 text-gray-600 hover:bg-gray-100"
            onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
          >
            +
          </button>
        </div>
        <button 
          className="text-red-600 hover:text-red-800"
          onClick={() => handleQuantityChange(item.id, 0)} // Remove item
        >
          Remove
        </button>
      </div>
    </div>
  </li>
);

const CartFooter = ({ totalPrice, onClose }) => (
  <div className="border-t p-4 space-y-4">
    <div className="flex justify-between text-base font-medium text-gray-900">
      <p>Subtotal</p>
      <p>Rs. {totalPrice.toFixed(2)}/=</p>
    </div>
    <p className="text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
    <div className="flex flex-col space-y-2">
      <button
        className="w-full bg-black text-white py-3 px-4 rounded hover:bg-gray-800 transition-colors"
      >
        Checkout
      </button>
      <button
        onClick={onClose}
        className="w-full py-3 px-4 rounded border border-gray-300 hover:bg-gray-50 transition-colors"
      >
        Continue Shopping
      </button>
    </div>
  </div>
);

export default CartSidebar;