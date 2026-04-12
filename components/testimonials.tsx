'use client'

import { Card } from '@/components/ui/card'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Travel Enthusiast',
    content: 'Ziona Voyages transformed my vacation dreams into reality. Every detail was perfect, from accommodation to local experiences.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Business Executive',
    content: 'Professional, reliable, and incredibly attentive. The personal concierge service is worth every penny.',
    rating: 5,
  },
  {
    name: 'Emma Williams',
    role: 'Adventure Seeker',
    content: 'From planning to execution, Ziona Voyages exceeded all my expectations. Highly recommend!',
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
            Loved by Travelers Worldwide
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Real experiences from our valued clients
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8 flex flex-col hover:shadow-lg transition-shadow duration-300">
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground mb-6 flex-1 text-sm leading-relaxed">{testimonial.content}</p>

              {/* Author */}
              <div>
                <p className="font-bold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
