'use client';

import Header from '@/components/header-new';
import { MapPin, Star } from 'lucide-react';
import Image from 'next/image';

export default function DestinationsPage() {
  const destinations = [
    {
      id: 1,
      name: 'Sigiriya',
      subtitle: 'Ancient Rock Fortress',
      description: 'Climb the legendary rock fortress with stunning panoramic views',
      image: '/sri-lanka-temple.jpg',
      rating: 4.9,
      reviews: 284,
      highlights: ['Ancient ruins', 'Panoramic views', 'Photography hotspot'],
      price: '$450'
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
      price: '$380'
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
      price: '$520'
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
      price: '$350'
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
      price: '$300'
    },
    {
      id: 6,
      name: 'Galle',
      subtitle: 'Historic Port City',
      description: 'Ancient fort walls and charming colonial architecture',
      image: '/sri-lanka-beach.jpg',
      rating: 4.8,
      reviews: 203,
      highlights: ['Fort Fort Fort', 'Heritage walks', 'Sunset views'],
      price: '$400'
    }
  ];

  return (
    <div className="dark">
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <main className="flex-1 px-8 md:px-16 py-12">
            {/* Header Section */}
            <div className="mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Featured Destinations</h1>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Explore our hand-picked destinations that showcase the incredible diversity of Sri Lanka
              </p>
            </div>

            {/* Destinations Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {destinations.map((destination) => (
                <div
                  key={destination.id}
                  className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-accent transition-all duration-300 hover:shadow-xl hover:shadow-accent/20"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={destination.image}
                      alt={destination.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-2xl font-bold text-foreground">{destination.name}</h3>
                        <p className="text-accent text-sm">{destination.subtitle}</p>
                      </div>
                      <div className="flex items-center gap-1 bg-accent/20 px-3 py-1 rounded-full">
                        <Star size={16} className="text-accent fill-accent" />
                        <span className="text-sm font-semibold text-foreground">{destination.rating}</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground text-sm mb-4">{destination.description}</p>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {destination.highlights.map((highlight, idx) => (
                        <span key={idx} className="text-xs bg-secondary px-3 py-1 rounded-full text-foreground">
                          {highlight}
                        </span>
                      ))}
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">Starting from</p>
                        <p className="text-xl font-bold text-accent">{destination.price}</p>
                      </div>
                      <button className="px-4 py-2 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-colors">
                        Explore
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
        </main>
      </div>
    </div>
  );
}
