import type { Metadata, Viewport } from 'next';
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
import { DesktopLock } from '@/components/desktop-lock';

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

// ---- Real device width + no pinch-zoom — our own JS/CSS scaling in
// DesktopLock handles fitting the fixed desktop layout to the screen, so we
// don't want the browser's own zoom fighting with it.
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${displayFont.variable} ${bodyFont.variable} ${monoFont.variable} font-body`}
      >
        <ThemeProvider>
          <LoadingScreen />
          <CustomCursor />
          <ScrollProgress />
          <DesktopLock>
            <Navbar />
            <main>{children}</main>
            <Footer />
          </DesktopLock>
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}