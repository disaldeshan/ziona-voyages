'use client';

import Header from '@/components/header-new';
import { Calendar, User, ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function BlogPage() {
  const articles = [
    {
      id: 1,
      title: 'Top 10 Must-Visit Destinations in Sri Lanka',
      excerpt: 'Discover the most breathtaking and culturally significant destinations that make Sri Lanka a traveler\'s paradise.',
      author: 'Sarah Mitchell',
      date: 'April 8, 2024',
      readTime: '8 min read',
      category: 'Destinations',
      image: '/sri-lanka-temple.jpg',
      slug: 'top-10-destinations'
    },
    {
      id: 2,
      title: 'The Best Time to Visit Sri Lanka: A Seasonal Guide',
      excerpt: 'Plan your perfect trip with our comprehensive guide to Sri Lanka\'s seasons, weather patterns, and festival schedules.',
      author: 'James Chen',
      date: 'April 5, 2024',
      readTime: '6 min read',
      category: 'Travel Tips',
      image: '/sri-lanka-beach.jpg',
      slug: 'best-time-to-visit'
    },
    {
      id: 3,
      title: 'Authentic Sri Lankan Cuisine: A Culinary Journey',
      excerpt: 'Explore the flavors, spices, and traditions of Sri Lankan cooking. From curry to kottu roti, taste the island\'s soul.',
      author: 'Emma Rodriguez',
      date: 'April 1, 2024',
      readTime: '7 min read',
      category: 'Food & Culture',
      image: '/sri-lanka-cuisine.jpg',
      slug: 'sri-lankan-cuisine'
    },
    {
      id: 4,
      title: 'Wildlife Safari in Yala National Park: A Thrilling Experience',
      excerpt: 'Experience the thrill of spotting leopards, elephants, and exotic birds in Sri Lanka\'s premier wildlife sanctuary.',
      author: 'David Smith',
      date: 'March 28, 2024',
      readTime: '9 min read',
      category: 'Adventure',
      image: '/sri-lanka-wildlife.jpg',
      slug: 'yala-safari-guide'
    },
    {
      id: 5,
      title: 'Train Journey Through Sri Lanka\'s Tea Plantations',
      excerpt: 'Take a scenic train ride through misty highlands and emerald tea gardens. One of the world\'s most beautiful train journeys.',
      author: 'Lisa Wong',
      date: 'March 25, 2024',
      readTime: '6 min read',
      category: 'Experiences',
      image: '/sri-lanka-train.jpg',
      slug: 'tea-plantation-train'
    },
    {
      id: 6,
      title: 'Luxury Resorts in Sri Lanka: Where to Stay in Style',
      excerpt: 'Discover the most exclusive beachfront and mountain resorts offering world-class amenities and unforgettable experiences.',
      author: 'Michael Brown',
      date: 'March 22, 2024',
      readTime: '7 min read',
      category: 'Accommodation',
      image: '/sri-lanka-resort.jpg',
      slug: 'luxury-resorts'
    },
    {
      id: 7,
      title: 'Cultural Immersion: Temple Visits and Local Traditions',
      excerpt: 'Connect with Sri Lanka\'s spiritual heart through ancient temples, meditation retreats, and cultural ceremonies.',
      author: 'Priya Sharma',
      date: 'March 19, 2024',
      readTime: '8 min read',
      category: 'Culture',
      image: '/sri-lanka-temple.jpg',
      slug: 'cultural-immersion'
    },
    {
      id: 8,
      title: 'Budget Travel in Sri Lanka: Experience More for Less',
      excerpt: 'Travel to Sri Lanka on a budget without compromising on quality. Our expert tips for affordable adventures.',
      author: 'Tom Wilson',
      date: 'March 16, 2024',
      readTime: '5 min read',
      category: 'Travel Tips',
      image: '/sri-lanka-beach.jpg',
      slug: 'budget-travel-guide'
    }
  ];

  const categories = ['All', 'Destinations', 'Travel Tips', 'Food & Culture', 'Adventure', 'Experiences', 'Accommodation', 'Culture'];

  return (
    <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <main className="flex-1 px-8 md:px-16 py-12">
            {/* Header Section */}
            <div className="mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Travel Blog</h1>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Stories, tips, and insights from our travelers and experts. Inspiration for your next adventure.
              </p>
            </div>

            {/* Category Filter */}
            <div className="mb-10 flex flex-wrap gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    cat === 'All'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-secondary text-foreground hover:bg-primary hover:text-primary-foreground'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article) => (
                <article
                  key={article.id}
                  className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-accent transition-all duration-300 hover:shadow-xl hover:shadow-accent/20 cursor-pointer"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors"></div>
                    <div className="absolute top-4 left-4">
                      <span className="inline-block px-3 py-1 bg-accent text-accent-foreground rounded-full text-xs font-semibold">
                        {article.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col h-full">
                    <h2 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors line-clamp-2">
                      {article.title}
                    </h2>

                    <p className="text-muted-foreground text-sm mb-4 flex-1 line-clamp-3">
                      {article.excerpt}
                    </p>

                    {/* Meta Information */}
                    <div className="space-y-3 pt-4 border-t border-border">
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <Calendar size={14} />
                            <span>{article.date}</span>
                          </div>
                          <span>{article.readTime}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <User size={14} />
                          <span>{article.author}</span>
                        </div>
                        <button className="p-2 rounded-full hover:bg-secondary transition-colors">
                          <ArrowRight size={18} className="text-accent" />
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Load More */}
            <div className="mt-12 text-center">
              <button className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-colors">
                Load More Articles
              </button>
            </div>
        </main>
    </div>
  );
}
