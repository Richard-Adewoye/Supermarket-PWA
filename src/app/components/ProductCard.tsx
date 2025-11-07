'use client';
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Plus, Minus } from 'lucide-react';
import type { Product } from '../lib/mockProducts';
import { useCart } from '../context/CartContext';

export default function ProductCard({ product }: { product: Product }) {
  const { cart, add, remove, updateQuantity } = useCart();
  const router = useRouter();
  
  // Find if this product is in cart and get its quantity
  const cartItem = cart.find(item => item.id === product.id);
  const quantity = cartItem?.quantity || 0;

  // Debug: log when cart changes
  useEffect(() => {
    console.log(`Product N{product.id} - Cart:`, cart);
    console.log(`Product N{product.id} - Quantity:`, quantity);
  }, [cart, quantity, product.id]);

  const handleBuyNow = () => {
    console.log('Buy Now clicked for:', product.id);
    if (quantity === 0) {
      add(product);
    }
    router.push('/checkout');
  };

  const handleIncrement = () => {
    console.log('Increment clicked for:', product.id);
    add(product);
    console.log('After add, cart:', cart);
  };

  const handleDecrement = () => {
    console.log('Decrement clicked for:', product.id, 'Current quantity:', quantity);
    if (quantity === 1) {
      remove(product.id);
    } else if (quantity > 1) {
      updateQuantity(product.id, quantity - 1);
    }
  };

  return (
    <article className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group">
      <div className="relative h-48 md:h-64 overflow-hidden">
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
        />
        <span className="absolute top-3 left-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg">
          {product.categoryTag}
        </span>
      </div>
      
      <div className="p-4 md:p-5 flex-1 flex flex-col">
        <h3 className="text-base md:text-lg font-bold text-gray-800 line-clamp-2 min-h-[3rem]">
          {product.name}
        </h3>
        
        <div className="mt-2 flex items-center gap-2">
          <div className="flex items-center">
            <span className="text-yellow-500 text-lg">★</span>
            <span className="ml-1 text-sm font-semibold text-gray-700">
              {product.rating.toFixed(1)}
            </span>
          </div>
          <span className="text-xs text-gray-400">
            ({product.reviewCount.toLocaleString()})
          </span>
        </div>
        
        <div className="mt-4 mb-5">
          <span className="text-2xl md:text-3xl font-bold text-gray-900">
            N{product.price.toFixed(2)}
          </span>
        </div>
        
        <div className="mt-auto space-y-3">
          {/* Quantity Controls */}
          <div className="flex items-center justify-center gap-3 bg-gray-50 rounded-lg p-2">
            <button
              onClick={handleDecrement}
              disabled={quantity === 0}
              className="w-10 h-10 flex items-center justify-center rounded-lg bg-white border-2 border-gray-200 text-gray-700 hover:border-red-400 hover:text-red-600 hover:bg-red-50 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:border-gray-200 disabled:hover:bg-white disabled:hover:text-gray-700 transition-all duration-200 shadow-sm"
            >
              <Minus size={18} strokeWidth={2.5} />
            </button>
            
            <span className="text-lg font-bold text-gray-800 min-w-[2.5rem] text-center">
              {quantity}
            </span>
            
            <button
              onClick={handleIncrement}
              className="w-10 h-10 flex items-center justify-center rounded-lg bg-white border-2 border-gray-200 text-gray-700 hover:border-green-400 hover:text-green-600 hover:bg-green-50 transition-all duration-200 shadow-sm"
            >
              <Plus size={18} strokeWidth={2.5} />
            </button>
          </div>
          
          {/* Buy Now Button */}
          <button
            onClick={handleBuyNow}
            className="w-full py-3 md:py-3.5 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-sm md:text-base hover:from-blue-700 hover:to-purple-700 active:scale-[0.98] transition-all duration-200 shadow-md hover:shadow-lg"
          >
            Buy Now
          </button>
        </div>
      </div>
    </article>
  );
}