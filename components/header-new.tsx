'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="flex items-center justify-between px-8 py-4">
        <Link href="/" className="text-white font-bold text-2xl hover:opacity-80 transition-opacity">
          Ziona Voyages
        </Link>

        <nav className="hidden md:flex gap-8 absolute left-1/2 -translate-x-1/2">
          <Link href="/" className="text-foreground hover:text-accent transition-colors text-sm">Home</Link>
          <Link href="/destinations" className="text-foreground hover:text-accent transition-colors text-sm">Destinations</Link>
          <Link href="/packages" className="text-foreground hover:text-accent transition-colors text-sm">Packages</Link>
          <Link href="/blog" className="text-foreground hover:text-accent transition-colors text-sm">Blog</Link>
          <Link href="/contact" className="text-foreground hover:text-accent transition-colors text-sm">Contact Us</Link>
        </nav>

        <div className="flex items-center gap-4">
          <div className="relative hidden sm:block w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
            <input
              type="text"
              placeholder="Search your favourite destination here..."
              className="w-full pl-10 pr-4 py-2 rounded-full bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent text-sm"
            />
          </div>
          <button
            className="md:hidden p-1"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} className="text-foreground" /> : <Menu size={24} className="text-foreground" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-background px-8 py-4 space-y-4">
          <div className="relative w-full mb-2">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
            <input
              type="text"
              placeholder="Search destinations..."
              className="w-full pl-10 pr-4 py-2 rounded-full bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent text-sm"
            />
          </div>
          <Link href="/" onClick={() => setIsOpen(false)} className="block text-foreground hover:text-accent transition-colors py-2 border-b border-border/50">Home</Link>
          <Link href="/destinations" onClick={() => setIsOpen(false)} className="block text-foreground hover:text-accent transition-colors py-2 border-b border-border/50">Destinations</Link>
          <Link href="/packages" onClick={() => setIsOpen(false)} className="block text-foreground hover:text-accent transition-colors py-2 border-b border-border/50">Packages</Link>
          <Link href="/blog" onClick={() => setIsOpen(false)} className="block text-foreground hover:text-accent transition-colors py-2 border-b border-border/50">Blog</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="block text-foreground hover:text-accent transition-colors py-2">Contact Us</Link>
        </div>
      )}
    </header>
  );
}
