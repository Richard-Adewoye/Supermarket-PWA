'use client';
import React from 'react';
import { Search } from 'lucide-react';
import { useSearch } from '../context/SearchContext';

export default function ProductSearch() {
  const { query, setQuery } = useSearch();

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    // filtering happens via context; no server action needed for this mock
  }

  return (
    <form onSubmit={onSubmit} className="flex w-full max-w-2xl mx-auto gap-2">
      <div className="flex-1 relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search products, categories..."
          className="w-full pl-12 pr-4 py-3 bg-white/90 backdrop-blur-sm border-2 border-white/20 rounded-xl outline-none focus:border-blue-400 focus:bg-white transition-all text-gray-900 placeholder:text-gray-500"
        />
      </div>
      <button 
        type="submit" 
        className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl"
      >
        Search
      </button>
    </form>
  );
}