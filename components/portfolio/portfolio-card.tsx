'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Play, X } from 'lucide-react';

import type { Project } from '@/data/portfolio';
import { formatDate } from '@/lib/utils';

/* -------------------------------------------------------------------------- */
/*                              YOUTUBE ID                                    */
/* -------------------------------------------------------------------------- */

function extractYouTubeId(src: string): string {
  const trimmed = src.trim();

  const youtuBeMatch = trimmed.match(/youtu\.be\/([^?&/]+)/);
  if (youtuBeMatch) return youtuBeMatch[1];

  const watchMatch = trimmed.match(/[?&]v=([^?&/]+)/);
  if (watchMatch) return watchMatch[1];

  const embedMatch = trimmed.match(/youtube\.com\/embed\/([^?&/]+)/);
  if (embedMatch) return embedMatch[1];

  const shortsMatch = trimmed.match(/youtube\.com\/shorts\/([^?&/]+)/);
  if (shortsMatch) return shortsMatch[1];

  return trimmed;
}

/* -------------------------------------------------------------------------- */
/*                              DRIVE ID                                      */
/* -------------------------------------------------------------------------- */

function extractDriveId(src: string): string {
  const trimmed = src.trim();
  const fileMatch = trimmed.match(/\/d\/([^/]+)/);
  if (fileMatch) return fileMatch[1];
  return trimmed;
}

/* -------------------------------------------------------------------------- */
/*                              FACEBOOK EMBED                                */
/* -------------------------------------------------------------------------- */
function getFacebookEmbedUrl(videoUrl: string): string {
  const encoded = encodeURIComponent(videoUrl.trim());
  return `https://www.facebook.com/plugins/video.php?href=${encoded}&show_text=false&t=0`;
}

/* -------------------------------------------------------------------------- */
/*                              EMBED URL                                     */
/* -------------------------------------------------------------------------- */

function getEmbedUrl(video: NonNullable<Project['video']>): string {
  switch (video.type) {
    case 'youtube': {
      const id = extractYouTubeId(video.src);
      return (
        `https://www.youtube.com/embed/${id}` +
        `?autoplay=1&rel=0&modestbranding=1&playsinline=1`
      );
    }
    case 'drive': {
      const id = extractDriveId(video.src);
      return `https://drive.google.com/file/d/${id}/preview`;
    }
    case 'vimeo': {
      return `https://player.vimeo.com/video/${video.src}?autoplay=1`;
    }
    case 'facebook': {
      return getFacebookEmbedUrl(video.src);
    }
    default:
      return video.src;
  }
}

/* -------------------------------------------------------------------------- */
/*                    AUTO YOUTUBE THUMBNAIL                                  */
/* -------------------------------------------------------------------------- */
function getYouTubeThumbnail(videoId: string): string {
  return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
}

function getYouTubeThumbnailFallback(videoId: string): string {
  return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
}

function useResolvedThumbnail(project: Project): string | null {
  const [thumb, setThumb] = useState<string | null>(
    project.thumbnail ?? null
  );

  useEffect(() => {
    if (project.thumbnail) {
      setThumb(project.thumbnail);
      return;
    }

    if (project.video?.type === 'youtube') {
      const id = extractYouTubeId(project.video.src);
      const maxRes = getYouTubeThumbnail(id);

      const img = new window.Image();
      img.onload = () => {
        if (img.naturalWidth > 120) {
          setThumb(maxRes);
        } else {
          setThumb(getYouTubeThumbnailFallback(id));
        }
      };
      img.onerror = () => {
        setThumb(getYouTubeThumbnailFallback(id));
      };
      img.src = maxRes;
    }
  }, [project.thumbnail, project.video]);

  return thumb;
}

/* -------------------------------------------------------------------------- */
/*        BODY SCROLL LOCK + FREEZE BACKGROUND (stops shake/flicker)          */
/* -------------------------------------------------------------------------- */
function useFreezeBackground(locked: boolean) {
  useEffect(() => {
    if (!locked) return;

    const scrollBarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    const original = {
      overflow: document.body.style.overflow,
      paddingRight: document.body.style.paddingRight,
    };

    document.body.style.overflow = 'hidden';
    if (scrollBarWidth > 0) {
      document.body.style.paddingRight = `${scrollBarWidth}px`;
    }

    return () => {
      document.body.style.overflow = original.overflow;
      document.body.style.paddingRight = original.paddingRight;
    };
  }, [locked]);
}

