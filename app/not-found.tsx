import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center px-6 text-center">
      <p className="timecode text-sm text-accent">ERROR — 00:04:04</p>
      <h1 className="mt-4 font-display text-5xl font-medium text-ink md:text-6xl">
        Clip not found.
      </h1>
      <p className="mt-4 max-w-sm text-ink-muted">
        This frame doesn&apos;t exist in the timeline. It may have been moved,
        renamed, or never rendered.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-accent px-6 py-3 text-sm font-medium text-bg transition-transform hover:scale-105"
      >
        Back to the reel
      </Link>
    </div>
  );
}
