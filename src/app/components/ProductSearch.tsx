'use client';
import React from 'react';
import { useSearch } from '../context/SearchContext';


export default function ProductSearch() {
const { query, setQuery } = useSearch();


function onSubmit(e: React.FormEvent) {
e.preventDefault();
// filtering happens via context; no server action needed for this mock
}


return (
<form onSubmit={onSubmit} className="flex w-full max-w-xl mx-auto md:mx-0 bg-gray-500 shadow-sm rounded-md p-2">
<input
value={query}
onChange={(e) => setQuery(e.target.value)}
placeholder="Search products, categories..."
className="flex-1 px-3 py-2 outline-none"
/>
<button type="submit" className="px-4 py-2 bg-black text-white rounded-md ml-2">
Search
</button>
</form>
);
}