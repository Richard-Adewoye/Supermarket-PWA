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
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      <ShopHero />

      {/* Wrap interactive parts in client providers */}
      <SearchProvider initialProducts={products}>
        <CartProvider>
          <section className="w-full px-4 py-12 max-w-7xl mx-auto">
            {/* Search Bar with Enhanced Design */}
            <div className="mb-8">
              <div className="bg-white rounded-2xl shadow-lg p-6 backdrop-blur-sm bg-opacity-95">
                <ProductSearch />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6">
              {/* Sidebar - Category Filter */}
              <aside className="lg:sticky lg:top-6 lg:self-start">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden backdrop-blur-sm bg-opacity-95">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4">
                    <h2 className="text-xl font-semibold text-white">Categories</h2>
                  </div>
                  <div className="p-6">
                    <CategoryFilter />
                  </div>
                </div>
                
                {/* Optional: Add promotional banner */}
                <div className="mt-6 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl shadow-lg p-6 text-white hidden lg:block">
                  <h3 className="font-bold text-lg mb-2">Special Offer!</h3>
                  <p className="text-sm text-purple-100 mb-4">
                    Get 20% off on selected items this week
                  </p>
                  <button className="w-full bg-white text-purple-600 font-semibold py-2 px-4 rounded-lg hover:bg-purple-50 transition-colors duration-200">
                    View Deals
                  </button>
                </div>
              </aside>

              {/* Main Content - Product Grid */}
              <div className="bg-white rounded-2xl shadow-lg p-6 backdrop-blur-sm bg-opacity-95">
                <div className="mb-6 pb-4 border-b border-gray-200">
                  <h2 className="text-2xl font-bold text-gray-900">All Products</h2>
                  <p className="text-gray-600 text-sm mt-1">
                    Discover our amazing collection
                  </p>
                </div>
                <ProductGrid initialProducts={products} />
              </div>
            </div>
          </section>
        </CartProvider>
      </SearchProvider>
    </main>
  );
}