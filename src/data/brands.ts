export interface Brand {
  name: string;
  /** Path to a logo under /public. If omitted, the name renders as styled text. */
  logo?: string;
}

export interface BrandCategory {
  /** Used to pick the heading icon in the component. */
  id: 'panels' | 'inverters' | 'batteries';
  title: string;
  brands: Brand[];
}

// Equipment brands RS Solar Infrastructure supplies and installs.
// To add a logo to a text-only brand, drop the file in public/images/brands/
// and set its `logo` path here.
export const brandCategories: BrandCategory[] = [
  {
    id: 'panels',
    title: 'Solar Panels',
    brands: [
      { name: 'Adani', logo: '/images/brands/adani.svg' },
      { name: 'Waaree' },
      { name: 'Premier' },
      { name: 'Tata', logo: '/images/brands/tata.svg' },
      { name: 'Luminous', logo: '/images/brands/luminous.jpg' },
    ],
  },
  {
    id: 'inverters',
    title: 'Inverters',
    brands: [
      { name: 'Microtek', logo: '/images/brands/microtek.svg' },
      { name: 'Deye', logo: '/images/brands/deye.png' },
      { name: 'UTL', logo: '/images/brands/utl.png' },
      { name: 'Luminous', logo: '/images/brands/luminous.jpg' },
      { name: 'Growatt', logo: '/images/brands/growatt.png' },
    ],
  },
];
