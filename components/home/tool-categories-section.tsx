import Link from 'next/link';
import {
  FileText, FileImage, Combine, Scissors, Archive,
  RotateCw, Lock, Unlock, Image, ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const categories = [
  {
    icon: FileText,
    title: 'PDF Conversion',
    desc: 'Convert PDF to Word, Excel, PPT and more',
    color: 'from-blue-500 to-blue-600',
    bg: 'bg-blue-50 dark:bg-blue-950/30',
    border: 'border-blue-200 dark:border-blue-800/50',
  },
  {
    icon: Combine,
    title: 'PDF Organizer',
    desc: 'Merge, split, and rearrange PDF pages',
    color: 'from-emerald-500 to-emerald-600',
    bg: 'bg-emerald-50 dark:bg-emerald-950/30',
    border: 'border-emerald-200 dark:border-emerald-800/50',
  },
  {
    icon: Archive,
    title: 'PDF Optimizer',
    desc: 'Compress and reduce PDF file size',
    color: 'from-amber-500 to-amber-600',
    bg: 'bg-amber-50 dark:bg-amber-950/30',
    border: 'border-amber-200 dark:border-amber-800/50',
  },
  {
    icon: Lock,
    title: 'PDF Security',
    desc: 'Protect or unlock your PDF documents',
    color: 'from-rose-500 to-rose-600',
    bg: 'bg-rose-50 dark:bg-rose-950/30',
    border: 'border-rose-200 dark:border-rose-800/50',
  },
  {
    icon: Image,
    title: 'Image Tools',
    desc: 'Convert and compress images online',
    color: 'from-cyan-500 to-cyan-600',
    bg: 'bg-cyan-50 dark:bg-cyan-950/30',
    border: 'border-cyan-200 dark:border-cyan-800/50',
  },
  {
    icon: RotateCw,
    title: 'PDF Editor',
    desc: 'Rotate, crop, and edit PDF pages',
    color: 'from-violet-500 to-violet-600',
    bg: 'bg-violet-50 dark:bg-violet-950/30',
    border: 'border-violet-200 dark:border-violet-800/50',
  },
];

export function ToolCategoriesSection() {
  return (
    <section className="section-padding bg-white dark:bg-slate-900">
      <div className="container-max">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Everything you need for{' '}
            <span className="gradient-text">document management</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
            A complete suite of tools to handle any PDF or image task with ease.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.title}
                className={`group rounded-2xl border ${cat.border} ${cat.bg} p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer`}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center mb-4 shadow-lg`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  {cat.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">{cat.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white border-0 shadow-lg shadow-blue-500/25"
            asChild
          >
            <Link href="/tools">
              View All 14 Tools
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
