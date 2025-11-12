'use client';
import React from 'react';


export default function LoadMoreButton() {
return (
<button
onClick={() => console.log('Load more clicked')}
className="bg-gray-900 text-white px-6 py-2 rounded-full hover:opacity-90 transition"
>
Loading more...
</button>
);
}