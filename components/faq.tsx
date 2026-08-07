'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, Plus } from 'lucide-react';
import { siteConfig } from '@/data/site-config';
import { cn } from '@/lib/utils';

// ---- EDIT: questions/answers live in siteConfig.faq ----
export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section relative overflow-hidden">
      {/* ambient glow blobs — matches hero/contact sections */}
      <div className="pointer-events-none absolute -left-32 top-0 h-[420px] w-[420px] rounded-full bg-orange-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-[420px] w-[420px] rounded-full bg-teal-400/10 blur-[120px]" />

      <div className="relative">
        {/* eyebrow pill */}
        <span className="inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-400/5 px-4 py-1.5 text-xs font-semibold tracking-wider text-orange-400">
          <span className="h-1.5 w-1.5 rounded-full bg-orange-400" />
          09 — FAQ
        </span>

        <h2 className="mt-6 max-w-xl font-display text-3xl font-medium tracking-tight md:text-4xl">
          <span className="bg-gradient-to-r from-orange-300 via-amber-200 to-teal-300 bg-clip-text text-transparent">
            Answers
          </span>{' '}
          <span className="text-white">before you ask.</span>
        </h2>

        <div className="mt-14 space-y-4">
          {siteConfig.faq.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.question}
                className={cn(
                  'group relative rounded-2xl border bg-gradient-to-br p-[1px] transition-all duration-300',
                  isOpen
                    ? 'from-orange-400/60 via-amber-300/40 to-teal-400/60 shadow-[0_0_30px_-8px_rgba(245,166,35,0.35)]'
                    : 'border-transparent from-white/10 to-white/5 hover:from-orange-400/30 hover:to-teal-400/30'
                )}
              >
                <div
                  className={cn(
                    'rounded-2xl bg-[#0c0c0c] px-6 transition-colors',
                    isOpen && 'bg-[#111110]'
                  )}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center gap-5 py-6 text-left"
                  >
                    <span
                      className={cn(
                        'font-mono text-xs tabular-nums transition-colors',
                        isOpen ? 'text-orange-400' : 'text-white/30 group-hover:text-teal-300'
                      )}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>

                    <span
                      className={cn(
                        'flex-1 pr-8 font-display text-lg transition-colors',
                        isOpen ? 'text-white' : 'text-white/80'
                      )}
                    >
                      {item.question}
                    </span>

                    <span
                      className={cn(
                        'flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300',
                        isOpen
                          ? 'rotate-180 border-transparent bg-gradient-to-br from-orange-400 to-teal-400 text-black'
                          : 'border-white/15 text-white/50 group-hover:border-orange-400/40 group-hover:text-orange-300'
                      )}
                    >
                      <ChevronDown size={16} strokeWidth={2.5} />
                    </span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-2xl pb-6 pl-[2.5rem] text-sm leading-relaxed text-white/60">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}