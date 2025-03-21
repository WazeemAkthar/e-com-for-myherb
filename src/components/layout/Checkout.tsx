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

interface PaymentInfo {
  cardName: string;
  cardNumber: string;
  expDate: string;
  cvv: string;
}

const Checkout = () => {
  const cartItems = useSelector((state: CartState) => state.cart.items);
  const totalPrice = useSelector((state: CartState) => state.cart.totalAmount);
  
  const [currentStep, setCurrentStep] = useState<number>(1);
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
  const [paymentInfo, setPaymentInfo] = useState<PaymentInfo>({
    cardName: "",
    cardNumber: "",
    expDate: "",
    cvv: "",
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [orderComplete, setOrderComplete] = useState<boolean>(false);

  const handleShippingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setShippingInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPaymentInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentStep(2);
  };

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsLoading(false);
      setOrderComplete(true);
      setCurrentStep(3);
    }, 2000);
  };

  // Calculate shipping cost (example logic)
  const shippingCost = totalPrice > 5000 ? 0 : 350;
  const finalTotal = totalPrice + shippingCost;

  if (orderComplete) {
    return <OrderConfirmation />;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>
      
      {/* Checkout Progress */}
      <div className="flex items-center justify-center mb-8">
        <div className={`flex items-center ${currentStep >= 1 ? "text-black" : "text-gray-400"}`}>
          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep >= 1 ? "bg-black text-white" : "bg-gray-200"}`}>
            1
          </div>
          <span className="ml-2">Shipping</span>
        </div>
        <div className={`w-16 h-1 mx-2 ${currentStep >= 2 ? "bg-black" : "bg-gray-200"}`}></div>
        <div className={`flex items-center ${currentStep >= 2 ? "text-black" : "text-gray-400"}`}>
          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep >= 2 ? "bg-black text-white" : "bg-gray-200"}`}>
            2
          </div>
          <span className="ml-2">Payment</span>
        </div>
        <div className={`w-16 h-1 mx-2 ${currentStep >= 3 ? "bg-black" : "bg-gray-200"}`}></div>
        <div className={`flex items-center ${currentStep >= 3 ? "text-black" : "text-gray-400"}`}>
          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep >= 3 ? "bg-black text-white" : "bg-gray-200"}`}>
            3
          </div>
          <span className="ml-2">Confirmation</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Checkout Form */}
        <div className="md:col-span-2">
          {currentStep === 1 && (
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
                    className="px-6 py-2 bg-black text-white rounded hover:bg-gray-800"
                  >
                    Continue to Payment
                  </button>
                </div>
              </form>
            </div>
          )}

          {currentStep === 2 && (
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Payment Information</h2>
              <form onSubmit={handlePaymentSubmit}>
                <div className="mt-4">
                  <label htmlFor="cardName" className="block text-sm font-medium text-gray-700 mb-1">
                    Name on Card*
                  </label>
                  <input
                    type="text"
                    id="cardName"
                    name="cardName"
                    required
                    value={paymentInfo.cardName}
                    onChange={handlePaymentChange}
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                <div className="mt-4">
                  <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">
                    Card Number*
                  </label>
                  <input
                    type="text"
                    id="cardNumber"
                    name="cardNumber"
                    required
                    placeholder="XXXX XXXX XXXX XXXX"
                    value={paymentInfo.cardNumber}
                    onChange={handlePaymentChange}
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div>
                    <label htmlFor="expDate" className="block text-sm font-medium text-gray-700 mb-1">
                      Expiration Date*
                    </label>
                    <input
                      type="text"
                      id="expDate"
                      name="expDate"
                      required
                      placeholder="MM/YY"
                      value={paymentInfo.expDate}
                      onChange={handlePaymentChange}
                      className="w-full p-2 border border-gray-300 rounded"
                    />
                  </div>
                  <div>
                    <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-1">
                      CVV*
                    </label>
                    <input
                      type="text"
                      id="cvv"
                      name="cvv"
                      required
                      placeholder="XXX"
                      value={paymentInfo.cvv}
                      onChange={handlePaymentChange}
                      className="w-full p-2 border border-gray-300 rounded"
                    />
                  </div>
                </div>
                <div className="mt-6 flex justify-between">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(1)}
                    className="px-6 py-2 border border-gray-300 rounded hover:bg-gray-100"
                  >
                    Back
                  </button>
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
                      "Complete Order"
                    )}
                  </button>
                </div>
              </form>
            </div>
          )}
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

const OrderConfirmation = () => {
  const orderNumber = Math.floor(100000 + Math.random() * 900000); // Generate random order number
  
  return (
    <div className="max-w-2xl mx-auto px-4 py-16 text-center">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h1 className="text-3xl font-bold mb-2">Thank you for your order!</h1>
      <p className="text-gray-600 mb-6">Your order has been received and is now being processed.</p>
      <p className="font-medium mb-8">Order Number: #{orderNumber}</p>
      <p className="text-sm text-gray-500 mb-6">
        A confirmation email has been sent to your email address.
        You will receive updates about your order status.
      </p>
      <Link href="/" className="inline-block px-6 py-3 bg-black text-white rounded hover:bg-gray-800">
        Continue Shopping
      </Link>
    </div>
  );
};

export default Checkout;