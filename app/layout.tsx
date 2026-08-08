import type { Metadata } from 'next';
import { Space_Grotesk, Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { siteConfig } from '@/data/site-config';
import { ThemeProvider } from '@/components/theme-provider';
import { ScrollProgress } from '@/components/scroll-progress';
import { BackToTop } from '@/components/back-to-top';
import { LoadingScreen } from '@/components/loading-screen';
import { CustomCursor } from '@/components/custom-cursor';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

const displayFont = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['500', '700'],
});
const bodyFont = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '500', '600'],
});
const monoFont = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '500'],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.seo.url),
  title: siteConfig.seo.title,
  description: siteConfig.seo.description,
  openGraph: {
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    url: siteConfig.seo.url,
    siteName: siteConfig.siteName,
    images: [{ url: siteConfig.seo.ogImage }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,

    images: [siteConfig.seo.ogImage],
  },
  icons: {
    icon: '/favicon.ico',
  },
};

// NOTE: no `export const viewport` here — Next.js's typed Viewport API
// doesn't accept the "initial-scale=0.001" shrink-to-fit string, so we set
// the <meta name="viewport"> tag manually below instead. That combination
// (width=1280 + a tiny initial-scale) is a long-standing cross-browser
// trick that forces ALL mobile browsers — including ones that otherwise
// ignore a large fixed width — to actually shrink the whole 1280px desktop
// layout down until it fits the real screen width. maximum-scale/
// user-scalable then lock it there so it stays stable.

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <meta
          name="viewport"
          content="width=1280, initial-scale=0.001, maximum-scale=1, user-scalable=no"
        />
      </head>
      <body
        className={`${displayFont.variable} ${bodyFont.variable} ${monoFont.variable} font-body`}
      >
        <ThemeProvider>
          <LoadingScreen />
          <CustomCursor />
          <ScrollProgress />
          <Navbar />
          <main>{children}</main>
          <Footer />
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}