'use client';

import Image from 'next/image';
import { ArrowRight, Music, Home, Anchor, Plane } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative w-full h-[calc(100vh-73px)] bg-background overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/hero-sri-lanka.jpg"
          alt="Sri Lanka tea plantations adventure"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content Container */}
      <div className="relative h-full flex flex-col justify-center px-8 md:px-16 py-16">
        {/* Main Heading */}
        <div className="max-w-2xl mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Experience the Pearl of the Indian Ocean
          </h1>
          <p className="text-lg text-gray-200">Discover Sri Lanka with Ziona Voyages. Unforgettable journeys through pristine beaches, ancient temples, and lush highlands.</p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
          {/* Sri Lankan Cuisine Card */}
          <div className="group bg-secondary/70 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-secondary/80 transition-all cursor-pointer">
            <div className="flex items-center gap-4 mb-3">
              <div className="p-3 rounded-full bg-accent/20 group-hover:bg-accent/30 transition-colors">
                <Music className="text-accent" size={24} />
              </div>
              <div>
                <h3 className="text-white font-semibold">Authentic Cuisine</h3>
                <p className="text-gray-300 text-sm">Experience Sri Lankan spices & flavors</p>
              </div>
            </div>
          </div>

          {/* Luxury Resorts Card */}
          <div className="group bg-secondary/70 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-secondary/80 transition-all cursor-pointer">
            <div className="flex items-center gap-4 mb-3">
              <div className="p-3 rounded-full bg-accent/20 group-hover:bg-accent/30 transition-colors">
                <Home className="text-accent" size={24} />
              </div>
              <div>
                <h3 className="text-white font-semibold">Luxury Resorts</h3>
                <p className="text-gray-300 text-sm">5-star beachfront accommodations</p>
              </div>
            </div>
          </div>

          {/* Wildlife Safari Card */}
          <div className="group bg-secondary/70 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-secondary/80 transition-all cursor-pointer">
            <div className="flex items-center gap-4 mb-3">
              <div className="p-3 rounded-full bg-accent/20 group-hover:bg-accent/30 transition-colors">
                <Anchor className="text-accent" size={24} />
              </div>
              <div>
                <h3 className="text-white font-semibold">Wildlife Safari</h3>
                <p className="text-gray-300 text-sm">Explore Yala National Park adventures</p>
              </div>
            </div>
          </div>

          {/* Train Journey Card */}
          <div className="group bg-secondary/70 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-secondary/80 transition-all cursor-pointer">
            <div className="flex items-center gap-4 mb-3">
              <div className="p-3 rounded-full bg-accent/20 group-hover:bg-accent/30 transition-colors">
                <Plane className="text-accent" size={24} />
              </div>
              <div>
                <h3 className="text-white font-semibold">Train Journeys</h3>
                <p className="text-gray-300 text-sm">Scenic routes through tea plantations</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-12">
          <button className="group bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-full font-semibold flex items-center gap-2 transition-all hover:gap-3">
            Explore more
            <ArrowRight size={20} />
          </button>
        </div>

        {/* Social Links */}
        <div className="absolute bottom-8 left-8 md:left-16 flex gap-4">
          <a href="#" className="text-white/60 hover:text-white transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>
          <a href="#" className="text-white/60 hover:text-white transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 002.856-3.915a9.958 9.958 0 01-2.828.856a4.958 4.958 0 00-8.86 3.36c0 .39.045.765.144 1.124a14.07 14.07 0 01-10.491-5.289 4.93 4.93 0 00-.666 2.489c0 1.72.87 3.213 2.188 4.096a4.929 4.929 0 01-2.245-.616v.06a4.923 4.923 0 003.946 4.827a4.996 4.996 0 01-2.212.085a4.936 4.936 0 004.604 3.417a9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
            </svg>
          </a>
          <a href="#" className="text-white/60 hover:text-white transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.441 16.892c-2.102.144-6.784.144-8.883 0C5.282 16.736 5.017 15.622 5 12c.017-3.629.285-4.736 2.558-4.892 2.099-.144 6.782-.144 8.883 0C18.718 7.264 18.982 8.378 19 12c-.018 3.629-.285 4.736-2.559 4.892zM9.5 15.5v-7l5.5 3.5-5.5 3.5z" />
            </svg>
          </a>
          <a href="#" className="text-white/60 hover:text-white transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m5.521 17.34c-.24.65-.934 1.035-1.667.1-.143-.117-1.41-1.073-4.561-1.231-2.752.156-3.898 1.645-4.066 2.128-.14.35-.42.566-.843.566-.5 0-.949-.31-1.227-.844-.096-.169-1.506-4.061-.43-7.95 1.075-3.889 3.368-6.066 6.28-6.066 1.91 0 3.744.871 5.744 2.72.419.405.429 1.077.02 1.486l-2.668 2.643c-.419.41-.408 1.081.02 1.486.609.637 1.019 1.584 1.019 2.539 0 .87-.21 1.692-.619 2.399l-.777 1.482c-.128.25-.158.61-.058.945.1.331.381.63.712.686.331.056.76-.093.953-.261 3.686-2.859 5.348-5.639 6.956-10.966.659-1.667-1.221-2.551-2.628-1.295-5.123 5.17-6.457 8.726-6.705 9.938-.068.346.33.611.668.611.305 0 .735-.202.882-.461.043-.074 1.823-3.74 4.6-8.269.526-.9-.436-2.08-1.382-1.437z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
