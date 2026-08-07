import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Merge conditional class names without Tailwind class conflicts.
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Format an ISO date string ("2026-04-02") into a readable label ("Apr 2026").
export function formatDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
}

// Turn a YouTube video ID into an embeddable URL.
export function youtubeEmbedUrl(id: string) {
  return `https://www.youtube.com/embed/${id}?rel=0&modestbranding=1`;
}

// Turn a Vimeo video ID into an embeddable URL.
export function vimeoEmbedUrl(id: string) {
  return `https://player.vimeo.com/video/${id}`;
}

// Turn a Google Drive file ID into an embeddable preview URL.
export function driveEmbedUrl(id: string) {
  return `https://drive.google.com/file/d/${id}/preview`;
}

// Turn a YouTube video ID into a thumbnail image URL (used as video poster).
export function youtubeThumbnail(id: string) {
  return `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
}
