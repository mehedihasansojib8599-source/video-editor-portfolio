'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { siteConfig } from '@/data/site-config';

// ---- EDIT: quotes, names, and avatars live in siteConfig.testimonials ----
export function Testimonials() {
  if (!siteConfig.testimonials || siteConfig.testimonials.length === 0) {
    return null;
  }

  return (
    <section id="testimonials" className="section">
      <p className="section-eyebrow">06 — Testimonials</p>
      <h2 className="max-w-xl font-display text-3xl font-medium tracking-tight text-ink md:text-4xl">
        What clients say after delivery.
      </h2>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {siteConfig.testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="flex flex-col rounded-2xl border border-line bg-bg-surface p-8"
          >
            <Quote className="text-accent" size={22} />
            <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-muted">
              {t.quote}
            </p>
            <div className="mt-6 flex items-center gap-3">
              <div className="relative h-10 w-10 overflow-hidden rounded-full">
                <Image src={t.avatar} alt={t.name} fill className="object-cover" />
              </div>
              <div>
                <p className="text-sm text-ink">{t.name}</p>
                <p className="text-xs text-ink-faint">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
