'use client';
import React, { createContext, useContext, useMemo, useState } from 'react';
import type { Product_2 } from '../lib/mockProducts';  // matches your file


// ------------------------------
// Context Type
// ------------------------------
type SearchContextType = {
  query: string;
  setQuery: (q: string) => void;
  allProducts: Product_2[];
  filtered: Product_2[];
};

// ------------------------------
// Create Context
// ------------------------------
const SearchContext = createContext<SearchContextType | undefined>(undefined);

// ------------------------------
// Provider
// ------------------------------
interface SearchProviderProps {
  children: React.ReactNode;
  initialProducts: Product_2[];
}

export function SearchProvider({ children, initialProducts }: SearchProviderProps) {
  const [query, setQuery] = useState('');
  const allProducts = initialProducts;

  const filtered = useMemo(() => {
    if (!query) return allProducts;
    const q = query.toLowerCase();
    return allProducts.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        (p.category && p.category.toLowerCase().includes(q))
    );
  }, [query, allProducts]);

  return (
    <SearchContext.Provider value={{ query, setQuery, allProducts, filtered }}>
      {children}
    </SearchContext.Provider>
  );
}

// ------------------------------
// Hook for using the context
// ------------------------------
export function useSearch() {
  const ctx = useContext(SearchContext);
  if (!ctx) throw new Error('useSearch must be used inside SearchProvider');
  return ctx;
}
