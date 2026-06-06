import Link from 'next/link';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const plans = [
  {
    name: 'Basic',
    price: '$29',
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
    href: '/pricing',
  },
  {
    name: 'Premium',
    price: '$59',
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
    href: '/pricing',
  },
  {
    name: 'Ultimate',
    price: '$89',
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
    href: '/pricing',
  },
];

export function PricingPreviewSection() {
  return (
    <section className="section-padding bg-slate-50 dark:bg-slate-950">
      <div className="container-max">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Simple, transparent{' '}
            <span className="gradient-text">pricing</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Choose the plan that works best for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${
                plan.popular
                  ? 'border-blue-500 bg-white dark:bg-slate-900 shadow-xl shadow-blue-500/20'
                  : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs font-semibold px-4 py-1.5 rounded-full shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-slate-900 dark:text-white">
                    {plan.price}
                  </span>
                  <span className="text-slate-500 dark:text-slate-400">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">{f}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${
                  plan.popular
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white border-0 shadow-lg shadow-blue-500/25'
                    : 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 border-0'
                }`}
                asChild
              >
                <Link href={plan.href}>{plan.cta}</Link>
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button variant="ghost" className="text-blue-600 dark:text-blue-400" asChild>
            <Link href="/pricing">
              Compare all features
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
