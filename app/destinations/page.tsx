'use client';

// ================================================================
// DESTINATIONS PAGE — ZIONA VOYAGES
// ----------------------------------------------------------------
// Filterable grid of all Sri Lanka destinations. URL param ?q=
// drives the search so results are shareable and bookmarkable.
// luxury-card utility from globals.css handles hover lift + glow.
// ================================================================

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import Header from '@/components/header-new';
import { MapPin, Star } from 'lucide-react';
import Image from 'next/image';

const allDestinations = [
  {
    id: 1,
    name: 'Sigiriya',
    subtitle: 'Ancient Rock Fortress',
    description: 'Climb the legendary rock fortress with stunning panoramic views',
    image: '/sri-lanka-temple.jpg',
    rating: 4.9,
    reviews: 284,
    highlights: ['Ancient ruins', 'Panoramic views', 'Photography hotspot'],
    price: '$450',
    tags: ['sigiriya', 'fortress', 'ancient', 'history', 'rock'],
  },
  {
    id: 2,
    name: 'Ella',
    subtitle: 'Tea Country Gem',
    description: 'Experience misty highlands and the iconic Nine Arch Bridge',
    image: '/sri-lanka-train.jpg',
    rating: 4.8,
    reviews: 312,
    highlights: ['Tea plantations', 'Nine Arch Bridge', 'Mountain trekking'],
    price: '$380',
    tags: ['ella', 'tea', 'highlands', 'train', 'bridge', 'trekking'],
  },
  {
    id: 3,
    name: 'Yala',
    subtitle: 'Wildlife Paradise',
    description: 'Safari adventure to spot leopards and diverse wildlife',
    image: '/sri-lanka-wildlife.jpg',
    rating: 4.7,
    reviews: 198,
    highlights: ['Safari tours', 'Wildlife viewing', 'Nature photography'],
    price: '$520',
    tags: ['yala', 'safari', 'wildlife', 'leopard', 'nature', 'adventure'],
  },
  {
    id: 4,
    name: 'Mirissa',
    subtitle: 'Beach Paradise',
    description: 'Golden beaches and whale watching opportunities',
    image: '/sri-lanka-beach.jpg',
    rating: 4.9,
    reviews: 456,
    highlights: ['Beach relaxation', 'Whale watching', 'Water sports'],
    price: '$350',
    tags: ['mirissa', 'beach', 'whale', 'surf', 'ocean', 'relaxation'],
  },
  {
    id: 5,
    name: 'Kandy',
    subtitle: 'Cultural Heart',
    description: 'Home to the sacred Temple of the Tooth and cultural performances',
    image: '/sri-lanka-temple.jpg',
    rating: 4.6,
    reviews: 267,
    highlights: ['Temple of the Tooth', 'Cultural shows', 'Local markets'],
    price: '$300',
    tags: ['kandy', 'temple', 'culture', 'sacred', 'history', 'market'],
  },
  {
    id: 6,
    name: 'Galle',
    subtitle: 'Historic Port City',
    description: 'Ancient fort walls and charming colonial architecture',
    image: '/sri-lanka-beach.jpg',
    rating: 4.8,
    reviews: 203,
    highlights: ['Galle Fort', 'Heritage walks', 'Sunset views'],
    price: '$400',
    tags: ['galle', 'fort', 'colonial', 'heritage', 'history', 'architecture'],
  },
];

function DestinationsList() {
  const searchParams = useSearchParams();
  const q = searchParams.get('q')?.toLowerCase().trim() ?? '';

  const filtered = q
    ? allDestinations.filter(
        (d) =>
          d.name.toLowerCase().includes(q) ||
          d.subtitle.toLowerCase().includes(q) ||
          d.description.toLowerCase().includes(q) ||
          d.tags.some((t) => t.includes(q))
      )
    : allDestinations;

  return (
    <main className="flex-1 px-6 md:px-16 py-12">
      {/* ── Page heading ── */}
      <div className="mb-10">
        <p className="text-accent font-semibold uppercase tracking-widest text-xs mb-2">Explore Sri Lanka</p>
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3">
          {q ? `Results for "${q}"` : 'Featured Destinations'}
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl">
          {q
            ? `${filtered.length} destination${filtered.length !== 1 ? 's' : ''} found`
            : "Explore our hand-picked destinations showcasing the incredible diversity of Sri Lanka"}
        </p>
      </div>

      {/* ── Empty state ── */}
      {filtered.length === 0 ? (
        <div className="text-center py-24">
          <p className="text-4xl mb-4">🔍</p>
          <h2 className="text-xl font-semibold text-foreground mb-2">No destinations found</h2>
          <p className="text-muted-foreground">Try searching for Sigiriya, Ella, Yala, Mirissa, Kandy or Galle.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((destination) => (
            /* luxury-card handles hover lift, gold border glow, and transitions */
            <div key={destination.id} className="luxury-card group overflow-hidden">

              {/* Destination image */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={destination.image}
                  alt={destination.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                {/* Rating badge */}
                <div className="absolute top-3 right-3 flex items-center gap-1 bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-full">
                  <Star size={12} className="text-accent fill-accent" />
                  <span className="text-white text-xs font-semibold">{destination.rating}</span>
                  <span className="text-white/60 text-xs">({destination.reviews})</span>
                </div>
                {/* Location pin */}
                <div className="absolute bottom-3 left-3 flex items-center gap-1">
                  <MapPin size={13} className="text-accent" />
                  <span className="text-white text-xs font-medium">Sri Lanka</span>
                </div>
              </div>

              {/* Card content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-0.5">{destination.name}</h3>
                <p className="text-accent text-sm font-medium mb-3">{destination.subtitle}</p>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{destination.description}</p>

                {/* Highlight tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {destination.highlights.map((h, i) => (
                    <span key={i} className="text-xs bg-secondary text-muted-foreground px-3 py-1 rounded-full">
                      {h}
                    </span>
                  ))}
                </div>

                {/* Price + CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div>
                    <p className="text-xs text-muted-foreground mb-0.5">Starting from</p>
                    <p className="text-lg font-bold text-accent">{destination.price}</p>
                  </div>
                  <button className="btn-gold px-5 py-2 text-sm">Explore</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}

export default function DestinationsPage() {
  return (
    <div className="flex-1 bg-background flex flex-col">
      <Header />
      <Suspense fallback={<div className="flex-1 flex items-center justify-center text-muted-foreground">Loading…</div>}>
        <DestinationsList />
      </Suspense>
    </div>
  );
}
