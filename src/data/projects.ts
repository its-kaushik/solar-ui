import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Residential 3KW On-Grid System',
    area: 'Greater Kailash, South Delhi',
    systemSize: '3 KW',
    systemType: 'on-grid',
    date: '2026-02-15',
    images: ['/images/projects/placeholder-1.jpg'],
    description:
      'Complete on-grid installation with net metering and PM Surya Ghar subsidy. Customer saving Rs 2,500+ per month.',
  },
  {
    id: '2',
    title: 'Residential 5KW Hybrid System',
    area: 'Saket, South Delhi',
    systemSize: '5 KW',
    systemType: 'hybrid',
    date: '2026-02-20',
    images: ['/images/projects/placeholder-2.jpg'],
    description:
      'Hybrid system with lithium-ion battery backup. Uninterrupted power during outages with net metering benefits.',
  },
  {
    id: '3',
    title: 'Commercial 10KW On-Grid System',
    area: 'Nehru Place, South Delhi',
    systemSize: '10 KW',
    systemType: 'on-grid',
    date: '2026-03-01',
    images: ['/images/projects/placeholder-3.jpg'],
    description:
      'Office building rooftop installation. Significantly reduced electricity costs with accelerated depreciation benefits.',
  },
  {
    id: '4',
    title: 'Residential 2KW On-Grid System',
    area: 'Faridabad, Haryana',
    systemSize: '2 KW',
    systemType: 'on-grid',
    date: '2026-03-10',
    images: ['/images/projects/placeholder-4.jpg'],
    description:
      'Compact rooftop system for a 2BHK home. Customer electricity bill reduced by 80%.',
  },
];
