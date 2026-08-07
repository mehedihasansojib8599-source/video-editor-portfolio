'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Folder, Clapperboard, Clock, Sparkles, type LucideIcon } from 'lucide-react';
import { siteConfig } from '@/data/site-config';

// Picks an icon for each stat based on a keyword in its label.
// Add more keyword → icon mappings here if you introduce new stats.
function iconForStat(label: string): LucideIcon {
  const lower = label.toLowerCase();
  if (lower.includes('project')) return Folder;
  if (lower.includes('video')) return Clapperboard;
  if (lower.includes('year') || lower.includes('experience')) return Clock;
  return Folder;
}

// Wraps a handful of key skill words in accent color wherever they appear in
// a paragraph, so the eye catches them while skimming. Each keyword has a
// fixed color (amber or teal) so the highlights alternate rather than
// reading as one flat block of color. Add/remove words here to match your
// own about text.
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

// ---- EDIT: about text, portrait image, and stats live in siteConfig.about ----
export function About() {
  const { about } = siteConfig;

  return (
    <section id="about" className="section relative overflow-hidden">
      {/* Layered premium glow — matches Portfolio/Skills/Services sections */}
      <div className="pointer-events-none absolute -top-24 right-[-6rem] h-96 w-96 rounded-full bg-gradient-to-br from-orange-500/25 via-yellow-400/10 to-transparent blur-[100px]" />
      <div className="pointer-events-none absolute bottom-0 left-[-4rem] h-80 w-80 rounded-full bg-gradient-to-tr from-teal-400/20 via-transparent to-transparent blur-[100px]" />

      {/* Faint grid texture for depth */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="relative grid gap-16 md:grid-cols-2 md:items-center">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Soft accent glow behind the frame — bigger + pulsing for more presence */}
          <motion.div
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-accent/30 via-teal/10 to-teal/30 blur-3xl"
          />

          {/* Rotating conic-gradient ring — the "4 pasha gurba" glowing frame */}
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
          {/* mask layer so the conic gradient only shows as a thin border, not a full fill */}
          <div className="absolute -inset-[3px] -z-[4] rounded-2xl bg-bg" style={{ margin: '2px' }} />

          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-line/60 bg-bg-surface p-[1.5px]">
            <div className="relative h-full w-full overflow-hidden rounded-[calc(1rem-1.5px)]">
              <Image
                src={about.portrait}
                alt="Portrait of the editor"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Bottom gradient fade for depth */}
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-bg/80 via-bg/10 to-transparent" />
              {/* Subtle top sheen for glass feel */}
              <div className="absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-white/[0.06] to-transparent" />
            </div>
          </div>

          {/* Orbiting accent dots around the frame */}
          <motion.span
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
            className="pointer-events-none absolute inset-0 -z-[3]"
          >
            <span className="absolute -top-2 left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-accent shadow-[0_0_14px_2px_rgba(245,166,35,0.7)]" />
          </motion.span>
          <motion.span
            animate={{ rotate: -360 }}
            transition={{ duration: 13, repeat: Infinity, ease: 'linear' }}
            className="pointer-events-none absolute inset-0 -z-[3]"
          >
            <span className="absolute -bottom-2 right-1/3 h-2 w-2 rounded-full bg-teal shadow-[0_0_14px_2px_rgba(45,212,191,0.7)]" />
          </motion.span>

          {/* Glowing corner accent badge (clapperboard) */}
          <motion.div
            whileHover={{ scale: 1.08, rotate: -6 }}
            className="absolute -bottom-5 -right-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-line bg-bg-surface/95 backdrop-blur"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/30 to-teal/30 blur-md" />
            <Clapperboard className="relative text-accent" size={24} strokeWidth={1.5} />
          </motion.div>

          {/* Floating "sparkle" badge, top-left — extra premium accent */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-5 -left-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-line bg-bg-surface/95 backdrop-blur"
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
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-gradient-to-r from-orange-500/10 to-transparent px-4 py-1.5 shadow-[0_0_20px_-8px_rgba(249,115,22,0.5)]">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-orange-500" />
            </span>
            <p className="text-xs font-semibold uppercase tracking-widest text-orange-400">
              01 — {about.heading}
            </p>
          </div>
          <h2 className="mt-5 font-display text-3xl font-medium tracking-tight text-ink md:text-4xl">
            The story is in the structure.
          </h2>
          <div className="mt-6 space-y-5 leading-relaxed text-ink-muted">
            {about.paragraphs.map((p, i) => (
              <p key={i} className={i === 0 ? 'text-lg text-ink/90' : ''}>
                {highlightKeywords(p)}
              </p>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-transparent bg-gradient-to-r from-accent/40 via-teal/40 to-transparent bg-[length:100%_1px] bg-top bg-no-repeat pt-8">
            {about.stats.map((stat) => {
              const Icon = iconForStat(stat.label);
              return (
                <div key={stat.label}>
                  <Icon className="mb-2 text-teal" size={18} strokeWidth={1.5} />
                  <p className="bg-gradient-to-r from-accent to-teal bg-clip-text font-display text-3xl text-transparent">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs text-ink-muted">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}