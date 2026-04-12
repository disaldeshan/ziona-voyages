'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background Image */}
      <Image
        src="/hero-destination.jpg"
        alt="Luxury travel destination"
        fill
        className="object-cover absolute inset-0 -z-10"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 -z-10" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="space-y-6">
          {/* Tagline */}
          <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
            <p className="text-sm font-medium text-white">✨ Discover Extraordinary Experiences</p>
          </div>

          {/* Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-balance leading-tight">
            Explore the World&apos;s Most Beautiful Destinations
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto text-balance">
            Curated luxury travel experiences crafted to inspire. From pristine beaches to majestic mountains, discover unforgettable adventures with Ziona Voyages.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8">
              Explore Destinations
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white/10 hover:text-white text-base px-8"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center space-y-2 animate-bounce">
          <span className="text-white text-sm">Scroll to explore</span>
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
