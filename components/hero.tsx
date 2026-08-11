"use client";

import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '@/data/site-config';

// Shared "premium ease" curve — used everywhere for consistency
const EASE = [0.21, 0.47, 0.32, 0.98] as const;

export function Hero() {
  const { hero } = siteConfig;

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <div className="absolute inset-0 bg-grade-gradient" />

      {/* ---- Grid pattern overlay ---- */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.22]"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          maskImage:
            'radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)',
        }}
      />

      {/* ---- Film-grain texture ---- */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* ---- Ambient glow orbs — smaller/softer on mobile so they don't overpower a narrow screen ---- */}
      <motion.div
        className="pointer-events-none absolute -left-32 top-20 h-56 w-56 rounded-full bg-accent/20 blur-[60px] sm:h-96 sm:w-96 sm:blur-[120px]"
        animate={{ opacity: [0.7, 1, 0.7], scale: [1, 1.08, 1] }}
        transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
      />
      <motion.div
        className="pointer-events-none absolute right-0 top-1/3 h-72 w-72 rounded-full bg-teal-400/10 blur-[70px] sm:h-[28rem] sm:w-[28rem] sm:blur-[140px]"
        animate={{ opacity: [0.6, 1, 0.6], scale: [1, 1.06, 1] }}
        transition={{ repeat: Infinity, duration: 10, ease: 'easeInOut', delay: 1 }}
      />
      <motion.div
        className="pointer-events-none absolute bottom-0 left-1/3 h-48 w-48 rounded-full bg-accent/10 blur-[50px] sm:h-72 sm:w-72 sm:blur-[100px]"
        animate={{ opacity: [0.5, 0.9, 0.5] }}
        transition={{ repeat: Infinity, duration: 7, ease: 'easeInOut', delay: 0.5 }}
      />

      <div className="section relative z-10 grid grid-cols-1 items-center gap-8 py-8 sm:gap-12 sm:py-10 lg:grid-cols-2">
        {/* ---------------- LEFT: text content ---------------- */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="section-eyebrow inline-flex items-center gap-2 rounded-full border border-line/60 bg-white/[0.02] px-3.5 py-1.5 text-[11px] backdrop-blur-sm sm:text-xs"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/60" />
              <span className="relative h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_10px_theme(colors.accent)]" />
            </span>
            {hero.eyebrow}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.12, ease: EASE }}
            className="mt-5 max-w-2xl whitespace-pre-line font-display text-4xl font-medium leading-[1.08] tracking-tight sm:mt-6 sm:text-5xl sm:leading-[1.05] md:text-6xl"
          >
            <span className="text-ink">Professional</span>
            <br />
            <span className="bg-gradient-to-r from-accent via-amber-300 to-teal-300 bg-[length:200%_100%] bg-clip-text text-transparent [animation:gradient-pan_6s_ease-in-out_infinite]">
              YouTube Video Editor
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24, ease: EASE }}
            className="mt-5 max-w-xl text-base leading-relaxed text-ink-muted sm:mt-6 sm:text-lg"
          >
            I edit{' '}
            <span className="font-semibold bg-gradient-to-r from-accent to-amber-300 bg-clip-text text-transparent">
              YouTube videos
            </span>
            ,{' '}
            <span className="font-semibold bg-gradient-to-r from-teal-300 to-cyan-300 bg-clip-text text-transparent">
              faceless content
            </span>
            , documentaries, and{' '}
            <span className="font-semibold bg-gradient-to-r from-accent to-amber-300 bg-clip-text text-transparent">
              short-form videos
            </span>{' '}
            using <span className="font-medium text-ink">Premiere Pro</span>{' '}
            and <span className="font-medium text-ink">After Effects</span>.
            I transform scripts and voiceovers into engaging videos with
            stock footage,{' '}
            <span className="font-semibold bg-gradient-to-r from-teal-300 to-cyan-300 bg-clip-text text-transparent">
              captions
            </span>
            ,{' '}
            <span className="font-semibold bg-gradient-to-r from-accent to-amber-300 bg-clip-text text-transparent">
              motion graphics
            </span>
            , and professional storytelling.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.36, ease: EASE }}
            className="mt-8 flex flex-wrap items-center gap-3 sm:mt-10 sm:gap-4"
          >
            <a
              href={hero.primaryButton.href}
              data-cursor-hover
              className="group relative overflow-hidden rounded-full bg-gradient-to-r from-accent via-amber-300 to-accent bg-[length:200%_100%] bg-[position:0%_0%] px-6 py-3 text-sm font-semibold text-bg shadow-[0_0_30px_-6px_theme(colors.accent)] transition-all duration-500 hover:bg-[position:100%_0%] hover:shadow-[0_0_50px_-4px_theme(colors.accent)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] sm:px-8 sm:py-3.5"
            >
              <span className="relative z-10 flex items-center gap-2">
                {hero.primaryButton.label}
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </span>
              <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/50 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </a>

            <a
              href={hero.secondaryButton.href}
              data-cursor-hover
              className="group relative rounded-full p-[1px] transition-transform duration-300 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]"
            >
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-accent/0 via-teal-300/0 to-accent/0 opacity-0 transition-opacity duration-500 group-hover:from-accent group-hover:via-teal-300 group-hover:to-accent group-hover:opacity-100" />
              <span className="absolute inset-0 rounded-full border border-line transition-opacity duration-500 group-hover:opacity-0" />
              <span className="relative flex items-center gap-2 rounded-full bg-bg/80 px-6 py-3 text-sm font-medium text-ink backdrop-blur-sm transition-colors duration-300 group-hover:text-accent sm:px-7 sm:py-3.5">
                {hero.secondaryButton.label}
              </span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.48, ease: EASE }}
            className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-line/40 pt-5 text-[11px] uppercase tracking-widest text-ink-faint sm:mt-12 sm:gap-x-8 sm:gap-y-3 sm:pt-6 sm:text-xs"
          >
            <span className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-accent" /> 200+ Videos Edited
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-teal-300" /> 1–3 Day Delivery
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-accent" /> Available for Freelance
            </span>
          </motion.div>
        </div>

        {/* ---------------- RIGHT: showreel ---------------- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.2, ease: EASE }}
          className="relative mx-auto w-full max-w-[320px] px-2 py-4 sm:max-w-[440px] md:max-w-[480px] lg:max-w-[520px]"
        >
          <motion.div
            className="absolute inset-4 -z-10 rounded-[28px] bg-gradient-to-br from-accent/30 via-transparent to-teal-400/30 blur-2xl"
            animate={{ opacity: [0.8, 1, 0.8] }}
            transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
          />

          <div className="relative rounded-[24px]">
            <svg
              className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="heroRingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ff9d3d" />
                  <stop offset="25%" stopColor="#fcd34d" />
                  <stop offset="50%" stopColor="#5eead4" />
                  <stop offset="75%" stopColor="#38bdf8" />
                  <stop offset="100%" stopColor="#a78bfa" />
                </linearGradient>
              </defs>

              <rect
                x="1"
                y="1"
                width="calc(100% - 2px)"
                height="calc(100% - 2px)"
                rx="23"
                ry="23"
                fill="none"
                stroke="url(#heroRingGradient)"
                strokeWidth="4"
                className="opacity-60 blur-[6px]"
                vectorEffect="non-scaling-stroke"
              />
              <rect
                x="1"
                y="1"
                width="calc(100% - 2px)"
                height="calc(100% - 2px)"
                rx="23"
                ry="23"
                fill="none"
                stroke="url(#heroRingGradient)"
                strokeWidth="1.5"
                vectorEffect="non-scaling-stroke"
              />
              <motion.rect
                x="1"
                y="1"
                width="calc(100% - 2px)"
                height="calc(100% - 2px)"
                rx="23"
                ry="23"
                fill="none"
                stroke="#ffffff"
                strokeWidth="2.5"
                strokeLinecap="round"
                pathLength={1}
                strokeDasharray="0.16 0.84"
                style={{ filter: 'blur(1px)' }}
                vectorEffect="non-scaling-stroke"
                animate={{ strokeDashoffset: [0, -1] }}
                transition={{ repeat: Infinity, duration: 3.5, ease: 'linear' }}
              />
            </svg>

            {/* ---- floating software-icon badges — smaller on mobile ---- */}
            <motion.div
              className="absolute -right-3 -top-3 z-20 flex h-9 w-9 items-center justify-center rounded-lg border border-violet-300/30 bg-[#1a0e33]/90 text-xs font-bold text-violet-200 backdrop-blur-md sm:-right-4 sm:-top-4 sm:h-11 sm:w-11 sm:rounded-xl sm:text-sm"
              style={{
                boxShadow:
                  '0 0 0 1px rgba(167,139,250,0.15), 0 4px 20px -4px rgba(167,139,250,0.5), 0 0 30px -6px rgba(167,139,250,0.6), 0 8px 24px -6px rgba(0,0,0,0.6)',
              }}
              animate={{
                y: [0, -6, 0],
                boxShadow: [
                  '0 0 0 1px rgba(167,139,250,0.15), 0 4px 20px -4px rgba(167,139,250,0.5), 0 0 30px -6px rgba(167,139,250,0.6), 0 8px 24px -6px rgba(0,0,0,0.6)',
                  '0 0 0 1px rgba(167,139,250,0.3), 0 4px 26px -2px rgba(167,139,250,0.75), 0 0 42px -4px rgba(167,139,250,0.85), 0 8px 24px -6px rgba(0,0,0,0.6)',
                  '0 0 0 1px rgba(167,139,250,0.15), 0 4px 20px -4px rgba(167,139,250,0.5), 0 0 30px -6px rgba(167,139,250,0.6), 0 8px 24px -6px rgba(0,0,0,0.6)',
                ],
              }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
            >
              <span className="absolute inset-0 -z-10 rounded-lg bg-violet-400/40 blur-lg sm:rounded-xl" />
              Ae
            </motion.div>

            <motion.div
              className="absolute -bottom-3 -left-3 z-20 flex h-9 w-9 items-center justify-center rounded-lg border border-indigo-300/30 bg-[#1a0e33]/90 text-xs font-bold text-indigo-200 backdrop-blur-md sm:-bottom-4 sm:-left-4 sm:h-11 sm:w-11 sm:rounded-xl sm:text-sm"
              style={{
                boxShadow:
                  '0 0 0 1px rgba(129,140,248,0.15), 0 4px 20px -4px rgba(129,140,248,0.5), 0 0 30px -6px rgba(129,140,248,0.6), 0 8px 24px -6px rgba(0,0,0,0.6)',
              }}
              animate={{
                y: [0, 6, 0],
                boxShadow: [
                  '0 0 0 1px rgba(129,140,248,0.15), 0 4px 20px -4px rgba(129,140,248,0.5), 0 0 30px -6px rgba(129,140,248,0.6), 0 8px 24px -6px rgba(0,0,0,0.6)',
                  '0 0 0 1px rgba(129,140,248,0.3), 0 4px 26px -2px rgba(129,140,248,0.75), 0 0 42px -4px rgba(129,140,248,0.85), 0 8px 24px -6px rgba(0,0,0,0.6)',
                  '0 0 0 1px rgba(129,140,248,0.15), 0 4px 20px -4px rgba(129,140,248,0.5), 0 0 30px -6px rgba(129,140,248,0.6), 0 8px 24px -6px rgba(0,0,0,0.6)',
                ],
              }}
              transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut', delay: 0.5 }}
            >
              <span className="absolute inset-0 -z-10 rounded-lg bg-indigo-400/40 blur-lg sm:rounded-xl" />
              Pr
            </motion.div>

            <div className="relative flex h-[320px] flex-col overflow-hidden rounded-[22px] border border-white/5 bg-black/70 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)] sm:h-[420px] md:h-[460px] lg:h-[500px]">
              <div className="relative flex-1 overflow-hidden">
                <video
                  className="h-full w-full object-cover transition-transform duration-[3000ms] ease-out hover:scale-105"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                >
                  <source src="/videos/video1.mp4" type="video/mp4" />
                </video>
              </div>

              <div className="relative z-10 h-px w-full shrink-0">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-teal-200 to-transparent" />
                <div className="absolute inset-x-0 -top-1 -bottom-1 bg-gradient-to-r from-transparent via-teal-300/70 to-transparent blur-[3px] opacity-80" />
                <motion.div
                  className="absolute -inset-y-1 w-20 bg-gradient-to-r from-transparent via-white/70 to-transparent blur-[2px]"
                  animate={{ x: ['-10%', '110%'] }}
                  transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                />
                <div className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-100 blur-[4px]" />
              </div>

              <div className="relative flex-1 overflow-hidden">
                <video
                  className="h-full w-full object-cover transition-transform duration-[3000ms] ease-out hover:scale-105"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                >
                  <source src="/videos/video2.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Signature: timeline scrubber footer */}
      <div className="absolute inset-x-0 bottom-0 z-10 flex items-center justify-between border-t border-line/60 bg-gradient-to-t from-bg/60 to-transparent px-4 py-3 font-mono text-[10px] uppercase tracking-widest text-ink-faint sm:px-6 sm:py-4 sm:text-[11px] md:px-10">
        <span className="timecode">00:00:00:00</span>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 6, 0] }}
          transition={{ opacity: { delay: 0.6 }, y: { repeat: Infinity, duration: 1.8 } }}
          className="hidden items-center gap-2 sm:flex"
        >
          <ArrowDown size={12} className="text-accent" /> Scroll
        </motion.div>
        <span className="timecode">01:22:14:00</span>
      </div>
    </section>
  );
}