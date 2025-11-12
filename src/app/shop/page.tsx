'use client';

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/AppFooter';
import ProductSearch from '../components/ProductSearch';
import CategoryFilter from '../components/CategoryFilter';
import ProductGridContainer from '../components/ProductGridContainer';
import { SearchProvider, useSearch } from '../context/SearchContext';
import { mockProducts_2 } from '../lib/mockProducts';

// Grouped Products by Category Section
function GroupedProductsSection() {
  const { filtered } = useSearch();

  // Group products by category
  const groupedProducts = filtered.reduce((acc, product) => {
    const category = product.category || 'Uncategorized';
    if (!acc[category]) acc[category] = [];
    acc[category].push(product);
    return acc;
  }, {} as Record<string, typeof filtered>);

  const categories = Object.keys(groupedProducts);

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
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden border border-white/20">
            <div className="bg-gradient-to-r from-emerald-400 via-green-500 to-green-600 px-6 py-4">
              <h2 className="text-xl font-semibold text-white">Categories</h2>
            </div>
            <div className="p-6">
              <CategoryFilter />
            </div>
          </div>
        </aside>

        {/* Stacked Category Sections */}
        <div className="space-y-12">
          {filtered.length === 0 ? (
            <div className="bg-gradient-to-br from-green-900/50 via-emerald-900/50 to-green-950/50 backdrop-blur-md rounded-3xl shadow-2xl p-16 border border-white/10 text-center">
              <p className="text-white/60 text-lg">
                No products match your search
              </p>
              <p className="text-white/40 text-sm mt-2">
                Try a different search term or category
              </p>
            </div>
          ) : (
            categories.map((category) => (
              <div key={category} id={category.toLowerCase().replace(/\s+/g, '-')}>
                {/* Category Header */}
                <div className="mb-6">
                  <h2 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
                    <span className="w-2 h-8 bg-gradient-to-b from-emerald-400 to-green-600 rounded-full"></span>
                    {category}
                  </h2>
                  <p className="text-green-200 text-sm ml-5">
                    {groupedProducts[category].length} {groupedProducts[category].length === 1 ? 'product' : 'products'}
                  </p>
                </div>

                {/* Product Cards for this Category */}
                <div className="bg-gradient-to-br from-green-900/50 via-emerald-900/50 to-green-950/50 backdrop-blur-md rounded-3xl shadow-2xl p-8 border border-white/10">
                  <ProductGridContainer products={groupedProducts[category]} />
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Summary Footer */}
      {filtered.length > 0 && (
        <div className="mt-12 text-center">
          <div className="inline-block bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20">
            <p className="text-white font-medium">
              Showing {filtered.length} {filtered.length === 1 ? 'product' : 'products'}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}

// Root Page
export default function ShopPage() {
  const products = mockProducts_2;

  return (
    <main className="min-h-screen bg-gradient-to-br from-green-900 via-emerald-950 to-green-900">
      <Navbar />

      <SearchProvider initialProducts={products}>
        <GroupedProductsSection />
      </SearchProvider>
    </main>
  );
}
