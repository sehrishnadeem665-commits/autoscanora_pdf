import { Zap, Shield, Globe, Clock, Cpu, Users } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast Processing',
    desc: 'Our cloud infrastructure processes your files in seconds, not minutes. Get results instantly.',
    color: 'text-amber-500',
    bg: 'bg-amber-50 dark:bg-amber-950/30',
  },
  {
    icon: Shield,
    title: 'Bank-Grade Security',
    desc: 'All files are encrypted with 256-bit SSL. Your documents are automatically deleted after 1 hour.',
    color: 'text-green-500',
    bg: 'bg-green-50 dark:bg-green-950/30',
  },
  {
    icon: Globe,
    title: 'Works on Any Device',
    desc: 'Access AutoScanOra from any browser on desktop, tablet, or mobile. No app installation required.',
    color: 'text-blue-500',
    bg: 'bg-blue-50 dark:bg-blue-950/30',
  },
  {
    icon: Clock,
    title: 'Save Hours of Work',
    desc: 'Automate repetitive document tasks. Batch process multiple files simultaneously.',
    color: 'text-rose-500',
    bg: 'bg-rose-50 dark:bg-rose-950/30',
  },
  {
    icon: Cpu,
    title: 'High-Quality Output',
    desc: 'Advanced algorithms ensure your converted files retain full quality and formatting.',
    color: 'text-cyan-500',
    bg: 'bg-cyan-50 dark:bg-cyan-950/30',
  },
  {
    icon: Users,
    title: 'Priority Support',
    desc: 'Get help from our dedicated team. Premium users enjoy priority response within 2 hours.',
    color: 'text-emerald-500',
    bg: 'bg-emerald-50 dark:bg-emerald-950/30',
  },
];

export function FeaturesSection() {
  return (
    <section className="section-padding bg-slate-50 dark:bg-slate-950">
      <div className="container-max">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-sm font-medium mb-4">
            Why AutoScanOra?
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Built for speed, security,{' '}
            <span className="gradient-text">and simplicity</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
            Everything professionals and businesses need to manage documents at scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feat) => {
            const Icon = feat.icon;
            return (
              <div key={feat.title} className="group">
                <div className={`w-12 h-12 rounded-2xl ${feat.bg} flex items-center justify-center mb-5`}>
                  <Icon className={`w-6 h-6 ${feat.color}`} />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  {feat.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{feat.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
