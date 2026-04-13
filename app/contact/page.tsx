'use client';

// ================================================================
// CONTACT PAGE — ZIONA VOYAGES
// ----------------------------------------------------------------
// Contact info sidebar + inquiry form. All inputs, labels, and
// cards use theme CSS variables for automatic dark ↔ light
// adaptation. The submit button uses the btn-gold luxury utility.
// ================================================================

import { useState } from 'react';
import Header from '@/components/header-new';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

// Contact info items — update values here
const contactInfo = [
  { icon: Mail,  title: 'Email',          value: 'info@zionavoyages.com',    details: 'We respond within 24 hours'            },
  { icon: Phone, title: 'Phone',          value: '+94 (0) 779 152 040',      details: 'Available Monday – Friday, 9 AM – 6 PM' },
  { icon: MapPin,title: 'Address',        value: 'Colombo, Sri Lanka',       details: 'Head office in the heart of the city'  },
  { icon: Clock, title: 'Business Hours', value: '9:00 AM – 6:00 PM',       details: 'Monday to Friday'                      },
];

// Social platform icons (SVG paths)
const socials = [
  {
    label: 'Facebook',
    href: '#',
    path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
  },
  {
    label: 'Instagram',
    href: '#',
    path: 'M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12c0 3.259.014 3.668.072 4.948.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24c3.259 0 3.668-.014 4.948-.072 1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.689.072-4.948 0-3.259-.014-3.667-.072-4.947-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z',
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/94779152040?text=Hello!%20I%20am%20interested%20in%20a%20trip%20to%20Sri%20Lanka.',
    path: 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z',
  },
];

// Shared input/select/textarea class — theme-aware via CSS variables
const fieldCls =
  'w-full px-4 py-3 bg-background border border-border rounded-xl text-foreground placeholder:text-muted-foreground ' +
  'focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-all duration-200 text-sm';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  }

  return (
    <div className="flex-1 bg-background flex flex-col">
      <Header />
      <main className="flex-1 px-6 md:px-16 py-12">

        {/* ── Page heading ── */}
        <div className="mb-12">
          <p className="text-accent font-semibold uppercase tracking-widest text-xs mb-2">Say Hello</p>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Get in Touch</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Have questions about our tours? We&apos;d love to hear from you. Contact us anytime and our team will respond shortly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* ── Info sidebar ── */}
          <div className="space-y-5">
            {contactInfo.map(({ icon: Icon, title, value, details }) => (
              /* luxury-card applies the themed hover lift + gold border glow */
              <div key={title} className="luxury-card p-5">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-accent/10 rounded-xl flex-shrink-0">
                    <Icon className="text-accent" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm mb-0.5">{title}</h3>
                    <p className="text-accent font-medium text-sm">{value}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{details}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Social links */}
            <div className="luxury-card p-5">
              <h3 className="font-semibold text-foreground text-sm mb-4">Follow Us</h3>
              <div className="flex gap-3">
                {socials.map(({ label, href, path }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg bg-accent/10 hover:bg-accent/20 flex items-center justify-center text-accent transition-colors duration-200"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d={path} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ── Contact form ── */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="luxury-card p-8 space-y-6">

              {/* Success toast */}
              {submitted && (
                <div className="p-4 bg-accent/15 border border-accent rounded-xl">
                  <p className="text-accent font-semibold text-sm">Thank you! We&apos;ll get back to you within 24 hours.</p>
                </div>
              )}

              {/* Name + Email row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Name</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Your name" className={fieldCls} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Email</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="your@email.com" className={fieldCls} />
                </div>
              </div>

              {/* Phone + Subject row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Phone</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+94 (0) XXX XXX XXX" className={fieldCls} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Subject</label>
                  <select name="subject" value={formData.subject} onChange={handleChange} required className={fieldCls}>
                    <option value="">Select a subject</option>
                    <option value="tour-inquiry">Tour Inquiry</option>
                    <option value="custom-package">Custom Package</option>
                    <option value="booking-support">Booking Support</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Tell us about your travel dreams…"
                  className={`${fieldCls} resize-none`}
                />
              </div>

              {/* Submit — btn-gold utility gives the gold glow CTA style */}
              <button type="submit" className="btn-gold inline-flex items-center gap-2 px-8 py-3 text-sm">
                <Send size={16} />
                Send Message
              </button>
            </form>
          </div>
        </div>

      </main>
    </div>
  );
}
