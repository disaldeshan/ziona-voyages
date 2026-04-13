'use client';

// ================================================================
// BLOG PAGE — ZIONA VOYAGES
// ----------------------------------------------------------------
// Travel blog listing with category filter chips and an article
// grid. Uses luxury-card for article cards and btn-primary for
// the active category chip — all theme-aware via CSS variables.
// ================================================================

import Header from '@/components/header-new';
import { Calendar, User, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

const articles = [
  {
    id: 1,
    title: 'Top 10 Must-Visit Destinations in Sri Lanka',
    excerpt: "Discover the most breathtaking and culturally significant destinations that make Sri Lanka a traveler's paradise.",
    author: 'Sarah Mitchell',
    date: 'April 8, 2024',
    readTime: '8 min read',
    category: 'Destinations',
    image: '/sri-lanka-temple.jpg',
  },
  {
    id: 2,
    title: 'The Best Time to Visit Sri Lanka: A Seasonal Guide',
    excerpt: "Plan your perfect trip with our comprehensive guide to Sri Lanka's seasons, weather patterns, and festival schedules.",
    author: 'James Chen',
    date: 'April 5, 2024',
    readTime: '6 min read',
    category: 'Travel Tips',
    image: '/sri-lanka-beach.jpg',
  },
  {
    id: 3,
    title: 'Authentic Sri Lankan Cuisine: A Culinary Journey',
    excerpt: "Explore the flavors, spices, and traditions of Sri Lankan cooking. From curry to kottu roti, taste the island's soul.",
    author: 'Emma Rodriguez',
    date: 'April 1, 2024',
    readTime: '7 min read',
    category: 'Food & Culture',
    image: '/sri-lanka-cuisine.jpg',
  },
  {
    id: 4,
    title: 'Wildlife Safari in Yala National Park',
    excerpt: "Experience the thrill of spotting leopards, elephants, and exotic birds in Sri Lanka's premier wildlife sanctuary.",
    author: 'David Smith',
    date: 'March 28, 2024',
    readTime: '9 min read',
    category: 'Adventure',
    image: '/sri-lanka-wildlife.jpg',
  },
  {
    id: 5,
    title: "Train Journey Through Sri Lanka's Tea Plantations",
    excerpt: 'Take a scenic train ride through misty highlands and emerald tea gardens — one of the world\'s most beautiful rail journeys.',
    author: 'Lisa Wong',
    date: 'March 25, 2024',
    readTime: '6 min read',
    category: 'Experiences',
    image: '/sri-lanka-train.jpg',
  },
  {
    id: 6,
    title: 'Luxury Resorts in Sri Lanka: Where to Stay in Style',
    excerpt: 'Discover the most exclusive beachfront and mountain resorts offering world-class amenities and unforgettable experiences.',
    author: 'Michael Brown',
    date: 'March 22, 2024',
    readTime: '7 min read',
    category: 'Accommodation',
    image: '/sri-lanka-resort.jpg',
  },
  {
    id: 7,
    title: 'Cultural Immersion: Temple Visits and Local Traditions',
    excerpt: "Connect with Sri Lanka's spiritual heart through ancient temples, meditation retreats, and cultural ceremonies.",
    author: 'Priya Sharma',
    date: 'March 19, 2024',
    readTime: '8 min read',
    category: 'Culture',
    image: '/sri-lanka-temple.jpg',
  },
  {
    id: 8,
    title: 'Budget Travel in Sri Lanka: Experience More for Less',
    excerpt: 'Travel to Sri Lanka on a budget without compromising on quality. Expert tips for affordable adventures.',
    author: 'Tom Wilson',
    date: 'March 16, 2024',
    readTime: '5 min read',
    category: 'Travel Tips',
    image: '/sri-lanka-beach.jpg',
  },
];

const categories = ['All', 'Destinations', 'Travel Tips', 'Food & Culture', 'Adventure', 'Experiences', 'Accommodation', 'Culture'];

export default function BlogPage() {
  const [active, setActive] = useState('All');

  // Filter articles when a category is selected
  const filtered = active === 'All' ? articles : articles.filter((a) => a.category === active);

  return (
    <div className="flex-1 bg-background flex flex-col">
      <Header />
      <main className="flex-1 px-6 md:px-16 py-12">

        {/* ── Page heading ── */}
        <div className="mb-12">
          <p className="text-accent font-semibold uppercase tracking-widest text-xs mb-2">Our Journal</p>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Travel Blog</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Stories, tips, and insights from our travelers and experts. Inspiration for your next adventure.
          </p>
        </div>

        {/* ── Category filter chips ── */}
        <div className="mb-10 flex flex-wrap gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                cat === active
                  ? 'bg-accent text-accent-foreground shadow-[0_0_14px_color-mix(in_srgb,var(--accent)_30%,transparent)]'
                  : 'bg-secondary text-muted-foreground hover:bg-secondary/70 hover:text-foreground'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ── Articles grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((article) => (
            <article
              key={article.id}
              /* luxury-card applies the premium hover lift + gold border glow */
              className="luxury-card group overflow-hidden cursor-pointer"
            >
              {/* Thumbnail with scale-on-hover */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/25 group-hover:bg-black/40 transition-colors duration-300" />
                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-xs font-semibold">
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col">
                <h2 className="text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors duration-200 line-clamp-2">
                  {article.title}
                </h2>
                <p className="text-muted-foreground text-sm mb-5 leading-relaxed line-clamp-3 flex-1">
                  {article.excerpt}
                </p>

                {/* Meta strip */}
                <div className="pt-4 border-t border-border space-y-3">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><Calendar size={13} />{article.date}</span>
                    <span>{article.readTime}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <User size={13} />{article.author}
                    </span>
                    <span className="p-1.5 rounded-full hover:bg-secondary transition-colors">
                      <ArrowRight size={16} className="text-accent" />
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* ── Load more ── */}
        <div className="mt-12 text-center">
          <button className="btn-gold px-8 py-3 text-sm">Load More Articles</button>
        </div>

      </main>
    </div>
  );
}
