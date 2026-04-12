'use client';

import { useState } from 'react';
import Header from '@/components/header-new';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'info@zionavoyages.com',
      details: 'We respond within 24 hours'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+94 (0) 712 345 678',
      details: 'Available Monday - Friday, 9AM - 6PM'
    },
    {
      icon: MapPin,
      title: 'Address',
      value: 'Colombo, Sri Lanka',
      details: 'Head office in the heart of the city'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      value: '9:00 AM - 6:00 PM',
      details: 'Monday to Friday'
    }
  ];

  return (
    <div className="dark">
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <main className="flex-1 px-8 md:px-16 py-12">
            {/* Header Section */}
            <div className="mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Get in Touch</h1>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Have questions about our tours? We&apos;d love to hear from you. Contact us anytime and our team will get back to you shortly.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Information */}
              <div className="lg:col-span-1 space-y-6">
                {contactInfo.map((info, idx) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={idx} className="bg-card p-6 rounded-2xl border border-border hover:border-accent transition-all">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-primary/20 rounded-lg">
                          <IconComponent className="text-primary" size={24} />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                          <p className="text-accent font-medium mb-1">{info.value}</p>
                          <p className="text-xs text-muted-foreground">{info.details}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}

                {/* Social Links */}
                <div className="bg-card p-6 rounded-2xl border border-border">
                  <h3 className="font-semibold text-foreground mb-4">Follow Us</h3>
                  <div className="flex gap-3">
                    <a href="#" className="w-10 h-10 rounded-lg bg-primary/20 hover:bg-primary/30 flex items-center justify-center text-primary transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </a>
                    <a href="#" className="w-10 h-10 rounded-lg bg-primary/20 hover:bg-primary/30 flex items-center justify-center text-primary transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 002.856-3.915a9.958 9.958 0 01-2.828.856a4.958 4.958 0 00-8.86 3.36c0 .39.045.765.144 1.124a14.07 14.07 0 01-10.491-5.289 4.93 4.93 0 00-.666 2.489c0 1.72.87 3.213 2.188 4.096a4.929 4.929 0 01-2.245-.616v.06a4.923 4.923 0 003.946 4.827a4.996 4.996 0 01-2.212.085a4.936 4.936 0 004.604 3.417a9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                    </a>
                    <a href="#" className="w-10 h-10 rounded-lg bg-primary/20 hover:bg-primary/30 flex items-center justify-center text-primary transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.441 16.892c-2.102.144-6.784.144-8.883 0C5.282 16.736 5.017 15.622 5 12c.017-3.629.285-4.736 2.558-4.892 2.099-.144 6.782-.144 8.883 0C18.718 7.264 18.982 8.378 19 12c-.018 3.629-.285 4.736-2.559 4.892zM9.5 15.5v-7l5.5 3.5-5.5 3.5z" />
                      </svg>
                    </a>
                    <a href="#" className="w-10 h-10 rounded-lg bg-primary/20 hover:bg-primary/30 flex items-center justify-center text-primary transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m5.521 17.34c-.24.65-.934 1.035-1.667.1-.143-.117-1.41-1.073-4.561-1.231-2.752.156-3.898 1.645-4.066 2.128-.14.35-.42.566-.843.566-.5 0-.949-.31-1.227-.844-.096-.169-1.506-4.061-.43-7.95 1.075-3.889 3.368-6.066 6.28-6.066 1.91 0 3.744.871 5.744 2.72.419.405.429 1.077.02 1.486l-2.668 2.643c-.419.41-.408 1.081.02 1.486.609.637 1.019 1.584 1.019 2.539 0 .87-.21 1.692-.619 2.399l-.777 1.482c-.128.25-.158.61-.058.945.1.331.381.63.712.686.331.056.76-.093.953-.261 3.686-2.859 5.348-5.639 6.956-10.966.659-1.667-1.221-2.551-2.628-1.295-5.123 5.17-6.457 8.726-6.705 9.938-.068.346.33.611.668.611.305 0 .735-.202.882-.461.043-.074 1.823-3.74 4.6-8.269.526-.9-.436-2.08-1.382-1.437z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <form onSubmit={handleSubmit} className="bg-card p-8 rounded-2xl border border-border">
                  {submitted && (
                    <div className="mb-6 p-4 bg-accent/20 border border-accent rounded-lg">
                      <p className="text-accent font-semibold">Thank you! We&apos;ll get back to you soon.</p>
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    {/* Name */}
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Your name"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="your@email.com"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="+94 (0) XXX XXX XXX"
                      />
                    </div>

                    {/* Subject */}
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Subject</label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      >
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
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                      placeholder="Tell us about your travel dreams..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full md:w-auto px-8 py-3 bg-accent text-accent-foreground rounded-full font-semibold hover:bg-accent/90 transition-colors flex items-center justify-center gap-2"
                  >
                    <Send size={18} />
                    Send Message
                  </button>
                </form>
              </div>
            </div>
        </main>
      </div>
    </div>
  );
}
