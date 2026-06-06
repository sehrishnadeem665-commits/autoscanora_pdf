import type { Metadata } from 'next';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { HeroSection } from '@/components/home/hero-section';
import { ToolCategoriesSection } from '@/components/home/tool-categories-section';
import { FeaturesSection } from '@/components/home/features-section';
import { HowItWorksSection } from '@/components/home/how-it-works-section';
import { StatsSection } from '@/components/home/stats-section';
import { TestimonialsSection } from '@/components/home/testimonials-section';
import { FaqPreviewSection } from '@/components/home/faq-preview-section';
import { PricingPreviewSection } from '@/components/home/pricing-preview-section';

export const metadata: Metadata = {
  title: 'AutoScanOra – Powerful PDF & Image Tools for Everyone',
  description:
    'Convert, merge, split, compress, and optimize PDF and image files online. Fast, secure, no software needed.',
};

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ToolCategoriesSection />
        <FeaturesSection />
        <HowItWorksSection />
        <StatsSection />
        <TestimonialsSection />
        <PricingPreviewSection />
        <FaqPreviewSection />
      </main>
      <Footer />
    </>
  );
}

