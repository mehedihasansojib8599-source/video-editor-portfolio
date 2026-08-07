'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { siteConfig } from '@/data/site-config';

function CountUp({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1200;
    const start = performance.now();

    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setDisplay(Math.floor(progress * value));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, value]);

  return (
    <span ref={ref} className="font-display text-4xl text-ink md:text-5xl">
      {display.toLocaleString()}
      {suffix}
    </span>
  );
}

// ---- EDIT: figures live in siteConfig.stats ----
export function Stats() {
  return (
    <section className="border-y border-line bg-bg-surface/40">
      <div className="section grid grid-cols-2 gap-10 md:grid-cols-4">
        {siteConfig.stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
          >
            <CountUp value={stat.value} suffix={stat.suffix} />
            <p className="mt-2 text-sm text-ink-muted">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
