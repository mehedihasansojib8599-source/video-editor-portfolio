// ============================================================================
// 🎬 PORTFOLIO DATA FILE
// ============================================================================
// This is the ONLY file you need to edit to manage your portfolio.
// You never need to touch layout/component code to add, remove, hide,
// reorder, or edit a project.
//
// HOW TO ADD A NEW PROJECT:
//   1. Copy any object in the `projects` array below.
//   2. Paste it at the top (or wherever you want it to appear — order here
//      is the display order).
//   3. Give it a unique `id` (no spaces, e.g. "brand-launch-2026").
//   4. Fill in the fields. See the field guide below.
//
// HOW TO DELETE A PROJECT:
//   Delete its whole `{ ... }` object from the array.
//
// HOW TO HIDE A PROJECT (without deleting it):
//   Set `published: false`. It disappears from the site but stays in the file.
//
// HOW TO FEATURE A PROJECT:
//   Set `featured: true`. Featured projects appear in the homepage
//   "Featured Portfolio" section and get a badge on their card.
//
// HOW TO REORDER PROJECTS:
//   Just move the object up/down in the array. Cards render in this order.
//
// HOW TO ADD A NEW CATEGORY:
//   Add the new category name as a string to `categories` at the bottom of
//   this file, then use that exact string in a project's `category` field.
// ============================================================================

// ---- FIELD GUIDE -----------------------------------------------------------
// id            unique slug, used in the project URL: /portfolio/<id>
// title         project title shown on card + project page
// description   short 1-2 sentence summary shown on the card
// longDescription  full write-up shown on the project detail page
// thumbnail     image shown on the grid card (recommend 1200x800, 3:2)
// coverImage    large hero image on the project detail page (1920x1080)
// video         see VIDEO GUIDE below
// category      must match one of the `categories` strings at the bottom
// client        client / brand name (use "Personal Project" if none)
// software      array of tools used, e.g. ["Premiere Pro", "DaVinci Resolve"]
// duration      length of the final edit, e.g. "2:45"
// date          "YYYY-MM-DD", used for Newest/Oldest sorting
// location      where it was shot/produced (optional, shown on detail page)
// tags          array of short keywords, shown as pills
// featured      true/false — show in the "Featured" homepage section
// published     true/false — false hides it from the whole site
// platform      where the final video lives, e.g. "YouTube", "Instagram"
// beforeImage / afterImage   optional color-grading before/after slider images
//
// VIDEO GUIDE — set `video.type` to one of:
//   "mp4"        video.src = direct .mp4 URL
//   "youtube"    video.src = YouTube video ID (the part after v=)
//   "vimeo"      video.src = Vimeo video ID
//   "drive"      video.src = Google Drive file ID
//   "instagram"  video.src = full Instagram reel URL
//   "facebook"   video.src = full Facebook video URL
//
// VIDEO ASPECT RATIO — set `video.aspect` to match the video's REAL shape so
// it never gets cropped when played (Google Drive especially will crop to
// fit whatever box you give it, instead of letterboxing like YouTube does).
//   "16 / 9"   — standard landscape (most YouTube/Drive documentary videos)
//   "9 / 16"   — vertical / Shorts / Reels
//   "4 / 3"    — older/older-style landscape footage
//   "1 / 1"    — square
// If you're not sure, open the video file itself (right-click → Properties
// on desktop, or check the export settings in Premiere Pro) and read the
// resolution, e.g. 1920x1080 → "16 / 9", 1080x1920 → "9 / 16".
// -----------------------------------------------------------------------------

export type VideoType =
  | 'mp4'
  | 'youtube'
  | 'vimeo'
  | 'drive'
  | 'instagram'
  | 'local'
  | 'facebook';

export interface ProjectVideo {
  type: VideoType;
  src: string;
  /** Real aspect ratio of the source video, e.g. "16 / 9" or "9 / 16".
   *  Defaults to "16 / 9" if omitted. Fixes cropping on Drive embeds. */
  aspect?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;

  thumbnail?: string;
  coverImage?: string;

  video: ProjectVideo;

  category: string;
  client: string;
  software: string[];

  duration: string;
  date: string;
  location?: string;

  tags: string[];

  featured: boolean;
  published: boolean;

  platform: string;

  beforeImage?: string;
  afterImage?: string;

  myRole?: string[];
  clientProvided?: string[];
  tools?: string[];
  workflow?: string[];
}

