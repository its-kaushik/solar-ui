import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: '1',
    title: '3KW Rooftop On-Grid System for a Home',
    area: 'Sector 21, Faridabad',
    systemSize: '3 KW',
    systemType: 'on-grid',
    date: '2026-02-15',
    images: ['/images/projects/placeholder-1.jpg'],
    description:
      'Grid-tied rooftop setup commissioned with DHBVN net metering and the PM Surya Ghar subsidy applied end to end. The household now trims roughly Rs 2,300 off its monthly power bill.',
  },
  {
    id: '2',
    title: '5KW Home Hybrid Solar Setup',
    area: 'Sohna Road, Gurugram',
    systemSize: '5 KW',
    systemType: 'hybrid',
    date: '2026-02-20',
    images: ['/images/projects/placeholder-2.jpg'],
    description:
      'A hybrid configuration paired with lithium-ion storage keeps the home running through power cuts while still exporting surplus units under net metering.',
  },
  {
    id: '3',
    title: '10KW Commercial Grid-Tied Installation',
    area: 'Palwal',
    systemSize: '10 KW',
    systemType: 'on-grid',
    date: '2026-03-01',
    images: ['/images/projects/placeholder-3.jpg'],
    description:
      'Rooftop array installed atop a commercial premises, sharply cutting monthly running costs while the business claims accelerated depreciation on the asset.',
  },
  {
    id: '4',
    title: '2KW Compact On-Grid System',
    area: 'Ballabgarh, Faridabad',
    systemSize: '2 KW',
    systemType: 'on-grid',
    date: '2026-03-10',
    images: ['/images/projects/placeholder-4.jpg'],
    description:
      'A small-footprint rooftop solution sized for a 2BHK family home that brought the electricity bill down by close to 80 percent.',
  },
];
