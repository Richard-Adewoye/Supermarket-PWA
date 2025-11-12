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
import CTABanner from './components/CTABanner';

function ShopContent() {
  const { filtered } = useSearch();

  return (
    <section className="w-full px-4 py-12 max-w-7xl mx-auto">
      {/* Search Bar */}
      <div className="mb-8">
        <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-lg p-6 border border-gray-200">
          <ProductSearch />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6">
        {/* Sidebar */}
        <aside className="lg:sticky lg:top-6 lg:self-start">
          <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200">
            <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 px-6 py-4">
              <h2 className="text-xl font-semibold text-white">Categories</h2>
            </div>
            <div className="p-6">
              <CategoryFilter />
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <div className="bg-white rounded-3xl shadow-md p-8 border border-gray-200">
          <div className="mb-8 pb-6 border-b border-gray-200">
            <h2 className="text-3xl font-bold text-gray-900">
              {filtered.length === 0 ? 'No Products Found' : `All Products (${filtered.length})`}
            </h2>
            <p className="text-gray-600 text-sm mt-2">
              {filtered.length === 0 ? 'Try a different search or category' : 'Discover our fresh collection'}
            </p>
          </div>
          {/* ProductGridContainer with filtered products */}
          {filtered.length > 0 ? (
            <ProductGridContainer products={filtered} />
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">No products match your search</p>
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
    <main className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50">
      <ShopHero />

      <SearchProvider initialProducts={products}>
        <ShopContent />
        </SearchProvider>
      <CTABanner/>
    </main>
  );
}