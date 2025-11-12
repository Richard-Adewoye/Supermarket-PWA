'use client';
import Image from 'next/image';
import React from 'react';
import type { FeaturedPostData } from '../../lib/blogMock';


export default function PostCard({ post }: { post: FeaturedPostData }) {
return (
<article className="group bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition-shadow">
<div className="relative h-44 w-full">
<Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform" />
</div>


<div className="p-4">
<h3 className="text-lg font-semibold mb-2">{post.title}</h3>
<p className="text-sm text-gray-600 mb-3">{post.excerpt}</p>
<div className="flex items-center justify-between text-xs text-gray-500">
<div>{post.author}</div>
<div>{post.date} • {post.readTime}</div>
</div>
</div>
</article>
);
}