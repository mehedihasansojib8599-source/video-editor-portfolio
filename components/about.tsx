'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Folder, Clapperboard, Clock, Sparkles, type LucideIcon } from 'lucide-react';
import { siteConfig } from '@/data/site-config';

function iconForStat(label: string): LucideIcon {
  const lower = label.toLowerCase();
  if (lower.includes('project')) return Folder;
  if (lower.includes('video')) return Clapperboard;
  if (lower.includes('year') || lower.includes('experience')) return Clock;
  return Folder;
}

const KEYWORDS: { word: string; color: 'accent' | 'teal' }[] = [
  { word: 'YouTube videos', color: 'accent' },
  { word: 'faceless content', color: 'teal' },
  { word: 'short-form videos', color: 'accent' },
  { word: 'motion graphics', color: 'teal' },
  { word: 'sound design', color: 'accent' },
  { word: 'color correction', color: 'teal' },
  { word: 'captions', color: 'accent' },
];

function highlightKeywords(text: string) {
  const pattern = new RegExp(`(${KEYWORDS.map((k) => k.word).join('|')})`, 'gi');
  const parts = text.split(pattern);

  return parts.map((part, i) => {
    const match = KEYWORDS.find((k) => k.word.toLowerCase() === part.toLowerCase());
    if (!match) return <span key={i}>{part}</span>;
    return (
      <span
        key={i}
        className={`font-medium ${match.color === 'accent' ? 'text-accent' : 'text-teal'}`}
      >
        {part}
      </span>
    );
  });
}

export function About() {
  const { about } = siteConfig;

  return (
    <section id="about" className="section relative overflow-hidden">
      <div className="pointer-events-none absolute -top-24 right-[-6rem] h-56 w-56 rounded-full bg-gradient-to-br from-orange-500/40 via-yellow-400/20 to-transparent blur-[60px] sm:h-96 sm:w-96 sm:blur-[110px]" />
      <div className="pointer-events-none absolute bottom-0 left-[-4rem] h-48 w-48 rounded-full bg-gradient-to-tr from-teal-400/35 via-transparent to-transparent blur-[60px] sm:h-80 sm:w-80 sm:blur-[110px]" />
      <div className="pointer-events-none absolute left-1/3 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-purple-500/20 blur-[60px] sm:h-64 sm:w-64 sm:blur-[100px]" />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="relative grid gap-10 md:grid-cols-2 md:items-center md:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto w-full max-w-xs sm:max-w-sm md:mx-0 md:max-w-none"
        >
          <motion.div
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-accent/45 via-purple-400/20 to-teal/45 blur-2xl sm:-inset-6 sm:rounded-[2.5rem] sm:blur-3xl"
          />

          <div className="absolute -inset-[3px] -z-[5] overflow-hidden rounded-2xl">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-[-50%] h-[200%] w-[200%]"
              style={{
                background:
                  'conic-gradient(from 0deg, transparent 0%, #f5a623 12%, transparent 28%, transparent 50%, #2dd4bf 62%, transparent 78%, transparent 100%)',
              }}
            />
          </div>
          <div className="absolute -inset-[3px] -z-[4] rounded-2xl bg-bg" style={{ margin: '2px' }} />

          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl border border-line/60 bg-bg-surface p-[1.5px] sm:aspect-[4/5]">
            <div className="relative h-full w-full overflow-hidden rounded-[calc(1rem-1.5px)]">
              <Image
                src={about.portrait}
                alt="Portrait of the editor"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-bg/80 via-bg/10 to-transparent" />
              <div className="absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-white/[0.06] to-transparent" />
            </div>
          </div>

          <motion.span
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
            className="pointer-events-none absolute inset-0 -z-[3] hidden sm:block"
          >
            <span className="absolute -top-2 left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-accent shadow-[0_0_14px_2px_rgba(245,166,35,0.7)]" />
          </motion.span>
          <motion.span
            animate={{ rotate: -360 }}
            transition={{ duration: 13, repeat: Infinity, ease: 'linear' }}
            className="pointer-events-none absolute inset-0 -z-[3] hidden sm:block"
          >
            <span className="absolute -bottom-2 right-1/3 h-2 w-2 rounded-full bg-teal shadow-[0_0_14px_2px_rgba(45,212,191,0.7)]" />
          </motion.span>

          <motion.div
            whileHover={{ scale: 1.08, rotate: -6 }}
            className="absolute -bottom-3 -right-3 flex h-12 w-12 items-center justify-center rounded-xl border border-line bg-bg-surface/95 backdrop-blur sm:-bottom-5 sm:-right-5 sm:h-16 sm:w-16 sm:rounded-2xl"
          >
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-accent/30 to-teal/30 blur-md sm:rounded-2xl" />
            <Clapperboard className="relative text-accent" size={18} strokeWidth={1.5} />
          </motion.div>

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-5 -left-5 hidden h-14 w-14 items-center justify-center rounded-2xl border border-line bg-bg-surface/95 backdrop-blur sm:flex"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-teal/30 to-accent/30 blur-md" />
            <Sparkles className="relative text-teal" size={20} strokeWidth={1.5} />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center md:text-left"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/50 bg-gradient-to-r from-orange-500/20 to-transparent px-4 py-1.5 shadow-[0_0_28px_-6px_rgba(249,115,22,0.7)]">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-orange-500" />
            </span>
            <p className="text-xs font-semibold uppercase tracking-widest text-orange-400">
              01 — {about.heading}
            </p>
          </div>
          <h2 className="mt-5 font-display text-2xl font-medium tracking-tight text-ink drop-shadow-[0_0_25px_rgba(242,166,90,0.2)] sm:text-3xl md:text-4xl">
            The story is in the structure.
          </h2>
          <div className="mt-6 space-y-4 text-left leading-relaxed text-ink-muted sm:space-y-5">
            {about.paragraphs.map((p, i) => (
              <p key={i} className={i === 0 ? 'text-base text-ink/90 sm:text-lg' : 'text-sm sm:text-base'}>
                {highlightKeywords(p)}
              </p>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-3 gap-3 border-t border-transparent bg-gradient-to-r from-accent/60 via-teal/60 to-transparent bg-[length:100%_1.5px] bg-top bg-no-repeat pt-6 sm:mt-10 sm:gap-6 sm:pt-8">
            {about.stats.map((stat) => {
              const Icon = iconForStat(stat.label);
              return (
                <div key={stat.label} className="group text-center transition-transform duration-300 hover:-translate-y-1 md:text-left">
                  <Icon className="mx-auto mb-2 text-teal drop-shadow-[0_0_10px_rgba(45,212,191,0.6)] md:mx-0" size={16} strokeWidth={1.5} />
                  <p className="relative bg-gradient-to-r from-accent to-teal bg-clip-text font-display text-xl text-transparent drop-shadow-[0_0_20px_rgba(242,166,90,0.35)] sm:text-2xl md:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-[11px] text-ink-muted sm:text-xs">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}