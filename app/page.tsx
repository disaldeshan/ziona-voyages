'use client';

import Header from '@/components/header-new';
import HeroSection from '@/components/hero-section';

export default function Home() {
  return (
    <div className="dark">
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <main className="flex-1">
          <HeroSection />
        </main>
      </div>
    </div>
  );
}
