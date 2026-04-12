'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Search, ArrowRight, Utensils, Hotel, Binoculars, Train } from 'lucide-react';

const features = [
  {
    icon: Utensils,
    title: 'Authentic Cuisine',
    desc: 'Sri Lankan spices & flavors',
    href: '/destinations',
  },
  {
    icon: Hotel,
    title: 'Luxury Resorts',
    desc: '5-star beachfront stays',
    href: '/packages',
  },
  {
    icon: Binoculars,
    title: 'Wildlife Safari',
    desc: 'Yala National Park',
    href: '/destinations',
  },
  {
    icon: Train,
    title: 'Train Journeys',
    desc: 'Scenic highland routes',
    href: '/destinations',
  },
];

const stats = [
  { value: '6+', label: 'Destinations' },
  { value: '10+', label: 'Packages' },
  { value: '500+', label: 'Happy Travelers' },
  { value: '5★', label: 'Rated' },
];

export default function HeroSection() {
  const router = useRouter();
  const [query, setQuery] = useState('');

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/destinations?q=${encodeURIComponent(query.trim())}`);
    } else {
      router.push('/destinations');
    }
  }

  return (
    <section className="relative w-full min-h-[calc(100vh-64px)] bg-background">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/hero-sri-lanka.jpg"
          alt="Sri Lanka"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative flex flex-col min-h-[calc(100vh-64px)] px-6 md:px-16 py-16">
        {/* Heading */}
        <div className="max-w-3xl mt-8 md:mt-16">
          <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-3">
            Discover Sri Lanka
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-5 leading-tight">
            Experience the Pearl of<br className="hidden sm:block" /> the Indian Ocean
          </h1>
          <p className="text-base sm:text-lg text-gray-200 max-w-xl">
            Unforgettable journeys through pristine beaches, ancient temples, and misty highlands — curated just for you.
          </p>
        </div>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="mt-8 flex items-center w-full max-w-xl bg-white/10 backdrop-blur-md border border-white/20 rounded-full overflow-hidden">
          <Search className="ml-5 text-white/70 flex-shrink-0" size={20} />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search destinations e.g. Sigiriya, Ella, Galle…"
            className="flex-1 bg-transparent text-white placeholder:text-white/50 px-4 py-3 text-sm focus:outline-none"
          />
          <button
            type="submit"
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-6 py-3 text-sm transition-colors"
          >
            Search
          </button>
        </form>

        {/* Feature Cards */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl">
          {features.map(({ icon: Icon, title, desc, href }) => (
            <a
              key={title}
              href={href}
              className="group flex flex-col gap-3 bg-white/10 backdrop-blur-md hover:bg-white/20 border border-white/15 rounded-2xl p-4 transition-all duration-200"
            >
              <div className="w-10 h-10 rounded-xl bg-accent/20 group-hover:bg-accent/40 flex items-center justify-center transition-colors">
                <Icon className="text-accent" size={20} />
              </div>
              <div>
                <p className="text-white font-semibold text-sm leading-tight">{title}</p>
                <p className="text-gray-300 text-xs mt-0.5">{desc}</p>
              </div>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-8">
          <a
            href="/packages"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground px-7 py-3 rounded-full font-semibold text-sm transition-all hover:gap-3"
          >
            Explore Packages
            <ArrowRight size={18} />
          </a>
        </div>

        {/* Stats Bar */}
        <div className="mt-auto pt-12 pb-2">
          <div className="flex flex-wrap gap-6 md:gap-12">
            {stats.map(({ value, label }) => (
              <div key={label}>
                <p className="text-2xl md:text-3xl font-bold text-white">{value}</p>
                <p className="text-gray-400 text-xs mt-0.5">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
