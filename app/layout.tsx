import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: {
    default: 'AutoScanOra – Powerful PDF & Image Tools for Everyone',
    template: '%s | AutoScanOra',
  },
  description:
    'Convert, merge, split, compress, and optimize PDF and image files online. Fast, secure, and easy to use document utility tools.',
  keywords: [
    'PDF tools',
    'PDF converter',
    'merge PDF',
    'compress PDF',
    'image converter',
    'PDF to Word',
    'Word to PDF',
    'JPG to PDF',
    'PDF online',
  ],
  authors: [{ name: 'AutoScanOra' }],
  creator: 'AutoScanOra',
  metadataBase: new URL('https://AutoScanOra.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://AutoScanOra.com',
    siteName: 'AutoScanOra',
    title: 'AutoScanOra – Powerful PDF & Image Tools for Everyone',
    description:
      'Convert, merge, split, compress, and optimize PDF and image files online.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AutoScanOra – Powerful PDF & Image Tools for Everyone',
    description:
      'Convert, merge, split, compress, and optimize PDF and image files online.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
