'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { siteConfig } from '@/data/site-config';
import { cn } from '@/lib/utils';

// ---- Nav bar always shows full links + "Let's Talk" on every screen size —
// no hamburger menu — sized down with responsive text/gap so it still fits
// on narrow phones. ----
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled ? 'glass py-2.5 shadow-[0_4px_30px_-10px_rgba(249,115,22,0.15)] sm:py-3' : 'bg-transparent py-3 sm:py-6'
      )}
    >
      {/* subtle top glow line */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-400/40 to-transparent" />

      <nav className="relative mx-auto flex max-w-7xl items-center justify-between gap-2 px-3 sm:px-6 md:px-10">
        {/* ---- LOGO: edit siteConfig.logoText / siteConfig.siteName in data/site-config.ts ---- */}
        <Link href="/" className="group flex shrink-0 items-baseline gap-2">
          <span className="font-display bg-gradient-to-r from-orange-300 via-yellow-200 to-teal-300 bg-clip-text text-base font-semibold tracking-tight text-transparent transition-all duration-300 group-hover:drop-shadow-[0_0_12px_rgba(249,115,22,0.5)] sm:text-xl">
            {siteConfig.logoText}
          </span>
          <span className="hidden font-mono text-[11px] uppercase tracking-widest text-ink-muted lg:inline">
            {siteConfig.siteName}
          </span>
        </Link>

        {/* ---- NAV LINKS: edit siteConfig.navLinks in data/site-config.ts ----
            Always visible; horizontally scrollable as a fallback on the
            very narrowest phones so it never wraps or breaks the bar. */}
        <div className="flex min-w-0 flex-1 items-center gap-3 overflow-x-auto sm:gap-6 md:justify-center md:gap-8">
          {siteConfig.navLinks.map((link, i) => {
            const colors = [
              'from-orange-300 to-yellow-200',
              'from-yellow-200 to-teal-300',
              'from-teal-300 to-cyan-300',
              'from-cyan-300 to-orange-300',
            ];
            const gradient = colors[i % colors.length];

            return (
              <a
                key={link.href}
                href={link.href}
                className="group relative shrink-0 whitespace-nowrap text-xs text-ink-muted transition-colors duration-300 sm:text-sm"
              >
                <span
                  className={`bg-gradient-to-r ${gradient} bg-clip-text transition-all duration-300 group-hover:text-transparent group-hover:drop-shadow-[0_0_10px_rgba(249,115,22,0.4)]`}
                >
                  {link.label}
                </span>
                <span className={`absolute -bottom-1.5 left-0 h-px w-0 bg-gradient-to-r ${gradient} transition-all duration-300 group-hover:w-full`} />
              </a>
            );
          })}
        </div>

        <a
          href="#contact"
          className="relative shrink-0 rounded-full bg-gradient-to-r from-orange-400 to-yellow-300 px-3 py-1.5 text-xs font-medium text-bg shadow-[0_0_20px_-6px_rgba(249,115,22,0.7)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_28px_-4px_rgba(249,115,22,0.85)] sm:px-5 sm:py-2 sm:text-sm"
        >
          Let&apos;s Talk
        </a>
      </nav>
    </header>
  );
}