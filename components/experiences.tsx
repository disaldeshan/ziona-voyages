'use client'

import Image from 'next/image'
import { Card } from '@/components/ui/card'
import { Zap, Users, Award, Globe } from 'lucide-react'

const experiences = [
  {
    icon: Globe,
    title: 'Global Network',
    description: 'Access to exclusive properties and experiences across 150+ countries',
  },
  {
    icon: Award,
    title: 'Expert Curators',
    description: 'Our team of travel specialists with 20+ years of experience',
  },
  {
    icon: Users,
    title: 'Personal Concierge',
    description: 'Dedicated 24/7 support for all your travel needs',
  },
  {
    icon: Zap,
    title: 'Seamless Planning',
    description: 'From booking to arrival, every detail is perfectly arranged',
  },
]

export function Experiences() {
  return (
    <section id="experiences" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
            Why Choose Ziona Voyages
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Premium service excellence in every aspect of your journey
          </p>
        </div>

        {/* Experience Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {experiences.map((exp, index) => {
            const Icon = exp.icon
            return (
              <Card key={index} className="p-8 text-center hover:shadow-lg transition-shadow duration-300 group">
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-3">{exp.title}</h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed">{exp.description}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
