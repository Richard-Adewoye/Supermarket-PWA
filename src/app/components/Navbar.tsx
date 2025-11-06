'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Search, ShoppingBag, User, Menu, X } from 'lucide-react'

export default function Navbar() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { name: 'Store', href: '/' },
    { name: 'Shop', href: '/shop' },
    { name: 'Blog', href: '/blog' },
  ]

  return (
    <nav className="fixed top-4 left-1/2 z-50 w-[90%] max-w-6xl -translate-x-1/2 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md shadow-lg px-6 py-3 flex items-center justify-between">
      {/* Left - Logo */}
      <Link href="/" className="text-2xl font-bold text-white">
        Supermarket
      </Link>

      {/* Center - Nav Links */}
      <div className="hidden md:flex space-x-8">
        {navLinks.map((link) => (
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

      {/* Right - Icons */}
      <div className="flex items-center space-x-4">
        <button className="text-white/80 hover:text-white">
          <Search size={20} />
        </button>
        <button className="relative text-white/80 hover:text-white">
          <ShoppingBag size={20} />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-semibold rounded-full h-4 w-4 flex items-center justify-center">
            2
          </span>
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
        <div className="absolute top-full left-0 w-full bg-white/10 backdrop-blur-md border-t border-white/20 mt-3 rounded-b-2xl flex flex-col items-center space-y-4 py-4 md:hidden shadow-lg">
          {navLinks.map((link) => (
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
  )
}
