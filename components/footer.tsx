'use client'

import Link from 'next/link'
import { Facebook, Instagram, Twitter, Mail, Phone } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-foreground font-bold text-lg">Z</span>
              </div>
              <span className="font-bold text-lg text-background">Ziona Voyages</span>
            </div>
            <p className="text-background/80 text-sm">
              Premium luxury travel experiences crafted for extraordinary moments.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-background mb-4">Destinations</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-background/80 hover:text-background transition-colors">
                  Asia
                </Link>
              </li>
              <li>
                <Link href="#" className="text-background/80 hover:text-background transition-colors">
                  Europe
                </Link>
              </li>
              <li>
                <Link href="#" className="text-background/80 hover:text-background transition-colors">
                  Americas
                </Link>
              </li>
              <li>
                <Link href="#" className="text-background/80 hover:text-background transition-colors">
                  Africa
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-background mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-background/80 hover:text-background transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-background/80 hover:text-background transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="#" className="text-background/80 hover:text-background transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-background/80 hover:text-background transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-background mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-background/80">
                <Phone size={16} />
                +1 (555) 123-4567
              </li>
              <li className="flex items-center gap-2 text-background/80">
                <Mail size={16} />
                hello@zionavoyages.com
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/20 pt-8 mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <p className="text-sm text-background/80">
            © 2024 Ziona Voyages. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex gap-6">
            <Link href="#" className="text-background/80 hover:text-background transition-colors">
              <Facebook size={20} />
            </Link>
            <Link href="#" className="text-background/80 hover:text-background transition-colors">
              <Instagram size={20} />
            </Link>
            <Link href="#" className="text-background/80 hover:text-background transition-colors">
              <Twitter size={20} />
            </Link>
          </div>

          {/* Legal Links */}
          <div className="flex gap-4 text-sm">
            <Link href="#" className="text-background/80 hover:text-background transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-background/80 hover:text-background transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
