import React from 'react';
import FeaturedPostHero from '../components/blog/FeaturedPostHero';
import RecentPostsSection from '../components/blog/RecentPostsSection';
import BlogCTA from '../components/blog/blogCTA';
import Navbar from '../components/Navbar';
import Footer from '../components/AppFooter';
import { mockPosts, recentPosts } from '../lib/blogMock';

export default function BlogPage() {
  // Optional: Add null check
  const featured = mockPosts[0];
  const recent = recentPosts;

  if (!featured) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-8">
          <FeaturedPostHero post={featured} />
        </div>

        <div className="mt-16">
          <RecentPostsSection posts={recent} />
        </div>

        <div className="mt-20">
          <BlogCTA />
        </div>
      </main>
    </div>
  );
}