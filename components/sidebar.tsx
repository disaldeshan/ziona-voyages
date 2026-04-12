'use client';

import { Home, Building2, MapPin, User, Settings } from 'lucide-react';
import Link from 'next/link';

export default function Sidebar() {
  return (
    <aside className="w-24 bg-secondary/50 border-r border-border flex flex-col items-center py-8 gap-8">
      <Link href="/" className="text-primary text-2xl font-bold hover:text-accent transition-colors">
        Z
      </Link>
      
      <nav className="flex flex-col gap-6">
        <Link href="/" className="p-3 rounded-lg bg-primary/20 text-primary hover:bg-primary/30 transition-colors" title="Home">
          <Home size={24} />
        </Link>
        <Link href="/packages" className="p-3 rounded-lg text-muted-foreground hover:bg-primary/20 hover:text-primary transition-colors" title="Packages">
          <Building2 size={24} />
        </Link>
        <Link href="/destinations" className="p-3 rounded-lg text-muted-foreground hover:bg-primary/20 hover:text-primary transition-colors" title="Destinations">
          <MapPin size={24} />
        </Link>
        <Link href="/contact" className="p-3 rounded-lg text-muted-foreground hover:bg-primary/20 hover:text-primary transition-colors" title="Contact">
          <User size={24} />
        </Link>
      </nav>

      <div className="mt-auto">
        <button className="p-3 rounded-lg text-muted-foreground hover:bg-primary/20 hover:text-primary transition-colors" title="Settings">
          <Settings size={24} />
        </button>
      </div>
    </aside>
  );
}
