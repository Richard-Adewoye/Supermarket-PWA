'use client';
import React from 'react';
import ProductCard from './ProductCard_2';
import { useSearch } from '../context/SearchContext';
import type { Product_2 } from '../lib/mockProducts'; 

interface ProductGridClientProps {
  initialProducts: Product_2[];
}

export default function ProductGridClient({ initialProducts }: ProductGridClientProps) {
  // consume filtered products from context
  const { filtered } = useSearch();
  const productsToShow = filtered ?? initialProducts;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {productsToShow.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
