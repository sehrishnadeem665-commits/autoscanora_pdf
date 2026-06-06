import type { Metadata } from 'next';
import Link from 'next/link';
import {
  FileText, FileImage, Combine, Scissors, Archive,
  RotateCw, Lock, Unlock, Image, ArrowRight, Zap,
  FileType, FileOutput, ImageDown, Minimize2
} from 'lucide-react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'All PDF & Image Tools',
  description:
    'Browse all 14 powerful PDF and image tools. Convert, merge, split, compress, and optimize your files online.',
};

const tools = [
  {
    id: 'pdf-to-word',
    icon: FileText,
    title: 'PDF to Word',
    desc: 'Convert PDF files to editable Word documents (.docx) with perfect formatting.',
    color: 'from-blue-500 to-blue-600',
    bg: 'bg-blue-50 dark:bg-blue-950/30',
    badge: 'Popular',
  },
  {
    id: 'word-to-pdf',
    icon: FileOutput,
    title: 'Word to PDF',
    desc: 'Turn your Word documents into professional-quality PDFs instantly.',
    color: 'from-blue-600 to-sky-500',
    bg: 'bg-sky-50 dark:bg-sky-950/30',
    badge: null,
  },
  {
    id: 'pdf-to-jpg',
    icon: FileImage,
    title: 'PDF to JPG',
    desc: 'Extract pages from a PDF as high-quality JPG images.',
    color: 'from-emerald-500 to-emerald-600',
    bg: 'bg-emerald-50 dark:bg-emerald-950/30',
    badge: null,
  },
  {
    id: 'jpg-to-pdf',
    icon: FileType,
    title: 'JPG to PDF',
    desc: 'Convert one or multiple JPG images into a single PDF document.',
    color: 'from-teal-500 to-teal-600',
    bg: 'bg-teal-50 dark:bg-teal-950/30',
    badge: null,
  },
  {
    id: 'merge-pdf',
    icon: Combine,
    title: 'Merge PDF',
    desc: 'Combine multiple PDF files into one document in the order you choose.',
    color: 'from-violet-500 to-violet-600',
    bg: 'bg-violet-50 dark:bg-violet-950/30',
    badge: 'Popular',
  },
  {
    id: 'split-pdf',
    icon: Scissors,
    title: 'Split PDF',
    desc: 'Divide a PDF into separate files by pages or ranges.',
    color: 'from-rose-500 to-rose-600',
    bg: 'bg-rose-50 dark:bg-rose-950/30',
    badge: null,
  },
  {
    id: 'compress-pdf',
    icon: Archive,
    title: 'Compress PDF',
    desc: 'Reduce your PDF file size while maintaining quality for sharing.',
    color: 'from-amber-500 to-amber-600',
    bg: 'bg-amber-50 dark:bg-amber-950/30',
    badge: 'Popular',
  },
  {
    id: 'rotate-pdf',
    icon: RotateCw,
    title: 'Rotate PDF',
    desc: 'Rotate PDF pages by 90°, 180°, or 270° — permanently fix orientation.',
    color: 'from-cyan-500 to-cyan-600',
    bg: 'bg-cyan-50 dark:bg-cyan-950/30',
    badge: null,
  },
  {
    id: 'pdf-unlock',
    icon: Unlock,
    title: 'PDF Unlock',
    desc: 'Remove password protection from a PDF to freely access your file.',
    color: 'from-orange-500 to-orange-600',
    bg: 'bg-orange-50 dark:bg-orange-950/30',
    badge: null,
  },
  {
    id: 'pdf-protect',
    icon: Lock,
    title: 'PDF Protect',
    desc: 'Add a password to your PDF to prevent unauthorized access.',
    color: 'from-red-500 to-red-600',
    bg: 'bg-red-50 dark:bg-red-950/30',
    badge: null,
  },
  {
    id: 'png-to-jpg',
    icon: Image,
    title: 'PNG to JPG',
    desc: 'Convert PNG images to compressed JPG format for smaller file sizes.',
    color: 'from-pink-500 to-pink-600',
    bg: 'bg-pink-50 dark:bg-pink-950/30',
    badge: null,
  },
  {
    id: 'jpg-to-png',
    icon: ImageDown,
    title: 'JPG to PNG',
    desc: 'Convert JPG images to lossless PNG format with transparent background support.',
    color: 'from-fuchsia-500 to-fuchsia-600',
    bg: 'bg-fuchsia-50 dark:bg-fuchsia-950/30',
    badge: null,
  },
  {
    id: 'webp-converter',
    icon: Zap,
    title: 'WebP Converter',
    desc: 'Convert images to and from WebP format for modern web optimization.',
    color: 'from-lime-500 to-lime-600',
    bg: 'bg-lime-50 dark:bg-lime-950/30',
    badge: 'New',
  },
  {
    id: 'image-compressor',
    icon: Minimize2,
    title: 'Image Compressor',
    desc: 'Reduce image file sizes without visible quality loss for faster websites.',
    color: 'from-green-500 to-green-600',
    bg: 'bg-green-50 dark:bg-green-950/30',
    badge: null,
  },
];

export default function ToolsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="pt-28 pb-16 bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-sm font-medium mb-6">
              <Zap className="w-3.5 h-3.5" />
              14 Tools Available
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              All PDF & Image <span className="gradient-text">Tools</span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
              Every tool you need to convert, edit, compress, and manage documents and images online.
            </p>
          </div>
        </section>

        {/* Tools Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
          <div className="max-w-7xl mx-auto">
            {/* PDF Tools */}
            <div className="mb-14">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">PDF Tools</h2>
              <p className="text-slate-500 dark:text-slate-400 mb-8">Convert, organize, and secure your PDF documents.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {tools.slice(0, 10).map((tool) => (
                  <ToolCard key={tool.id} tool={tool} />
                ))}
              </div>
            </div>

            {/* Image Tools */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Image Tools</h2>
              <p className="text-slate-500 dark:text-slate-400 mb-8">Convert and optimize images for any use case.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {tools.slice(10).map((tool) => (
                  <ToolCard key={tool.id} tool={tool} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function ToolCard({ tool }: { tool: (typeof tools)[0] }) {
  const Icon = tool.icon;
  return (
    <div className={`group relative rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden`}>
      {/* Subtle bg tint on hover */}
      <div className={`absolute inset-0 ${tool.bg} opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl`} />

      <div className="relative">
        {tool.badge && (
          <span className="absolute top-0 right-0 text-xs font-semibold px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300">
            {tool.badge}
          </span>
        )}

        <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${tool.color} flex items-center justify-center mb-4 shadow-md`}>
          <Icon className="w-5 h-5 text-white" />
        </div>

        <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-2">
          {tool.title}
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-5 leading-relaxed">
          {tool.desc}
        </p>

        <Button
          size="sm"
          className={`w-full bg-gradient-to-r ${tool.color} text-white border-0 hover:opacity-90 transition-opacity`}
          asChild
        >
          <Link href={`/tools/${tool.id}`}>
            Open Tool
            <ArrowRight className="ml-1.5 w-3.5 h-3.5" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
