import type { Metadata } from 'next';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Read the terms and conditions governing the use of AutoScanOra services.',
};

function LegalSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4 pb-2 border-b border-slate-200 dark:border-slate-800">
        {title}
      </h2>
      <div className="text-slate-600 dark:text-slate-400 space-y-3 leading-relaxed [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_li]:text-slate-600 dark:[&_li]:text-slate-400">
        {children}
      </div>
    </div>
  );
}

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section className="pt-28 pb-16 bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Terms of <span className="gradient-text">Service</span>
            </h1>
            <p className="text-slate-500 dark:text-slate-400">Last updated: May 30, 2026</p>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
          <div className="max-w-3xl mx-auto">
            <LegalSection title="1. Acceptance of Terms">
              <p>By accessing or using DocuKit, you agree to be bound by these Terms of Service.</p>
            </LegalSection>

            <LegalSection title="2. Description of Service">
              <p>DocuKit provides document conversion and optimization tools. Users can upload files, process them, and download results.</p>
            </LegalSection>

            <LegalSection title="3. User Responsibilities">
              <p>You are responsible for all files you upload and ensuring you have the right to process them.</p>
            </LegalSection>

            <LegalSection title="4. Payments and Subscriptions">
              <p>Our order process is conducted by our online reseller Paddle.com. Paddle.com is the Merchant of Record for all our orders. Paddle provides all customer service inquiries and handles returns.</p>
            </LegalSection>

            <LegalSection title="5. Refund Policy">
              <p>We offer a 14-day money-back guarantee for Pro subscriptions. Contact us within 14 days of purchase for a full refund.</p>
            </LegalSection>

            <LegalSection title="6. Limitation of Liability">
              <p>DocuKit is provided "as is" without warranties. We are not liable for any damages arising from use of our service.</p>
            </LegalSection>

            <LegalSection title="7. Contact Information">
              <p>Email: support@docukit.site</p>
            </LegalSection>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