export const projects: Project[] = [
  {
    id: 'youtube-1',
    title: 'YouTube Storytelling Edit',
    description: 'Professional YouTube video editing project.',
    category: 'YouTube',
    client: 'Personal Project',
    software: ['Adobe Premiere Pro'],
    duration: '10:00',
    date: '2026-08-07',
    tags: ['YouTube', 'Video Editing', 'Premiere Pro'],
    featured: true,
    published: true,
    platform: 'YouTube',
    video: {
      type: 'youtube',
      src: 'https://youtu.be/wkrpm_dZPa8',
      aspect: '16 / 9',
    },
   thumbnail: '/images/football.png',
  },
  
  {
    id: '$700,000 Life Savings Scam',

    title:
      '$700,000 Life Savings Scam',

    description:
      'A faceless documentary exploring how an 86-year-old grandmother lost $700,000 in life savings and how Bank of America responded to the alleged fraud.',

    longDescription:
      'A documentary-style faceless YouTube video edited in Adobe Premiere Pro. The project combines storytelling, stock footage, B-roll, motion graphics, captions, and sound design to investigate the story of an 86-year-old grandmother who lost $700,000 in life savings and the response from Bank of America.',

    thumbnail: '/images/bank.png',

    coverImage: '/images/bank.png',

    video: {
      type: 'drive',
      src: '1TiHNLPjMMkbzWHUI-Z4tRFC2JQv4gdEK',
      aspect: '16 / 9',
    },

    category: 'Documentary',

    client: 'Creative Agency',

    software: ['Adobe Premiere Pro'],

    duration: '18:22',

    date: '2026-08-07',

    tags: [
      'Documentary',
      'Faceless',
      'Bank of America',
      'Scam',
      'Fraud',
      'Storytelling',
      'Premiere Pro',
    ],

    featured: true,

    published: true,

    platform: 'Google Drive',

    myRole: [
      'Video Editing',
      'Storytelling',
      'Motion Graphics',
      'Sound Design',
    ],

    clientProvided: [
      'Script',
      'AI Voiceover',
      'AI Video',
    ],

    workflow: [
      'Client Script',
      'AI Voiceover',
      'Footage Research',
      'Editing',
      'Final Delivery',
    ],
  },

  {
    id: 'perfect-family-house',

    title: 'Perfect Family House',

    description:
      'A 4-second talking-head video about a perfect family house.',

    longDescription:
      'A 4-second talking-head video edited with Adobe After Effects and Adobe Premiere Pro, featuring clean text animation, precise sound editing, smooth pacing, and engaging visual presentation.',

    category: 'Talking Head',

    client: 'Personal Project',

    date: '2026-08-07',

    duration: '0:04',

    featured: true,

    published: true,
    platform: 'Facebook',

    tags: [
      'Talking Head',
      'Family House',
      'After Effects',
      'Premiere Pro',
      'Text Animation',
      'Sound Editing',
      'Short Form',
    ],

    software: ['Adobe After Effects', 'Adobe Premiere Pro'],

    video: {
      type: 'mp4',
      src: '/videos/HOUSE.mp4',
      aspect: '9 / 16',
    },
  },
  {
  id: 'why-american-houses-stopped-being-built-with-brick',

  title:
    'Why America Stopped Building With Brick',

  description:
    'A documentary exploring the 17 forces that pushed brick houses out of American homebuilding and made wood-frame construction the new standard.',

  longDescription:
    'A faceless documentary-style YouTube video edited in Adobe Premiere Pro. The project explores how earthquakes, economics, labor shortages, World War II, Levittown, federal financing, insurance, climate, changing buyer preferences, and the collapse of the masonry ecosystem transformed American homebuilding from solid brick construction to wood-frame houses.',

  thumbnail: '/images/home.png',

  coverImage: '/images/home.png',

  video: {
    type: 'drive',
    src: '1selROEDghG5EIX2LizkFoUBzmDRCywd0',
    aspect: '16 / 9',
  },

  category: 'Documentary',

  client: 'Creative Agency',

  software: ['Adobe Premiere Pro'],

  duration: '8:48',

  date: '2026-08-07',

  tags: [
    'Documentary',
    'American Houses',
    'Brick Houses',
    'Wood Frame',
    'Architecture',
    'History',
    'Storytelling',
    'Premiere Pro',
    'YouTube',
    'Faceless',
  ],

  featured: true,

  published: true,

  platform: 'Google Drive',

  myRole: [
    'Video Editing',
    'Storytelling',
    'Motion Graphics',
    'Sound Design',
  ],

  clientProvided: [
    'Script',
    'AI Voiceover',
    'AI Video',
  ],

  workflow: [
    'Client Script',
    'AI Voiceover',
    'Footage Research',
    'Editing',
    'Final Delivery',
  ],
},

  {
    id: 'podcast-edit',

    title: 'Podcast — Talking Head Edit',

    description:
      'A 25-second podcast video edited for engaging short-form content.',

    longDescription:
      'A 25-second podcast video edited in Adobe Premiere Pro, featuring clean cuts, smooth pacing, polished audio editing, and an engaging short-form presentation.',

    category: 'Podcast',

    client: 'Personal Project',

    date: '2026-08-07',

    duration: '0:25',

    featured: true,

    published: true,
    platform: 'Facebook',

    tags: [
      'Podcast',
      'Premiere Pro',
      'Podcast Editing',
      'Short Form',
      'Audio Editing',
      'Video Editing',
    ],

    software: ['Adobe Premiere Pro'],

    video: {
      type: 'mp4',
      src: '/videos/podcast1.mp4',
      aspect: '9 / 16',
    },
  },

  {
    id: 'old-farmers-secret-bone-broth-for-dogs',

    title: 'The Old Farmer’s Secret',

    description:
      'A faceless documentary exploring how traditional farmers used raw bones and homemade bone broth to support dogs’ joint health, digestion, teeth, and longevity.',

    longDescription:
      'A documentary-style faceless YouTube video edited in Adobe Premiere Pro. The project combines storytelling, stock footage, B-roll, motion graphics, captions, and sound design to explain the forgotten benefits of bone broth and raw bones for dogs based on traditional farming practices.',

    thumbnail: '/images/thumbnail2.png',

    coverImage: '/images/coverImage2.png',

    video: {
      type: 'drive',
      src: '1yp6v2WxCz8O5w3J13DjwZOrMFmgQgbXJ',
      // 👉 If this still crops in the player, change to the video's real
      // export ratio (check the .mp4 file's resolution before uploading).
      aspect: '16 / 9',
    },

    category: 'Documentary',

    client: 'Creative Agency',

    software: ['Adobe Premiere Pro'],

    duration: '9:31',

    date: '2026-08-01',

    tags: [
      'Documentary',
      'Faceless',
      'Dogs',
      'Bone Broth',
      'Storytelling',
      'Premiere Pro',
    ],

    featured: true,

    published: true,

    platform: 'Google Drive',
    myRole: [
      'Video Editing',
      'Storytelling',
      'Motion Graphics',
      'Sound Design',
    ],

    clientProvided: ['Script', 'AI Voiceover', 'Ai video'],

    workflow: [
      'Client Script',
      'AI Voiceover',
      'Footage Research',
      'Editing',
      'Final Delivery',
    ],
  },
  {
    id: 'patricia-marsh-tax-relief-scam',

    title: 'The $6.2M Tax Relief Scam Exposed',

    description:
      'A documentary-style faceless video exposing how Patricia Marsh and Liberty Tax Resolution Group allegedly collected millions in upfront fees while providing little to no legitimate IRS debt negotiation services.',

    longDescription:
      'This investigative documentary explores the rise and collapse of Liberty Tax Resolution Group. Using cinematic storytelling, stock footage, motion graphics, AI voiceover, and documentary editing techniques, the video reveals how more than 1,400 clients were allegedly misled into paying millions of dollars for tax relief services that rarely materialized.',

    thumbnail: '/images/thumbnail3.png',

    coverImage: '/images/cover3.png',
    video: {
      type: 'drive',
      src: '1G0uzu185WtYIUU6rsZrhSySnmhtxlcu7',
      // 👉 Same note as above — adjust if this one crops too.
      aspect: '16 / 9',
    },

    category: 'Documentary',

    client: 'Creative Agency',

    software: ['Adobe Premiere Pro'],

    duration: '19:02',

    date: '2026-08-01',

    tags: [
      'Documentary',
      'Faceless',
      'Crime',
      'Scam',
      'Bodycam',
      'Storytelling',
      'YouTube',
    ],

    featured: true,

    published: true,

    platform: 'Google Drive',
    myRole: [
      'Video Editing',
      'Storytelling',
      'Motion Graphics',
      'Sound Design',
    ],

    clientProvided: ['Script', 'AI Voiceover'],

    workflow: [
      'Client Script',
      'AI Voiceover',
      'Footage Research',
      'Editing',
      'Final Delivery',
    ],
  },
  {
    id: 'when-disrespectful-celebrities-get-destroyed-by-kevin-hart',

    title: 'Kevin Hart vs. Disrespectful Celebrities',

    description:
      'A faceless documentary-style compilation showcasing Kevin Hart’s funniest and most satisfying moments shutting down disrespectful celebrities during interviews, award shows, and public appearances.',

    longDescription:
      'This long-form entertainment documentary combines viral interview clips, award show moments, reaction footage, cinematic B-roll, motion graphics, subtitles, sound design, and professional pacing to tell the story of how Kevin Hart’s quick wit and confidence turned awkward celebrity confrontations into unforgettable viral moments. Edited entirely in Adobe Premiere Pro with a focus on storytelling, retention, pacing, and YouTube audience engagement.',

    thumbnail: '/images/thumbnail4.png',

    coverImage: '/images/cover4.png',

    video: {
      type: 'drive',
      src: '1FShHj8TYJ_YWiKzZrzl3Gln516NJjIpu',
      aspect: '16 / 9',
    },

    category: 'Entertainment Documentary',

    client: 'Creative Agency',

    software: ['Adobe Premiere Pro'],

    duration: '31:30',

    date: '2026-08-01',

    location: 'Remote',

    tags: [
      'Entertainment',
      'Celebrity',
      'Kevin Hart',
      'Storytelling',
      'YouTube',
      'Faceless',
      'Premiere Pro',
    ],

    featured: true,

    published: true,

    platform: 'Google drive',
    myRole: [
      'Video Editing',
      'Storytelling',
      'Motion Graphics',
      'Sound Design',
    ],

    clientProvided: ['Script', 'AI Voiceover'],

    workflow: [
      'Client Script',
      'AI Voiceover',
      'Footage Research',
      'Editing',
      'Final Delivery',
    ],
  },


  {
    id: 'top-5-most-dangerous-animals',

    title: 'The World’s Most Dangerous Animals',

    description:
      'A fast-paced 52-second Facebook reel showcasing the top 5 most dangerous animals in the world with cinematic transitions, color grading, and motion graphics.',

    longDescription:
      'A 52-second reel edited in Adobe Premiere Pro/Adobe After Effect, featuring smooth transitions, color grading, cinematic pacing, motion grafix and immersive storytelling.',

    category: 'Dangerous Animals',

    client: 'Personal Project',

    date: '2026-08-05',

    duration: '0:52',

    featured: true,

    published: true,
    platform: 'Facebook',

    tags: ['most dangerous animals', 'Cinematic', 'Premiere Pro', 'After Effect', 'Color Grading', 'Reel'],

    software: ['Adobe Premiere Pro/After Effects'],

    video: {
      type: 'mp4',
      src: '/videos/animals.mp4',
      aspect: '9 / 16', // vertical reel — update to "16 / 9" if it's landscape
    },
  },

  {
    id: 'kuakata-tour-2026',

    title: 'Kuakata Tour 2026',

    description:
      'A cinematic travel reel showcasing Kuakata with smooth transitions, cinematic color grading, drone shots, and storytelling.',

    longDescription:
      'A 32-second cinematic travel reel edited in Adobe Premiere Pro, featuring smooth transitions, color grading, cinematic pacing, and immersive storytelling.',

    category: 'Travel',

    client: 'Personal Project',

    date: '2026-08-05',

    duration: '0:32',

    featured: true,

    published: true,
    platform: 'Facebook',

    tags: ['Travel', 'Cinematic', 'Premiere Pro', 'Color Grading', 'Reel'],

    software: ['Adobe Premiere Pro/After Effects'],

    video: {
      type: 'mp4',
      src: '/videos/kuakata-tour-2026.mp4',
      aspect: '9 / 16', // vertical reel — update to "16 / 9" if it's landscape
    },
  },
  
];

// ============================================================================
// 🏷️ CATEGORIES — used for the filter bar on the Portfolio page.
// Add a new string here to create a new filter category, then use the exact
// same string in a project's `category` field above.
// ============================================================================
export const categories: string[] = [
  'All',
  'Documentary',
  'Travel',
  'Dangerous Animals',
  'Talking Head',
  'Podcast',
  'Commercial',
  'YouTube',
  'Short Form',
  'Long Form',
  'Motion Graphics',
  'Color Grading',
  'facebook',
];

// Helper: only published projects, in file order
export const getPublishedProjects = () => projects.filter((p) => p.published);

// Helper: featured + published projects, in file order
export const getFeaturedProjects = () =>
  projects.filter((p) => p.published && p.featured);

// Helper: find one project by id (returns undefined if not found/unpublished)
export const getProjectById = (id: string) =>
  projects.find((p) => p.id === id && p.published);

// Helper: related projects — same category, excluding the current one
export const getRelatedProjects = (project: Project, limit = 3) =>
  getPublishedProjects()
    .filter((p) => p.id !== project.id && p.category === project.category)
    .slice(0, limit);