import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import {
  getProjectById,
  getPublishedProjects,
  getRelatedProjects,
} from '@/data/portfolio';
import { siteConfig } from '@/data/site-config';
import { VideoPlayer } from '@/components/video-player';
import { PortfolioCard } from '@/components/portfolio/portfolio-card';
import { ShareButton } from '@/components/portfolio/share-button';
import { BeforeAfterSlider } from '@/components/portfolio/before-after-slider';
import { formatDate } from '@/lib/utils';

// Pre-renders a static page for every published project at build time.
export function generateStaticParams() {
  return getPublishedProjects().map((p) => ({ id: p.id }));
}

export function generateMetadata({
  params,
}: {
  params: { id: string };
}): Metadata {
  const project = getProjectById(params.id);
  if (!project) return {};
  return {
    title: `${project.title} — ${siteConfig.siteName}`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [{ url: project.coverImage || project.thumbnail }],
    },
  };
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = getProjectById(params.id);
  if (!project) notFound();

  const related = getRelatedProjects(project);

  return (
    <article className="pt-32">
      <div className="section pt-0">
        <Link
          href="/#portfolio"
          className="mb-8 inline-flex items-center gap-2 text-sm text-ink-muted transition-colors hover:text-ink"
        >
          <ArrowLeft size={16} /> Back to portfolio
        </Link>

        <div className="flex flex-wrap items-start justify-between gap-6">
          <div>
            <p className="timecode text-xs uppercase tracking-widest text-accent">
              {project.category}
            </p>
            <h1 className="mt-3 max-w-2xl font-display text-4xl font-medium tracking-tight text-ink md:text-5xl">
              {project.title}
            </h1>
            <p className="mt-4 max-w-xl text-ink-muted">{project.description}</p>
          </div>
          <ShareButton title={project.title} />
        </div>

        {/* ---------------- Cover image — smaller, colorful, premium framed ---------------- */}
        {project.coverImage && (
          <div className="relative mx-auto mt-10 w-full max-w-3xl">
            {/* ambient color glow behind the frame */}
            <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[32px] bg-gradient-to-br from-accent/25 via-teal-400/15 to-purple-500/20 blur-3xl" />

            {/* gradient border wrapper */}
            <div className="relative rounded-[22px] bg-gradient-to-br from-accent via-teal-300 to-purple-400 p-[1.5px] shadow-[0_20px_60px_-20px_rgba(0,0,0,0.7)]">
              <div className="relative aspect-video w-full overflow-hidden rounded-[20px] bg-black">
                <Image
                  src={project.coverImage}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
                  priority
                />

                {/* subtle cinematic vignette + bottom gradient for depth */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10" />
                <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_60px_rgba(0,0,0,0.35)]" />

                {/* category chip on the image */}
                <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/50 px-3 py-1 text-[11px] font-medium uppercase tracking-widest text-white backdrop-blur-sm">
                  {project.category}
                </span>
              </div>
            </div>

            {/* corner accent dots — small premium detail */}
            <div className="absolute -right-2 -top-2 h-4 w-4 rounded-full border border-white/10 bg-gradient-to-br from-accent to-purple-400 shadow-[0_0_16px_-2px_rgba(242,166,90,0.8)]" />
            <div className="absolute -bottom-2 -left-2 h-4 w-4 rounded-full border border-white/10 bg-gradient-to-br from-teal-300 to-accent shadow-[0_0_16px_-2px_rgba(94,234,212,0.8)]" />
          </div>
        )}

        {/* Video player */}
        <div className="mt-6">
          <VideoPlayer video={project.video} title={project.title} />
        </div>

        <div className="mt-16 grid gap-16 md:grid-cols-[2fr_1fr]">
          <div>
            {project.longDescription && (
              <>
                <p className="section-eyebrow">Project Notes</p>
                <p className="max-w-2xl leading-relaxed text-ink-muted">
                  {project.longDescription}
                </p>
              </>
            )}

            {project.beforeImage && project.afterImage && (
              <div className="mt-12">
                <BeforeAfterSlider
                  before={project.beforeImage}
                  after={project.afterImage}
                  title={project.title}
                />
              </div>
            )}
          </div>

          {/* Meta panel */}
          <aside className="h-fit space-y-6 rounded-2xl border border-line bg-bg-surface p-6">
            <MetaRow label="Client" value={project.client} />
            <MetaRow label="Duration" value={project.duration} />
            <MetaRow label="Platform" value={project.platform} />
            <MetaRow label="Date" value={formatDate(project.date)} />
            {project.location && <MetaRow label="Location" value={project.location} />}
            <div>
              <p className="text-xs uppercase tracking-widest text-ink-faint">
                Software
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {project.software.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-line px-3 py-1 text-xs text-ink-muted"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-ink-faint">Tags</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {project.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-bg-surface2 px-3 py-1 text-xs text-ink-muted"
                  >
                    #{t}
                  </span>
                ))}
              </div>
            </div>
            {/* My Role */}
            {project.myRole && (
              <div>
                <p className="text-xs uppercase tracking-widest text-ink-faint">
                  My Role
                </p>

                <ul className="mt-2 space-y-2 text-sm text-ink-muted">
                  {project.myRole.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Client Provided */}
            {project.clientProvided && (
              <div>
                <p className="text-xs uppercase tracking-widest text-ink-faint">
                  Client Provided
                </p>

                <ul className="mt-2 space-y-2 text-sm text-ink-muted">
                  {project.clientProvided.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Workflow */}
            {project.workflow && (
              <div>
                <p className="text-xs uppercase tracking-widest text-ink-faint">
                  Workflow
                </p>

                <ul className="mt-2 space-y-2 text-sm text-ink-muted">
                  {project.workflow.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>
      </div>

      {related.length > 0 && (
        <div className="section pt-0">
          <p className="section-eyebrow">Related Projects</p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p, i) => (
              <PortfolioCard key={p.id} project={p} index={i} />
            ))}
          </div>
        </div>
      )}
    </article>
  );
}

function MetaRow({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs uppercase tracking-widest text-ink-faint">{label}</p>
      <p className="mt-1 text-sm text-ink">{value}</p>
    </div>
  );
}
