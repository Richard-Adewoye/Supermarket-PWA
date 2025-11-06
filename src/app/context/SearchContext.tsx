'use client';
import React, { createContext, useContext, useMemo, useState } from 'react';
import type { Product } from '../lib/mockProducts';


type SearchContextType = {
query: string;
setQuery: (q: string) => void;
allProducts: Product[];
filtered: Product[];
};


const SearchContext = createContext<SearchContextType | undefined>(undefined);


export function SearchProvider({ children, initialProducts }: { children: React.ReactNode; initialProducts: Product[] }) {
const [query, setQuery] = useState('');
const allProducts = initialProducts;


const filtered = useMemo(() => {
if (!query) return allProducts;
const q = query.toLowerCase();
return allProducts.filter((p) => p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q) || p.categoryTag.toLowerCase().includes(q));
}, [query, allProducts]);


return <SearchContext.Provider value={{ query, setQuery, allProducts, filtered }}>{children}</SearchContext.Provider>;
}


export function useSearch() {
const ctx = useContext(SearchContext);
if (!ctx) throw new Error('useSearch must be used inside SearchProvider');
return ctx;
}