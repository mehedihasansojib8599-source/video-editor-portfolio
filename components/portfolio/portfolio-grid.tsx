'use client';

import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import type { Project } from '@/data/portfolio';
import { PortfolioCard } from '@/components/portfolio/portfolio-card';
import { type SortOption } from '@/components/portfolio/portfolio-filters';

export function PortfolioGrid({
  projects,
  categories,
}: {
  projects: Project[];
  categories: string[];
}) {
  const [category, setCategory] = useState('All');
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState<SortOption>('newest');

  const filtered = useMemo(() => {
    let result = [...projects];

    if (category !== 'All') {
      result = result.filter((p) => p.category === category);
    }

    if (search.trim()) {
      const q = search.trim().toLowerCase();

      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.client.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q))
      );
    }

    switch (sort) {
      case 'newest':
        result.sort((a, b) => +new Date(b.date) - +new Date(a.date));
        break;

      case 'oldest':
        result.sort((a, b) => +new Date(a.date) - +new Date(b.date));
        break;

      case 'az':
        result.sort((a, b) => a.title.localeCompare(b.title));
        break;
    }

    return result;
  }, [projects, category, search, sort]);

  // Reel = mp4
  const reels = filtered.filter((p) => p.video.type === 'mp4');

  // Everything else
  const normalVideos = filtered.filter((p) => p.video.type !== 'mp4');

  return (
    <div>
      {filtered.length === 0 ? (
        <div className="relative overflow-hidden rounded-2xl border border-dashed border-line py-20 text-center">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-teal-400/5" />
          <p className="relative text-ink-muted">
            No projects match that search yet.
          </p>

          <p className="relative mt-2 text-sm text-ink-faint">
            Try another keyword.
          </p>
        </div>
      ) : (
        <>
          {/* NORMAL VIDEOS */}

          <AnimatePresence mode="popLayout">
            <motion.div
              layout
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {normalVideos.map((project, i) => (
                <div
                  key={project.id}
                  className="group relative rounded-2xl bg-gradient-to-br from-orange-400/40 via-white/10 to-teal-400/40 p-[1.5px] shadow-[0_0_20px_-8px_rgba(251,146,60,0.3)] transition-all duration-300 hover:-translate-y-1 hover:from-orange-400/70 hover:via-white/20 hover:to-teal-400/70 hover:shadow-[0_0_35px_-6px_rgba(45,212,191,0.45)]"
                >
                  <div className="overflow-hidden rounded-2xl bg-[#0b0e13]">
                    <PortfolioCard
                      project={project}
                      index={i}
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* REELS */}

          {reels.length > 0 && (
            <div className="relative mt-24 overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.06] via-white/[0.02] to-transparent p-8 shadow-2xl backdrop-blur-sm sm:p-12">
              {/* outer glow ring */}
              <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-gradient-to-r from-orange-500/10 via-transparent to-teal-400/10" />

              {/* large ambient glows */}
              <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-orange-500/30 via-yellow-400/15 to-transparent blur-[100px]" />
              <div className="pointer-events-none absolute right-0 top-1/3 h-64 w-64 translate-x-1/3 rounded-full bg-gradient-to-tr from-teal-400/25 via-emerald-500/10 to-transparent blur-[100px]" />
              <div className="pointer-events-none absolute left-0 bottom-0 h-56 w-56 -translate-x-1/3 rounded-full bg-gradient-to-tr from-purple-500/20 via-indigo-400/10 to-transparent blur-[90px]" />

              {/* faint grid texture */}
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.05]"
                style={{
                  backgroundImage:
                    'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
                  backgroundSize: '40px 40px',
                  maskImage: 'radial-gradient(ellipse 80% 80% at 50% 20%, black 30%, transparent 100%)',
                }}
              />

              {/* Header */}
              <div className="relative mb-14 text-center">
                <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-teal-400/30 bg-teal-400/10 px-4 py-1.5 text-xs font-medium tracking-widest text-teal-300 shadow-[0_0_20px_-4px_rgba(45,212,191,0.4)]">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-teal-400" />
                  FEATURED REELS
                </span>

                <h2 className="bg-gradient-to-r from-orange-300 via-yellow-200 to-teal-300 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl">
                  Cinematic Reels
                </h2>

                <p className="mt-3 text-gray-400">
                  Short-form Travel & Cinematic Content
                </p>

                {/* divider under header */}
                <div className="mx-auto mt-8 h-px w-40 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              </div>

              {/* Reel cards */}
              <motion.div
                layout
                className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
              >
                {reels.map((project, i) => (
                  <div
                    key={project.id}
                    className="group relative rounded-2xl bg-gradient-to-br from-orange-400/40 via-white/10 to-teal-400/40 p-[1.5px] shadow-[0_0_20px_-8px_rgba(251,146,60,0.3)] transition-all duration-300 hover:-translate-y-1 hover:from-orange-400/70 hover:via-white/20 hover:to-teal-400/70 hover:shadow-[0_0_35px_-6px_rgba(45,212,191,0.45)]"
                  >
                    <div className="overflow-hidden rounded-2xl bg-[#0b0e13]">
                      <PortfolioCard
                        project={project}
                        index={i}
                      />
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          )}
        </>
      )}
    </div>
  );
}