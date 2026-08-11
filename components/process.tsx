'use client';

import { motion } from 'framer-motion';
import {
  FileText,
  FolderSearch,
  Clapperboard,
  Sparkles,
  Send,
} from 'lucide-react';
import { cn } from '@/lib/utils';

// ---- EDIT: process steps ----
const steps = [
  {
    number: '01',
    title: 'Creative Brief',
    description:
      'Review the script, understand the target audience, and define the visual storytelling approach.',
    icon: FileText,
  },
  {
    number: '02',
    title: 'Asset Collection',
    description:
      'Research and organize premium stock footage, images, graphics, and supporting visual elements.',
    icon: FolderSearch,
  },
  {
    number: '03',
    title: 'Cinematic Editing',
    description:
      'Craft a high-retention edit with smooth pacing, motion graphics, subtitles, and synchronized narration.',
    icon: Clapperboard,
  },
  {
    number: '04',
    title: 'Final Polish',
    description:
      'Apply sound design, background music, color correction, and quality control for a polished final result.',
    icon: Sparkles,
  },
  {
    number: '05',
    title: 'Client Delivery',
    description:
      'Deliver optimized files for YouTube and social platforms with revision support when required.',
    icon: Send,
  },
];

// ---- EDIT: stats bar ----
const stats = [
  { value: '10+', label: 'Projects' },
  { value: '3', label: 'Editing Software' },
  { value: '6+', label: 'Video Categories' },
  { value: '100%', label: 'Client Support' },
];

export function Process() {
  return (
    <section className="section relative overflow-hidden">
      {/* ambient glow — smaller/softer on mobile so it doesn't overpower a narrow screen */}
      <div className="pointer-events-none absolute -left-40 top-0 h-64 w-64 rounded-full bg-orange-500/10 blur-[70px] sm:h-[420px] sm:w-[420px] sm:blur-[130px]" />
      <div className="pointer-events-none absolute -right-40 top-1/3 h-64 w-64 rounded-full bg-teal-400/10 blur-[70px] sm:h-[420px] sm:w-[420px] sm:blur-[130px]" />

      <div className="relative">
        {/* ---- section heading ---- */}
        <span className="inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-400/5 px-4 py-1.5 text-xs font-semibold tracking-wider text-orange-400">
          <span className="h-1.5 w-1.5 rounded-full bg-orange-400" />
          04 — PROCESS
        </span>

        <h2 className="mt-6 max-w-xl font-display text-2xl font-medium tracking-tight sm:text-3xl md:text-4xl">
          <span className="text-white">How I bring your</span>{' '}
          <span className="bg-gradient-to-r from-orange-300 via-amber-200 to-teal-300 bg-clip-text text-transparent">
            vision to life.
          </span>
        </h2>

        <p className="mt-4 max-w-md text-sm leading-relaxed text-white/50">
          A structured five-step workflow — from the first script read to
          final delivery — built for consistency and sound design.
        </p>

        {/* ---- animated journey line (desktop/lg only, unchanged) ---- */}
        <div className="relative mt-14 hidden grid-cols-5 gap-5 lg:grid">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className="relative flex h-2.5 items-center justify-center"
            >
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 + 0.15 }}
                style={{
                  transformOrigin: i === steps.length - 1 ? 'right' : 'left',
                }}
                className={cn(
                  'absolute top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-orange-400/50 via-white/10 to-teal-400/50',
                  i === 0 && 'left-1/2 right-[-0.625rem]',
                  i === steps.length - 1 && 'left-[-0.625rem] right-1/2',
                  i > 0 &&
                    i < steps.length - 1 &&
                    'left-[-0.625rem] right-[-0.625rem]'
                )}
              />
              <motion.span
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                className="relative z-10 h-2.5 w-2.5 shrink-0 rounded-full bg-gradient-to-br from-orange-400 to-teal-400 shadow-[0_0_12px_rgba(245,166,35,0.6)]"
              />
            </div>
          ))}
        </div>

        {/* ---- steps grid ---- */}
        <div className="relative mt-6 grid grid-cols-1 gap-4 rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-2 sm:mt-8 sm:grid-cols-2 sm:gap-5 lg:grid-cols-5">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className={cn(
                  'group relative rounded-2xl border border-transparent bg-gradient-to-br from-white/10 to-white/5 p-[1px] transition-all duration-300',
                  'hover:from-orange-400/50 hover:to-teal-400/50 hover:shadow-[0_0_30px_-10px_rgba(245,166,35,0.4)]'
                )}
              >
                <div className="relative flex h-full flex-col rounded-2xl bg-[#0c0c0c] p-5 sm:p-6">
                  <div className="mb-4 flex items-center justify-between sm:mb-5">
                    <span className="font-mono text-xs tracking-wider text-orange-400">
                      {step.number}
                    </span>
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-orange-400/10 to-teal-400/10 text-orange-300 transition-all duration-300 group-hover:border-orange-400/30 group-hover:text-teal-300 sm:h-10 sm:w-10">
                      <Icon size={18} strokeWidth={1.75} />
                    </span>
                  </div>

                  <h3 className="mb-2 font-display text-base text-white sm:text-lg">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/55">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ---- stats bar ---- */}
        <div className="mt-10 grid grid-cols-2 gap-6 border-t border-white/10 pt-8 sm:mt-16 sm:gap-8 sm:pt-12 sm:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group"
            >
              <p className="bg-gradient-to-br from-orange-300 via-amber-200 to-teal-300 bg-clip-text font-display text-3xl font-semibold tracking-tight text-transparent transition-all duration-300 group-hover:from-orange-400 group-hover:to-teal-400 sm:text-4xl md:text-5xl">
                {stat.value}
              </p>
              <p className="mt-1.5 text-xs text-white/50 sm:mt-2 sm:text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}