'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import {
  FileText, FileImage, Combine, Scissors, Archive,
  RotateCw, Lock, Unlock, Image, Upload, X, CheckCircle,
  ArrowLeft, Sparkles, Zap, FileType, FileOutput, ImageDown, Minimize2
} from 'lucide-react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const toolsData: Record<string, {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
  color: string;
  accepting: string;
  output: string;
}> = {
  'pdf-to-word': {
    icon: FileText,
    title: 'PDF to Word',
    desc: 'Convert PDF files to editable Word documents (.docx)',
    color: 'from-blue-500 to-blue-600',
    accepting: '.pdf',
    output: '.docx',
  },
  'word-to-pdf': {
    icon: FileOutput,
    title: 'Word to PDF',
    desc: 'Turn your Word documents into professional-quality PDFs',
    color: 'from-blue-600 to-sky-500',
    accepting: '.docx, .doc',
    output: '.pdf',
  },
  'pdf-to-jpg': {
    icon: FileImage,
    title: 'PDF to JPG',
    desc: 'Extract pages from a PDF as high-quality JPG images',
    color: 'from-emerald-500 to-emerald-600',
    accepting: '.pdf',
    output: '.jpg',
  },
  'jpg-to-pdf': {
    icon: FileType,
    title: 'JPG to PDF',
    desc: 'Convert one or multiple JPG images into a single PDF',
    color: 'from-teal-500 to-teal-600',
    accepting: '.jpg, .jpeg',
    output: '.pdf',
  },
  'merge-pdf': {
    icon: Combine,
    title: 'Merge PDF',
    desc: 'Combine multiple PDF files into one document',
    color: 'from-violet-500 to-violet-600',
    accepting: '.pdf (multiple)',
    output: '.pdf',
  },
  'split-pdf': {
    icon: Scissors,
    title: 'Split PDF',
    desc: 'Divide a PDF into separate files by pages or ranges',
    color: 'from-rose-500 to-rose-600',
    accepting: '.pdf',
    output: '.pdf',
  },
  'compress-pdf': {
    icon: Archive,
    title: 'Compress PDF',
    desc: 'Reduce your PDF file size while maintaining quality',
    color: 'from-amber-500 to-amber-600',
    accepting: '.pdf',
    output: '.pdf (compressed)',
  },
  'rotate-pdf': {
    icon: RotateCw,
    title: 'Rotate PDF',
    desc: 'Rotate PDF pages by 90°, 180°, or 270°',
    color: 'from-cyan-500 to-cyan-600',
    accepting: '.pdf',
    output: '.pdf',
  },
  'pdf-unlock': {
    icon: Unlock,
    title: 'PDF Unlock',
    desc: 'Remove password protection from a PDF',
    color: 'from-orange-500 to-orange-600',
    accepting: '.pdf',
    output: '.pdf (unlocked)',
  },
  'pdf-protect': {
    icon: Lock,
    title: 'PDF Protect',
    desc: 'Add a password to your PDF for security',
    color: 'from-red-500 to-red-600',
    accepting: '.pdf',
    output: '.pdf (protected)',
  },
  'png-to-jpg': {
    icon: Image,
    title: 'PNG to JPG',
    desc: 'Convert PNG images to compressed JPG format',
    color: 'from-pink-500 to-pink-600',
    accepting: '.png',
    output: '.jpg',
  },
  'jpg-to-png': {
    icon: ImageDown,
    title: 'JPG to PNG',
    desc: 'Convert JPG images to lossless PNG format',
    color: 'from-fuchsia-500 to-fuchsia-600',
    accepting: '.jpg, .jpeg',
    output: '.png',
  },
  'webp-converter': {
    icon: Zap,
    title: 'WebP Converter',
    desc: 'Convert images to and from WebP format',
    color: 'from-lime-500 to-lime-600',
    accepting: '.jpg, .png, .webp',
    output: '.webp / .jpg / .png',
  },
  'image-compressor': {
    icon: Minimize2,
    title: 'Image Compressor',
    desc: 'Reduce image file sizes without quality loss',
    color: 'from-green-500 to-green-600',
    accepting: '.jpg, .png, .webp',
    output: '(compressed)',
  },
};

