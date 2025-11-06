'use client';
import React from 'react';
import { useSearch } from '../context/SearchContext';


export default function CategoryFilter() {
const { allProducts, setQuery } = useSearch();
const cats = Array.from(new Set(allProducts.map((p) => p.category))).slice(0, 10);


return (
<aside className="space-y-2">
<h4 className="bg-gray-800 font-semibold">Categories</h4>
<ul className="text-sm">
<li>
<button onClick={() => setQuery('')} className="bg-gray-800 text-left w-full py-1">
All
</button>
</li>
{cats.map((c) => (
<li key={c}>
<button onClick={() => setQuery(c)} className="bg-gray-800 text-left w-full py-1">
{c}
</button>
</li>
))}
</ul>
</aside>
);
}