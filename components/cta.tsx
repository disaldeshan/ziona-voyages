'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ArrowRight } from 'lucide-react'

export function CTA() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-balance">
          Ready to Plan Your Dream Vacation?
        </h2>

        {/* Subheading */}
        <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto text-balance">
          Get in touch with our travel specialists today and start planning your next unforgettable adventure.
        </p>

        {/* Form */}
        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-8">
          <Input
            type="email"
            placeholder="Enter your email"
            className="bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:border-white"
          />
          <Button className="bg-accent text-accent-foreground hover:bg-accent/90 flex items-center justify-center whitespace-nowrap">
            Get Started
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>

        {/* Additional Info */}
        <p className="text-sm text-primary-foreground/80">
          Join thousands of travelers who have experienced luxury travel with Ziona Voyages
        </p>
      </div>
    </section>
  )
}
