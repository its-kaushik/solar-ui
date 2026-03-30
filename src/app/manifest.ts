import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Raytrix Energy',
    short_name: 'Raytrix Energy',
    description:
      'Rooftop solar installation in Delhi with up to Rs 1,08,000 government subsidy. BSES Rajdhani registered.',
    start_url: '/',
    display: 'standalone',
    background_color: '#F3F4F6',
    theme_color: '#1E3A5F',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
