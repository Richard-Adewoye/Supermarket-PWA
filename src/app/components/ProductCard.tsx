'use client';
import React from 'react';
import type { Product } from '../lib/mockProducts';
import { useCart } from '../context/CartContext';


export default function ProductCard({ product }: { product: Product }) {
const { add } = useCart();


return (
<article className="bg-gray-400 rounded-lg shadow-sm overflow-hidden flex flex-col">
<div className="relative h-44 md:h-56">
<img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover" />
<span className="absolute top-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">{product.categoryTag}</span>
</div>
<div className="p-3 flex-1 flex flex-col">
<h3 className="text-sm md:text-base font-semibold">{product.name}</h3>
<div className="mt-2 text-xs text-black">{product.rating.toFixed(1)} ({product.reviewCount.toLocaleString()} Reviews)</div>
<div className="mt-3 text-lg font-bold">${product.price.toFixed(2)}</div>
<div className="mt-4 flex gap-2">
<button onClick={() => add(product)} className="flex-1 py-2 rounded-md border border-gray-200">
Add to Cart
</button>
<button onClick={() => console.log('Buy now', product.id)} className="py-2 px-4 rounded-md bg-black text-white">
Buy Now
</button>
</div>
</div>
</article>
);
}