'use client';

// ================================================================
// HOME PAGE — ZIONA VOYAGES
// ----------------------------------------------------------------
// Scrollable landing page with: Hero, Featured Destinations,
// Why Choose Us, Tour Packages teaser, and CTA Banner sections.
// All styling uses theme CSS variables so dark ↔ light switch
// works automatically. Luxury utility classes (luxury-card,
// btn-gold) from globals.css keep card/button styles consistent.
// ================================================================

import Header from '@/components/header-new';
import HeroSection from '@/components/hero-section';
import Image from 'next/image';
import Link from 'next/link';
import { Star, ArrowRight, Shield, Clock, Award, Users } from 'lucide-react';

// ── Data ─────────────────────────────────────────────────────────

const featuredDestinations = [
  { name: 'Sigiriya', subtitle: 'Ancient Rock Fortress', image: '/sri-lanka-temple.jpg', rating: 4.9, price: '$450' },
  { name: 'Ella',     subtitle: 'Tea Country Gem',       image: '/sri-lanka-train.jpg',  rating: 4.8, price: '$380' },
  { name: 'Mirissa',  subtitle: 'Beach Paradise',        image: '/sri-lanka-beach.jpg',  rating: 4.9, price: '$350' },
];

const whyUs = [
  { icon: Shield, title: 'Safe & Trusted',        desc: 'Fully licensed and insured travel company with 10+ years of experience.'  },
  { icon: Clock,  title: 'Available 24/7',         desc: 'Our travel experts are always ready to help at any hour.'                 },
  { icon: Award,  title: 'Best Price Guarantee',   desc: 'We match any lower price and give you complete peace of mind.'            },
  { icon: Users,  title: 'Personalised Service',   desc: 'Every itinerary is crafted around you — your pace, your interests.'      },
];

const packages = [
  { name: 'Island Explorer',    duration: '7 Days', price: '$1,200', popular: true  },
  { name: 'Wildlife Adventure', duration: '5 Days', price: '$950',   popular: false },
  { name: 'Luxury Escape',      duration: '8 Days', price: '$2,500', popular: true  },
];

export default function Home() {
  return (
    <div className="flex-1 bg-background flex flex-col">
      <Header />
      <main className="flex-1">

        {/* ── Hero ── */}
        <HeroSection />

        {/* ── Featured Destinations ── */}
        <section className="px-6 md:px-16 py-20 bg-background">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-end justify-between mb-10">
              <div>
                <p className="text-accent font-semibold uppercase tracking-widest text-xs mb-2">Top Picks</p>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">Featured Destinations</h2>
              </div>
              <Link href="/destinations" className="hidden sm:flex items-center gap-1 text-accent hover:gap-2 transition-all text-sm font-semibold">
                View all <ArrowRight size={16} />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredDestinations.map((d) => (
                <Link
                  href="/destinations"
                  key={d.name}
                  className="group relative rounded-2xl overflow-hidden h-72 cursor-pointer"
                >
                  <Image src={d.image} alt={d.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <div className="flex items-center justify-between mb-1">
                      <div>
                        <h3 className="text-white font-bold text-xl">{d.name}</h3>
                        <p className="text-white/70 text-sm">{d.subtitle}</p>
                      </div>
                      {/* Star rating badge */}
                      <div className="flex items-center gap-1 bg-accent/20 backdrop-blur-sm border border-accent/30 px-2 py-1 rounded-full">
                        <Star size={12} className="text-accent fill-accent" />
                        <span className="text-white text-xs font-semibold">{d.rating}</span>
                      </div>
                    </div>
                    <p className="text-accent font-bold text-sm mt-2">From {d.price}</p>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-6 sm:hidden text-center">
              <Link href="/destinations" className="inline-flex items-center gap-1 text-accent text-sm font-semibold">
                View all destinations <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* ── Why Choose Us ── */}
        {/* bg-secondary/50 gives enough contrast in light (warm beige) and dark themes */}
        <section className="px-6 md:px-16 py-20 bg-secondary/50 border-y border-border">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-accent font-semibold uppercase tracking-widest text-xs mb-2">Why Us</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Travel with Confidence</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyUs.map(({ icon: Icon, title, desc }) => (
                /* luxury-card applies themed border, hover lift, and gold glow */
                <div key={title} className="luxury-card p-6">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 transition-colors duration-300 group-hover:bg-accent/20">
                    <Icon className="text-accent" size={22} />
                  </div>
                  <h3 className="text-foreground font-bold text-base mb-2">{title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Tour Packages Teaser ── */}
        <section className="px-6 md:px-16 py-20 bg-background">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-end justify-between mb-10">
              <div>
                <p className="text-accent font-semibold uppercase tracking-widest text-xs mb-2">Our Offers</p>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">Tour Packages</h2>
              </div>
              <Link href="/packages" className="hidden sm:flex items-center gap-1 text-accent hover:gap-2 transition-all text-sm font-semibold">
                All packages <ArrowRight size={16} />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {packages.map((pkg) => (
                <div
                  key={pkg.name}
                  className={`relative luxury-card p-6 ${pkg.popular ? 'border-accent shadow-lg shadow-accent/15' : ''}`}
                >
                  {/* Popular badge */}
                  {pkg.popular && (
                    <span className="absolute -top-3 right-6 bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full">
                      Popular
                    </span>
                  )}
                  <h3 className="text-foreground font-bold text-lg mb-1">{pkg.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{pkg.duration}</p>
                  <p className="text-accent text-2xl font-bold mb-5">{pkg.price}</p>
                  <Link
                    href="/packages"
                    className={`block w-full text-center py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${
                      pkg.popular
                        ? 'bg-accent text-accent-foreground hover:shadow-[0_0_16px_color-mix(in_srgb,var(--accent)_40%,transparent)]'
                        : 'bg-secondary text-foreground hover:bg-secondary/70'
                    }`}
                  >
                    View Package
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA Banner ── */}
        <section className="relative px-6 md:px-16 py-24 overflow-hidden">
          <Image src="/sri-lanka-beach.jpg" alt="Sri Lanka beach" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/65" />
          <div className="relative max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready for Your Dream Trip?</h2>
            <p className="text-white/70 mb-8 text-base leading-relaxed">
              Let our experts craft the perfect Sri Lanka itinerary for you.
              Get in touch today — no obligation, just inspiration.
            </p>
            {/* Gold glow CTA — btn-gold utility from globals.css */}
            <Link href="/contact" className="btn-gold inline-flex items-center gap-2 px-8 py-3.5 text-sm">
              Plan My Trip <ArrowRight size={18} />
            </Link>
          </div>
        </section>

      </main>
    </div>
  );
}
