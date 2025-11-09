'use client';
import React from 'react';
import { ChevronRight } from 'lucide-react';
import { useSearch } from '../context/SearchContext';

export default function CategoryFilter() {
  const { allProducts, setQuery, query } = useSearch();
  const cats = Array.from(
    new Set(
      allProducts
        .map((p) => p.category)
        .filter((c): c is string => typeof c === 'string')
    )
  ).slice(0, 10);

  return (
    <aside className="space-y-2">
      <ul className="space-y-2">
        <li>
          <button 
            onClick={() => setQuery('')} 
            className={`group text-left w-full px-4 py-3 rounded-xl transition-all duration-200 font-semibold flex items-center justify-between ${
              query === '' 
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105' 
                : 'text-white/80 hover:text-white hover:bg-white/20 hover:scale-105 bg-white/5 border-2 border-white/10 hover:border-white/30'
            }`}
          >
            <span>All Products</span>
            <ChevronRight className={`w-5 h-5 transition-transform ${query === '' ? 'translate-x-1' : 'group-hover:translate-x-1'}`} />
          </button>
        </li>
        {cats.map((c) => (
          <li key={c}>
            <button 
              onClick={() => setQuery(c)} 
              className={`group text-left w-full px-4 py-3 rounded-xl transition-all duration-200 font-semibold flex items-center justify-between ${
                query === c 
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105' 
                  : 'text-white/80 hover:text-white hover:bg-white/20 hover:scale-105 bg-white/5 border-2 border-white/10 hover:border-white/30'
              }`}
            >
              <span>{c}</span>
              <ChevronRight className={`w-5 h-5 transition-transform ${query === c ? 'translate-x-1' : 'group-hover:translate-x-1'}`} />
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}