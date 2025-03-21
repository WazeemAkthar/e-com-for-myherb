"use client";

import React from "react";
import Image from "next/image";
import { useSelector, useDispatch } from 'react-redux';
import { updateQuantity } from '@/redux/slices/cartSlice';

interface CartItem {
  id: string;
  name: string;
  image?: string;
  price: number;
  quantity: number;
  variant?: string;
}

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CartState {
  cart: {
    items: CartItem[];
    totalQuantity: number;
    totalAmount: number;
  };
}

const CartSidebar: React.FC<CartSidebarProps> = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: CartState) => state.cart.items);
  const cartItemCount = useSelector((state: CartState) => state.cart.totalQuantity);
  const totalPrice = useSelector((state: CartState) => state.cart.totalAmount);

  const handleQuantityChange = (id: string, quantity: number) => {
    if (quantity >= 0) {
      dispatch(updateQuantity({ id, quantity }));
    }
  };

  return (
    <>
      <div 
        className={`fixed inset-0 z-50 bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out ${
          isOpen ? 'opacity-50' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />
      
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

const EmptyCart: React.FC<{ onClose: () => void }> = ({ onClose }) => (
  <div className="flex flex-col items-center justify-center h-full text-center">
    <p className="mb-4">Your cart is empty</p>
    <button 
      onClick={onClose}
      className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
    >
      Continue Shopping
    </button>
  </div>
);

const CartItemsList: React.FC<{ 
  items: CartItem[]; 
  handleQuantityChange: (id: string, quantity: number) => void 
}> = ({ items, handleQuantityChange }) => (
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

const CartItem: React.FC<{ 
  item: CartItem; 
  handleQuantityChange: (id: string, quantity: number) => void 
}> = ({ item, handleQuantityChange }) => (
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
      <div className="flex justify-between text-base font-medium text-gray-900">
        <h3>{item.name}</h3>
        <p className="ml-4">Rs. {(item.price * item.quantity).toFixed(2)}/=</p>
      </div>
      {item.variant && <p className="text-sm text-gray-500">{item.variant}</p>}
      <div className="flex items-center space-x-2 mt-2">
        <button 
          className="px-2 py-1 border rounded" 
          onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
          disabled={item.quantity <= 1}
        >
          -
        </button>
        <span>{item.quantity}</span>
        <button 
          className="px-2 py-1 border rounded" 
          onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
        >
          +
        </button>
      </div>
      <button 
        className="text-red-600 hover:text-red-800 mt-2" 
        onClick={() => handleQuantityChange(item.id, 0)}
      >
        Remove
      </button>
    </div>
  </li>
);

const CartFooter: React.FC<{ 
  totalPrice: number; 
  onClose: () => void 
}> = ({ totalPrice, onClose }) => (
  <div className="border-t p-4 space-y-4">
    <div className="flex justify-between text-base font-medium text-gray-900">
      <p>Subtotal</p>
      <p>Rs. {totalPrice.toFixed(2)}/=</p>
    </div>
    <div className="mt-6">
      <a
        href="/checkout"
        className="flex items-center justify-center rounded-md border border-transparent bg-black px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-gray-800"
      >
        Checkout
      </a>
      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
        <p>
          or{" "}
          <button
            type="button"
            className="font-medium text-black hover:text-gray-800"
            onClick={onClose}
          >
            Continue Shopping
            <span aria-hidden="true"> &rarr;</span>
          </button>
        </p>
      </div>
    </div>
  </div>
);

export default CartSidebar;