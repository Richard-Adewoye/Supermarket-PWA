'use client';
import { useCart } from '../context/CartContext';

export default function CartBadge() {
  const { itemCount } = useCart();
  
  console.log('CartBadge render - itemCount:', itemCount);
  
  if (itemCount === 0) return null;
  
  return (
    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-semibold rounded-full h-5 w-5 flex items-center justify-center shadow-lg">
      {itemCount}
    </span>
  );
}