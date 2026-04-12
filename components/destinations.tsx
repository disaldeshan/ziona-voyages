'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ArrowRight, MapPin } from 'lucide-react'

const destinations = [
  {
    id: 1,
    name: 'Tropical Paradise',
    location: 'Maldives',
    description: 'Pristine white-sand beaches and crystal-clear turquoise waters',
    image: '/hero-destination.jpg',
    price: 'From $4,999',
  },
  {
    id: 2,
    name: 'Cultural Heritage',
    location: 'Thailand',
    description: 'Ancient temples, vibrant culture, and authentic experiences',
    image: '/destination-1.jpg',
    price: 'From $2,799',
  },
  {
    id: 3,
    name: 'Mountain Adventure',
    location: 'Switzerland',
    description: 'Majestic alpine peaks and breathtaking panoramic views',
    image: '/destination-2.jpg',
    price: 'From $3,499',
  },
]

export function Destinations() {
  return (
    <section id="destinations" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
            Featured Destinations
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Handpicked locations curated for unforgettable luxury experiences
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {destinations.map((destination) => (
            <Card key={destination.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={destination.image}
                  alt={destination.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />

                {/* Badge */}
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                  {destination.price}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-1 text-primary mb-2">
                  <MapPin size={16} />
                  <span className="text-sm font-medium">{destination.location}</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">{destination.name}</h3>
                <p className="text-muted-foreground mb-6">{destination.description}</p>

                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 group">
                  Explore
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary/10"
          >
            View All Destinations
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
