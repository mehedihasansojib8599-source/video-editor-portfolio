'use client';

import { motion } from 'framer-motion';
import { Eye, MousePointerClick, Zap, RotateCcw, type LucideIcon } from 'lucide-react';

// ---- Sits between two sections (e.g. <Services /> and <Skills />) to turn
// empty vertical spacing into a small on-theme visual moment: a row of
// value-prop highlights plus an animated marquee strip underneath.
//
// Usage in app/page.tsx:
//   import { SectionDivider } from '@/components/section-divider';
//   ...
//   <Services />
//   <SectionDivider />
//   <Skills />
//
// Edit `highlights` and `marqueeItems` below to match your own strengths/skills.
const highlights: { icon: LucideIcon; label: string; color: 'accent' | 'teal' }[] = [
  { icon: Eye, label: 'Audience Retention', color: 'accent' },
  { icon: MousePointerClick, label: 'CTR Mindset', color: 'teal' },
  { icon: Zap, label: 'Fast Delivery', color: 'accent' },
  { icon: RotateCcw, label: 'Flexible Revisions', color: 'teal' },
];

const marqueeItems = [
  'YouTube Editing',
  'Motion Graphics',
  'Color Grading',
  'Story-Based Editing',
  'Captions & Subtitles',
  'Sound Design',
];

export function SectionDivider() {
  const loopItems = [...marqueeItems, ...marqueeItems];

  return (
    <div className="relative overflow-hidden border-y border-line bg-bg-surface">
      {/* ambient brand-color glows, matches the rest of the site */}
      <div className="pointer-events-none absolute -left-32 top-0 h-72 w-72 rounded-full bg-accent/10 blur-[110px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-teal/10 blur-[110px]" />

      {/* faint grid texture for depth */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* top gradient hairline accent */}
      <div className="relative h-px w-full bg-gradient-to-r from-transparent via-accent/60 to-transparent" />

      {/* Value-prop highlights */}
      <div className="section relative !py-10">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {highlights.map(({ icon: Icon, label, color }, i) => {
            const isTeal = color === 'teal';
            return (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group flex flex-col items-center gap-3 text-center"
              >
                <div
                  className={
                    'relative flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ring-1 transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1 ' +
                    (isTeal
                      ? 'from-teal/20 to-accent/10 ring-teal/25 group-hover:ring-teal/50'
                      : 'from-accent/20 to-teal/10 ring-accent/25 group-hover:ring-accent/50')
                  }
                >
                  {/* pulsing glow */}
                  <motion.div
                    animate={{ opacity: [0.5, 0.9, 0.5] }}
                    transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 }}
                    className={
                      'absolute inset-0 rounded-xl blur-lg ' + (isTeal ? 'bg-teal/25' : 'bg-accent/25')
                    }
                  />
                  <Icon
                    className={'relative transition-colors duration-300 ' + (isTeal ? 'text-teal' : 'text-accent')}
                    size={22}
                    strokeWidth={1.5}
                  />
                </div>
                <p className="text-sm font-medium text-ink transition-colors duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-accent group-hover:to-teal">
                  {label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Animated marquee strip */}
      <div className="relative overflow-hidden border-t border-line/70 bg-gradient-to-r from-accent/5 via-transparent to-teal/5 py-4">
        <div className="absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-bg-surface to-transparent" />
        <div className="absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-bg-surface to-transparent" />

        <div className="flex w-max animate-marquee items-center gap-10 font-mono text-xs uppercase tracking-widest text-ink-faint">
          {loopItems.map((item, i) => {
            const isTeal = i % 2 === 1;
            return (
              <span key={`${item}-${i}`} className="flex items-center gap-10">
                <span className="cursor-default text-ink-muted transition-colors duration-300 hover:text-ink">
                  {item}
                </span>
                <span
                  className={
                    'h-1.5 w-1.5 rounded-full shadow-[0_0_8px_2px_rgba(245,166,35,0.6)] ' +
                    (isTeal ? 'bg-teal shadow-[0_0_8px_2px_rgba(45,212,191,0.6)]' : 'bg-accent')
                  }
                />
              </span>
            );
          })}
        </div>
      </div>

      {/* bottom gradient hairline accent */}
      <div className="relative h-px w-full bg-gradient-to-r from-transparent via-teal/60 to-transparent" />
    </div>
  );
}