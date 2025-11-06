import React from 'react';


export default function ShopHero() {
return (
<section className="w-full h-64 md:h-96 relative flex items-center justify-center bg-gray-800 overflow-hidden">
<img src="/images/img-2.jpg" alt="shop hero" className="absolute inset-0 w-full h-full object-cover opacity-60" />
<div className="relative text-center">
<h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight">Shop</h1>
<p className="mt-2 text-lg md:text-2xl text-white/90">Give All You Need</p>
</div>
</section>
);
}