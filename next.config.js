/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Add any external image hosts you use for thumbnails/covers here.
    // e.g. if you host images on Cloudinary, add 'res.cloudinary.com'
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'i.ytimg.com' },
      { protocol: 'https', hostname: 'i.vimeocdn.com' },
      { protocol: 'https', hostname: '**' },
    ],
  },
};

module.exports = nextConfig;
