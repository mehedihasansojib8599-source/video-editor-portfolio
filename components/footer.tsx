import Link from 'next/link';
import { siteConfig } from '@/data/site-config';

const socialBrandStyles: Record<
  string,
  {
    border: string;
    shadow: string;
    dot: string;
    textHover: string;
  }
> = {
  Instagram: {
    border:
      'from-pink-500/40 via-purple-500/20 to-orange-400/40 hover:from-pink-500/80 hover:via-purple-500/40 hover:to-orange-400/80 shadow-[0_0_16px_-8px_rgba(236,72,153,0.45)] hover:shadow-[0_0_24px_-4px_rgba(236,72,153,0.6)]',
    shadow: '',
    dot: 'bg-pink-500',
    textHover: 'group-hover:text-pink-200',
  },
  YouTube: {
    border:
      'from-red-500/40 via-red-400/10 to-red-600/40 hover:from-red-500/80 hover:via-red-400/30 hover:to-red-600/80 shadow-[0_0_16px_-8px_rgba(239,68,68,0.45)] hover:shadow-[0_0_24px_-4px_rgba(239,68,68,0.6)]',
    shadow: '',
    dot: 'bg-red-500',
    textHover: 'group-hover:text-red-200',
  },
  LinkedIn: {
    border:
      'from-sky-600/40 via-blue-500/10 to-sky-700/40 hover:from-sky-600/80 hover:via-blue-500/30 hover:to-sky-700/80 shadow-[0_0_16px_-8px_rgba(2,132,199,0.45)] hover:shadow-[0_0_24px_-4px_rgba(2,132,199,0.6)]',
    shadow: '',
    dot: 'bg-sky-500',
    textHover: 'group-hover:text-sky-200',
  },
  Facebook: {
    border:
      'from-blue-500/40 via-indigo-400/10 to-blue-600/40 hover:from-blue-500/80 hover:via-indigo-400/30 hover:to-blue-600/80 shadow-[0_0_16px_-8px_rgba(59,130,246,0.45)] hover:shadow-[0_0_24px_-4px_rgba(59,130,246,0.6)]',
    shadow: '',
    dot: 'bg-blue-500',
    textHover: 'group-hover:text-blue-200',
  },
  TikTok: {
    border:
      'from-cyan-400/40 via-white/10 to-pink-500/40 hover:from-cyan-400/80 hover:via-white/20 hover:to-pink-500/80 shadow-[0_0_16px_-8px_rgba(34,211,238,0.45)] hover:shadow-[0_0_24px_-4px_rgba(236,72,153,0.55)]',
    shadow: '',
    dot: 'bg-cyan-400',
    textHover: 'group-hover:text-cyan-200',
  },
  WhatsApp: {
    border:
      'from-green-500/40 via-emerald-400/10 to-green-600/40 hover:from-green-500/80 hover:via-emerald-400/30 hover:to-green-600/80 shadow-[0_0_16px_-8px_rgba(34,197,94,0.45)] hover:shadow-[0_0_24px_-4px_rgba(34,197,94,0.6)]',
    shadow: '',
    dot: 'bg-green-500',
    textHover: 'group-hover:text-green-200',
  },
  default: {
    border:
      'from-orange-400/40 via-white/10 to-teal-400/40 hover:from-orange-400/80 hover:via-white/20 hover:to-teal-400/80 shadow-[0_0_16px_-8px_rgba(251,146,60,0.4)] hover:shadow-[0_0_24px_-4px_rgba(45,212,191,0.5)]',
    shadow: '',
    dot: 'bg-orange-400',
    textHover: 'group-hover:text-orange-200',
  },
};

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line">
      {/* Background Glows */}
      <div className="pointer-events-none absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-gradient-to-br from-orange-500/15 via-yellow-400/5 to-transparent blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-24 right-1/4 h-80 w-80 rounded-full bg-gradient-to-tr from-teal-400/15 via-emerald-500/5 to-transparent blur-[120px]" />

      {/* Grid Background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="section relative grid gap-12 py-16 md:grid-cols-3">
        <div>
          <span className="font-display bg-gradient-to-r from-orange-300 via-yellow-200 to-teal-300 bg-clip-text text-2xl font-semibold text-transparent">
            {siteConfig.logoText}
          </span>
          <p className="mt-4 max-w-xs text-sm text-ink-muted">
            {siteConfig.tagline} — {siteConfig.contact.location}
          </p>
        </div>

        <div>
          <p className="mb-4 inline-flex items-center gap-2 text-xs font-medium tracking-widest text-orange-300">
            <span className="h-1.5 w-1.5 rounded-full bg-orange-400" />
            NAVIGATE
          </p>
          <ul className="space-y-3">
            {siteConfig.navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="group relative inline-flex rounded-xl bg-gradient-to-br from-orange-400/40 via-white/10 to-teal-400/40 p-[1.5px] transition-all duration-300 hover:from-orange-400/80 hover:via-white/20 hover:to-teal-400/80 hover:shadow-[0_0_20px_-6px_rgba(45,212,191,0.45)]"
                >
                  <span className="flex items-center gap-2 rounded-xl bg-[#0b0e13] px-4 py-2 text-sm text-ink-muted transition-colors group-hover:text-teal-200">
                    <span className="h-1.5 w-1.5 rounded-full bg-white/30 transition-colors group-hover:bg-teal-300" />
                    {link.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-4 inline-flex items-center gap-2 text-xs font-medium tracking-widest text-teal-300">
            <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
            CONNECT
          </p>
          <ul className="space-y-3">
            <li>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="group relative inline-flex rounded-xl bg-gradient-to-br from-orange-400/40 via-white/10 to-yellow-400/40 p-[1.5px] shadow-[0_0_16px_-8px_rgba(251,146,60,0.4)] transition-all duration-300 hover:from-orange-400/80 hover:to-yellow-400/80 hover:shadow-[0_0_24px_-4px_rgba(251,146,60,0.55)]"
              >
                <span className="flex items-center gap-2 rounded-xl bg-[#0b0e13] px-4 py-2 text-sm text-ink-muted transition-colors group-hover:text-orange-200">
                  <span className="h-1.5 w-1.5 rounded-full bg-orange-400" />
                  {siteConfig.contact.email}
                </span>
              </a>
            </li>
            {siteConfig.socials.map((s) => {
              const brand = socialBrandStyles[s.name] ?? socialBrandStyles.default;

              return (
                <li key={s.name}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative inline-flex rounded-xl bg-gradient-to-br p-[1.5px] transition-all duration-300 ${brand.border}`}
                  >
                    <span className={`flex items-center gap-2 rounded-xl bg-[#0b0e13] px-4 py-2 text-sm text-ink-muted transition-colors ${brand.textHover}`}>
                      <span className={`h-1.5 w-1.5 rounded-full ${brand.dot}`} />
                      {s.name}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="relative border-t border-white/10 px-6 py-6 text-center font-mono text-xs text-ink-faint md:px-10">
        © {new Date().getFullYear()} {siteConfig.siteName}. All rights reserved.
        {' · '}
        <Link
          href="/"
          className="transition-colors hover:text-teal-300"
        >
          Built with care.
        </Link>
      </div>
    </footer>
  );
}