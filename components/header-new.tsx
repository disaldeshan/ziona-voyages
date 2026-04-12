'use client';

// ================================================================
// HEADER / NAVBAR — ZIONA VOYAGES
// ----------------------------------------------------------------
// Sticky header with centred nav, theme toggle (sun/moon), and
// mobile hamburger menu. Uses theme CSS variables automatically —
// no hardcoded colours so it adapts instantly when theme changes.
// ================================================================

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Menu, X, Sun, Moon } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen]   = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme }   = useTheme();

  // Avoid hydration mismatch — only render theme icon after mount
  useEffect(() => setMounted(true), []);

  // Toggle between the two luxury themes
  function toggleTheme() {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }

  return (
    <header className="sticky top-0 z-40 bg-background/95 backdrop-blur-md border-b border-border transition-colors duration-300">
      <div className="flex items-center justify-between px-6 md:px-8 py-4">

        {/* ── Brand Logo ── */}
        <Link
          href="/"
          className="text-foreground font-bold text-2xl tracking-tight hover:text-accent transition-colors duration-300"
        >
          Ziona Voyages
        </Link>

        {/* ── Desktop Navigation ── */}
        <nav className="hidden md:flex gap-8 absolute left-1/2 -translate-x-1/2">
          {[
            { href: '/',            label: 'Home'        },
            { href: '/destinations',label: 'Destinations'},
            { href: '/packages',    label: 'Packages'    },
            { href: '/blog',        label: 'Blog'        },
            { href: '/contact',     label: 'Contact Us'  },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-muted-foreground hover:text-accent text-sm font-medium transition-colors duration-200"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* ── Right Controls ── */}
        <div className="flex items-center gap-3">

          {/* Theme toggle — Sun (switch to light) / Moon (switch to dark) */}
          {mounted && (
            <button
              onClick={toggleTheme}
              aria-label="Toggle luxury theme"
              className="p-2 rounded-full border border-border bg-secondary/60 hover:border-accent hover:bg-secondary
                         transition-all duration-300 hover:shadow-[0_0_12px_color-mix(in_srgb,var(--accent)_30%,transparent)]"
            >
              {theme === 'dark'
                ? <Sun  size={17} className="text-accent" />
                : <Moon size={17} className="text-foreground" />
              }
            </button>
          )}

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-1 text-foreground hover:text-accent transition-colors duration-200"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* ── Mobile Menu ── */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-background px-8 py-5 space-y-1 transition-all duration-300">
          {[
            { href: '/',            label: 'Home'        },
            { href: '/destinations',label: 'Destinations'},
            { href: '/packages',    label: 'Packages'    },
            { href: '/blog',        label: 'Blog'        },
            { href: '/contact',     label: 'Contact Us'  },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setIsOpen(false)}
              className="block text-foreground hover:text-accent py-2.5 border-b border-border/40 text-sm font-medium transition-colors duration-200 last:border-0"
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
