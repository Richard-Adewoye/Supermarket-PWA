'use client';
import React, { useState } from 'react';
import { Mail, Send, Sparkles } from 'lucide-react';

export default function CTABanner() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Subscribed email:', email);
    setIsSubmitted(true);
    setEmail('');
    
    // Reset success message after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <section className="relative bg-gradient-to-br from-emerald-600 via-green-600 to-teal-600 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto py-12 px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left Side - Newsletter Form */}
          <div className="w-full lg:w-1/2 space-y-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-yellow-300 animate-pulse" />
                <span className="text-yellow-300 font-semibold text-xs uppercase tracking-wide">
                  Stay Updated
                </span>
              </div>
              <p className="text-white/90 text-base">
                Subscribe to our newsletter for exclusive deals!
              </p>
            </div>

            <div onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1 relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 rounded-xl bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-emerald-300/50 transition-all duration-200 font-medium"
                  />
                </div>
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="bg-gradient-to-r from-emerald-800 to-green-800 text-white px-6 py-3 rounded-xl font-semibold hover:from-emerald-700 hover:to-green-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:scale-105 group"
                >
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  Subscribe
                </button>
              </div>
              
              {isSubmitted && (
                <div className="bg-white/20 backdrop-blur-sm text-white px-4 py-3 rounded-lg flex items-center gap-2 animate-fade-in">
                  <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></div>
                  <span className="font-medium">Thanks for subscribing! Check your inbox soon.</span>
                </div>
              )}
              
              <p className="text-white/70 text-xs">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>

          {/* Right Side - Information */}
          <div className="w-full lg:w-1/2 space-y-4">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl">
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <div className="w-1 h-6 bg-gradient-to-b from-yellow-300 to-green-300 rounded-full"></div>
                Everything for Homes and Needs
              </h3>
              <p className="text-white/90 leading-relaxed text-sm mb-4">
                We'll listen to your needs, identify the best approach, and provide you
                with items tailored for comfort and convenience.
              </p>
              
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm text-center">
                  <div className="text-2xl font-bold text-white mb-1">500+</div>
                  <div className="text-white/70 text-xs">Products</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm text-center">
                  <div className="text-2xl font-bold text-white mb-1">10k+</div>
                  <div className="text-white/70 text-xs">Customers</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm text-center">
                  <div className="text-2xl font-bold text-white mb-1">24/7</div>
                  <div className="text-white/70 text-xs">Support</div>
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3 items-center justify-center lg:justify-start">
              <div className="bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full text-white text-xs font-medium border border-white/30">
                ✓ Free Shipping
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full text-white text-xs font-medium border border-white/30">
                ✓ Secure Payment
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}