import type { Config } from 'tailwindcss';

// ============================================================================
// 🎨 EDIT WEBSITE COLORS HERE
// This is the single source of truth for the color palette.
// Change any hex value below and it updates across the entire site.
// ============================================================================
const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './data/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#0B0D10', // main background — "letterbox black"
          surface: '#14171C', // cards / panels
          surface2: '#1B1F26', // raised panels / hover states
        },
        ink: {
          DEFAULT: '#ECEDEE', // primary text
          muted: '#9AA0A8', // secondary text
          faint: '#5C6169', // tertiary text / disabled
        },
        accent: {
          DEFAULT: '#F2A65A', // tungsten amber — tally-light highlight
          soft: '#F7C48A',
        },
        teal: {
          DEFAULT: '#3E8E8E', // shadow-grade teal — complements accent
          soft: '#5FADAD',
        },
        line: 'rgba(255,255,255,0.08)',
      },
      fontFamily: {
        display: ['var(--font-display)'],
        body: ['var(--font-body)'],
        mono: ['var(--font-mono)'],
      },
      backgroundImage: {
        'grade-gradient':
          'linear-gradient(135deg, rgba(242,166,90,0.12) 0%, rgba(11,13,16,0) 40%, rgba(62,142,142,0.10) 100%)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.3' },
        },
      },
      animation: {
        marquee: 'marquee 28s linear infinite',
        blink: 'blink 1.6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
