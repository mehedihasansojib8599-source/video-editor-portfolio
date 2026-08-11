'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { siteConfig } from '@/data/site-config';
import { cn } from '@/lib/utils';

// ---- EDIT: quotes, names, and avatars live in siteConfig.testimonials ----

// alternating color themes — kept within brand colors (orange + teal)
const themes = [
  {
    border: 'from-orange-400/70 via-amber-300/50 to-orange-500/70',
    glow: 'shadow-[0_0_45px_-8px_rgba(251,146,60,0.55)]',
    iconBg: 'from-orange-400/20 to-amber-300/20',
    iconText: 'text-orange-300',
    ring: 'from-orange-400 to-amber-300',
    quoteMark: 'text-orange-400/10',
    accentDot: 'bg-orange-400',
  },
  {
    border: 'from-teal-400/70 via-cyan-300/50 to-teal-500/70',
    glow: 'shadow-[0_0_45px_-8px_rgba(45,212,191,0.55)]',
    iconBg: 'from-teal-400/20 to-cyan-300/20',
    iconText: 'text-teal-300',
    ring: 'from-teal-400 to-cyan-300',
    quoteMark: 'text-teal-400/10',
    accentDot: 'bg-teal-400',
  },
  {
    border: 'from-amber-400/70 via-orange-300/50 to-teal-400/70',
    glow: 'shadow-[0_0_45px_-8px_rgba(251,191,36,0.55)]',
    iconBg: 'from-amber-400/20 to-teal-300/20',
    iconText: 'text-amber-300',
    ring: 'from-amber-400 to-teal-300',
    quoteMark: 'text-amber-400/10',
    accentDot: 'bg-amber-400',
  },
];

export function Testimonials() {
  if (!siteConfig.testimonials || siteConfig.testimonials.length === 0) {
    return null;
  }

  return (
    <section id="testimonials" className="section relative overflow-hidden">
      {/* big vivid ambient glow blobs — brand colors only.
          Smaller/softer on mobile so they don't overpower a narrow screen. */}
      <div className="pointer-events-none absolute -left-40 top-0 h-64 w-64 rounded-full bg-orange-500/20 blur-[70px] sm:h-[500px] sm:w-[500px] sm:blur-[140px]" />
      <div className="pointer-events-none absolute right-0 top-1/3 h-56 w-56 rounded-full bg-teal-400/20 blur-[70px] sm:h-[450px] sm:w-[450px] sm:blur-[140px]" />

      <div className="relative">
        {/* eyebrow pill */}
        <span className="inline-flex items-center gap-2 rounded-full border border-orange-400/40 bg-orange-400/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-orange-300 shadow-[0_0_20px_-6px_rgba(251,146,60,0.6)]">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-orange-400" />
          06 — TESTIMONIALS
        </span>

        <h2 className="mt-6 max-w-xl font-display text-2xl font-medium tracking-tight sm:text-3xl md:text-4xl">
          <span className="text-white">What clients say</span>{' '}
          <span className="bg-gradient-to-r from-orange-300 via-amber-200 to-teal-300 bg-clip-text text-transparent">
            after delivery.
          </span>
        </h2>

        <div className="mt-10 grid gap-5 sm:mt-14 sm:gap-6 md:grid-cols-3">
          {siteConfig.testimonials.map((t, i) => {
            const theme = themes[i % themes.length];
            return (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={cn(
                  'group relative rounded-2xl bg-gradient-to-br p-[1.5px] transition-all duration-300 hover:-translate-y-1',
                  theme.border,
                  theme.glow
                )}
              >
                <div className="relative flex h-full flex-col overflow-hidden rounded-2xl bg-[#0a0a0a] p-6 sm:p-8">
                  {/* soft color wash inside the card */}
                  <div
                    className={cn(
                      'pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br opacity-20 blur-2xl sm:h-40 sm:w-40 sm:blur-3xl',
                      theme.border
                    )}
                  />

                  <div className="relative flex items-start justify-between">
                    <span
                      className={cn(
                        'flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br shadow-inner sm:h-11 sm:w-11',
                        theme.iconBg,
                        theme.iconText
                      )}
                    >
                      <Quote size={17} strokeWidth={2} fill="currentColor" className="sm:h-[19px] sm:w-[19px]" />
                    </span>
                    <Quote
                      className={theme.quoteMark}
                      size={48}
                      strokeWidth={1}
                      fill="currentColor"
                    />
                  </div>

                  <p className="relative mt-5 flex-1 text-sm leading-relaxed text-white/75 sm:mt-6">
                    “{t.quote}”
                  </p>

                  <div className="relative mt-5 flex items-center gap-3 border-t border-white/10 pt-5 sm:mt-6 sm:pt-6">
                    <div
                      className={cn(
                        'relative h-11 w-11 shrink-0 overflow-hidden rounded-full bg-gradient-to-br p-[2.5px] sm:h-12 sm:w-12',
                        theme.ring
                      )}
                    >
                      <div className="relative h-full w-full overflow-hidden rounded-full ring-2 ring-[#0a0a0a]">
                        <Image
                          src={t.avatar}
                          alt={t.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">
                        {t.name}
                      </p>
                      <p className="flex items-center gap-1.5 text-xs text-white/45">
                        <span
                          className={cn(
                            'h-1 w-1 rounded-full',
                            theme.accentDot
                          )}
                        />
                        {t.role}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}