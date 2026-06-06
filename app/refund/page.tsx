import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { CheckCircle, XCircle, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Refund Policy',
  description: 'Learn about AutoScanOra\'s 30-day money-back guarantee and refund process.',
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

export default function RefundPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section className="pt-28 pb-16 bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Refund <span className="gradient-text">Policy</span>
            </h1>
            <p className="text-slate-500 dark:text-slate-400">Last updated: May 30, 2026</p>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
          <div className="max-w-3xl mx-auto">
            <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 p-6 mb-10">
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                AutoScanOra is operated by Nexlify Labs Ltd. This Refund Policy applies to AutoScanOra services provided under Nexlify Labs Ltd.
              </p>
            </div>
            {/* Summary Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
              {[
                {
                  icon: CheckCircle,
                  title: '30-Day Guarantee',
                  desc: 'Full refund within 30 days of purchase',
                  color: 'text-emerald-600 dark:text-emerald-400',
                  bg: 'bg-emerald-50 dark:bg-emerald-950/30',
                },
                {
                  icon: Clock,
                  title: 'Fast Processing',
                  desc: 'Refunds processed within 5-10 business days',
                  color: 'text-blue-600 dark:text-blue-400',
                  bg: 'bg-blue-50 dark:bg-blue-950/30',
                },
                {
                  icon: XCircle,
                  title: 'No Questions',
                  desc: 'We honor refund requests without interrogation',
                  color: 'text-amber-600 dark:text-amber-400',
                  bg: 'bg-amber-50 dark:bg-amber-950/30',
                },
              ].map((card) => {
                const Icon = card.icon;
                return (
                  <div key={card.title} className={`rounded-2xl border border-slate-200 dark:border-slate-800 ${card.bg} p-5`}>
                    <Icon className={`w-6 h-6 ${card.color} mb-3`} />
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-1 text-sm">{card.title}</h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400">{card.desc}</p>
                  </div>
                );
              })}
            </div>

            <div className="mb-6 text-sm text-slate-600 dark:text-slate-400">
              <p>
                Our order process is conducted by our online reseller PSP/MOR.com. PSP/MOR.com is the Merchant of Record for all our orders. PSP/MOR provides all customer service inquiries and handles returns.
              </p>
            </div>

            <LegalSection title="1. 14-Day Money-Back Guarantee">
              <p>
                We offer a 14-day money-back guarantee for all Pro subscriptions. If you're not satisfied, contact us within 14 days of your purchase date for a full refund.
              </p>
            </LegalSection>

            <LegalSection title="2. How to Request a Refund">
              <p>
                To request a refund, email us at <a href="mailto: info@autoscanora.com" className="text-blue-600 dark:text-blue-400 hover:underline"> info@autoscanora.com</a> with your order details and reason for refund.
              </p>
            </LegalSection>

            <LegalSection title="3. Processing Time">
              <p>
                Refunds are processed within 5-10 business days and will be credited to your original payment method.
              </p>
            </LegalSection>

            <LegalSection title="4. Free Tier">
              <p>
                Free tier users are not eligible for refunds as no payment is collected.
              </p>
            </LegalSection>

            <LegalSection title="5. Partial Refunds">
              <p>
                Partial refunds may be issued at our discretion for unused portions of subscription terms.
              </p>
            </LegalSection>

            <LegalSection title="6. Contact for Refunds">
              <p>
                Email: <a href="mailto:refunds@AutoScanOra.com" className="text-blue-600 dark:text-blue-400 hover:underline">refunds@AutoScanOra.com</a>
              </p>
            </LegalSection>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
