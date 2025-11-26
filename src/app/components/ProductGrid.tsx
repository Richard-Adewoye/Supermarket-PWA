'use client';
import React, { useState } from 'react';
import type { Product } from '../lib/mockProducts';
import ProductCard from './ProductCard';

export default function ProductGridClient({ initialProducts }: { initialProducts: Product[] }) {
  const [products, setProducts] = useState(initialProducts);

  return (
    <section className="bg-gradient-to-r from-emerald-400 to-green-600 py-8 px-4 md:px-8 rounded-lg shadow-lg">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}