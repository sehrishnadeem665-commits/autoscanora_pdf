'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Check, Zap } from 'lucide-react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';

const plans = [
  {
    name: 'Basic',
    monthlyPrice: '$29',
    yearlyPrice: '$29',
    period: '/month',
    features: [
      'Essential PDF & image tools',
      'Merge, split, compress, convert PDF',
      'Image format conversion',
      '5 files per day',
      '10MB max file size',
    ],
    popular: false,
    cta: 'Get Basic',
    color: 'from-slate-600 to-slate-700',
  },
  {
    name: 'Premium',
    monthlyPrice: '$59',
    yearlyPrice: '$49',
    period: '/month',
    features: [
      'Unlimited files',
      '50MB max file size',
      'All PDF & image tools',
      'Faster processing',
      'Priority support',
    ],
    popular: true,
    cta: 'Get Premium',
    color: 'from-blue-600 to-cyan-500',
  },
  {
    name: 'Ultimate',
    monthlyPrice: '$89',
    yearlyPrice: '$89',
    period: '/year',
    features: [
      'Save 17% vs monthly',
      'All Premium features',
      'Priority support',
      'Cancel anytime',
      'Best value for power users',
    ],
    popular: false,
    cta: 'Get Ultimate',
    color: 'from-emerald-600 to-teal-500',
  },
];

const faqs = [
  {
    q: 'Can I cancel my subscription at any time?',
    a: 'Yes, you can cancel your subscription at any time. Your access will continue until the end of your billing period.',
  },
  {
    q: 'How do I upgrade or downgrade my plan?',
    a: 'You can change your plan from your account dashboard at any time. Upgrades take effect immediately; downgrades apply at the next billing cycle.',
  },
  {
    q: 'Is there a free trial?',
    a: 'Our Basic plan is free with limited usage. You can upgrade anytime to unlock more features.',
  },
  {
    q: 'What payment methods are accepted?',
    a: 'We accept all major credit and debit cards, PayPal, and other methods via Paddle, our payment processor.',
  },
];

export default function PricingPage() {
  const [yearly, setYearly] = useState(false);

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="pt-28 pb-16 bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Choose the Perfect <span className="gradient-text">Plan</span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl mx-auto mb-10">
              Get access to powerful PDF and image tools with flexible pricing.
            </p>

            {/* Toggle */}
            <div className="inline-flex items-center gap-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full p-1.5">
              <button
                onClick={() => setYearly(false)}
                className={`px-5 py-2 text-sm font-medium rounded-full transition-all ${
                  !yearly
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setYearly(true)}
                className={`px-5 py-2 text-sm font-medium rounded-full transition-all flex items-center gap-2 ${
                  yearly
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                Yearly
                <span className="text-xs bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-400 px-1.5 py-0.5 rounded-full font-semibold">
                  Save 17%
                </span>
              </button>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`relative rounded-2xl border p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                    plan.popular
                      ? 'border-blue-500 shadow-xl shadow-blue-500/20 bg-white dark:bg-slate-900'
                      : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs font-semibold px-4 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
                        <Zap className="w-3 h-3" />
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="mb-6">
                    <span className={`inline-block text-xs font-semibold uppercase tracking-wider mb-3 bg-gradient-to-r ${plan.color} bg-clip-text text-transparent`}>
                      {plan.name}
                    </span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-5xl font-bold text-slate-900 dark:text-white">
                        {yearly ? plan.yearlyPrice : plan.monthlyPrice}
                      </span>
                      <span className="text-slate-500 dark:text-slate-400 text-sm">
                        {plan.name === 'Ultimate' ? '/year' : '/month'}
                      </span>
                    </div>
                    {yearly && plan.name !== 'Ultimate' && (
                      <p className="text-xs text-emerald-600 dark:text-emerald-400 mt-1 font-medium">
                        Billed annually — save 17%
                      </p>
                    )}
                  </div>

                  <ul className="space-y-3.5 mb-8">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-3">
                        <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${plan.color} flex items-center justify-center shrink-0 mt-0.5`}>
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-sm text-slate-600 dark:text-slate-400">{f}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full bg-gradient-to-r ${plan.color} text-white border-0 hover:opacity-90 transition-opacity shadow-lg`}
                    size="lg"
                  >
                    {plan.cta}
                  </Button>
                </div>
              ))}
            </div>

            {/* Guarantee */}
            <div className="text-center mt-12 p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
              <p className="text-sm text-slate-600 dark:text-slate-400">
                <span className="font-semibold text-slate-900 dark:text-white">30-day money-back guarantee.</span>{' '}
                Not satisfied? Get a full refund, no questions asked. See our{' '}
                <Link href="/refund" className="text-blue-600 dark:text-blue-400 hover:underline">
                  Refund Policy
                </Link>{' '}
                for details.
              </p>
            </div>
          </div>
        </section>

        {/* Features Comparison (simple) */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-950">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">
              Compare Features
            </h2>
            <div className="overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800">
              <table className="w-full">
                <thead>
                  <tr className="bg-slate-100 dark:bg-slate-800">
                    <th className="text-left px-6 py-4 text-sm font-semibold text-slate-700 dark:text-slate-300">Feature</th>
                    <th className="text-center px-4 py-4 text-sm font-semibold text-slate-700 dark:text-slate-300">Basic</th>
                    <th className="text-center px-4 py-4 text-sm font-semibold text-blue-600 dark:text-blue-400">Premium</th>
                    <th className="text-center px-4 py-4 text-sm font-semibold text-slate-700 dark:text-slate-300">Ultimate</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                  {[
                    ['Files per day', '5', 'Unlimited', 'Unlimited'],
                    ['Max file size', '10MB', '50MB', '100MB'],
                    ['All PDF tools', '✓', '✓', '✓'],
                    ['All image tools', '✓', '✓', '✓'],
                    ['Priority processing', '–', '✓', '✓'],
                    ['Priority support', '–', '✓', '✓'],
                    ['Batch processing', '–', '–', '✓'],
                  ].map(([feature, basic, premium, ultimate]) => (
                    <tr key={feature} className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                      <td className="px-6 py-4 text-sm text-slate-700 dark:text-slate-300">{feature}</td>
                      <td className="px-4 py-4 text-center text-sm text-slate-500 dark:text-slate-400">{basic}</td>
                      <td className="px-4 py-4 text-center text-sm font-medium text-blue-600 dark:text-blue-400">{premium}</td>
                      <td className="px-4 py-4 text-center text-sm text-emerald-600 dark:text-emerald-400">{ultimate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">
              Pricing FAQ
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <details
                  key={idx}
                  className="group rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/50 overflow-hidden"
                >
                  <summary className="flex items-center justify-between px-6 py-5 cursor-pointer list-none">
                    <span className="font-medium text-slate-900 dark:text-white pr-4">{faq.q}</span>
                    <span className="text-slate-400 group-open:rotate-45 transition-transform text-xl shrink-0">+</span>
                  </summary>
                  <div className="px-6 pb-5">
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Paddle notice */}
        <section className="py-8 px-4 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs text-slate-400 leading-relaxed">
              Our order process is conducted by our online reseller Paddle.com. Paddle.com is the Merchant of Record for all our orders. Paddle provides all customer service inquiries and handles payment processing.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
