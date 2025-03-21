"use client";

import React, { useState } from "react";
import { useSelector } from 'react-redux';
import Link from "next/link";
import Image from "next/image";

interface CartItem {
  id: number;
  name: string;
  image?: string;
  price: number;
  quantity: number;
  variant?: string;
}

interface CartState {
  cart: {
    items: CartItem[];
    totalQuantity: number;
    totalAmount: number;
  };
}

interface ShippingInfo {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
  phone: string;
}

const Checkout = () => {
  const cartItems = useSelector((state: CartState) => state.cart.items);
  const totalPrice = useSelector((state: CartState) => state.cart.totalAmount);
  
  const [shippingInfo, setShippingInfo] = useState<ShippingInfo>({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    phone: "",
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [orderComplete, setOrderComplete] = useState<boolean>(false);
  const [orderNumber, setOrderNumber] = useState<string>("");

  const handleShippingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setShippingInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Generate random order number
    const generatedOrderNumber = Math.floor(100000 + Math.random() * 900000).toString();
    setOrderNumber(generatedOrderNumber);
    
    // Simulate processing
    setTimeout(() => {
      setIsLoading(false);
      setOrderComplete(true);
    }, 1000);
  };

  const redirectToWhatsApp = () => {
    // Remove the + symbol from the phone number
    const phoneNumber = "+94778132025"; // Just the country code and number without +
    
    // Create a simpler message format
    let message = `New Order #${orderNumber}\n`;
    message += `Customer: ${shippingInfo.firstName} ${shippingInfo.lastName}\n`;
    message += `Phone: ${shippingInfo.phone}\n`;
    message += `Address: ${shippingInfo.address}, ${shippingInfo.city}, ${shippingInfo.postalCode}, ${shippingInfo.country}\n\n`;
    
    // Simplify order items section - remove special formatting
    message += `Order Items:\n`;
    cartItems.forEach((item, index) => {
      message += `${index + 1}. ${item.name} x${item.quantity} - Rs. ${item.price.toFixed(2)}\n`;
    });
    
    // Simplify totals
    message += `\nSubtotal: Rs. ${totalPrice.toFixed(2)}\n`;
    const shippingCost = totalPrice > 5000 ? 0 : 350;
    message += `Shipping: ${shippingCost === 0 ? "Free" : `Rs. ${shippingCost.toFixed(2)}`}\n`;
    const finalTotal = totalPrice + shippingCost;
    message += `Total: Rs. ${finalTotal.toFixed(2)}`;
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  // Calculate shipping cost
  const shippingCost = totalPrice > 5000 ? 0 : 350;
  const finalTotal = totalPrice + shippingCost;

  if (orderComplete) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-16 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="text-3xl font-bold mb-2">Thank you for your order!</h1>
        <p className="text-gray-600 mb-6">Your order has been received. Please confirm it on WhatsApp to proceed.</p>
        <p className="font-medium mb-8">Order Number: #{orderNumber}</p>
        
        <button 
          onClick={redirectToWhatsApp}
          className="inline-block px-6 py-3 mb-4 bg-green-500 text-white rounded hover:bg-green-600 flex items-center mx-auto justify-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Confirm Order on WhatsApp
        </button>
        
        <Link href="/" className="inline-block px-6 py-3 bg-black text-white rounded hover:bg-gray-800">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>
      
      {/* Checkout Progress - Simplified to one step */}
      <div className="flex items-center justify-center mb-8">
        <div className="flex items-center text-black">
          <div className="w-8 h-8 rounded-full flex items-center justify-center bg-black text-white">
            1
          </div>
          <span className="ml-2">Shipping Information</span>
        </div>
        <div className="w-16 h-1 mx-2 bg-gray-200"></div>
        <div className="flex items-center text-gray-400">
          <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-200">
            2
          </div>
          <span className="ml-2">Confirmation</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Checkout Form */}
        <div className="md:col-span-2">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
            <form onSubmit={handleShippingSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                    First Name*
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    value={shippingInfo.firstName}
                    onChange={handleShippingChange}
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name*
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    value={shippingInfo.lastName}
                    onChange={handleShippingChange}
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address*
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={shippingInfo.email}
                  onChange={handleShippingChange}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mt-4">
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                  Street Address*
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  required
                  value={shippingInfo.address}
                  onChange={handleShippingChange}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                    City*
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    required
                    value={shippingInfo.city}
                    onChange={handleShippingChange}
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                <div>
                  <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700 mb-1">
                    Postal Code*
                  </label>
                  <input
                    type="text"
                    id="postalCode"
                    name="postalCode"
                    required
                    value={shippingInfo.postalCode}
                    onChange={handleShippingChange}
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div>
                  <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                    Country*
                  </label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    required
                    value={shippingInfo.country}
                    onChange={handleShippingChange}
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number*
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={shippingInfo.phone}
                    onChange={handleShippingChange}
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>
              </div>
              <div className="mt-6 flex justify-end">
                <button
                  type="submit"
                  className="px-6 py-2 bg-black text-white rounded hover:bg-gray-800 flex items-center"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </>
                  ) : (
                    "Place Order"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Order Summary */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-md h-fit">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <div className="divide-y divide-gray-200">
            {cartItems.map((item) => (
              <div key={item.id} className="py-3 flex">
                <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border border-gray-200 relative">
                  <Image
                    src={item.image || "/images/placeholder.jpg"}
                    alt={item.name}
                    fill
                    sizes="64px"
                    className="object-cover object-center"
                  />
                </div>
                <div className="ml-4 flex flex-1 flex-col">
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <h3>{item.name}</h3>
                    <p className="ml-4">Rs. {item.price.toFixed(2)}</p>
                  </div>
                  <div className="flex justify-between text-sm text-gray-500">
                    {item.variant && <p>{item.variant}</p>}
                    <p>Qty {item.quantity}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="border-t border-gray-200 py-4 mt-4">
            <div className="flex justify-between text-sm mb-2">
              <p>Subtotal</p>
              <p>Rs. {totalPrice.toFixed(2)}</p>
            </div>
            <div className="flex justify-between text-sm mb-2">
              <p>Shipping</p>
              <p>{shippingCost === 0 ? "Free" : `Rs. ${shippingCost.toFixed(2)}`}</p>
            </div>
            <div className="flex justify-between font-semibold text-base mt-4">
              <p>Total</p>
              <p>Rs. {finalTotal.toFixed(2)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;