'use client';
import React from 'react';
import ProductCard from './ProductCard';
import { useSearch } from '../context/SearchContext';
import type { Product } from '../lib/mockProducts';


export default function ProductGridClient({ initialProducts }: { initialProducts: Product[] }) {
// consume filtered products from context
const { filtered } = useSearch();
const productsToShow = filtered ?? initialProducts;


return (
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
{productsToShow.map((p: Product) => (
<ProductCard key={p.id} product={p} />
))}
</div>
);
}