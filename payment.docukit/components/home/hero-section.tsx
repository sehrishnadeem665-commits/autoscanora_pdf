import Link from 'next/link';
import { ArrowRight, Upload, Zap, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/20 dark:bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-400/20 dark:bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-sm font-medium mb-8">
          <Zap className="w-3.5 h-3.5" />
          <span>14+ Powerful Tools Available</span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">
          <span className="block">Powerful PDF &</span>
          <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            Image Tools
          </span>
          <span className="block">for Everyone</span>
        </h1>

        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Convert, merge, split, compress, and optimize your PDF and image files in seconds.
          Fast, secure, and completely online — no software needed.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white border-0 shadow-xl shadow-blue-500/30 px-8 py-6 text-base rounded-xl"
            asChild
          >
            <Link href="/tools">
              Explore All Tools
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 px-8 py-6 text-base rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800"
            asChild
          >
            <Link href="/pricing">View Pricing</Link>
          </Button>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500 dark:text-slate-500">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-green-500" />
            <span>256-bit SSL encryption</span>
          </div>
          <div className="flex items-center gap-2">
            <Upload className="w-4 h-4 text-blue-500" />
            <span>Files deleted after 1 hour</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-amber-500" />
            <span>No software installation</span>
          </div>
        </div>

        {/* Hero visual */}
        <div className="mt-20 relative">
          <div className="glass rounded-2xl p-6 max-w-3xl mx-auto shadow-2xl shadow-blue-500/10">
            <div className="flex items-center gap-3 mb-5 pb-4 border-b border-slate-200 dark:border-white/10">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="flex-1 bg-slate-100 dark:bg-white/10 rounded-full h-6 flex items-center px-3">
                <span className="text-xs text-slate-400">AutoScanOra.com/tools</span>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { label: 'PDF to Word', color: 'from-blue-500 to-blue-600' },
                { label: 'Merge PDF', color: 'from-emerald-500 to-emerald-600' },
                { label: 'Compress PDF', color: 'from-amber-500 to-amber-600' },
                { label: 'JPG to PDF', color: 'from-rose-500 to-rose-600' },
              ].map((tool) => (
                <div
                  key={tool.label}
                  className="rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 p-3 text-center hover:shadow-lg transition-shadow"
                >
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${tool.color} mx-auto mb-2 flex items-center justify-center`}>
                    <span className="text-white text-xs font-bold">PDF</span>
                  </div>
                  <span className="text-xs font-medium text-slate-700 dark:text-slate-300">{tool.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

