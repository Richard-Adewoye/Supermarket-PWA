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
    <nav className="fixed top-2 left-1/2 z-[9999] w-[90%] max-w-6xl -translate-x-1/2 rounded-2xl border border-white/30 bg-black/20 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] px-6 py-3 flex items-center justify-between">
      {/* Logo */}
      <Link href="/" className="text-2xl font-bold text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
        Supermarket
      </Link>

      {/* Nav Links */}
      <div className="hidden md:flex space-x-8">
        {navLinks.map(link => (
          <Link
            key={link.href}
            href={link.href}
            className={`text-sm font-medium transition-all duration-200 relative ${
              pathname === link.href 
                ? 'text-white font-semibold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-emerald-400 after:to-green-400 after:rounded-full after:shadow-lg' 
                : 'text-white/90 hover:text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]'
            }`}
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Icons */}
      <div className="flex items-center space-x-4">
        <button 
          className="text-white/90 hover:text-white transition-colors drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]" 
          aria-label="Search"
        >
          <Search size={20} />
        </button>

        {/* Cart button with live count */}
        <button
          className="relative text-white/90 hover:text-white transition-colors drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]"
          onClick={() => router.push('/checkout')}
          aria-label="View cart"
        >
          <ShoppingBag size={20} />
          <CartBadge />
        </button>

        <button 
          className="text-white/90 hover:text-white transition-colors drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]" 
          aria-label="User account"
        >
          <User size={20} />
        </button>

        <button
          className="md:hidden text-white/90 hover:text-white transition-colors drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-black/20 backdrop-blur-xl mt-3 rounded-2xl flex flex-col items-center space-y-4 py-4 md:hidden shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] z-[9999] border border-white/30">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className={`text-base font-medium transition-all duration-200 ${
                pathname === link.href 
                  ? 'text-white font-semibold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]' 
                  : 'text-white/90 hover:text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]'
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