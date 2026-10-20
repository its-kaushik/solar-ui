import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Raytrix Energy',
    short_name: 'Raytrix Energy',
    description:
      'Rooftop solar installation in Delhi with up to Rs 1,56,000 government subsidy. BSES registered.',
    start_url: '/',
    display: 'standalone',
    background_color: '#F3F4F6',
    theme_color: '#1E3A5F',
    icons: [
      {
        src: '/icons/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icons/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
