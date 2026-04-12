'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Menu, X, Sun, Moon } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  return (
    <header className="sticky top-0 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="flex items-center justify-between px-6 md:px-8 py-4">
        <Link href="/" className="text-foreground font-bold text-2xl hover:opacity-80 transition-opacity">
          Ziona Voyages
        </Link>

        <nav className="hidden md:flex gap-8 absolute left-1/2 -translate-x-1/2">
          <Link href="/" className="text-foreground hover:text-accent transition-colors text-sm">Home</Link>
          <Link href="/destinations" className="text-foreground hover:text-accent transition-colors text-sm">Destinations</Link>
          <Link href="/packages" className="text-foreground hover:text-accent transition-colors text-sm">Packages</Link>
          <Link href="/blog" className="text-foreground hover:text-accent transition-colors text-sm">Blog</Link>
          <Link href="/contact" className="text-foreground hover:text-accent transition-colors text-sm">Contact Us</Link>
        </nav>

        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-full bg-secondary/60 hover:bg-secondary border border-border transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark'
                ? <Sun size={18} className="text-foreground" />
                : <Moon size={18} className="text-foreground" />
              }
            </button>
          )}

          {/* Mobile Menu Button */}
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
