'use client';

import { useState } from 'react';
import Image from 'next/image';

// A simple drag slider comparing an ungraded vs graded frame.
// Only renders when a project supplies both `beforeImage` and `afterImage`.
export function BeforeAfterSlider({
  before,
  after,
  title,
}: {
  before: string;
  after: string;
  title: string;
}) {
  const [pos, setPos] = useState(50);

  return (
    <div className="space-y-3">
      <p className="section-eyebrow">Color Grade — Before / After</p>
      <div className="relative aspect-video w-full select-none overflow-hidden rounded-2xl border border-line">
        <Image src={after} alt={`${title} — graded`} fill className="object-cover" />
        <div
          className="absolute inset-y-0 left-0 overflow-hidden"
          style={{ width: `${pos}%` }}
        >
          <Image
            src={before}
            alt={`${title} — ungraded`}
            fill
            className="object-cover"
          />
        </div>
        <div
          className="absolute inset-y-0 z-10 w-0.5 bg-accent"
          style={{ left: `${pos}%` }}
        />
        <input
          type="range"
          min={0}
          max={100}
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          aria-label="Compare before and after color grade"
          className="absolute inset-0 z-20 h-full w-full cursor-ew-resize appearance-none bg-transparent"
        />
      </div>
      <div className="flex justify-between text-xs text-ink-faint">
        <span>Ungraded</span>
        <span>Graded</span>
      </div>
    </div>
  );
}
