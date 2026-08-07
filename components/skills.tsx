'use client';

import { motion } from 'framer-motion';
import { siteConfig } from '@/data/site-config';
import { useCountUp } from '@/hooks/use-count-up';

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

// Brand-accurate glow colors for each editing tool
const toolBrandStyles = [
  {
    name: 'Premiere Pro',
    border:
      'from-violet-500/40 via-white/10 to-purple-600/40 hover:from-violet-500/80 hover:to-purple-600/80 shadow-[0_0_14px_-6px_rgba(139,92,246,0.5)] hover:shadow-[0_0_26px_-4px_rgba(139,92,246,0.7)]',
    dot: 'bg-violet-400',
    glow: 'rgba(139,92,246,0.55)',
  },
  {
    name: 'After Effects',
    border:
      'from-indigo-500/40 via-white/10 to-blue-600/40 hover:from-indigo-500/80 hover:to-blue-600/80 shadow-[0_0_14px_-6px_rgba(99,102,241,0.5)] hover:shadow-[0_0_26px_-4px_rgba(99,102,241,0.7)]',
    dot: 'bg-indigo-400',
    glow: 'rgba(99,102,241,0.55)',
  },
  {
    name: 'CapCut',
    border:
      'from-cyan-400/40 via-white/10 to-pink-500/40 hover:from-cyan-400/80 hover:to-pink-500/80 shadow-[0_0_14px_-6px_rgba(34,211,238,0.5)] hover:shadow-[0_0_26px_-4px_rgba(236,72,153,0.6)]',
    dot: 'bg-cyan-400',
    glow: 'rgba(34,211,238,0.55)',
  },
  {
    name: 'Photoshop',
    border:
      'from-sky-500/40 via-white/10 to-blue-600/40 hover:from-sky-500/80 hover:to-blue-600/80 shadow-[0_0_14px_-6px_rgba(14,165,233,0.5)] hover:shadow-[0_0_26px_-4px_rgba(14,165,233,0.7)]',
    dot: 'bg-sky-400',
    glow: 'rgba(14,165,233,0.55)',
  },
  {
    name: 'Audition',
    border:
      'from-teal-400/40 via-white/10 to-cyan-500/40 hover:from-teal-400/80 hover:to-cyan-500/80 shadow-[0_0_14px_-6px_rgba(45,212,191,0.5)] hover:shadow-[0_0_26px_-4px_rgba(45,212,191,0.7)]',
    dot: 'bg-teal-400',
    glow: 'rgba(45,212,191,0.55)',
  },
  {
    name: 'Media Encoder',
    border:
      'from-purple-500/40 via-white/10 to-violet-600/40 hover:from-purple-500/80 hover:to-violet-600/80 shadow-[0_0_14px_-6px_rgba(168,85,247,0.5)] hover:shadow-[0_0_26px_-4px_rgba(168,85,247,0.7)]',
    dot: 'bg-purple-400',
    glow: 'rgba(168,85,247,0.55)',
  },
];

function AverageCounter({ value }: { value: number }) {
  const { ref, display } = useCountUp(value, 1.4);
  return (
    <span
      ref={ref}
      className="bg-gradient-to-br from-orange-200 via-white to-teal-200 bg-clip-text font-display text-4xl font-medium text-transparent"
    >
      {display}%
    </span>
  );
}

function SkillRow({ skill, index }: { skill: { name: string; level: number }; index: number }) {
  const { ref, display } = useCountUp(skill.level, 1);

  return (
    <div className="group rounded-xl p-3 -m-3 transition-all duration-300 hover:bg-white/[0.035] hover:-translate-y-0.5">
      <div className="mb-2.5 flex items-center justify-between text-sm">
        <span className="font-medium text-ink transition-colors duration-300 group-hover:text-white">
          {skill.name}
        </span>
        <span ref={ref} className="timecode text-ink-faint transition-colors duration-300 group-hover:text-accent">
          {display}%
        </span>
      </div>
      <div className="relative h-1.5 w-full overflow-hidden rounded-full bg-bg-surface2">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: index * 0.08, ease: 'easeOut' }}
          className="relative h-full overflow-hidden rounded-full bg-gradient-to-r from-accent via-amber-300 to-teal shadow-[0_0_10px_rgba(242,166,90,0.4)] transition-shadow duration-300 group-hover:shadow-[0_0_18px_rgba(242,166,90,0.65)]"
        >
          {/* shimmer sweep across the filled bar */}
          <motion.span
            className="absolute inset-y-0 w-8 bg-gradient-to-r from-transparent via-white/60 to-transparent"
            animate={{ x: ['-100%', '400%'] }}
            transition={{
              repeat: Infinity,
              duration: 2.6,
              ease: 'easeInOut',
              delay: index * 0.15 + 1.2,
              repeatDelay: 1.6,
            }}
          />
        </motion.div>
      </div>
    </div>
  );
}

