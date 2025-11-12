'use client';
import React from 'react';

export default function BlogCTA() {
  return (
    <section className="mt-12 rounded-2xl bg-gradient-to-r from-emerald-500 via-green-500 to-green-600 text-white p-10 text-center shadow-lg">
      <h3 className="text-2xl sm:text-3xl font-bold">
        Let&apos;s get started on something great
      </h3>
      <p className="mt-3 text-sm text-white/80 max-w-2xl mx-auto">
        Whether you have a project in mind or want to chat about ideas, we&apos;re ready.
      </p>

      <div className="mt-6 flex items-center justify-center gap-4">
        <button
          onClick={() => console.log('Chat clicked')}
          className="px-5 py-2 border border-white/70 rounded-md hover:bg-white/10 transition text-white font-semibold"
        >
          Chat to us
        </button>
        <button
          onClick={() => console.log('Get started clicked')}
          className="px-5 py-2 bg-white text-green-700 rounded-md font-semibold hover:opacity-95 transition shadow-md"
        >
          Get started
        </button>
      </div>
    </section>
  );
}
