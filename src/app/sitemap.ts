import type { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/blog';

const BASE_URL = 'https://kaushiksolarpower.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE_URL}/about`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/services/residential`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/services/commercial`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/services/maintenance`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/subsidy-guide`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/subsidy-guide/pm-surya-ghar`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/subsidy-guide/delhi-state-subsidy`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/subsidy-guide/how-to-apply`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/solar-calculator`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/our-work`, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${BASE_URL}/blog`, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${BASE_URL}/contact`, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${BASE_URL}/privacy-policy`, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE_URL}/terms`, changeFrequency: 'yearly', priority: 0.3 },
  ];

  const blogPosts: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'yearly',
    priority: 0.6,
  }));

  return [...staticPages, ...blogPosts];
}
