import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Marketing Manager',
    company: 'TechCorp',
    avatar: 'SJ',
    rating: 5,
    text: "AutoScanOra has completely transformed how our team handles documents. The PDF compression tool alone saves us gigabytes of storage every week.",
    color: 'from-blue-500 to-blue-600',
  },
  {
    name: 'Michael Chen',
    role: 'Freelance Designer',
    company: 'Self-employed',
    avatar: 'MC',
    rating: 5,
    text: "I convert between image formats constantly for client work. AutoScanOra is the fastest tool I've used — results are ready before I even blink.",
    color: 'from-emerald-500 to-emerald-600',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Legal Assistant',
    company: 'LawFirm Partners',
    avatar: 'ER',
    rating: 5,
    text: "Security matters a lot in our industry. Knowing that files are encrypted and deleted automatically gives us peace of mind. Highly recommend.",
    color: 'from-rose-500 to-rose-600',
  },
  {
    name: 'David Park',
    role: 'Product Manager',
    company: 'StartupXYZ',
    avatar: 'DP',
    rating: 5,
    text: "The merge and split PDF tools are a lifesaver for preparing client presentations. Incredibly easy to use with no learning curve.",
    color: 'from-amber-500 to-amber-600',
  },
  {
    name: 'Lisa Thompson',
    role: 'HR Director',
    company: 'Global Corp',
    avatar: 'LT',
    rating: 5,
    text: "We process hundreds of forms daily. AutoScanOra handles our batch conversions without breaking a sweat. The Premium plan is worth every penny.",
    color: 'from-cyan-500 to-cyan-600',
  },
  {
    name: 'James Wilson',
    role: 'Academic Researcher',
    company: 'University Press',
    avatar: 'JW',
    rating: 5,
    text: "Converting research papers and extracting images from PDFs is now effortless. The quality of output is consistently excellent.",
    color: 'from-violet-500 to-violet-600',
  },
];

export function TestimonialsSection() {
  return (
    <section className="section-padding bg-slate-50 dark:bg-slate-950">
      <div className="container-max">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Trusted by <span className="gradient-text">500,000+ users</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            See what professionals say about AutoScanOra.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white text-xs font-bold shrink-0`}>
                  {t.avatar}
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-900 dark:text-white">{t.name}</div>
                  <div className="text-xs text-slate-500">
                    {t.role} · {t.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