// ---- EDIT: skill names + proficiency levels live in siteConfig.skills ----
export function Skills() {
  const skills = siteConfig.skills;
  const average = Math.round(
    skills.reduce((sum, s) => sum + s.level, 0) / skills.length
  );
  const topSkill = [...skills].sort((a, b) => b.level - a.level)[0];

  const radius = 88;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (average / 100) * circumference;

  return (
    <section className="section relative overflow-hidden">
      {/* Layered premium glow — now gently breathing */}
      <motion.div
        className="pointer-events-none absolute -top-24 left-[-6rem] h-96 w-96 rounded-full bg-gradient-to-br from-orange-500/25 via-yellow-400/10 to-transparent blur-[100px]"
        animate={{ opacity: [0.7, 1, 0.7], scale: [1, 1.06, 1] }}
        transition={{ repeat: Infinity, duration: 9, ease: 'easeInOut' }}
      />
      <motion.div
        className="pointer-events-none absolute bottom-0 right-[-4rem] h-80 w-80 rounded-full bg-gradient-to-tl from-teal-400/20 via-transparent to-transparent blur-[100px]"
        animate={{ opacity: [0.6, 1, 0.6], scale: [1, 1.05, 1] }}
        transition={{ repeat: Infinity, duration: 11, ease: 'easeInOut', delay: 1 }}
      />
      <div className="pointer-events-none absolute left-1/4 top-0 h-64 w-64 -translate-y-1/2 rounded-full bg-gradient-to-br from-purple-500/15 via-orange-400/10 to-transparent blur-[90px]" />

      {/* Faint grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Film-grain texture for extra depth */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative grid gap-16 md:grid-cols-2">
        <div className="md:sticky md:top-28 md:self-start">
          {/* Floating decorative skill chips */}
          <div className="relative mb-10 hidden h-16 sm:block">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: EASE }}
              animate={{ y: [0, -5, 0] }}
              style={{ animationDuration: '5s' }}
              className="absolute left-0 top-0 inline-flex items-center gap-1.5 rounded-full border border-orange-500/20 bg-orange-500/5 px-3 py-1 text-[11px] font-medium text-orange-300 shadow-[0_0_16px_-8px_rgba(249,115,22,0.5)] backdrop-blur-sm"
            >
              <span className="h-1 w-1 rounded-full bg-orange-400" />
              Sound Design
            </motion.span>

            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
              className="absolute left-40 top-4 inline-flex items-center gap-1.5 rounded-full border border-teal-400/20 bg-teal-400/5 px-3 py-1 text-[11px] font-medium text-teal-300 shadow-[0_0_16px_-8px_rgba(45,212,191,0.5)] backdrop-blur-sm"
            >
              <span className="h-1 w-1 rounded-full bg-teal-400" />
              Faceless
            </motion.span>

            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
              className="absolute right-0 top-0 inline-flex items-center gap-1.5 rounded-full border border-purple-400/20 bg-purple-400/5 px-3 py-1 text-[11px] font-medium text-purple-300 shadow-[0_0_16px_-8px_rgba(168,85,247,0.5)] backdrop-blur-sm"
            >
              <span className="h-1 w-1 rounded-full bg-purple-400" />
              Color Grading
            </motion.span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
            className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-gradient-to-r from-orange-500/10 to-transparent px-4 py-1.5 shadow-[0_0_20px_-8px_rgba(249,115,22,0.5)] backdrop-blur-sm"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-orange-500" />
            </span>
            <p className="text-xs font-semibold uppercase tracking-widest text-orange-400">
              03 — Skills
            </p>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.08, ease: EASE }}
            className="mt-6 font-display text-3xl font-medium tracking-tight text-ink md:text-4xl"
          >
            Craft, measured honestly.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.14, ease: EASE }}
            className="mt-4 max-w-sm text-ink-muted"
          >
            A candid read on where my strengths sit — so you know exactly what
            you&apos;re hiring for.
          </motion.p>

          {/* Radial average-proficiency chart */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
            className="mt-12 flex items-center gap-8"
          >
            <div className="relative h-48 w-48 shrink-0">
              {/* breathing ambient glow behind the ring */}
              <motion.div
                className="pointer-events-none absolute inset-0 -m-4 rounded-full bg-gradient-to-br from-orange-500/25 via-transparent to-teal-400/25 blur-2xl"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
              />
              <div className="pointer-events-none absolute inset-0 rounded-full shadow-[0_0_45px_-6px_rgba(249,115,22,0.45),0_0_45px_-6px_rgba(45,212,191,0.35)]" />

              <svg viewBox="0 0 200 200" className="relative h-full w-full -rotate-90 drop-shadow-[0_0_18px_rgba(249,115,22,0.35)]">
                <circle
                  cx="100"
                  cy="100"
                  r={radius}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="10"
                  className="text-bg-surface2"
                />
                <motion.circle
                  cx="100"
                  cy="100"
                  r={radius}
                  fill="none"
                  strokeWidth="12"
                  strokeLinecap="round"
                  stroke="url(#skillsRingGradient)"
                  strokeDasharray={circumference}
                  initial={{ strokeDashoffset: circumference }}
                  whileInView={{ strokeDashoffset: offset }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.3, ease: 'easeOut' }}
                />
                {/* traveling bright dot at the tip of the progress ring */}
                <motion.circle
                  r="5"
                  fill="#fff"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.1, duration: 0.3 }}
                  style={{ filter: 'drop-shadow(0 0 6px rgba(255,255,255,0.9))' }}
                >
                  <animateMotion
                    dur="1.3s"
                    begin="0.05s"
                    fill="freeze"
                    path={`M 100 12 A ${radius} ${radius} 0 ${average > 50 ? 1 : 0} 1 ${
                      100 + radius * Math.sin((average / 100) * 2 * Math.PI)
                    } ${100 - radius * Math.cos((average / 100) * 2 * Math.PI)}`}
                  />
                </motion.circle>
                <defs>
                  <linearGradient id="skillsRingGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#F2A65A" />
                    <stop offset="100%" stopColor="#3E8E8E" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <AverageCounter value={average} />
                <span className="mt-1 text-xs uppercase tracking-widest text-ink-faint">
                  Avg. proficiency
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-orange-400/30 via-white/10 to-teal-400/30 p-[1.5px] shadow-[0_0_20px_-10px_rgba(249,115,22,0.4)] transition-all duration-300 hover:shadow-[0_0_28px_-8px_rgba(249,115,22,0.6)] hover:-translate-y-0.5">
                <div className="rounded-2xl bg-bg-surface px-5 py-4 backdrop-blur-sm">
                  <p className="font-display text-2xl font-medium text-ink">
                    {skills.length}+
                  </p>
                  <p className="text-xs text-ink-faint">Core skills tracked</p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-teal-400/30 via-white/10 to-orange-400/30 p-[1.5px] shadow-[0_0_20px_-10px_rgba(45,212,191,0.4)] transition-all duration-300 hover:shadow-[0_0_28px_-8px_rgba(45,212,191,0.6)] hover:-translate-y-0.5">
                <div className="rounded-2xl bg-bg-surface px-5 py-4 backdrop-blur-sm">
                  <p className="font-display text-lg font-medium text-accent">
                    {topSkill.name}
                  </p>
                  <p className="text-xs text-ink-faint">
                    Strongest skill — {topSkill.level}%
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Tools grid */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
            className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3"
          >
            {toolBrandStyles.map((tool, i) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.35 + i * 0.05, ease: EASE }}
                className={`group relative overflow-hidden rounded-full bg-gradient-to-br p-[1.5px] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03] ${tool.border}`}
              >
                <span
                  className="absolute inset-0 -z-10 rounded-full opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-60"
                  style={{ background: tool.glow }}
                />
                <span className="flex items-center justify-center gap-1.5 rounded-full bg-bg-surface px-4 py-2 text-center text-xs text-ink-muted backdrop-blur-sm transition-colors duration-300 group-hover:text-white">
                  <span className={`h-1.5 w-1.5 rounded-full ${tool.dot} transition-shadow duration-300 group-hover:shadow-[0_0_8px_currentColor]`} />
                  {tool.name}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Premium quote / philosophy card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4, ease: EASE }}
            className="group relative mt-8 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.01] p-6 shadow-xl backdrop-blur-sm transition-all duration-500 hover:border-white/20 hover:shadow-[0_0_40px_-12px_rgba(249,115,22,0.35)]"
          >
            <div className="pointer-events-none absolute -top-10 -left-10 h-40 w-40 rounded-full bg-orange-500/15 blur-[70px] transition-opacity duration-500 group-hover:opacity-150" />
            <div className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-teal-400/15 blur-[70px]" />

            <svg
              className="relative mb-3 h-6 w-6 text-orange-400/60"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M7.17 6C4.87 6 3 7.87 3 10.17c0 2.3 1.87 4.17 4.17 4.17.31 0 .61-.04.9-.1-.53 1.5-1.66 2.68-3.15 3.35a1 1 0 00.42 1.9c3.6-.6 6.16-3.7 6.16-7.32V10.17C11.5 7.87 9.63 6 7.33 6h-.16zm10 0c-2.3 0-4.17 1.87-4.17 4.17 0 2.3 1.87 4.17 4.17 4.17.31 0 .61-.04.9-.1-.53 1.5-1.66 2.68-3.15 3.35a1 1 0 00.42 1.9c3.6-.6 6.16-3.7 6.16-7.32V10.17C21.5 7.87 19.63 6 17.33 6h-.16z" />
            </svg>

            <p className="relative text-sm leading-relaxed text-ink-muted">
              Every frame tells a story —{' '}
              <span className="bg-gradient-to-r from-orange-300 to-teal-300 bg-clip-text font-medium text-transparent">
                I make sure yours gets told right.
              </span>
            </p>

            <div className="relative mt-5 flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-400" />
              </span>
              <span className="text-xs font-medium tracking-wide text-ink-muted">
                Available for freelance projects
              </span>
            </div>
          </motion.div>
        </div>

        <div className="space-y-2">
          {skills.map((skill, i) => (
            <SkillRow key={skill.name} skill={skill} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}