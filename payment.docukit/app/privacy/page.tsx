import type { Metadata } from 'next';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Learn how AutoScanOra collects, uses, and protects your personal information.',
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section className="pt-28 pb-16 bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Privacy <span className="gradient-text">Policy</span>
            </h1>
            <p className="text-slate-500 dark:text-slate-400">Last updated: May 30, 2026</p>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
          <div className="max-w-3xl mx-auto prose prose-slate dark:prose-invert prose-headings:font-bold prose-headings:text-slate-900 dark:prose-headings:text-white prose-p:text-slate-600 dark:prose-p:text-slate-400 prose-p:leading-relaxed max-w-none">
            <LegalSection title="1. Information We Collect">
              <p>
                We collect information you provide directly to us, including when you upload files for processing.
              </p>
              <p>
                Uploaded files are automatically deleted after 1 hour.
              </p>
            </LegalSection>

            <LegalSection title="2. How We Use Your Information">
              <p>
                We use the information we collect to provide, maintain, and improve our services, process transactions, and communicate with you.
              </p>
            </LegalSection>

            <LegalSection title="3. Data Retention">
              <p>
                Uploaded files are automatically deleted from our servers after 1 hour. We do not permanently store any of your documents.
              </p>
            </LegalSection>

            <LegalSection title="4. Payment Processing">
              <p>
                All payments are processed by Paddle.com. We do not store any credit card information on our servers. Paddle.com is the Merchant of Record for all our orders.
              </p>
            </LegalSection>

            <LegalSection title="5. Your Rights">
              <p>
                You have the right to access, correct, or delete your personal information. Contact us at{' '}
                <a href="mailto:support@docukit.site" className="text-blue-600 dark:text-blue-400 hover:underline">
                  support@docukit.site
                </a>{' '}
                for any requests.
              </p>
            </LegalSection>

            <LegalSection title="6. Contact Us">
              <p>
                Email: <a href="mailto:support@docukit.site" className="text-blue-600 dark:text-blue-400 hover:underline">support@docukit.site</a>
              </p>
              <p>
                Phone: <span className="text-slate-700 dark:text-slate-300">N/A</span>
              </p>
              <p>
                Address: <span className="text-slate-700 dark:text-slate-300">N/A</span>
              </p>
            </LegalSection>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

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

