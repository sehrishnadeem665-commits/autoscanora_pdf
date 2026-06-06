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

export default function PaymentAutoScanOraPricingPage() {
    const [yearly, setYearly] = useState(false);

    return (
        <>
            <Header />
            <main className="min-h-screen">
                <section className="pt-28 pb-16 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                            Choose Your<span className="gradient-text">Plan</span>
                        </h1>
                        {/* <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl mx-auto mb-8">
              This is the alternate pricing page from the Payment.AutoScanOra version, showing the same plan details and subscription options.
            </p> */}

                    </div>
                </section>

                <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
                    <div className="max-w-5xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {plans.map((plan) => (
                                <div
                                    key={plan.name}
                                    className={`relative rounded-2xl border p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${plan.popular
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
                                        {plan.features.map((feature) => (
                                            <li key={feature} className="flex items-start gap-3">
                                                <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${plan.color} flex items-center justify-center shrink-0 mt-0.5`}>
                                                    <Check className="w-3 h-3 text-white" />
                                                </div>
                                                <span className="text-sm text-slate-600 dark:text-slate-400">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <Button
                                        asChild
                                        className={`w-full bg-gradient-to-r ${plan.color} text-white border-0 hover:opacity-90 transition-opacity shadow-lg`}
                                        size="lg"
                                    >
                                        <Link href={plan.name === 'Premium' ? '/checkout/premium' : '/pricing/paymentAutoScanOra'}>
                                            {plan.cta}
                                        </Link>
                                    </Button>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

