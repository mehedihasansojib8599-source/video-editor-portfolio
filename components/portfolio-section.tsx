import { getPublishedProjects, categories } from '@/data/portfolio';
import { PortfolioGrid } from '@/components/portfolio/portfolio-grid';

export function PortfolioSection() {
  const projects = getPublishedProjects();

  return (
    <section
      id="portfolio"
      className="section relative overflow-hidden"
    >
      {/* Background Glows — layered orbs matching other sections */}
      <div className="pointer-events-none absolute -top-24 right-[-4rem] h-96 w-96 rounded-full bg-gradient-to-br from-orange-500/20 via-yellow-400/10 to-transparent blur-[100px]" />
      <div className="pointer-events-none absolute top-40 left-[-6rem] h-[28rem] w-[28rem] rounded-full bg-gradient-to-tr from-teal-400/15 via-emerald-500/10 to-transparent blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-gradient-to-t from-orange-400/10 via-transparent to-transparent blur-[100px]" />

      {/* Grid Background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 20%, black 40%, transparent 100%)',
        }}
      />

      {/* Heading */}
      <div className="relative mb-12 flex items-center justify-between">
        <div>
          <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-xs font-medium tracking-widest text-orange-300 shadow-[0_0_20px_-6px_rgba(251,146,60,0.4)]">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-orange-400" />
            05 — PORTFOLIO
          </span>
          <h2 className="font-display bg-gradient-to-r from-orange-300 via-yellow-200 to-teal-300 bg-clip-text text-4xl font-semibold tracking-tight text-transparent md:text-5xl">
            Portfolio
          </h2>
        </div>

        {/* Right Icons */}
        <div className="relative hidden h-28 w-40 shrink-0 sm:block">
          {/* ambient glow behind icons */}
          <div className="pointer-events-none absolute -right-6 -top-6 h-40 w-40 rounded-full bg-gradient-to-br from-purple-500/25 via-orange-400/15 to-transparent blur-[60px]" />

          {/* Premiere Pro */}
          <div className="absolute right-0 top-0 flex h-14 w-14 items-center justify-center rounded-2xl border border-purple-400/30 bg-gradient-to-br from-purple-500/20 via-white/[0.06] to-white/[0.02] shadow-[0_0_20px_-6px_rgba(168,85,247,0.45)] backdrop-blur-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_-4px_rgba(168,85,247,0.6)]">
            <span className="font-display text-sm font-bold text-purple-300">
              Pr
            </span>
          </div>

          {/* After Effects */}
          <div className="absolute right-16 top-8 flex h-16 w-16 items-center justify-center rounded-2xl border border-indigo-400/30 bg-gradient-to-br from-indigo-500/20 via-white/[0.06] to-white/[0.02] shadow-[0_0_20px_-6px_rgba(129,140,248,0.45)] backdrop-blur-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_-4px_rgba(129,140,248,0.6)]">
            <span className="font-display text-base font-bold text-indigo-300">
              Ae
            </span>
          </div>

          {/* Orange Dot */}
          <div className="absolute right-4 top-16 flex h-12 w-12 items-center justify-center rounded-full border border-orange-500/40 bg-gradient-to-br from-orange-500/25 to-yellow-400/10 shadow-[0_0_20px_-4px_rgba(251,146,60,0.55)] backdrop-blur-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_-2px_rgba(251,146,60,0.7)]">
            <span className="h-2 w-2 animate-pulse rounded-full bg-orange-400" />
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="relative mb-10 h-px w-full bg-gradient-to-r from-orange-500/30 via-teal-400/20 to-transparent" />

      {/* Portfolio Grid — filters are rendered + styled inside PortfolioGrid itself */}
      <PortfolioGrid
        projects={projects}
        categories={categories}
      />
    </section>
  );
}