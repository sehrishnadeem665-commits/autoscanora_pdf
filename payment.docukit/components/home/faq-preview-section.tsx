import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const faqs = [
  {
    q: 'Are my files safe and private?',
    a: "Absolutely. All file transfers are encrypted with 256-bit SSL. Your uploaded files are processed on secure servers and automatically deleted within 1 hour of processing — we never share your data.",
  },
  {
    q: 'What file formats does AutoScanOra support?',
    a: "We support PDF, Word (.docx/.doc), Excel, PowerPoint, JPG, PNG, WebP, GIF, and more. Each tool page lists the specific formats supported.",
  },
  {
    q: 'How fast is the processing?',
    a: "Most files are processed in under 10 seconds. Large files or complex operations may take slightly longer. Premium users get priority processing for even faster results.",
  },

];

export function FaqPreviewSection() {
  return (
    <section className="section-padding bg-white dark:bg-slate-900">
      <div className="container-max">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Frequently asked questions
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Quick answers to common questions about AutoScanOra.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <details
                key={idx}
                className="group rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/50 overflow-hidden"
              >
                <summary className="flex items-center justify-between px-6 py-5 cursor-pointer list-none">
                  <span className="font-medium text-slate-900 dark:text-white pr-4">{faq.q}</span>
                  <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform shrink-0" />
                </summary>
                <div className="px-6 pb-5">
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button variant="outline" asChild className="border-slate-300 dark:border-slate-700">
              <Link href="/faq">View All FAQs</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

