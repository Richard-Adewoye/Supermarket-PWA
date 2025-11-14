'use client';
import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export default function AppFooter() {
  return (
    <footer className="relative">
      {/* CTA Banner */}

      {/* Main Footer */}
      <div className="bg-gradient-to-br from-emerald-900 via-green-900 to-emerald-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
                Supermarket
              </h2>
              <p className="text-emerald-200/80 leading-relaxed">
                Your trusted online marketplace for quality products at unbeatable prices. Shop with confidence.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-emerald-200/70 hover:text-white transition-colors">
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">support@supermarket.com</span>
                </div>
                <div className="flex items-center gap-3 text-emerald-200/70 hover:text-white transition-colors">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">+234 (0) 800 123 4567</span>
                </div>
                <div className="flex items-center gap-3 text-emerald-200/70 hover:text-white transition-colors">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">Ibadan, Nigeria</span>
                </div>
              </div>
            </div>

            {/* About Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6 relative inline-block">
                About
                <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-emerald-500 to-green-500"></span>
              </h3>
              <ul className="space-y-4">
                <li>
                  <Link href="/about" className="text-emerald-200/70 hover:text-white transition-colors duration-200 flex items-center group">
                    <span className="w-0 h-0.5 bg-emerald-500 group-hover:w-4 transition-all duration-200 mr-0 group-hover:mr-2"></span>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-emerald-200/70 hover:text-white transition-colors duration-200 flex items-center group">
                    <span className="w-0 h-0.5 bg-emerald-500 group-hover:w-4 transition-all duration-200 mr-0 group-hover:mr-2"></span>
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/team" className="text-emerald-200/70 hover:text-white transition-colors duration-200 flex items-center group">
                    <span className="w-0 h-0.5 bg-emerald-500 group-hover:w-4 transition-all duration-200 mr-0 group-hover:mr-2"></span>
                    Meet The Team
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-emerald-200/70 hover:text-white transition-colors duration-200 flex items-center group">
                    <span className="w-0 h-0.5 bg-emerald-500 group-hover:w-4 transition-all duration-200 mr-0 group-hover:mr-2"></span>
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6 relative inline-block">
                Support
                <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-emerald-500 to-green-500"></span>
              </h3>
              <ul className="space-y-4">
                <li>
                  <Link href="/contact" className="text-emerald-200/70 hover:text-white transition-colors duration-200 flex items-center group">
                    <span className="w-0 h-0.5 bg-emerald-500 group-hover:w-4 transition-all duration-200 mr-0 group-hover:mr-2"></span>
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/shipping" className="text-emerald-200/70 hover:text-white transition-colors duration-200 flex items-center group">
                    <span className="w-0 h-0.5 bg-emerald-500 group-hover:w-4 transition-all duration-200 mr-0 group-hover:mr-2"></span>
                    Shipping
                  </Link>
                </li>
                <li>
                  <Link href="/return" className="text-emerald-200/70 hover:text-white transition-colors duration-200 flex items-center group">
                    <span className="w-0 h-0.5 bg-emerald-500 group-hover:w-4 transition-all duration-200 mr-0 group-hover:mr-2"></span>
                    Return Policy
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-emerald-200/70 hover:text-white transition-colors duration-200 flex items-center group">
                    <span className="w-0 h-0.5 bg-emerald-500 group-hover:w-4 transition-all duration-200 mr-0 group-hover:mr-2"></span>
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-lg font-semibold mb-6 relative inline-block">
                Connect With Us
                <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-emerald-500 to-green-500"></span>
              </h3>
              <p className="text-emerald-200/70 mb-6 text-sm">
                Follow us on social media for updates, promotions, and more!
              </p>
              <div className="flex gap-4">
                <Link
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-600 to-green-700 flex items-center justify-center hover:from-emerald-500 hover:to-green-600 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-emerald-500/50"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </Link>
                <Link
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center hover:from-emerald-400 hover:to-teal-500 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-emerald-500/50"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </Link>
                <Link
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-600 to-emerald-700 flex items-center justify-center hover:from-green-500 hover:to-emerald-600 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-green-500/50"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </Link>
                <Link
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-700 to-green-800 flex items-center justify-center hover:from-emerald-600 hover:to-green-700 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-emerald-700/50"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-emerald-800/50">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-emerald-200/70 text-sm text-center md:text-left">
                Copyright © 2025 Richard Adewoye. All Rights Reserved.
              </p>
              <div className="flex gap-6 text-sm">
                <Link href="/terms" className="text-emerald-200/70 hover:text-white transition-colors duration-200">
                  Terms of Service
                </Link>
                <span className="text-emerald-800">|</span>
                <Link href="/privacy" className="text-emerald-200/70 hover:text-white transition-colors duration-200">
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}