const stats = [
  { value: '10M+', label: 'Files Processed', suffix: '' },
  { value: '500K+', label: 'Happy Users', suffix: '' },
  { value: '14', label: 'Powerful Tools', suffix: '+' },
  { value: '99.9', label: 'Uptime SLA', suffix: '%' },
];

export function StatsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-cyan-500 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-white mb-2">
                {stat.value}
                {stat.suffix && <span className="text-blue-200">{stat.suffix}</span>}
              </div>
              <div className="text-blue-100 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
