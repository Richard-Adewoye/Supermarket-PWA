'use client';
import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import CTABanner from './CTABanner';

export default function AppFooter() {
  return (
    <footer className="mt-16">
      {/* CTA Banner */}
      <CTABanner />

      {/* Main Footer */}
      <div className="bg-blue text-gray-700 py-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h4 className="font-bold text-lg mb-4">About</h4>
            <ul className="space-y-2">
              <li><Link href="/blog" className="hover:text-gray-900">Blog</Link></li>
              <li><Link href="/team" className="hover:text-gray-900">Meet The Team</Link></li>
              <li><Link href="/contact" className="hover:text-gray-900">Contact Us</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold text-lg mb-4">Support</h4>
            <ul className="space-y-2">
              <li><Link href="/contact" className="hover:text-gray-900">Contact Us</Link></li>
              <li><Link href="/shipping" className="hover:text-gray-900">Shipping</Link></li>
              <li><Link href="/return" className="hover:text-gray-900">Return</Link></li>
              <li><Link href="/faq" className="hover:text-gray-900">FAQ</Link></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-bold text-lg mb-4">Social Media</h4>
            <div className="flex gap-3">
              <Link href="https://twitter.com" className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
                <Twitter size={18} />
              </Link>
              <Link href="https://facebook.com" className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
                <Facebook size={18} />
              </Link>
              <Link href="https://linkedin.com" className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
                <Linkedin size={18} />
              </Link>
              <Link href="https://instagram.com" className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
                <Instagram size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 bg-gray-100 py-4 text-sm text-gray-600">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 px-4">
          <p>Copyright © 2025 Richard Adewoye. All Rights Reserved.</p>
          <div className="flex gap-4">
            <Link href="/terms" className="hover:text-gray-900">Terms of Service</Link>
            <Link href="/privacy" className="hover:text-gray-900">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
