import type { Metadata } from 'next';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ChevronDown } from 'lucide-react';

export const metadata: Metadata = {
  title: 'FAQ – Frequently Asked Questions',
  description:
    'Find answers to common questions about AutoScanOra file security, supported formats, pricing, and more.',
};

const faqCategories = [
  {
    category: 'File Security & Privacy',
    icon: '🔐',
    questions: [
      {
        q: 'Are my files safe on AutoScanOra?',
        a: 'Yes. All file uploads and transfers are encrypted using 256-bit SSL (HTTPS). Your files are processed on secure, isolated servers and are automatically deleted within 1 hour of processing. We never share, sell, or access the content of your files.',
      },
      {
        q: 'Do you store my files permanently?',
        a: 'No. Your files are temporarily stored only for processing purposes and are permanently deleted from our servers within 1 hour. We do not retain any copies of your documents.',
      },
      {
        q: 'Is AutoScanOra GDPR compliant?',
        a: 'Yes. AutoScanOra is fully GDPR compliant. We process only the minimum data necessary, provide data deletion on request, and maintain transparent privacy practices. See our Privacy Policy for full details.',
      },
    ],
  },
  {
    category: 'Supported Formats',
    icon: '📁',
    questions: [
      {
        q: 'What file formats does AutoScanOra support?',
        a: 'We support: PDF, Microsoft Word (.docx, .doc), Excel (.xlsx), PowerPoint (.pptx), JPG/JPEG, PNG, WebP, GIF, BMP, TIFF, and SVG. Each tool page lists specific supported input and output formats.',
      },
      {
        q: 'Is there a file size limit?',
        a: 'Free accounts can upload files up to 10MB. Basic plan supports up to 10MB, Premium plan up to 50MB, and Ultimate plan up to 100MB per file.',
      },
      {
        q: 'Can I process multiple files at once?',
        a: 'Yes. Most tools support batch processing. Premium and Ultimate users can process multiple files simultaneously for maximum efficiency.',
      },
    ],
  },
  {
    category: 'Refunds & Billing',
    icon: '💳',
    questions: [
      {
        q: 'Do you offer a refund?',
        a: 'Yes. We offer a 30-day money-back guarantee on all paid plans. If you are not satisfied, contact us within 30 days of purchase for a full refund, no questions asked.',
      },
      {
        q: 'How do I cancel my subscription?',
        a: 'You can cancel your subscription at any time from your account dashboard or by emailing info@autoscanora.com. Your access continues until the end of the billing period.',
      },
      {
        q: 'Will I be charged automatically?',
        a: 'Yes, subscriptions renew automatically at the end of each billing cycle. You can cancel anytime before the renewal date to avoid future charges.',
      },
    ],
  },
  {
    category: 'Processing Speed',
    icon: '⚡',
    questions: [
      {
        q: 'How fast is file processing?',
        a: 'Most files are processed in under 10 seconds. Complex operations on large files may take up to 30 seconds. Premium users receive priority processing for faster results.',
      },
      {
        q: 'Does file size affect processing time?',
        a: 'Yes. Larger files naturally take slightly longer to process. Our cloud infrastructure scales dynamically to handle peak loads, ensuring consistent performance.',
      },
    ],
  },
  {
    category: 'Account & Subscription',
    icon: '👤',
    questions: [
      {
        q: 'Do I need an account to use AutoScanOra?',
        a: 'Basic tools are available without an account. However, creating a free account unlocks access to your processing history and higher daily limits.',
      },
      {
        q: 'Can I upgrade or downgrade my plan?',
        a: 'Yes. You can upgrade or downgrade your plan at any time from your account settings. Upgrades take effect immediately; downgrades apply at the start of the next billing cycle.',
      },
      {
        q: 'Can I use AutoScanOra on multiple devices?',
        a: 'Yes. AutoScanOra is web-based and works on any device with a modern browser — desktop, tablet, or mobile. Your account is accessible across all devices.',
      },
    ],
  },
];

export default function FaqPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="pt-28 pb-16 bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Everything you need to know about AutoScanOra. Can&apos;t find an answer?{' '}
              <a href="/contact" className="text-blue-600 dark:text-blue-400 hover:underline">
                Contact us
              </a>
              .
            </p>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
          <div className="max-w-3xl mx-auto space-y-12">
            {faqCategories.map((cat) => (
              <div key={cat.category}>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-2xl">{cat.icon}</span>
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                    {cat.category}
                  </h2>
                </div>
                <div className="space-y-3">
                  {cat.questions.map((faq, idx) => (
                    <details
                      key={idx}
                      className="group rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/50 overflow-hidden"
                    >
                      <summary className="flex items-center justify-between px-6 py-5 cursor-pointer list-none">
                        <span className="font-medium text-slate-900 dark:text-white pr-4">{faq.q}</span>
                        <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform shrink-0" />
                      </summary>
                      <div className="px-6 pb-5">
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">{faq.a}</p>
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
              Still have questions?
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Our support team is here to help. Reach out and we&apos;ll get back to you shortly.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium hover:from-blue-700 hover:to-cyan-600 transition-all shadow-lg shadow-blue-500/25"
            >
              Contact Support
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

