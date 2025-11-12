import Image from 'next/image';
import type { FeaturedPostData } from '../../lib/blogMock';

export default function FeaturedPostHero({ post }: { post: FeaturedPostData }) {
  return (
    <section className="relative rounded-2xl overflow-hidden shadow-lg">
      <div className="relative h-64 sm:h-96 w-full">
        <Image src={post.image} alt={post.title} fill className="object-cover" priority />
        
        {/* Green gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-green-900/40 to-black/10" />
        
        <div className="absolute left-6 bottom-6 right-6 text-white">
          <span className="inline-block bg-gradient-to-r from-emerald-400 to-green-600 px-3 py-1 rounded-full text-sm font-semibold">
            {post.tag ?? 'Featured'}
          </span>
          <h1 className="mt-4 text-2xl sm:text-4xl font-extrabold leading-tight">
            {post.title}
          </h1>
          <p className="mt-2 max-w-2xl text-sm sm:text-base text-green-100">
            {post.excerpt}
          </p>
          <div className="mt-4 text-xs sm:text-sm text-green-200 flex items-center gap-4">
            <span>{post.author}</span>
            <span>•</span>
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime} read</span>
          </div>
        </div>
      </div>
    </section>
  );
}
