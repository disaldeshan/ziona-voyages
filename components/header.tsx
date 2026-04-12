'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-md z-50 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">Z</span>
            </div>
            <span className="font-bold text-lg text-primary hidden sm:inline">Ziona Voyages</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#destinations" className="text-foreground hover:text-primary transition-colors">
              Destinations
            </Link>
            <Link href="#experiences" className="text-foreground hover:text-primary transition-colors">
              Experiences
            </Link>
            <Link href="#about" className="text-foreground hover:text-primary transition-colors">
              About
            </Link>
            <Link href="#contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              Plan Your Trip
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-3 border-t border-border pt-4">
            <Link href="#destinations" className="block text-foreground hover:text-primary transition-colors py-2">
              Destinations
            </Link>
            <Link href="#experiences" className="block text-foreground hover:text-primary transition-colors py-2">
              Experiences
            </Link>
            <Link href="#about" className="block text-foreground hover:text-primary transition-colors py-2">
              About
            </Link>
            <Link href="#contact" className="block text-foreground hover:text-primary transition-colors py-2">
              Contact
            </Link>
            <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
              Plan Your Trip
            </Button>
          </div>
        )}
      </div>
    </header>
  )
}
