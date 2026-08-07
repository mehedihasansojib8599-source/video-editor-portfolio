// ============================================================================
// ⚙️ SITE CONFIGURATION FILE
// ============================================================================
// Edit this file to change site-wide text, links, and content sections.
// (For colors/fonts, see tailwind.config.ts. For portfolio projects, see
// data/portfolio.ts.)
// ============================================================================

export const siteConfig = {
  // ---- 🏷️ BRAND / LOGO --------------------------------------------------
 siteName: 'MEHEDI HASAN',
logoText: 'MH',
tagline: 'YouTube & Faceless Video Editor',

  // ---- 🔍 SEO --------------------------------------------------------------
 seo: {
  title: 'Mehedi Hasan | Professional Video Editor',

  description:
    'Professional YouTube Video Editor specializing in Faceless Videos, Shorts, Motion Graphics, Storytelling and Premiere Pro.',

  url: 'https://your-domain.com',

  ogImage: '/images/og-image.jpg',
},

  // ---- 📞 CONTACT INFO -------------------------------------------------
  contact: {
  email: 'mehedihasansojib8599@gmail.com',
  phone: '+8801754815099',
  location: 'Gournadi,Barishal, Bangladesh',
  availability: 'Available for Freelance Projects',
},
  // ---- 🔗 SOCIAL LINKS ---------------------------------------------------
 socials: [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/mehedihasansojib599',
  },
  {
    name: 'YouTube',
    href: 'https://youtube.com/@md.mehedi.hasan777',
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/md-mehedi-hasan-b780ba426',
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/m.e.he.d.i.tsu.110588',
  },
  {
    name: 'TikTok',
    href: 'https://www.tiktok.com/@md.mehedi.hasan.sojib',
    
  },{
  name: "WhatsApp",
  href: "https://wa.me/8801754815099"
},
],
  // ---- 🧭 NAVBAR LINKS ---------------------------------------------------
  navLinks: [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
  
    { label: 'Contact', href: '#contact' },
  ],

  // ---- 🎬 HERO SECTION ---------------------------------------------------
 hero: {
  eyebrow: 'Freelance Video Editor • Bangladesh',

  headline: 'Professional\nYouTube Video Editor',

  subheadline:
'I edit YouTube videos, faceless content, documentaries, and short-form videos using Premiere Pro and After Effects. I transform scripts and voiceovers into engaging videos with stock footage, captions, motion graphics, and professional storytelling.',
  primaryButton: {
    label: 'View Portfolio',
    href: '#portfolio',
  },

  secondaryButton: {
    label: 'Hire Me',
    href: '#contact',
  },

  reelVideo:
    'https://cdn.coverr.co/videos/coverr-editing-video-on-a-screen-4780/1080p.mp4',
},

  // ---- 👤 ABOUT SECTION ---------------------------------------------------
 about: {
  heading: 'About Me',

  paragraphs: [
    "Hi, I'm Mehedi Hasan, a freelance video editor from Bangladesh.",

    "I specialize in editing YouTube videos, faceless content, and short-form videos. I transform scripts and AI voiceovers into engaging videos using stock footage, smooth transitions, captions, motion graphics, sound design, and color correction.",

    "My goal is to create clean, engaging, and professional videos that help creators and businesses grow their audience.",
  ],

 portrait: "/images/profile.jpg",

  stats: [
  {
    label: 'Projects',
    value: '10+',
  },
  {
    label: 'Video Edited',
    value: '200+',
  },
  {
    label: 'Experience',
    value: '1+ Year',
  },
],
},
  // ---- 🛠️ SERVICES --------------------------------------------------------
 services: [
  {
    title: 'YouTube Video Editing',
    description:
      'Professional long-form YouTube video editing with engaging storytelling, smooth pacing, and viewer retention.',
    icon: 'Youtube',
  },
  {
    title: 'Faceless Video Editing',
    description:
      'Creating faceless YouTube videos using AI voiceovers, scripts, stock footage, and cinematic editing.',
    icon: 'Film',
  },
  {
    title: 'Short Form Video Editing',
    description:
      'Editing YouTube Shorts, Instagram Reels, and TikTok videos with fast-paced cuts and viral editing techniques.',
    icon: 'Smartphone',
  },
  {
    title: 'Story-Based Editing',
    description:
      'Matching visuals with scripts and voiceovers to create clear, engaging, and easy-to-follow stories.',
    icon: 'BookOpen',
  },
  {
    title: 'Motion Graphics',
    description:
      'Creating animated titles, lower thirds, text animations, and simple motion graphics using After Effects.',
    icon: 'Sparkles',
  },
  {
    title: 'Captions & Subtitles',
    description:
      'Professional animated captions with clean typography and smooth transitions.',
    icon: 'Type',
  },
  {
    title: 'Color Correction',
    description:
      'Adjusting brightness, contrast, saturation, white balance, and overall visual consistency.',
    icon: 'Palette',
  },
  {
    title: 'Audio Enhancement',
    description:
      'Noise reduction, voice enhancement, background music balancing, and basic sound design.',
    icon: 'AudioWaveform',
  },
],
  // ---- 🎯 SKILLS (with proficiency 0-100) ---------------------------------
 skills: [
  {
    name: 'Adobe Premiere Pro',
    level: 80,
  },
  {
    name: 'Adobe After Effects',
    level: 40,
  },
  {
    name: 'Storytelling',
    level: 80,
  },
  {
    name: 'Script-Based YouTube Editing',
    level: 90,
  },
 
  {
    name: 'Faceless Video Editing',
    level: 80,
  },
   {
    name: 'Cinematic Reels Editing',
    level: 80,
  },
  {
    name: 'Stock Footage Research',
    level: 90,
  },
  {
    name: 'Caption Animation',
    level: 60,
  },
  {
    name: 'Motion Graphics',
    level: 40,
  },
  {
    name: 'Beat Sync Editing',
    level: 70,
  },
  {
    name: 'Timeline Editing',
    level: 90,
  },
  {
    name: 'Transitions',
    level: 70,
  },
  {
    name: 'Speed Ramping',
    level: 70,
  },
  {
    name: 'Color Correction',
    level: 60,
  },
  {
    name: 'Audio Enhancement',
    level: 80,
  },
],
  // ---- 💻 SOFTWARE ---------------------------------------------------------
 software: [
  'Adobe Premiere Pro',
  'Adobe After Effects',
  'Adobe Photoshop',
  'CapCut',
  'Adobe Media Encoder',
],

  // ---- 🏆 EXPERIENCE (timeline) --------------------------------------------
  experience: [
  {
    year: '2025 – Present',
    title: 'Freelance Video Editor',
    description:
      'Editing high-retention YouTube documentaries, faceless videos, and long-form content with a strong focus on storytelling, pacing, and viewer engagement.',
  },
  {
    year: '2025 – Present',
    title: 'Agency Video Editor',
    description:
      'Completed 150+ of my 200+ total projects across finance, crime, health, educational, and entertainment niches using Adobe Premiere Pro.',
  },
  {
    year: '2025 – Present',
    title: 'YouTube Content Editor',
    description:
      'Transforming client scripts and AI voiceovers into engaging documentaries through stock footage research, cinematic editing, motion graphics, subtitles, and sound design.',
  },
],
process: [
  {
    step: '01',
    title: 'Creative Brief',
    description:
      'Review the script, understand the target audience, and define the visual storytelling approach.',
  },
  {
    step: '02',
    title: 'Asset Collection',
    description:
      'Research and organize premium stock footage, images, graphics, and supporting visual elements.',
  },
  {
    step: '03',
    title: 'Cinematic Editing',
    description:
      'Craft a high-retention edit with smooth pacing, motion graphics, subtitles, and synchronized narration.',
  },
  {
    step: '04',
    title: 'Final Polish',
    description:
      'Apply sound design, background music, color correction, and quality control for a polished final result.',
  },
  {
    step: '05',
    title: 'Client Delivery',
    description:
      'Deliver optimized files for YouTube and social platforms with revision support when required.',
  },
],

  // ---- ❓ FAQ ---------------------------------------------------------------
 faq: [
  {
    question: 'How long does a typical project take?',
    answer:
      'Most projects are delivered within 1–3 days depending on the scope.',
  },
  {
    question: 'Do you provide revisions?',
    answer:
      'Yes. Revisions are included to ensure the final video matches your expectations.',
  },
  {
    question: 'Which editing software do you use?',
    answer:
      'I primarily edit with Adobe Premiere Pro/Adobe After Effects and use professional tools when needed.',
  },
],
};

export type SiteConfig = typeof siteConfig;