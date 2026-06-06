import { Upload, Cpu, Download } from 'lucide-react';

const steps = [
  {
    step: '01',
    icon: Upload,
    title: 'Upload your file',
    desc: 'Drag and drop or click to select your PDF or image file. We support all major formats.',
    color: 'from-blue-500 to-blue-600',
  },
  {
    step: '02',
    icon: Cpu,
    title: 'We process it',
    desc: 'Our powerful cloud engine handles your file instantly with maximum quality retention.',
    color: 'from-cyan-500 to-cyan-600',
  },
  {
    step: '03',
    icon: Download,
    title: 'Download the result',
    desc: 'Your file is ready in seconds. Download it directly — no account required for basic tools.',
    color: 'from-emerald-500 to-emerald-600',
  },
];

export function HowItWorksSection() {
  return (
    <section className="section-padding bg-white dark:bg-slate-900">
      <div className="container-max">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            How it works
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
            Three simple steps to transform your documents in seconds.
          </p>
        </div>

        <div className="relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-16 left-1/2 -translate-x-1/2 w-2/3 h-0.5 bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-500" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={step.step} className="relative text-center">
                  <div className="relative inline-flex items-center justify-center mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-xl`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-700 flex items-center justify-center">
                      <span className="text-xs font-bold text-slate-900 dark:text-white">{idx + 1}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed max-w-xs mx-auto">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
