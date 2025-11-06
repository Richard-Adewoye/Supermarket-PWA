'use client';
import React, { useState } from 'react';
import type { Product } from '../lib/mockProducts';
import ProductCard from './ProductCard';

export default function ProductGridClient({ initialProducts }: { initialProducts: Product[] }) {
  const [products, setProducts] = useState(initialProducts);

  return (
    <section className="bg-gray-500 py-8 px-4 md:px-8 rounded-lg">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
