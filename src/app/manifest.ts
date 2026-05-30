import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'RS Solar Infrastructure',
    short_name: 'RS Solar',
    description:
      'Rooftop solar installation in Faridabad, Palwal & Gurugram with up to Rs 78,000 PM Surya Ghar subsidy. DHBVN net-metering specialists.',
    start_url: '/',
    display: 'standalone',
    background_color: '#F3F4F6',
    theme_color: '#1E3A5F',
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  };
}
