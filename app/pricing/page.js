'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { usePaddle } from '../../hooks/use-paddle';

export default function PricingPage() {
  const router = useRouter();
  const { paddleReady, error: paddleError } = usePaddle();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const displayError = error || paddleError || '';

  const handleNavigateToCheckout = (plan) => {
    // Map plan names to alt page routes
    const planRouteMap = {
      'Basic': 'alt-basic',
      'Standard': 'alt-premium',
      'Premium': 'alt-ultimate'
    };
    
    const altRoute = planRouteMap[plan.name];
    if (altRoute) {
      router.push(`/pricing/${altRoute}`);
    }
  };

  const handleCheckout = (plan) => {
    if (!paddleReady) {
      setError('Payment system not ready. Please wait...');
      return;
    }

    if (!window.Paddle) {
      setError('Paddle not available');
      return;
    }

    setLoading(true);
    setError('');

    try {
      console.log('🚀 Opening checkout for:', plan.name, 'Price ID:', plan.priceId);

      // ✅ SIRF PRICE ID USE KARO - Product ID MAT DALO
      window.Paddle.Checkout.open({
        items: [{ priceId: plan.priceId, quantity: 1 }],
        successUrl: `${window.location.origin}/dashboard?payment=success`,
        cancelUrl: `${window.location.origin}/pricing?payment=cancelled`,
        settings: {
          theme: 'light',
          displayMode: 'overlay',
        },
      });
    } catch (err) {
      console.error('❌ Checkout error:', err);
      setError('Checkout error: ' + (err.message || 'Unable to open checkout'));
    } finally {
      setLoading(false);
    }
  };

  const plans = [
    {
      name: 'Basic',
      price: '£30',
      priceId: 'pri_01kt40zs139mbp1hv7rhpzwmxa',
      description: 'Essential PDF & image tools',
      features: [
        'Essential PDF & image tools',
        'Merge, split, compress, convert PDF',
        'Image format conversion',
        '5 files per day',
        '10MB max file size',
        'Email support',
        'Basic compression'
      ]
    },
    {
      name: 'Standard',
      price: '£40',
      priceId: 'pri_01kt41380gha533r6162t49wb7',
      description: 'Professional tools & features',
      features: [
        'Unlimited files',
        '50MB max file size',
        'All PDF & image tools',
        'Faster processing',
        'Batch processing (up to 5)',
        'Chat support',
        'Priority processing'
      ],
      popular: true
    },
    {
      name: 'Premium',
      price: '£50',
      priceId: 'pri_01kt41237433x7grg91yfm0ygj',
      description: 'Complete suite & priority support',
      features: [
        'Unlimited files',
        '100MB max file size',
        'All PDF & image tools',
        'Unlimited batch processing',
        'Priority support (24/7)',
        'Advanced compression',
        'API access',
        'Custom workflows'
      ]
    }
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 mt-10">
            <h1 className="text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Simple, Transparent <span className="text-blue-600 dark:text-blue-400">Pricing</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400">Choose the perfect plan for your needs</p>
          </div>
          
          {displayError && (
            <div className="bg-red-50 dark:bg-red-950 border-l-4 border-red-500 text-red-700 dark:text-red-300 p-4 rounded mb-8 max-w-2xl mx-auto">
              <p className="font-semibold">⚠️ Error</p>
              <p className="text-sm">{displayError}</p>
            </div>
          )}

          {!paddleReady && (
            <div className="bg-blue-50 dark:bg-blue-950 border-l-4 border-blue-500 text-blue-700 dark:text-blue-300 p-4 rounded mb-8 max-w-2xl mx-auto">
              <p className="font-semibold">⏳ Loading Payment System</p>
              <p className="text-sm">Please wait while we initialize the payment processor...</p>
            </div>
          )}

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div 
                key={plan.priceId}
                className={`relative rounded-2xl overflow-hidden transition-all duration-300 ${
                  plan.popular 
                    ? 'md:scale-105 shadow-2xl border-2 border-blue-500 bg-white dark:bg-slate-800' 
                    : 'shadow-lg border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:shadow-xl hover:border-blue-300 dark:hover:border-blue-500'
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-blue-600 text-white px-4 py-1 text-xs font-bold rounded-bl">
                    MOST POPULAR
                  </div>
                )}
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{plan.name}</h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-5xl font-bold text-blue-600 dark:text-blue-400">{plan.price}</span>
                    <span className="text-slate-600 dark:text-slate-400 ml-2">one-time</span>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-green-500 font-bold mr-3 mt-0.5">✓</span>
                        <span className="text-slate-700 dark:text-slate-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button
                    disabled={true}
                    className={`w-full py-3 rounded-lg font-semibold transition-all duration-200 bg-gray-300 text-gray-500 cursor-not-allowed dark:bg-gray-600 dark:text-gray-400`}
                  >
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Features Comparison Table */}
          <div className="mt-16 overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-slate-200 dark:border-slate-700">
                  <th className="px-4 py-4 text-left font-semibold text-slate-900 dark:text-white">Features</th>
                  <th className="px-4 py-4 text-center font-semibold text-slate-900 dark:text-white">Basic</th>
                  <th className="px-4 py-4 text-center font-semibold text-slate-900 dark:text-white">Standard</th>
                  <th className="px-4 py-4 text-center font-semibold text-slate-900 dark:text-white">Premium</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800">
                  <td className="px-4 py-4 text-slate-700 dark:text-slate-300 font-medium">Max file size</td>
                  <td className="px-4 py-4 text-center text-slate-600 dark:text-slate-400">10MB</td>
                  <td className="px-4 py-4 text-center text-slate-600 dark:text-slate-400">50MB</td>
                  <td className="px-4 py-4 text-center text-slate-600 dark:text-slate-400">100MB</td>
                </tr>
                <tr className="border-b border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800">
                  <td className="px-4 py-4 text-slate-700 dark:text-slate-300 font-medium">Daily files</td>
                  <td className="px-4 py-4 text-center text-slate-600 dark:text-slate-400">5 per day</td>
                  <td className="px-4 py-4 text-center text-slate-600 dark:text-slate-400">Unlimited</td>
                  <td className="px-4 py-4 text-center text-slate-600 dark:text-slate-400">Unlimited</td>
                </tr>
                <tr className="border-b border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800">
                  <td className="px-4 py-4 text-slate-700 dark:text-slate-300 font-medium">Batch processing</td>
                  <td className="px-4 py-4 text-center text-red-500">–</td>
                  <td className="px-4 py-4 text-center text-green-500 font-bold">✓ Up to 5</td>
                  <td className="px-4 py-4 text-center text-green-500 font-bold">✓ Unlimited</td>
                </tr>
                <tr className="border-b border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800">
                  <td className="px-4 py-4 text-slate-700 dark:text-slate-300 font-medium">Processing speed</td>
                  <td className="px-4 py-4 text-center text-slate-600 dark:text-slate-400">Standard</td>
                  <td className="px-4 py-4 text-center text-slate-600 dark:text-slate-400">Fast</td>
                  <td className="px-4 py-4 text-center text-slate-600 dark:text-slate-400">Priority</td>
                </tr>
                <tr className="border-b border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800">
                  <td className="px-4 py-4 text-slate-700 dark:text-slate-300 font-medium">Support</td>
                  <td className="px-4 py-4 text-center text-slate-600 dark:text-slate-400">Email</td>
                  <td className="px-4 py-4 text-center text-slate-600 dark:text-slate-400">Chat</td>
                  <td className="px-4 py-4 text-center text-slate-600 dark:text-slate-400">24/7 Priority</td>
                </tr>
                <tr className="border-b border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800">
                  <td className="px-4 py-4 text-slate-700 dark:text-slate-300 font-medium">API access</td>
                  <td className="px-4 py-4 text-center text-red-500">–</td>
                  <td className="px-4 py-4 text-center text-red-500">–</td>
                  <td className="px-4 py-4 text-center text-green-500 font-bold">✓</td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800">
                  <td className="px-4 py-4 text-slate-700 dark:text-slate-300 font-medium">Custom workflows</td>
                  <td className="px-4 py-4 text-center text-red-500">–</td>
                  <td className="px-4 py-4 text-center text-red-500">–</td>
                  <td className="px-4 py-4 text-center text-green-500 font-bold">✓</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}