/* -------------------------------------------------------------------------- */
/*                    VIDEO MODAL (rendered via portal)                       */
/* -------------------------------------------------------------------------- */
// Only used for the YOUTUBE (non-reel) / DRIVE / VIMEO card variant —
// reel-style cards (mp4 / facebook / displayAsReel) play inline instead.
function VideoModal({
  project,
  thumbnail,
  onClose,
}: {
  project: Project;
  thumbnail: string | null;
  onClose: () => void;
}) {
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [mounted, setMounted] = useState(false);

  useFreezeBackground(true);

  useEffect(() => {
    setMounted(true);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  if (!mounted || !project.video) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
      onClick={onClose}
    >
      <div
        className="relative h-full w-full"
        onClick={(e) => e.stopPropagation()}
      >
        {thumbnail && !iframeLoaded && (
          <Image
            src={thumbnail}
            alt={project.title}
            fill
            className="object-contain"
            unoptimized
          />
        )}

        <iframe
          key={project.id}
          src={getEmbedUrl(project.video)}
          title={project.title}
          allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
          allowFullScreen
          loading="eager"
          referrerPolicy="strict-origin-when-cross-origin"
          onLoad={() => setIframeLoaded(true)}
          className={`absolute inset-0 h-full w-full border-0 transition-opacity duration-500 ${
            iframeLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {!iframeLoaded && (
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <div className="h-10 w-10 animate-spin rounded-full border-2 border-white/20 border-t-orange-400" />
          </div>
        )}

        <button
          type="button"
          onClick={onClose}
          aria-label="Close video"
          className="absolute right-4 top-4 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-black/80 text-white shadow-lg backdrop-blur-md transition-all hover:scale-105 hover:bg-black"
        >
          <X size={21} />
        </button>
      </div>
    </div>,
    document.body
  );
}

/* -------------------------------------------------------------------------- */
/*                           PORTFOLIO CARD                                   */
/* -------------------------------------------------------------------------- */

export function PortfolioCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const thumbnail = useResolvedThumbnail(project);

  // Reels: mp4 (native <video>), facebook (iframe), and anything flagged
  // with displayAsReel (e.g. a YouTube Short) all play inline in the card,
  // toggled by clicking the card — no fullscreen modal.
  const isReel =
    project.video?.type === 'mp4' ||
    project.video?.type === 'facebook' ||
    project.displayAsReel === true;

  if (!project.video) {
    return null;
  }

  const closeModal = () => setIsPlaying(false);

  /* ------------------------------------------------------------------------ */
  /*                    REEL (mp4 / facebook / displayAsReel)                 */
  /* ------------------------------------------------------------------------ */

  if (isReel) {
    const videoType = project.video.type;

    return (
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: (index % 6) * 0.06 }}
        className="group relative overflow-hidden rounded-2xl bg-bg-surface"
      >
        <button
          type="button"
          onClick={() => setIsPlaying((prev) => !prev)}
          className="relative block aspect-[9/16] w-full overflow-hidden bg-black"
          aria-label={isPlaying ? `Pause ${project.title}` : `Play ${project.title}`}
        >
          {isPlaying ? (
            videoType === 'mp4' ? (
              <video
                src={project.video.src}
                autoPlay
                controls
                playsInline
                preload="metadata"
                className="absolute inset-0 h-full w-full object-contain"
              />
            ) : (
              // facebook, youtube, vimeo, drive — any iframe-based reel
              <iframe
                key={project.id}
                src={getEmbedUrl(project.video)}
                title={project.title}
                allow="autoplay; fullscreen; encrypted-media; picture-in-picture; web-share"
                allowFullScreen
                loading="eager"
                scrolling="no"
                referrerPolicy="strict-origin-when-cross-origin"
                className="absolute inset-0 h-full w-full border-0"
                onClick={(e) => e.stopPropagation()}
              />
            )
          ) : thumbnail ? (
            <>
              <Image
                src={thumbnail}
                alt={project.title}
                fill
                unoptimized
                className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-black/20 transition-all duration-300 group-hover:bg-black/35" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-yellow-300 text-black shadow-[0_0_35px_-4px_rgba(249,115,22,0.8)] transition-transform duration-300 group-hover:scale-110">
                  <Play size={25} fill="currentColor" />
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="absolute inset-0 bg-black" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-yellow-300 text-black shadow-[0_0_35px_-4px_rgba(249,115,22,0.8)] transition-transform duration-300 group-hover:scale-110">
                  <Play size={25} fill="currentColor" />
                </div>
              </div>
            </>
          )}

          {project.featured && (
            <span className="absolute left-3 top-3 z-10 rounded-full bg-gradient-to-r from-orange-400 to-yellow-300 px-3 py-1 text-[10px] font-semibold uppercase text-black">
              Featured
            </span>
          )}

          {project.duration && (
            <span className="absolute right-3 top-3 z-10 rounded-full bg-black/70 px-3 py-1 text-[10px] text-white backdrop-blur-sm">
              {project.duration}
            </span>
          )}
        </button>

        <div className="p-5">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-[11px] font-semibold uppercase tracking-widest text-teal-300">
              • {project.category}
            </span>
            <span className="text-xs text-ink-faint">{formatDate(project.date)}</span>
          </div>

          <h3 className="font-display text-lg text-ink">{project.title}</h3>

          <p className="mt-2 line-clamp-2 text-sm text-ink-muted">
            {project.description}
          </p>
        </div>
      </motion.div>
    );
  }

  /* ------------------------------------------------------------------------ */
  /*                         YOUTUBE / DRIVE / VIMEO                          */
  /* ------------------------------------------------------------------------ */

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: (index % 6) * 0.06 }}
        className="group relative overflow-hidden rounded-2xl bg-bg-surface transition-transform duration-300 hover:-translate-y-1"
      >
        {/* ---------------------------------------------------------------- */}
        {/*                            THUMBNAIL                              */}
        {/* ---------------------------------------------------------------- */}

        <button
          type="button"
          onClick={() => setIsPlaying(true)}
          className="relative block aspect-video w-full overflow-hidden bg-black"
          aria-label={`Play ${project.title}`}
        >
          {thumbnail ? (
            <Image
              src={thumbnail}
              alt={project.title}
              fill
              priority={index < 3}
              unoptimized
              className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            />
          ) : (
            <div className="absolute inset-0 bg-black" />
          )}

          <div className="absolute inset-0 bg-black/20 transition-all duration-300 group-hover:bg-black/35" />

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-yellow-300 text-black shadow-[0_0_35px_-4px_rgba(249,115,22,0.8)] transition-transform duration-300 group-hover:scale-110">
              <Play size={25} fill="currentColor" />
            </div>
          </div>

          {project.featured && (
            <span className="absolute left-4 top-4 rounded-full bg-gradient-to-r from-orange-400 to-yellow-300 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-black">
              Featured
            </span>
          )}

          {project.duration && (
            <span className="absolute right-4 top-4 rounded-full bg-black/70 px-3 py-1 text-[10px] text-white backdrop-blur-sm">
              {project.duration}
            </span>
          )}
        </button>

        {/* ---------------------------------------------------------------- */}
        {/*                             INFO                                  */}
        {/* ---------------------------------------------------------------- */}

        <div className="p-6">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-[11px] font-semibold uppercase tracking-widest text-orange-300">
              • {project.category}
            </span>
            <span className="text-xs text-ink-faint">{formatDate(project.date)}</span>
          </div>

          <h3 className="font-display text-lg text-ink">{project.title}</h3>

          <p className="mt-2 line-clamp-2 text-sm text-ink-muted">
            {project.description}
          </p>

          <div className="mt-4 h-px w-8 bg-gradient-to-r from-orange-400 to-teal-400 transition-all duration-500 group-hover:w-full" />
        </div>
      </motion.div>

      {isPlaying && (
        <VideoModal project={project} thumbnail={thumbnail} onClose={closeModal} />
      )}
    </>
  );
}