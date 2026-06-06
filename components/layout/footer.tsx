import Link from 'next/link';
import { FileText, Mail, Twitter, Github, Linkedin } from 'lucide-react';

const footerLinks = {
  'Quick Links': [
    { label: 'All Tools', href: '/tools' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact', href: '/contact' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Refund Policy', href: '/refund' },
  ],
  Tools: [
    { label: 'PDF to Word', href: '/tools' },
    { label: 'Merge PDF', href: '/tools' },
    { label: 'Compress PDF', href: '/tools' },
    { label: 'Image Converter', href: '/tools' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center">
                <FileText className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold text-white">
                Dox<span className="text-blue-400">sify</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400 mb-6 max-w-xs">
              A web-based document utility platform providing file conversion and optimization tools.
            </p>
            <div className="flex items-center gap-1 text-sm text-slate-400 mb-4">
              <Mail className="w-4 h-4 text-blue-400 shrink-0" />
              <a
                href="mailto:support@AutoScanOra.com"
                className="hover:text-blue-400 transition-colors"
              >
                support@AutoScanOra.com
              </a>
            </div>
            <div className="text-sm text-slate-400 leading-relaxed">
              <p>SIU OFFICES, 4-6 GREATOREX STREET</p>
              <p>LONDON</p>
              <p>UNITED KINGDOM E1 5NF</p>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-white font-semibold text-sm mb-4">{title}</h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-blue-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <p className="text-xs text-slate-500">
              &copy; {new Date().getFullYear()} AutoScanOra. All rights reserved.
            </p>
            {/* <p className="text-xs text-slate-500 max-w-xl leading-relaxed">
              Our order process is conducted by our online reseller Paddle.com. Paddle.com is the
              Merchant of Record for all our orders. Paddle provides all customer service inquiries
              and handles payment processing.
            </p> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
