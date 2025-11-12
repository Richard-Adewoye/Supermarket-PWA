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

  const renderButton = (label: string, isActive: boolean, onClick: () => void) => (
    <button
      onClick={onClick}
      className={`group text-left w-full px-4 py-3 rounded-xl transition-all duration-200 font-semibold flex items-center justify-between ${
        isActive
          ? 'bg-gradient-to-r from-emerald-400 to-green-600 text-white shadow-lg scale-105'
          : 'bg-white text-gray-800 border-2 border-gray-200 hover:bg-emerald-100 hover:text-gray-900 hover:scale-105'
      }`}
    >
      <span>{label}</span>
      <ChevronRight
        className={`w-5 h-5 transition-transform ${isActive ? 'translate-x-1' : 'group-hover:translate-x-1'}`}
      />
    </button>
  );

  return (
    <aside className="space-y-2">
      <ul className="space-y-2">
        <li>{renderButton('All Products', query === '', () => setQuery(''))}</li>
        {cats.map((c) => (
          <li key={c}>{renderButton(c, query === c, () => setQuery(c))}</li>
        ))}
      </ul>
    </aside>
  );
}
