import { siteConfig } from '@/data/site-config';

// ---- EDIT: the tool list lives in siteConfig.software in data/site-config.ts ----
// IMPORTANT: make sure 'Adobe Media Encoder' is included in that array,
// e.g. software: ['Adobe Premiere Pro', 'Adobe After Effects', 'Adobe Photoshop', 'Adobe Media Encoder', 'CapCut']

// Colors matched directly from each app's real icon:
// - Premiere Pro / After Effects / Media Encoder: navy bg + lavender glyph
// - Photoshop: deep blue bg + bright blue glyph
// - CapCut: black glyph (rendered here as a black badge with white text)
const TOOL_STYLES: Record<
  string,
  { badge: string; from: string; to: string; text: string }
> = {
  'Adobe Premiere Pro': {
    badge: 'Pr',
    from: '#00005B',
    to: '#00003D',
    text: '#9999FF',
  },
  'Adobe After Effects': {
    badge: 'Ae',
    from: '#00005B',
    to: '#00003D',
    text: '#9999FF',
  },
  'Adobe Media Encoder': {
    badge: 'Me',
    from: '#00005B',
    to: '#00003D',
    text: '#9999FF',
  },
  'Adobe Photoshop': {
    badge: 'Ps',
    from: '#001E36',
    to: '#001527',
    text: '#31A8FF',
  },
  'Adobe Audition': {
    badge: 'Au',
    from: '#00005B',
    to: '#00003D',
    text: '#9999FF',
  },
  CapCut: {
    badge: 'Cc',
    from: '#000000',
    to: '#1a1a1a',
    text: '#FFFFFF',
  },
};

function toolStyle(name: string) {
  return (
    TOOL_STYLES[name] ?? {
      badge: name.slice(0, 2),
      from: '#f97316',
      to: '#2dd4bf',
      text: '#ffffff',
    }
  );
}

// Site accent gradient — same family used in Skills bars / hero heading —
// kept on the card border so every card still ties back to the site theme.
const SITE_ACCENT_FROM = '#f97316';
const SITE_ACCENT_TO = '#2dd4bf';

export function Software() {
  const items = [...siteConfig.software, ...siteConfig.software];

  return (
    <section className="relative overflow-hidden border-y border-line py-16">
      {/* ambient glow so the section doesn't feel empty */}
      <div
        className="pointer-events-none absolute -top-24 left-1/4 h-72 w-72 rounded-full opacity-20 blur-3xl"
        style={{ background: SITE_ACCENT_FROM }}
      />
      <div
        className="pointer-events-none absolute -bottom-24 right-1/4 h-72 w-72 rounded-full opacity-20 blur-3xl"
        style={{ background: SITE_ACCENT_TO }}
      />

      <div className="relative mx-6 md:mx-10">
        <p className="section-eyebrow">04 — Software</p>
        <p className="mt-3 max-w-md text-sm text-ink-faint">
          The tools I edit, grade, and mix with — every day.
        </p>
      </div>

      <div className="relative mt-8 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-bg to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-bg to-transparent" />
        <div className="flex w-max animate-marquee gap-6">
          {items.map((tool, i) => {
            const style = toolStyle(tool);
            return (
              <div
                key={`${tool}-${i}`}
                className="group relative shrink-0 rounded-2xl p-[1.5px] transition-transform duration-300 hover:-translate-y-1"
                style={{
                  background: `linear-gradient(135deg, ${SITE_ACCENT_FROM}40, ${SITE_ACCENT_TO}40)`,
                }}
              >
                {/* gradient border wrapper: 1.5px padding reveals the site accent as a border */}
                <div className="flex items-center gap-3 whitespace-nowrap rounded-[15px] border border-line/60 bg-surface px-6 py-4 transition-all duration-300 group-hover:border-transparent group-hover:shadow-[0_16px_36px_-10px_rgba(45,212,191,0.35)]">
                  <span
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-sm font-bold shadow-inner"
                    style={{
                      background: `linear-gradient(160deg, ${style.from}, ${style.to})`,
                      color: style.text,
                    }}
                  >
                    {style.badge}
                  </span>
                  <span className="font-display text-lg text-ink-faint transition-colors group-hover:text-ink md:text-xl">
                    {tool}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}