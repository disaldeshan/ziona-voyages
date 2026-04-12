'use client';

import { Search, Menu } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="flex items-center justify-between px-8 py-4">
        <div className="text-white font-bold text-2xl">Ziona Voyages</div>
        
        <nav className="hidden md:flex gap-8 absolute left-1/2 -translate-x-1/2">
          <a href="/" className="text-foreground hover:text-accent transition-colors text-sm">Home</a>
          <a href="/destinations" className="text-foreground hover:text-accent transition-colors text-sm">Destinations</a>
          <a href="/packages" className="text-foreground hover:text-accent transition-colors text-sm">Packages</a>
          <a href="/blog" className="text-foreground hover:text-accent transition-colors text-sm">Blog</a>
          <a href="/contact" className="text-foreground hover:text-accent transition-colors text-sm">Contact Us</a>
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
          <button className="md:hidden">
            <Menu size={24} className="text-foreground" />
          </button>
        </div>
      </div>
    </header>
  );
}
