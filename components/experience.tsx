'use client';

import { motion } from 'framer-motion';
import { Briefcase, Building2, Youtube, Clapperboard, Sparkles } from 'lucide-react';
import { siteConfig } from '@/data/site-config';

// ---- EDIT: cycle of icons for each timeline entry (data-driven, so we
// map by index rather than by title text) ----
const icons = [Briefcase, Building2, Youtube, Clapperboard, Sparkles];

// ---- EDIT: timeline entries live in siteConfig.experience ----
export function Experience() {
  return (
    <section className="section relative overflow-hidden">
      {/* ambient glow — matches Process section's brand-color treatment.
          Smaller/softer on mobile so it doesn't overpower a narrow screen. */}
      <div className="pointer-events-none absolute -left-40 top-10 h-64 w-64 rounded-full bg-orange-500/10 blur-[70px] sm:h-[420px] sm:w-[420px] sm:blur-[130px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-64 w-64 rounded-full bg-teal-400/10 blur-[70px] sm:h-[420px] sm:w-[420px] sm:blur-[130px]" />

      {/* premium line-grid background, faded via radial mask so it doesn't fight the content */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          maskImage:
            'radial-gradient(ellipse 80% 60% at 50% 40%, black 20%, transparent 90%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 80% 60% at 50% 40%, black 20%, transparent 90%)',
        }}
      />
      {/* fine dot accent on top of the grid for extra texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(245,166,35,0.5) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          backgroundPosition: '24px 24px',
        }}
      />

      <div className="relative">
        {/* ---- section heading ---- */}
        <motion.span
          initial={{ opacity: 0, y: -8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-400/5 px-4 py-1.5 text-xs font-semibold tracking-wider text-orange-400 backdrop-blur-sm"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-orange-400" />
          </span>
          07 — EXPERIENCE
        </motion.span>

        <h2 className="mt-6 max-w-xl font-display text-2xl font-medium tracking-tight sm:text-3xl md:text-4xl">
          <span className="text-white">Where the</span>{' '}
          <span className="bg-gradient-to-r from-orange-300 via-amber-200 to-teal-300 bg-clip-text text-transparent">
            craft was built.
          </span>
        </h2>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ transformOrigin: 'left' }}
          className="mt-4 h-px w-24 bg-gradient-to-r from-orange-400 to-teal-400"
        />

        {/* ---- timeline ---- */}
        <div className="relative mt-10 pl-8 sm:mt-14 sm:pl-12">
          {/* base track */}
          <div className="absolute left-0 top-2 bottom-2 w-px bg-white/[0.06]" />
          {/* animated gradient line that "draws" on scroll */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.1, ease: 'easeInOut' }}
            style={{ transformOrigin: 'top' }}
            className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-orange-400 via-amber-300/70 to-teal-400"
          />
          {/* soft glow duplicate of the line for extra premium feel */}
          <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-orange-400/40 via-transparent to-teal-400/40 blur-[3px]" />

          {siteConfig.experience.map((item, i) => {
            const Icon = icons[i % icons.length];
            const isTeal = i % 2 === 1;
            const num = String(i + 1).padStart(2, '0');

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative pb-6 last:pb-0 sm:pb-8"
              >
                {/* glowing pulsing node on the timeline */}
                <span className="absolute -left-[calc(2rem+5px)] top-6 flex h-2.5 w-2.5 sm:-left-[calc(3rem+5px)]">
                  <span
                    className={
                      'absolute inline-flex h-full w-full animate-ping rounded-full opacity-60 ' +
                      (isTeal ? 'bg-teal-400' : 'bg-orange-400')
                    }
                  />
                  <span
                    className={
                      'relative inline-flex h-2.5 w-2.5 rounded-full shadow-[0_0_12px_rgba(245,166,35,0.6)] ' +
                      (isTeal
                        ? 'bg-gradient-to-br from-teal-400 to-orange-400'
                        : 'bg-gradient-to-br from-orange-400 to-teal-400')
                    }
                  />
                </span>

                {/* card wrapper with gradient-border hover, matching Process cards */}
                <div className="relative rounded-2xl border border-transparent bg-gradient-to-br from-white/10 to-white/5 p-[1px] transition-all duration-300 hover:-translate-y-1 hover:from-orange-400/60 hover:to-teal-400/60 hover:shadow-[0_0_40px_-8px_rgba(245,166,35,0.45)]">
                  <div className="relative flex flex-col gap-3 overflow-hidden rounded-2xl bg-[#0c0c0c]/95 p-4 backdrop-blur-sm sm:flex-row sm:items-start sm:gap-4 sm:p-6">
                    {/* diagonal shine sweep on hover */}
                    <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.04] to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                    {/* faint oversized index number, premium editorial touch — smaller on mobile */}
                    <span className="pointer-events-none absolute -right-1 -top-2 select-none font-display text-4xl font-bold text-white/[0.03] transition-colors duration-300 group-hover:text-white/[0.06] sm:-right-2 sm:-top-4 sm:text-7xl">
                      {num}
                    </span>

                    <span
                      className={
                        'relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br transition-all duration-300 group-hover:scale-110 sm:h-11 sm:w-11 ' +
                        (isTeal
                          ? 'from-teal-400/10 to-orange-400/10 text-teal-300 group-hover:border-teal-400/40 group-hover:text-orange-300 group-hover:shadow-[0_0_20px_-4px_rgba(45,212,191,0.5)]'
                          : 'from-orange-400/10 to-teal-400/10 text-orange-300 group-hover:border-orange-400/40 group-hover:text-teal-300 group-hover:shadow-[0_0_20px_-4px_rgba(245,166,35,0.5)]')
                      }
                    >
                      <Icon size={18} strokeWidth={1.75} />
                    </span>

                    <div className="relative">
                      <p className="font-mono text-xs uppercase tracking-widest text-orange-400">
                        {item.year}
                      </p>
                      <h3 className="mt-2 font-display text-lg text-white transition-colors duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-300 group-hover:to-teal-300 sm:text-xl">
                        {item.title}
                      </h3>
                      <p className="mt-2 max-w-lg text-sm leading-relaxed text-white/55">
                        {item.description}
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