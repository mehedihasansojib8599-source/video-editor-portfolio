'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, MessageCircle } from 'lucide-react';

import {
  FaInstagram,
  FaYoutube,
  FaFacebook,
  FaLinkedin,
  FaTiktok,
  FaWhatsapp,
} from 'react-icons/fa6';
import { siteConfig } from '@/data/site-config';

// Brand colors for each social icon (used instead of the default muted color)
const socialColors: Record<string, string> = {
  Instagram: '#E1306C',
  YouTube: '#FF0000',
  Facebook: '#1877F2',
  LinkedIn: '#0A66C2',
  TikTok: '#25F4EE',
  WhatsApp: '#25D366',
};

// ---- EDIT: contact details live in siteConfig.contact / siteConfig.socials ----
//
// NOTE ON THE FORM: this form is wired to open the visitor's email client via
// a `mailto:` link so it works with zero backend setup. To collect
// submissions directly instead, swap the `handleSubmit` function below for a
// POST request to a form service (Formspree, Resend, etc.) or an API route.
export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Project inquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${siteConfig.contact.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section relative overflow-hidden">
      {/* ---- Grid pattern overlay, consistent with Hero ---- */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 50%, black 40%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 50%, black 40%, transparent 100%)',
        }}
      />

      {/* ---- Premium ambient glow orbs — smaller/softer on mobile so they
             don't overpower a narrow screen ---- */}
      <div className="pointer-events-none absolute -left-32 bottom-0 h-56 w-56 rounded-full bg-accent/20 blur-[60px] sm:h-96 sm:w-96 sm:blur-[120px]" />
      <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-teal-400/15 blur-[70px] sm:h-[28rem] sm:w-[28rem] sm:blur-[140px]" />

      <div className="relative z-10 grid gap-12 md:grid-cols-2 md:items-stretch md:gap-16">
        <div className="flex flex-col justify-between">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-eyebrow"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_10px_theme(colors.accent)]" />
            10 — Contact
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-2xl font-medium tracking-tight sm:text-3xl md:text-4xl"
          >
            <span className="bg-gradient-to-r from-accent via-amber-300 to-teal-300 bg-clip-text text-transparent">
              Have footage that needs a story?
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-4 max-w-sm text-sm text-ink-muted sm:text-base"
          >
            {siteConfig.contact.availability}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 space-y-3 sm:mt-10"
          >
            <div
              className="rounded-xl p-[1.5px] transition-all duration-300 hover:scale-[1.01]"
              style={{
                background:
                  'linear-gradient(135deg, #F5A623, #F5A62333 35%, #F5A62333 65%, #F5A623)',
              }}
            >
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="group flex items-center gap-3 rounded-[10px] bg-bg-surface/90 px-4 py-3 text-sm text-ink-muted backdrop-blur-sm transition-colors duration-300 hover:text-ink sm:text-base"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent shadow-[0_0_15px_-3px_theme(colors.accent)] transition-transform duration-300 group-hover:scale-110">
                  <Mail size={16} />
                </span>
                <span className="truncate">{siteConfig.contact.email}</span>
              </a>
            </div>

            <div
              className="rounded-xl p-[1.5px] transition-all duration-300 hover:scale-[1.01]"
              style={{
                background:
                  'linear-gradient(135deg, #25D366, #25D36633 35%, #25D36633 65%, #25D366)',
              }}
            >
              <a
                href="https://wa.me/8801754815099?text=Hi%20Mehedi,%20I%20want%20to%20hire%20you."
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-[10px] bg-bg-surface/90 px-4 py-3 text-sm text-ink-muted backdrop-blur-sm transition-colors duration-300 hover:text-green-400 sm:text-base"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-green-500/15 text-green-400 shadow-[0_0_15px_-3px_rgba(34,197,94,0.7)] transition-transform duration-300 group-hover:scale-110">
                  <MessageCircle size={16} />
                </span>
                Chat on WhatsApp
              </a>
            </div>

            <div
              className="rounded-xl p-[1.5px] transition-all duration-300 hover:scale-[1.01]"
              style={{
                background:
                  'linear-gradient(135deg, #2DD4BF, #2DD4BF33 35%, #2DD4BF33 65%, #2DD4BF)',
              }}
            >
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="group flex items-center gap-3 rounded-[10px] bg-bg-surface/90 px-4 py-3 text-sm text-ink-muted backdrop-blur-sm transition-colors duration-300 hover:text-ink sm:text-base"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-teal-400/15 text-teal-300 shadow-[0_0_15px_-3px_theme(colors.teal.400)] transition-transform duration-300 group-hover:scale-110">
                  <Phone size={16} />
                </span>
                {siteConfig.contact.phone}
              </a>
            </div>

            <div
              className="rounded-xl p-[1.5px] transition-all duration-300 hover:scale-[1.01]"
              style={{
                background:
                  'linear-gradient(135deg, #FBBF24, #FBBF2433 35%, #FBBF2433 65%, #FBBF24)',
              }}
            >
              <p className="flex items-center gap-3 rounded-[10px] bg-bg-surface/90 px-4 py-3 text-sm text-ink-muted backdrop-blur-sm sm:text-base">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-amber-400/15 text-amber-300 shadow-[0_0_15px_-3px_rgba(251,191,36,0.7)]">
                  <MapPin size={16} />
                </span>
                {siteConfig.contact.location}
              </p>
            </div>
          </motion.div>
        </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-8 flex flex-wrap gap-3 sm:mt-10 sm:gap-4"
          >
            {siteConfig.socials.map((s) => {
              const color = socialColors[s.name] ?? '#ffffff';
              return (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-300 hover:-translate-y-1 hover:scale-110 sm:h-12 sm:w-12"
                  style={{
                    color,
                    borderColor: `${color}40`,
                    backgroundColor: `${color}14`,
                    boxShadow: `0 0 0 rgba(0,0,0,0)`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = `0 0 20px -4px ${color}`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = `0 0 0 rgba(0,0,0,0)`;
                  }}
                >
                  {s.name === 'Instagram' && <FaInstagram size={20} />}
                  {s.name === 'YouTube' && <FaYoutube size={20} />}
                  {s.name === 'Facebook' && <FaFacebook size={20} />}
                  {s.name === 'LinkedIn' && <FaLinkedin size={20} />}
                  {s.name === 'TikTok' && <FaTiktok size={20} />}
                  {s.name === 'WhatsApp' && <FaWhatsapp size={20} />}
                </a>
              );
            })}
          </motion.div>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          className="relative rounded-2xl p-[1px]"
          style={{
            background:
              'linear-gradient(135deg, rgba(255,255,255,0.16), rgba(255,255,255,0.02) 30%, rgba(255,255,255,0.02) 70%, rgba(255,255,255,0.16))',
          }}
        >
          {/* glow behind the card — smaller on mobile */}
          <div className="pointer-events-none absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-br from-accent/25 via-transparent to-teal-400/25 blur-xl sm:-inset-6 sm:rounded-[28px] sm:blur-2xl" />

          <div className="glass rounded-2xl p-5 sm:p-8">
            <div className="space-y-4 sm:space-y-5">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm text-ink-muted">
                  Name
                </label>
                <input
                  id="name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-xl border border-line bg-bg-surface px-4 py-3 text-sm text-ink transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm text-ink-muted">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full rounded-xl border border-line bg-bg-surface px-4 py-3 text-sm text-ink transition-colors focus:border-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-400/30"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-sm text-ink-muted">
                  Project details
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full resize-none rounded-xl border border-line bg-bg-surface px-4 py-3 text-sm text-ink transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
                  placeholder="Footage length, deadline, platform…"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-gradient-to-r from-accent via-amber-300 to-teal-300 py-3 text-sm font-semibold text-bg shadow-[0_0_25px_-5px_theme(colors.accent)] transition-transform hover:scale-[1.02]"
              >
                Send Message
              </button>
            </div>
          </div>
        </motion.form>
      </div>
    </section>
  );
}