import type { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/blog';

const BASE_URL = 'https://www.raytrixenergy.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date('2026-03-30');

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, changeFrequency: 'weekly', priority: 1.0, lastModified },
    { url: `${BASE_URL}/about`, changeFrequency: 'monthly', priority: 0.7, lastModified },
    { url: `${BASE_URL}/services/residential`, changeFrequency: 'monthly', priority: 0.8, lastModified },
    { url: `${BASE_URL}/services/commercial`, changeFrequency: 'monthly', priority: 0.8, lastModified },
    { url: `${BASE_URL}/services/maintenance`, changeFrequency: 'monthly', priority: 0.7, lastModified },
    { url: `${BASE_URL}/subsidy-guide`, changeFrequency: 'monthly', priority: 0.9, lastModified },
    { url: `${BASE_URL}/subsidy-guide/pm-surya-ghar`, changeFrequency: 'monthly', priority: 0.9, lastModified },
    { url: `${BASE_URL}/subsidy-guide/delhi-state-subsidy`, changeFrequency: 'monthly', priority: 0.8, lastModified },
    { url: `${BASE_URL}/subsidy-guide/how-to-apply`, changeFrequency: 'monthly', priority: 0.8, lastModified },
    { url: `${BASE_URL}/solar-calculator`, changeFrequency: 'monthly', priority: 0.8, lastModified },
    { url: `${BASE_URL}/our-work`, changeFrequency: 'weekly', priority: 0.7, lastModified },
    { url: `${BASE_URL}/blog`, changeFrequency: 'weekly', priority: 0.7, lastModified },
    { url: `${BASE_URL}/contact`, changeFrequency: 'yearly', priority: 0.6, lastModified },
    { url: `${BASE_URL}/privacy-policy`, changeFrequency: 'yearly', priority: 0.3, lastModified },
    { url: `${BASE_URL}/terms`, changeFrequency: 'yearly', priority: 0.3, lastModified },
  ];

  const blogPosts: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'yearly',
    priority: 0.6,
  }));

  return [...staticPages, ...blogPosts];
}