export default function ToolPage() {
  const params = useParams();
  const toolId = params.id as string;
  const tool = toolsData[toolId];

  const [files, setFiles] = useState<File[]>([]);
  const [uploading, setUploading] = useState(false);
  const [uploaded, setUploaded] = useState(false);
  const [dragging, setDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  if (!tool) {
    return (
      <>
        <Header />
        <main className="min-h-screen flex items-center justify-center pt-20">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Tool not found</h1>
            <Button asChild>
              <Link href="/tools">Back to Tools</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const Icon = tool.icon;

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragging(false);
    const droppedFiles = Array.from(e.dataTransfer.files);
    setFiles((prev) => [...prev, ...droppedFiles]);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => setDragging(false);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files));
    }
  };

  const removeFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  const handleUpload = () => {
    if (files.length === 0) return;
    setUploading(true);
    setTimeout(() => {
      setUploading(false);
      setUploaded(true);
    }, 2000);
  };

  const reset = () => {
    setFiles([]);
    setUploaded(false);
    setUploading(false);
  };

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Header */}
        <section className="pt-24 pb-8 bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 border-b border-slate-200 dark:border-slate-800">
          <div className="max-w-4xl mx-auto px-4">
            <Link
              href="/tools"
              className="inline-flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to all tools
            </Link>

            <div className="flex items-start gap-4">
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${tool.color} flex items-center justify-center shadow-xl shrink-0`}>
                <Icon className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-1">
                  {tool.title}
                </h1>
                <p className="text-slate-600 dark:text-slate-400">{tool.desc}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Uploader */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
          <div className="max-w-2xl mx-auto">
            {!uploaded ? (
              <>
                {/* Drop zone */}
                <div
                  onDrop={handleDrop}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onClick={() => inputRef.current?.click()}
                  className={cn(
                    'relative border-2 border-dashed rounded-2xl p-12 text-center cursor-pointer transition-all',
                    dragging
                      ? 'border-blue-500 bg-blue-50 dark:bg-blue-950/30'
                      : 'border-slate-300 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-600 hover:bg-slate-50 dark:hover:bg-slate-800/50'
                  )}
                >
                  <input
                    ref={inputRef}
                    type="file"
                    onChange={handleFileSelect}
                    accept={tool.accepting.split(', ').join(',')}
                    multiple={toolId === 'merge-pdf'}
                    className="hidden"
                  />

                  <div className="w-16 h-16 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center mx-auto mb-4">
                    <Upload className="w-7 h-7 text-slate-400" />
                  </div>

                  <p className="text-lg font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Drop your file here
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
                    or click to browse
                  </p>
                  <p className="text-xs text-slate-400 dark:text-slate-500">
                    Accepted formats: <span className="font-medium">{tool.accepting}</span>
                  </p>
                </div>

                {/* File list */}
                {files.length > 0 && (
                  <div className="mt-6 space-y-2">
                    {files.map((file, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between bg-slate-50 dark:bg-slate-800 rounded-xl px-4 py-3"
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <FileText className="w-5 h-5 text-blue-500 shrink-0" />
                          <span className="text-sm font-medium text-slate-700 dark:text-slate-300 truncate">
                            {file.name}
                          </span>
                          <span className="text-xs text-slate-400">
                            {(file.size / 1024 / 1024).toFixed(2)} MB
                          </span>
                        </div>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            removeFile(idx);
                          }}
                          className="p-1 text-slate-400 hover:text-red-500 transition-colors"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}

                {/* Action buttons */}
                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button
                    size="lg"
                    disabled={files.length === 0 || uploading}
                    onClick={handleUpload}
                    className={cn(
                      'w-full sm:w-auto text-white border-0 shadow-lg',
                      files.length > 0
                        ? `bg-gradient-to-r ${tool.color}`
                        : 'bg-slate-300 dark:bg-slate-700'
                    )}
                  >
                    {uploading ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Processing...
                      </span>
                    ) : (
                      <>
                        <Sparkles className="w-4 h-4 mr-2" />
                        Process File
                      </>
                    )}
                  </Button>

                  <Button
                    size="lg"
                    variant="outline"
                    asChild
                    className="w-full sm:w-auto border-blue-300 dark:border-blue-700 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/40"
                  >
                    <Link href={`/checkout/premium?tool=${toolId}`}>
                      Upgrade for More
                    </Link>
                  </Button>
                </div>

                {/* Upgrade banner */}
                <div className="mt-8 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 p-6 text-white">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="text-center sm:text-left">
                      <h3 className="font-semibold mb-1">Need more power?</h3>
                      <p className="text-sm text-blue-100">
                        Upgrade to Premium for unlimited files, larger uploads, and priority processing.
                      </p>
                    </div>
                    <Button
                      size="sm"
                      className="bg-white text-blue-600 hover:bg-blue-50 shrink-0"
                      asChild
                    >
                      <Link href={`/checkout/premium?tool=${toolId}`}>Upgrade Now</Link>
                    </Button>
                  </div>
                </div>
              </>
            ) : (
              /* Success state */
              <div className="text-center py-12">
                <div className="w-20 h-20 rounded-full bg-emerald-100 dark:bg-emerald-950/50 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                  File Processed!
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-8">
                  Your file has been successfully converted and is ready for download.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <Button size="lg" asChild className={`bg-gradient-to-r ${tool.color} text-white border-0`}>
                    <Link href={`/pricing?tool=${toolId}`}>Purchase to Download</Link>
                  </Button>
                  <Button size="lg" variant="outline" onClick={reset}>
                    Process Another File
                  </Button>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Info */}
        <section className="py-12 px-4 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
          <div className="max-w-2xl mx-auto">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white dark:bg-slate-900 rounded-xl p-5 border border-slate-200 dark:border-slate-800">
                <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">Input</p>
                <p className="text-sm font-semibold text-slate-900 dark:text-white">{tool.accepting}</p>
              </div>
              <div className="bg-white dark:bg-slate-900 rounded-xl p-5 border border-slate-200 dark:border-slate-800">
                <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">Output</p>
                <p className="text-sm font-semibold text-slate-900 dark:text-white">{tool.output}</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
