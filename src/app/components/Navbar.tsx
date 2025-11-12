'use client';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import { Search, ShoppingBag, User, Menu, X } from 'lucide-react';
import CartBadge from './CartBadge';

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  console.log('Navbar render');

  const navLinks = [
    { name: 'Store', href: '/' },
    { name: 'Shop', href: '/shop' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact Us', href: '/contact-us' },
  ];

  return (
    <nav className="fixed top-2 left-1/2 z-[9999] w-[90%] max-w-6xl -translate-x-1/2 rounded-2xl border border-emerald-300/30 bg-gradient-to-r from-emerald-500/20 via-green-500/20 to-emerald-500/20 backdrop-blur-xl shadow-2xl px-6 py-3 flex items-center justify-between">
      {/* Logo */}
      <Link href="/" className="text-2xl font-bold text-white drop-shadow-lg">
        Supermarket
      </Link>

      {/* Nav Links */}
      <div className="hidden md:flex space-x-8">
        {navLinks.map(link => (
          <Link
            key={link.href}
            href={link.href}
            className={`text-sm font-medium transition-colors duration-200 relative ${
              pathname === link.href 
                ? 'text-white font-semibold after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-emerald-300 after:to-green-300 after:rounded-full after:shadow-lg' 
                : 'text-white/80 hover:text-white'
            }`}
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Icons */}
      <div className="flex items-center space-x-4">
        <button className="text-white/80 hover:text-white transition-colors" aria-label="Search">
          <Search size={20} />
        </button>

        {/* Cart button with live count */}
        <button
          className="relative text-white/80 hover:text-white transition-colors"
          onClick={() => router.push('/checkout')}
          aria-label="View cart"
        >
          <ShoppingBag size={20} />
          <CartBadge />
        </button>

        <button className="text-white/80 hover:text-white transition-colors" aria-label="User account">
          <User size={20} />
        </button>

        <button
          className="md:hidden text-white/80 hover:text-white transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-gradient-to-br from-emerald-500/30 via-green-500/30 to-emerald-500/30 backdrop-blur-xl mt-3 rounded-2xl flex flex-col items-center space-y-4 py-4 md:hidden shadow-2xl z-[9999] border border-emerald-300/30">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className={`text-base font-medium transition-colors duration-200 ${
                pathname === link.href ? 'text-white font-semibold' : 'text-white/80 hover:text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}