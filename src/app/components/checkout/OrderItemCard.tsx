'use client';
import React from 'react';
import type { Product } from '../../lib/mockProducts';

interface OrderItemCardProps {
  item: Product & { quantity: number };
}

export default function OrderItemCard({ item }: OrderItemCardProps) {
  return (
    <div className="flex items-center justify-between bg-gray-100 p-2 rounded-lg">
      <img src={item.imageUrl} alt={item.name} className="w-12 h-12 object-cover rounded" />
      <div className="flex-1 ml-3">
        <div className="text-sm font-medium">{item.name}</div>
        <div className="text-xs text-gray-500">Quantity: {item.quantity}</div>
      </div>
      <div className="text-sm font-semibold">{(item.price * item.quantity).toFixed(2)} SEK</div>
    </div>
  );
}
