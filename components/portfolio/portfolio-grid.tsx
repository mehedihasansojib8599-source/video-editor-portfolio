'use client';

import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import type { Project } from '@/data/portfolio';
import { PortfolioCard } from '@/components/portfolio/portfolio-card';
import { type SortOption } from '@/components/portfolio/portfolio-filters';

// Reel-style videos: play inline inside the card itself, not in a modal.
const REEL_TYPES = ['mp4', 'facebook'];

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

  // Reels = mp4, facebook (always play inline in the card), OR anything
  // explicitly flagged with displayAsReel (e.g. a YouTube Short).
  const reels = filtered.filter(
    (p) => REEL_TYPES.includes(p.video.type) || p.displayAsReel === true
  );

  // Everything else (youtube, drive, vimeo — opens in the fullscreen modal)
  const normalVideos = filtered.filter(
    (p) => !REEL_TYPES.includes(p.video.type) && p.displayAsReel !== true
  );

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

          {normalVideos.length > 0 && (
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
          )}

          {/* REELS (mp4 + facebook + displayAsReel) */}

          {reels.length > 0 && (
            <div className="relative mt-24 overflow-hidden rounded-[2rem] border border-white/15 bg-gradient-to-br from-white/[0.08] via-white/[0.03] to-transparent p-8 shadow-[0_0_80px_-20px_rgba(251,146,60,0.25)] backdrop-blur-sm sm:p-12">
              {/* animated rotating gradient border */}
              <div className="pointer-events-none absolute inset-0 rounded-[2rem] opacity-60">
                <div className="absolute inset-0 rounded-[2rem] bg-[conic-gradient(from_0deg,transparent,rgba(251,146,60,0.5),transparent_35%,rgba(45,212,191,0.5),transparent_70%,rgba(251,146,60,0.5))] animate-[spin_8s_linear_infinite]" />
                <div className="absolute inset-[1.5px] rounded-[2rem] bg-[#0a0c10]" />
              </div>

              {/* outer glow ring */}
              <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-gradient-to-r from-orange-500/15 via-transparent to-teal-400/15" />

              {/* large vivid ambient glows */}
              <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-orange-500/40 via-yellow-400/25 to-transparent blur-[110px]" />
              <div className="pointer-events-none absolute right-0 top-1/3 h-80 w-80 translate-x-1/3 rounded-full bg-gradient-to-tr from-teal-400/40 via-emerald-500/20 to-transparent blur-[110px]" />
              <div className="pointer-events-none absolute left-0 bottom-0 h-72 w-72 -translate-x-1/3 rounded-full bg-gradient-to-tr from-purple-500/30 via-indigo-400/20 to-transparent blur-[100px]" />
              <div className="pointer-events-none absolute right-1/4 bottom-1/4 h-56 w-56 rounded-full bg-gradient-to-tr from-pink-500/20 via-orange-400/15 to-transparent blur-[90px]" />

              {/* faint grid texture */}
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.06]"
                style={{
                  backgroundImage:
                    'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
                  backgroundSize: '40px 40px',
                  maskImage: 'radial-gradient(ellipse 80% 80% at 50% 20%, black 30%, transparent 100%)',
                }}
              />

              {/* Header */}
              <div className="relative mb-14 text-center">
                <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-teal-400/50 bg-gradient-to-r from-teal-400/20 via-teal-400/10 to-orange-400/20 px-4 py-1.5 text-xs font-medium tracking-widest text-teal-200 shadow-[0_0_30px_-4px_rgba(45,212,191,0.6)]">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-teal-300 shadow-[0_0_10px_2px_rgba(45,212,191,0.8)]" />
                  FEATURED REELS
                </span>

                <h2 className="bg-gradient-to-r from-orange-300 via-fuchsia-200 to-teal-300 bg-clip-text text-4xl font-bold text-transparent drop-shadow-[0_0_25px_rgba(251,146,60,0.35)] sm:text-5xl">
                  Shorts and Reels
                </h2>

                <p className="mt-3 text-gray-300">
                  Short Reel Edit
                </p>

                {/* divider under header */}
                <div className="mx-auto mt-8 h-px w-40 bg-gradient-to-r from-transparent via-orange-400/60 to-transparent shadow-[0_0_10px_rgba(251,146,60,0.5)]" />
              </div>

              {/* Reel cards */}
              <motion.div
                layout
                className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
              >
                {reels.map((project, i) => {
                  const colorSets = [
                    'from-orange-400/70 via-yellow-300/30 to-orange-500/70 hover:shadow-[0_0_45px_-8px_rgba(251,146,60,0.6)]',
                    'from-teal-400/70 via-cyan-300/30 to-teal-500/70 hover:shadow-[0_0_45px_-8px_rgba(45,212,191,0.6)]',
                    'from-fuchsia-400/70 via-pink-300/30 to-purple-500/70 hover:shadow-[0_0_45px_-8px_rgba(232,121,249,0.6)]',
                    'from-amber-400/70 via-orange-300/30 to-teal-400/70 hover:shadow-[0_0_45px_-8px_rgba(251,191,36,0.6)]',
                  ];
                  const colors = colorSets[i % colorSets.length];

                  return (
                    <div
                      key={project.id}
                      className={`group relative rounded-2xl bg-gradient-to-br p-[2px] shadow-[0_0_25px_-10px_rgba(251,146,60,0.4)] transition-all duration-300 hover:-translate-y-1.5 ${colors}`}
                    >
                      <div className="overflow-hidden rounded-2xl bg-[#0b0e13]">
                        <PortfolioCard
                          project={project}
                          index={i}
                        />
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            </div>
          )}
        </>
      )}
    </div>
  );
}