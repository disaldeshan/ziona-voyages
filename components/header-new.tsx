'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Search, Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [mobileQuery, setMobileQuery] = useState('');
  const router = useRouter();

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    const q = query.trim();
    router.push(q ? `/destinations?q=${encodeURIComponent(q)}` : '/destinations');
    setQuery('');
  }

  function handleMobileSearch(e: React.FormEvent) {
    e.preventDefault();
    const q = mobileQuery.trim();
    router.push(q ? `/destinations?q=${encodeURIComponent(q)}` : '/destinations');
    setMobileQuery('');
    setIsOpen(false);
  }

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
          <form onSubmit={handleSearch} className="relative hidden sm:flex items-center w-64">
            <Search className="absolute left-3 text-muted-foreground pointer-events-none" size={16} />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search destinations…"
              className="w-full pl-9 pr-4 py-2 rounded-full bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent text-sm"
            />
          </form>
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
          <form onSubmit={handleMobileSearch} className="relative w-full mb-2 flex items-center">
            <Search className="absolute left-3 text-muted-foreground pointer-events-none" size={16} />
            <input
              type="text"
              value={mobileQuery}
              onChange={(e) => setMobileQuery(e.target.value)}
              placeholder="Search destinations…"
              className="w-full pl-9 pr-16 py-2 rounded-full bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent text-sm"
            />
            <button type="submit" className="absolute right-2 bg-accent text-accent-foreground text-xs font-semibold px-3 py-1.5 rounded-full">
              Go
            </button>
          </form>
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
