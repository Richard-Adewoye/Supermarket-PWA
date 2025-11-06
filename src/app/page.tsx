// app/shop/page.tsx (RSC) - root page for the shop
// ---------------------------
import React from 'react';
import ShopHero from './components/ShopHero';
import ProductGrid from './components/ProductGrid';
import ProductSearch from './components/ProductSearch';
import CategoryFilter from './components/CategoryFilter';
import { mockProducts } from './lib/mockProducts';
import { SearchProvider } from './context/SearchContext';
import { CartProvider } from './context/CartContext';


export default function Page() {
// server component - fetch or import mock data
const products = mockProducts; // in real app fetch from DB/API


return (
<main className="min-h-screen">
<ShopHero />


{/* Wrap interactive parts in client providers */}
<SearchProvider initialProducts={products}>
<CartProvider>
<section className="bg-black w-full px-4 py-8">
<div className="mb-6">
<ProductSearch />
</div>

<div className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-6">
<div>
<CategoryFilter />
</div>


<div>
<ProductGrid initialProducts={products} />
</div>
</div>
</section>
</CartProvider>
</SearchProvider>
</main>
);
}