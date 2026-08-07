'use client';

import { useState } from 'react';
import { Check, Share2 } from 'lucide-react';

export function ShareButton({ title }: { title: string }) {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({ title, url });
      } catch {
        // Share cancelled — no action needed.
      }
      return;
    }
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleShare}
      className="flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm text-ink-muted transition-colors hover:border-accent hover:text-accent"
    >
      {copied ? <Check size={16} /> : <Share2 size={16} />}
      {copied ? 'Link copied' : 'Share project'}
    </button>
  );
}
