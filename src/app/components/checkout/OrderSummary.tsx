'use client';
import React from 'react';
import { ShoppingBag } from 'lucide-react';
import type { CartItem } from '../../context/CartContext';

export default function OrderSummary({ cart }: { cart: CartItem[] }) {
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 0;
  const total = subtotal + shipping;

  return (
    <div className="p-6 space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="font-bold text-lg flex items-center gap-2">
          <ShoppingBag className="w-5 h-5" />
          YOUR ORDER
        </h3>
        <button className="text-sm text-blue-600 hover:underline">
          EDIT SHOPPING BAG
        </button>
      </div>

      <div className="space-y-2">
        {cart.map(item => (
          <div key={item.id} className="flex justify-between text-sm">
            <div>
              {item.name} x{item.quantity}
            </div>
            <div>${(item.price * item.quantity).toFixed(2)}</div>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-200 pt-4 space-y-1 text-sm">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Shipping</span>
          <span>${shipping.toFixed(2)}</span>
        </div>
        <div className="flex justify-between font-bold text-lg">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>

      <button className="w-full py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100">
        ADD GIFT CODE
      </button>
    </div>
  );
}
