// app/shop/page.tsx
'use client';
import React from 'react';
import ShopHero from './components/ShopHero';
import ProductGridContainer from './components/ProductGridContainer';
import ProductSearch from './components/ProductSearch';
import CategoryFilter from './components/CategoryFilter';
import { mockProducts_2 } from './lib/mockProducts';
import { SearchProvider, useSearch } from './context/SearchContext';
import { CartProvider } from './context/CartContext';

function ShopContent() {
  const { filtered } = useSearch();

  return (
    <section className="w-full px-4 py-12 max-w-7xl mx-auto">
      {/* Search Bar */}
      <div className="mb-8">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-6 border border-white/20">
          <ProductSearch />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6">
        {/* Sidebar */}
        <aside className="lg:sticky lg:top-6 lg:self-start">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden border border-white/20">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4">
              <h2 className="text-xl font-semibold text-white">Categories</h2>
            </div>
            <div className="p-6">
              <CategoryFilter />
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <div className="bg-gradient-to-br from-slate-900/50 via-blue-900/50 to-slate-900/50 backdrop-blur-md rounded-3xl shadow-2xl p-8 border border-white/10">
          <div className="mb-8 pb-6 border-b border-white/20">
            <h2 className="text-3xl font-bold text-white">
              {filtered.length === 0 ? 'No Products Found' : `All Products (${filtered.length})`}
            </h2>
            <p className="text-blue-200 text-sm mt-2">
              {filtered.length === 0 ? 'Try a different search or category' : 'Discover our amazing collection'}
            </p>
          </div>
          {/* ProductGridContainer with filtered products */}
          {filtered.length > 0 ? (
            <ProductGridContainer products={filtered} />
          ) : (
            <div className="text-center py-16">
              <p className="text-white/60 text-lg">No products match your search</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default function Page() {
  const products = mockProducts_2;

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
      <ShopHero />

      <SearchProvider initialProducts={products}>
        <CartProvider>
          <ShopContent />
        </CartProvider>
      </SearchProvider>
    </main>
  );
}