'use client';

// ================================================================
// HERO SECTION — ZIONA VOYAGES
// ----------------------------------------------------------------
// Full-viewport hero with luxury background, search bar, feature
// cards and a stats strip. Uses luxury utility classes from
// globals.css (glass-card, btn-gold) for theme-aware styling.
// ================================================================

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Search, ArrowRight, Utensils, Hotel, Binoculars, Train } from 'lucide-react';

// Feature cards shown in the bottom-left of the hero
const features = [
  { icon: Utensils,   title: 'Authentic Cuisine',  desc: 'Sri Lankan spices & flavors',  href: '/destinations' },
  { icon: Hotel,      title: 'Luxury Resorts',     desc: '5-star beachfront stays',       href: '/packages'     },
  { icon: Binoculars, title: 'Wildlife Safari',    desc: 'Yala National Park',            href: '/destinations' },
  { icon: Train,      title: 'Train Journeys',     desc: 'Scenic highland routes',        href: '/destinations' },
];

// Stats strip shown at the bottom of the hero
const stats = [
  { value: '6+',   label: 'Destinations'    },
  { value: '10+',  label: 'Years Experience' },
  { value: '500+', label: 'Happy Travelers'  },
  { value: '5★',   label: 'Rating'           },
];

export default function HeroSection() {
  const router = useRouter();
  const [query, setQuery] = useState('');

  // Navigate to /destinations filtered by the search query
  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    const q = query.trim();
    router.push(q ? `/destinations?q=${encodeURIComponent(q)}` : '/destinations');
  }

  return (
    <section className="relative w-full min-h-[calc(100vh-64px)] bg-background">

      {/* ── Background Image with gradient overlay ── */}
      <div className="absolute inset-0">
        <Image
          src="/hero-sri-lanka.jpg"
          alt="Sri Lanka tea highlands"
          fill
          className="object-cover"
          priority
        />
        {/* Gradient darkens bottom more for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/75" />
      </div>

      {/* ── Main content ── */}
      <div className="relative flex flex-col min-h-[calc(100vh-64px)] px-6 md:px-16 py-16">

        {/* Eyebrow + Heading */}
        <div className="max-w-3xl mt-8 md:mt-16">
          <p className="text-accent font-semibold tracking-[0.2em] uppercase text-xs mb-3">
            Discover Sri Lanka
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-5 leading-tight">
            Experience the Pearl of<br className="hidden sm:block" /> the Indian Ocean
          </h1>
          <p className="text-base sm:text-lg text-white/75 max-w-xl leading-relaxed">
            Unforgettable journeys through pristine beaches, ancient temples,
            and misty highlands — curated just for you.
          </p>
        </div>

        {/* ── Search bar ── */}
        <form
          onSubmit={handleSearch}
          className="mt-8 flex items-center w-full max-w-xl overflow-hidden rounded-full border border-white/20 bg-black/30 backdrop-blur-md"
        >
          <Search className="ml-5 text-white/60 flex-shrink-0" size={18} />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search destinations e.g. Sigiriya, Ella, Galle…"
            className="flex-1 bg-transparent text-white placeholder:text-white/45 px-4 py-3 text-sm focus:outline-none"
          />
          {/* Gold search button — uses luxury btn-gold utility */}
          <button type="submit" className="btn-gold px-6 py-3 text-sm rounded-none rounded-r-full">
            Search
          </button>
        </form>

        {/* ── Feature cards (glass-morphism, theme-aware via glass-card utility) ── */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl">
          {features.map(({ icon: Icon, title, desc, href }) => (
            <a key={title} href={href} className="glass-card flex flex-col gap-3 p-4 group">
              {/* Icon badge */}
              <div className="w-10 h-10 rounded-xl bg-accent/20 group-hover:bg-accent/35 flex items-center justify-center transition-colors duration-300">
                <Icon className="text-accent" size={20} />
              </div>
              <div>
                <p className="text-white font-semibold text-sm leading-tight">{title}</p>
                <p className="text-white/60 text-xs mt-0.5">{desc}</p>
              </div>
            </a>
          ))}
        </div>

        {/* ── Primary CTA ── */}
        <div className="mt-8">
          <a href="/packages" className="btn-gold inline-flex items-center gap-2 px-7 py-3 text-sm">
            Explore Packages
            <ArrowRight size={18} />
          </a>
        </div>

        {/* ── Stats strip ── */}
        <div className="mt-auto pt-12 pb-2">
          <div className="flex flex-wrap gap-8 md:gap-14">
            {stats.map(({ value, label }) => (
              <div key={label}>
                <p className="text-2xl md:text-3xl font-bold text-white">{value}</p>
                <p className="text-white/50 text-xs mt-0.5 tracking-wide">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
