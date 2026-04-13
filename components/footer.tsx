// ================================================================
// FOOTER — ZIONA VOYAGES
// ----------------------------------------------------------------
// Site-wide luxury footer. Fully theme-aware via CSS variables.
// Switching dark ↔ light instantly changes every colour here.
// To update contact details, edit the contactItems array below.
// ================================================================

import Link from 'next/link';
import { Mail, Phone, MapPin, Instagram, Facebook, Youtube } from 'lucide-react';

// Quick nav links displayed in the footer columns
const navLinks = [
  { href: '/',             label: 'Home'         },
  { href: '/destinations', label: 'Destinations' },
  { href: '/packages',     label: 'Packages'     },
  { href: '/blog',         label: 'Blog'         },
  { href: '/contact',      label: 'Contact Us'   },
];

// Contact info items — update phone/email/address here
const contactItems = [
  { icon: Mail,   text: 'info@zionavoyages.com'   },
  { icon: Phone,  text: '+94 (0) 779 152 040'     },
  { icon: MapPin, text: 'Colombo, Sri Lanka'      },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-secondary/30 border-t border-border mt-auto transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 md:px-16 py-14">

        {/* ── Four-column grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand + tagline + social */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="text-foreground font-bold text-2xl tracking-tight hover:text-accent transition-colors duration-300"
            >
              Ziona Voyages
            </Link>

            <p className="mt-4 text-muted-foreground text-sm leading-relaxed max-w-xs">
              Crafting unforgettable luxury journeys through the Pearl of the Indian
              Ocean. Your premium Sri Lanka travel specialists since 2014.
            </p>

            {/* Social media icons with gold hover glow */}
            <div className="flex gap-3 mt-6">
              {[
                { Icon: Instagram, href: '#', label: 'Instagram' },
                { Icon: Facebook,  href: '#', label: 'Facebook'  },
                { Icon: Youtube,   href: '#', label: 'YouTube'   },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-border bg-card flex items-center justify-center
                             text-muted-foreground hover:text-accent hover:border-accent
                             transition-all duration-300
                             hover:shadow-[0_0_10px_color-mix(in_srgb,var(--accent)_25%,transparent)]"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-foreground font-semibold mb-5 text-xs tracking-widest uppercase">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-muted-foreground hover:text-accent text-sm transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact details */}
          <div>
            <h4 className="text-foreground font-semibold mb-5 text-xs tracking-widest uppercase">
              Contact
            </h4>
            <ul className="space-y-4">
              {contactItems.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-3">
                  <Icon size={15} className="text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground text-sm">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Bottom copyright strip ── */}
        <div className="pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-muted-foreground text-xs">
            &copy; {year} Ziona Voyages. All rights reserved.
          </p>
          <p className="text-muted-foreground text-xs">
            Premium Luxury Travel &middot; Sri Lanka
          </p>
        </div>
      </div>
    </footer>
  );
}
