import type { MetadataRoute } from 'next';
import { getPublishedProjects } from '@/data/portfolio';
import { siteConfig } from '@/data/site-config';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.seo.url;

  const projectUrls = getPublishedProjects().map((p) => ({
    url: `${base}/portfolio/${p.id}`,
    lastModified: p.date,
  }));

  return [
    { url: base, lastModified: new Date().toISOString() },
    ...projectUrls,
  ];
}
