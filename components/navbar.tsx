'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { siteConfig } from '@/data/site-config';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled ? 'glass py-2.5 shadow-[0_4px_30px_-10px_rgba(249,115,22,0.15)] sm:py-3' : 'bg-transparent py-4 sm:py-6'
      )}
    >
      {/* subtle top glow line */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-400/40 to-transparent" />

      <nav className="relative mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 md:px-10">
        {/* ---- LOGO: edit siteConfig.logoText / siteConfig.siteName in data/site-config.ts ---- */}
        <Link href="/" className="group flex items-baseline gap-2">
          <span className="font-display bg-gradient-to-r from-orange-300 via-yellow-200 to-teal-300 bg-clip-text text-lg font-semibold tracking-tight text-transparent transition-all duration-300 group-hover:drop-shadow-[0_0_12px_rgba(249,115,22,0.5)] sm:text-xl">
            {siteConfig.logoText}
          </span>
          <span className="hidden font-mono text-[11px] uppercase tracking-widest text-ink-muted sm:inline">
            {siteConfig.siteName}
          </span>
        </Link>

        {/* ---- NAV LINKS: edit siteConfig.navLinks in data/site-config.ts ---- */}
        <div className="hidden items-center gap-8 md:flex">
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
                className="group relative text-sm text-ink-muted transition-colors duration-300"
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

        <div className="hidden items-center gap-4 md:flex">
          <a
            href="#contact"
            className="relative rounded-full bg-gradient-to-r from-orange-400 to-yellow-300 px-5 py-2 text-sm font-medium text-bg shadow-[0_0_20px_-6px_rgba(249,115,22,0.7)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_28px_-4px_rgba(249,115,22,0.85)]"
          >
            Let&apos;s Talk
          </a>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center text-ink transition-colors hover:text-orange-300 md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden md:hidden"
          >
            <div className="flex flex-col gap-1 border-t border-white/10 bg-gradient-to-b from-white/[0.03] to-transparent px-4 py-4 sm:px-6">
              {siteConfig.navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="group relative rounded-lg px-2 py-3 text-ink-muted transition-colors hover:bg-white/[0.04] hover:text-orange-200"
                >
                  <span className="mr-2 inline-block h-1 w-1 rounded-full bg-white/20 transition-colors group-hover:bg-orange-400" />
                  {link.label}
                </a>
              ))}
              <div className="flex items-center justify-end px-2 pt-2">
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="rounded-full bg-gradient-to-r from-orange-400 to-yellow-300 px-5 py-2 text-sm font-medium text-bg shadow-[0_0_20px_-6px_rgba(249,115,22,0.7)]"
                >
                  Let&apos;s Talk
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}