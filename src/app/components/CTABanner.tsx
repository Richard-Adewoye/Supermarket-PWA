'use client';
import React, { useState } from 'react';

export default function CTABanner() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Subscribed email:', email);
    setEmail('');
  };

  return (
    <section className="bg-gray-900 text-white py-12 px-6 md:px-12 rounded-t-2xl">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Side */}
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Our New Stuff?
          </h2>
          <form onSubmit={handleSubmit} className="bg-white flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              required
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 rounded-md text-black placeholder-gray-500"
            />
            <button
              type="submit"
              className="bg-black text-white px-8 py-4 rounded-sm font-semibold hover:bg-gray-800 transition"
            >
              Send
            </button>
          </form>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 text-gray-300 space-y-2">
          <h3 className="text-lg font-semibold text-white">
            Everything for Homes and Needs
          </h3>
          <p className="text-sm leading-relaxed">
            We'll listen to your needs, identify the best approach, and provide you
            with items tailored for comfort and convenience. Quality and trust are
            our top priorities.
          </p>
        </div>
      </div>
    </section>
  );
}
