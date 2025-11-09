"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Product_2 } from "../lib/mockProducts";
import { Heart, Plus, Minus } from "lucide-react";
import { useCart } from "../context/CartContext";

interface ProductCardProps {
  product: Product_2;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isFavorited, setIsFavorited] = useState(product.isFavorited);
  const { cart, add, remove, updateQuantity } = useCart();
  const router = useRouter();

  const toggleFavorite = () => setIsFavorited((prev) => !prev);

  // Convert Product_2 to cart-compatible format
  const convertToCartProduct = (p: Product_2) => ({
    id: p.id.toString(),
    name: p.name,
    category: p.category || 'Uncategorized',
    categoryTag: p.categoryTag || 'Other',
    price: parseFloat(p.price.replace('$', '')),
    rating: 4.5, // Default rating
    reviewCount: 0,
    imageUrl: p.imageUrl[0], // Use first image
  });

  // Find if this product is in cart and get its quantity
  const cartItem = cart.find(item => item.id === product.id.toString());
  const quantity = cartItem?.quantity || 0;

  const handleBuyNow = () => {
    if (quantity === 0) {
      add(convertToCartProduct(product));
    }
    router.push('/checkout');
  };

  const handleIncrement = () => {
    add(convertToCartProduct(product));
  };

  const handleDecrement = () => {
    if (quantity === 1) {
      remove(product.id.toString());
    } else if (quantity > 1) {
      updateQuantity(product.id.toString(), quantity - 1);
    }
  };

  return (
    <div className="border rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 p-4 flex flex-col relative bg-white">
      {/* Badge + Favorite */}
      <div className="absolute top-3 left-3 z-10">
        {product.isLimited && (
          <span className="text-xs bg-gradient-to-r from-red-600 to-pink-600 text-white px-3 py-1 rounded-full shadow-lg font-semibold">
            Limited
          </span>
        )}
      </div>
      <button
        onClick={toggleFavorite}
        className="absolute top-3 right-3 z-10 text-gray-400 hover:text-red-500 transition-colors p-2 bg-white rounded-full shadow-md hover:shadow-lg"
      >
        <Heart fill={isFavorited ? "red" : "none"} strokeWidth={2} size={20} />
      </button>

      {/* Image area */}
      <div className="flex justify-center items-center h-48 mb-4 bg-gray-50 rounded-lg overflow-hidden group">
        {product.imageUrl.length > 1 ? (
          <div className="flex space-x-1 h-full w-full">
            {product.imageUrl.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`${product.name} ${i + 1}`}
                className="flex-1 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            ))}
          </div>
        ) : (
          <img 
            src={product.imageUrl[0]} 
            alt={product.name} 
            className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300" 
          />
        )}
      </div>

      {/* Info */}
      <div className="flex-1 flex flex-col">
        <h3 className="font-bold text-base md:text-lg text-gray-800 mb-2 line-clamp-2 min-h-[3rem]">
          {product.name}
        </h3>
        <p className="text-2xl font-bold text-gray-900 mb-4">
          {product.price}
        </p>

        {/* Quantity Controls */}
        <div className="mt-auto space-y-3">
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
            className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-sm md:text-base hover:from-blue-700 hover:to-purple-700 active:scale-[0.98] transition-all duration-200 shadow-md hover:shadow-lg"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}