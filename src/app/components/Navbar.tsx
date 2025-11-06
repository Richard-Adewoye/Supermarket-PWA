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
  ];

  return (
    <nav className="fixed top-4 left-1/2 z-50 w-[90%] max-w-6xl -translate-x-1/2 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md shadow-lg px-6 py-3 flex items-center justify-between">
      {/* Logo */}
      <Link href="/" className="text-2xl font-bold text-white">
        Supermarket
      </Link>

      {/* Nav Links */}
      <div className="hidden md:flex space-x-8">
        {navLinks.map(link => (
          <Link
            key={link.href}
            href={link.href}
            className={`text-sm font-medium transition-colors duration-200 ${
              pathname === link.href ? 'text-white font-semibold' : 'text-white/70 hover:text-white'
            }`}
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Icons */}
      <div className="flex items-center space-x-4">
        <button className="text-white/80 hover:text-white">
          <Search size={20} />
        </button>

        {/* Cart button with live count */}
        <button
          className="relative text-white/80 hover:text-white transition-colors"
          onClick={() => router.push('/checkout')}
        >
          <ShoppingBag size={20} />
          <CartBadge />
        </button>

        <button className="text-white/80 hover:text-white">
          <User size={20} />
        </button>

        <button
          className="md:hidden text-white/80 hover:text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-black/90 text-white mt-3 rounded-b-2xl flex flex-col items-center space-y-4 py-4 md:hidden shadow-lg">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className={`text-base font-medium ${
                pathname === link.href ? 'text-white font-semibold' : 'text-white/70 hover:text-white'
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