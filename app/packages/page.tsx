'use client';

import Header from '@/components/header-new';
import { Check, Users } from 'lucide-react';

export default function PackagesPage() {
  const packages = [
    {
      id: 1,
      name: 'Island Explorer',
      tagline: 'The perfect introduction to Sri Lanka',
      duration: '7 Days',
      price: '$1,200',
      perPerson: true,
      rating: 4.9,
      reviews: 328,
      highlights: [
        'Sigiriya Rock Fortress',
        'Tea plantations in Ella',
        'Beach time in Mirissa',
        'Temple visits in Kandy',
        'Professional tour guide',
        'All meals included',
        '5-star accommodation'
      ],
      popular: true
    },
    {
      id: 2,
      name: 'Wildlife Adventure',
      tagline: 'Safari and nature lover\'s dream',
      duration: '5 Days',
      price: '$950',
      perPerson: true,
      rating: 4.7,
      reviews: 245,
      highlights: [
        'Yala National Park safari',
        'Horton Plains trekking',
        'Udawalawe elephant safari',
        'Wildlife photography tours',
        'Expert naturalist guide',
        'All meals and transfers',
        '4-star accommodation'
      ],
      popular: false
    },
    {
      id: 3,
      name: 'Cultural Heritage',
      tagline: 'Immerse in ancient Sri Lankan culture',
      duration: '6 Days',
      price: '$1,100',
      perPerson: true,
      rating: 4.8,
      reviews: 312,
      highlights: [
        'Temple of the Tooth, Kandy',
        'Ancient kingdoms tour',
        'Cultural performances',
        'Traditional craft workshops',
        'Local village visits',
        'Authentic meals',
        '4-star accommodation'
      ],
      popular: false
    },
    {
      id: 4,
      name: 'Luxury Escape',
      tagline: 'Premium experience with exclusive perks',
      duration: '8 Days',
      price: '$2,500',
      perPerson: true,
      rating: 5.0,
      reviews: 89,
      highlights: [
        'Private villa accommodations',
        'Personal concierge service',
        'Helicopter tour',
        'Spa and wellness retreat',
        'Fine dining experiences',
        'Private yacht cruise',
        'Airport transfers'
      ],
      popular: true
    },
    {
      id: 5,
      name: 'Beach Relaxation',
      tagline: 'Unwind on pristine Sri Lankan shores',
      duration: '5 Days',
      price: '$850',
      perPerson: true,
      rating: 4.6,
      reviews: 401,
      highlights: [
        'Beachfront resort stay',
        'Water sports activities',
        'Sunset catamaran cruise',
        'Spa treatments',
        'Beach barbecue',
        'Snorkeling expeditions',
        'All meals included'
      ],
      popular: false
    },
    {
      id: 6,
      name: 'Adventure Trail',
      tagline: 'For the thrill-seeking explorer',
      duration: '7 Days',
      price: '$1,350',
      perPerson: true,
      rating: 4.9,
      reviews: 156,
      highlights: [
        'Mountain climbing expeditions',
        'Whitewater rafting',
        'Cave exploration',
        'Rock climbing',
        'Jungle trekking',
        'Adventure sports equipment',
        'Professional instructors'
      ],
      popular: true
    }
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <main className="flex-1 px-8 md:px-16 py-12">
            {/* Header Section */}
            <div className="mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Tour Packages</h1>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Choose from our carefully curated packages designed for different travel styles and interests
              </p>
            </div>

            {/* Packages Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {packages.map((pkg) => (
                <div
                  key={pkg.id}
                  className={`relative bg-card rounded-2xl p-8 border transition-all duration-300 ${
                    pkg.popular
                      ? 'border-accent shadow-xl shadow-accent/20 md:scale-105'
                      : 'border-border hover:border-accent'
                  }`}
                >
                  {/* Popular Badge */}
                  {pkg.popular && (
                    <div className="absolute -top-4 right-8 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  )}

                  {/* Package Name */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-foreground mb-2">{pkg.name}</h3>
                    <p className="text-accent text-sm">{pkg.tagline}</p>
                  </div>

                  {/* Duration and Rating */}
                  <div className="flex items-center justify-between mb-6 pb-6 border-b border-border">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <span className="text-sm">{pkg.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-sm font-semibold text-foreground">⭐ {pkg.rating}</span>
                      <span className="text-xs text-muted-foreground">({pkg.reviews})</span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-3 mb-8">
                    {pkg.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <Check size={18} className="text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Price and CTA */}
                  <div className="pt-6 border-t border-border">
                    <div className="mb-4">
                      <p className="text-xs text-muted-foreground mb-1">Starting at</p>
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-bold text-accent">{pkg.price}</span>
                        {pkg.perPerson && <span className="text-sm text-muted-foreground">per person</span>}
                      </div>
                    </div>
                    <button
                      className={`w-full py-3 rounded-full font-semibold transition-all duration-300 ${
                        pkg.popular
                          ? 'bg-accent text-accent-foreground hover:bg-accent/90'
                          : 'bg-primary text-primary-foreground hover:bg-primary/90'
                      }`}
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Info Section */}
            <div className="mt-16 bg-secondary rounded-2xl p-8 border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">Customizable Packages</h2>
              <p className="text-muted-foreground mb-6">
                All packages can be customized to match your preferences. Our travel experts are ready to create a bespoke itinerary just for you. Contact us today for a personalized quote!
              </p>
              <button className="px-6 py-3 bg-accent text-accent-foreground rounded-full font-semibold hover:bg-accent/90 transition-colors">
                Get Custom Quote
              </button>
            </div>
        </main>
    </div>
  );

}
