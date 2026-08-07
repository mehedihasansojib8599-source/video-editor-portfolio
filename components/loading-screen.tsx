'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { siteConfig } from '@/data/site-config';

// A brief branded loading screen that plays once per page load, echoing a
// timecode counting up — a small nod to the editor's timeline.
export function LoadingScreen() {
  const [show, setShow] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((c) => (c >= 100 ? 100 : c + 4));
    }, 24);
    const timeout = setTimeout(() => setShow(false), 900);
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-6 bg-bg"
        >
          <span className="font-display text-2xl tracking-tight text-ink">
            {siteConfig.logoText}
          </span>
          <span className="timecode text-sm text-ink-muted">
            00:00:0{Math.floor(count / 34)}:{String(count).padStart(2, '0')}
          </span>
          <div className="h-[2px] w-40 overflow-hidden bg-line">
            <div
              className="h-full bg-accent transition-all duration-100"
              style={{ width: `${Math.min(count, 100)}%` }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
