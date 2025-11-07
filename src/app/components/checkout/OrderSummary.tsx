'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import OrderItemCard from './OrderItemCard';
import type { Product } from '../../lib/mockProducts';

interface OrderSummaryProps {
  cart: (Product & { quantity: number })[];
}

export default function OrderSummary({ cart }: OrderSummaryProps) {
  const [showGiftCode, setShowGiftCode] = useState(false);

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 0; // hardcoded shipping for now
  const total = subtotal + shipping;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-96 space-y-4">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-bold">YOUR ORDER</h2>
        <Link href="/checkout" className="text-sm text-blue-600 hover:underline">
          EDIT SHOPPING BAG
        </Link>
      </div>

      {/* Itemized List */}
      <div className="space-y-3">
        {cart.map(item => (
          <OrderItemCard key={item.id} item={item} />
        ))}
      </div>

      {/* Totals */}
      <div className="border-t border-gray-200 pt-4 space-y-1">
        <div className="flex justify-between text-sm">
          <span>Subtotal</span>
          <span>{subtotal.toFixed(2)} SEK</span>
        </div>
        <div className="flex justify-between text-sm">
          <span>Shipping</span>
          <span>{shipping.toFixed(2)} SEK</span>
        </div>
        <div className="flex justify-between font-bold text-lg mt-2">
          <span>Total</span>
          <span>{total.toFixed(2)} SEK</span>
        </div>
      </div>

      {/* Gift Code */}
      <div>
        <button
          className="w-full py-2 border border-gray-300 rounded-md hover:bg-gray-100 text-sm font-medium"
          onClick={() => setShowGiftCode(prev => !prev)}
        >
          ADD GIFT CODE
        </button>
        {showGiftCode && (
          <input
            type="text"
            placeholder="Enter code"
            className="mt-2 w-full border border-gray-300 rounded-md p-2 text-sm"
          />
        )}
      </div>
    </div>
  );
}
