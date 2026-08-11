'use client';

import { motion } from 'framer-motion';
import {
  Film,
  Palette,
  Sparkles,
  AudioWaveform,
  Smartphone,
  Youtube,
  ArrowUpRight,
  type LucideIcon,
} from 'lucide-react';
import { siteConfig } from '@/data/site-config';

// Maps the `icon` string in siteConfig.services to an actual icon component.
// Add new entries here if you introduce a new icon name in the data file.
const iconMap: Record<string, LucideIcon> = {
  Film,
  Palette,
  Sparkles,
  AudioWaveform,
  Smartphone,
  Youtube,
};

// ---- EDIT: service cards live in siteConfig.services in data/site-config.ts ----
export function Services() {
  return (
    <section id="services" className="section relative overflow-hidden">
      {/* Layered premium glow — matches Portfolio/Skills sections.
          Smaller/softer on mobile so it doesn't overpower a narrow screen. */}
      <div className="pointer-events-none absolute -top-24 right-[-6rem] h-56 w-56 rounded-full bg-gradient-to-br from-orange-500/40 via-yellow-400/20 to-transparent blur-[60px] sm:h-96 sm:w-96 sm:blur-[110px]" />
      <div className="pointer-events-none absolute top-32 left-[-4rem] h-56 w-56 rounded-full bg-gradient-to-tr from-teal-400/35 via-transparent to-transparent blur-[60px] sm:h-72 sm:w-72 sm:blur-[110px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-purple-500/15 blur-[60px] sm:h-64 sm:w-64 sm:blur-[100px]" />

      {/* Faint grid texture for depth */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="relative">
        <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/50 bg-gradient-to-r from-orange-500/20 to-transparent px-4 py-1.5 shadow-[0_0_28px_-6px_rgba(249,115,22,0.7)]">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-orange-500" />
          </span>
          <p className="text-xs font-semibold uppercase tracking-widest text-orange-400">
            02 — Services
          </p>
        </div>
        <h2 className="mt-6 max-w-xl font-display text-2xl font-medium tracking-tight text-ink sm:text-3xl md:text-4xl">
          Where I add the most value.
        </h2>
      </div>

      <div className="relative mt-10 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">
        {siteConfig.services.map((service, i) => {
          const Icon = iconMap[service.icon] ?? Film;
          // Alternate the icon badge lean between amber and teal so the
          // grid reads as colorful as a whole, not just on the top border.
          const leanTeal = i % 2 === 1;
          const iconWrapClass = leanTeal
            ? 'bg-gradient-to-br from-teal/35 to-accent/15 ring-teal/40 group-hover:from-teal/50 group-hover:to-accent/30'
            : 'bg-gradient-to-br from-accent/35 to-teal/15 ring-accent/40 group-hover:from-accent/50 group-hover:to-teal/30';
          const iconGlowClass = leanTeal ? 'bg-teal/40' : 'bg-accent/40';
          const iconColorClass = leanTeal ? 'text-teal' : 'text-accent';

          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden bg-bg p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-bg-surface sm:p-8"
            >
              {/* Gradient top-border — always visible, brightens on hover */}
              <span className="absolute inset-x-0 top-0 h-[2.5px] bg-gradient-to-r from-accent to-teal opacity-90 shadow-[0_0_12px_rgba(242,166,90,0.5)] transition-opacity duration-300 group-hover:opacity-100" />

              {/* Gradient side-border — skipped on the first column so it doesn't double the outer frame */}
              {i % 3 !== 0 && (
                <span className="absolute inset-y-0 left-0 w-[2px] bg-gradient-to-b from-accent to-teal opacity-60 transition-opacity duration-300 group-hover:opacity-90" />
              )}

              {/* Glowing icon badge — alternates amber/teal for color variety */}
              <div
                className={`relative flex h-10 w-10 items-center justify-center rounded-xl ring-1 transition-colors duration-300 sm:h-12 sm:w-12 ${iconWrapClass}`}
              >
                <div
                  className={`absolute inset-0 rounded-xl blur-lg opacity-90 transition-opacity duration-300 group-hover:opacity-100 ${iconGlowClass}`}
                />
                <Icon className={`relative ${iconColorClass}`} size={20} strokeWidth={1.5} />
              </div>

              <h3 className="mt-4 font-display text-base text-ink sm:mt-5 sm:text-lg">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                {service.description}
              </p>
            </motion.div>
          );
        })}

        {/* Fills any leftover grid cell — glowing CTA card matching the accent theme */}
        <motion.a
          href="#contact"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: siteConfig.services.length * 0.05 }}
          className="group relative flex flex-col justify-between overflow-hidden bg-gradient-to-br from-accent/15 via-bg to-teal/10 p-5 transition-colors duration-300 hover:from-accent/25 hover:to-teal/20 sm:p-8"
        >
          <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-accent/20 blur-2xl sm:h-40 sm:w-40 sm:blur-3xl" />
          <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-teal/20 blur-2xl sm:h-40 sm:w-40 sm:blur-3xl" />

          <div className="relative">
            <h3 className="font-display text-base text-ink sm:text-lg">Need something custom?</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">
              Every project is different — let&apos;s talk about what you need.
            </p>
          </div>

          <div className="relative mt-5 flex items-center gap-2 text-sm font-medium text-accent sm:mt-6">
            Let&apos;s talk
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </div>
        </motion.a>
      </div>
    </section>
  );
}