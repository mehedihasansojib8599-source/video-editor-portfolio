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

// ---- FORCE DESKTOP LAYOUT, LOCKED (no pinch-zoom) --------------------------
// width: 1280 makes every browser — including mobile — treat the page as if
// the screen is 1280 CSS pixels wide. This makes Tailwind's md:/lg: classes
// activate exactly like on a real desktop, giving the identical layout.
// The browser then auto-scales that 1280px layout down to fit the real,
// narrower screen. userScalable: false locks that scale so the user can't
// pinch-zoom in/out — it stays fixed and stable at "fit to screen".
export const viewport: Viewport = {
  width: 1280,
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
          <Navbar />
          <main>{children}</main>
          <Footer />
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}