'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useParams, useSearchParams } from 'next/navigation';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';

const plans: Record<string, { title: string; price: string; description: string }> = {
  basic: {
    title: 'Basic',
    price: '£50 (one-time)',
    description: 'Essential PDF & image tools for light usage.',
  },
  premium: {
    title: 'Premium',
    price: '£90 (one-time)',
    description: 'Unlimited files, 50MB uploads, and priority support.',
  },
  ultimate: {
    title: 'Ultimate',
    price: '£89 (one-time)',
    description: 'Best value for power users with all premium features.',
  },
  standard: {
    title: 'Standard',
    price: '£70 (one-time)',
    description: 'Standard one-time purchase offering core features.',
  },
};

export default function CheckoutPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const plan = params.plan as string;
  const tool = searchParams.get('tool') ?? undefined;
  const [paid, setPaid] = useState(false);

  const selectedPlan = plans[plan];

  const outputMap: Record<string, string> = {
    'pdf-to-word': '.docx',
    'word-to-pdf': '.pdf',
    'pdf-to-jpg': '.jpg',
    'jpg-to-pdf': '.pdf',
    'merge-pdf': '.pdf',
    'split-pdf': '.pdf',
    'compress-pdf': '.pdf',
    'rotate-pdf': '.pdf',
    'pdf-unlock': '.pdf',
    'pdf-protect': '.pdf',
    'png-to-jpg': '.jpg',
    'jpg-to-png': '.png',
    'webp-converter': '.webp',
    'image-compressor': '.jpg',
  };

  const outputExtension = tool ? outputMap[tool] ?? '.pdf' : '.pdf';

  const extensionLabel = tool && outputMap[tool] ? ` (${outputMap[tool].replace('.', '').toUpperCase()})` : '';

  const downloadResult = () => {
    const content = `Your ${tool ? tool.replace(/-/g, ' ') : 'file'} result is ready.`;
    const blob = new Blob([content], { type: 'application/octet-stream' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `AutoScanOra-result${outputExtension}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  if (!selectedPlan) {
    return (
      <>
        <Header />
        <main className="min-h-screen flex items-center justify-center pt-24 bg-slate-50 dark:bg-slate-950">
          <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-12 text-center shadow-xl max-w-lg mx-auto">
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Plan not found</h1>
            <p className="text-slate-600 dark:text-slate-400 mb-6">Please choose a valid plan to continue.</p>
            <Button asChild>
              <Link href="/pricing">Back to pricing</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-slate-50 dark:bg-slate-950">
        <section className="pt-28 pb-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <p className="text-sm uppercase tracking-[0.25em] text-blue-600 dark:text-cyan-400 mb-4">
              Checkout
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Purchase {selectedPlan.title} Plan
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              {selectedPlan.description} Complete your payment to unlock downloads and premium access.
            </p>
          </div>
        </section>

        <section className="px-4 sm:px-6 lg:px-8 pb-16">
          <div className="max-w-3xl mx-auto bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl p-10">
            <div className="mb-10 text-center">
              <div className="inline-flex items-center gap-3 rounded-full bg-blue-50 dark:bg-blue-950/30 px-4 py-2 mb-4 text-sm font-semibold text-blue-700 dark:text-blue-300">
                Pay securely with credit card or PayPal
              </div>
              <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">{selectedPlan.price}</h2>
              <p className="mt-3 text-slate-600 dark:text-slate-400">Automatic access after payment completion.</p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 mb-10">
              <div className="rounded-3xl border border-slate-200 dark:border-slate-800 p-6 bg-slate-50 dark:bg-slate-950">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-3">Plan</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">{selectedPlan.title}</p>
              </div>
              <div className="rounded-3xl border border-slate-200 dark:border-slate-800 p-6 bg-slate-50 dark:bg-slate-950">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-3">Tool</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">{tool ? tool.replace(/-/g, ' ') : 'No tool selected'}</p>
              </div>
            </div>

            <div className="text-center">
              {!paid ? (
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white border-0 w-full max-w-xs mx-auto"
                  onClick={() => setPaid(true)}
                >
                  Pay Now
                </Button>
              ) : (
                <>
                  <div className="rounded-3xl border border-emerald-200 bg-emerald-50 dark:border-emerald-800 dark:bg-emerald-950/30 p-8 mb-6">
                    <p className="text-sm uppercase tracking-[0.25em] text-emerald-700 dark:text-emerald-300 mb-3">Payment Successful</p>
                    <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-2">Thank you!</h2>
                    <p className="text-slate-600 dark:text-slate-400">
                      Your premium purchase is complete. Download your file directly from this page.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-cyan-500 text-white border-0" onClick={downloadResult}>
                      Download Result{extensionLabel}
                    </Button>
                    {tool ? (
                      <Button size="lg" asChild className="w-full sm:w-auto border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800">
                        <Link href={`/tools/${tool}`}>Return to {tool.replace(/-/g, ' ')}</Link>
                      </Button>
                    ) : (
                      <Button size="lg" asChild className="w-full sm:w-auto border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800">
                        <Link href="/tools">Go to Tools</Link>
                      </Button>
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
