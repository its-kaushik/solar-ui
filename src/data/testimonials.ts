import { Testimonial } from '@/types';

// Real reviews from the Google Business Profile (5.0 average, 25 reviews).
// Details (system size / area) are only shown where the reviewer actually stated them.
export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Krishan K.',
    area: 'Sangam Vihar, New Delhi',
    systemSize: '3 KW',
    review:
      'We got a 3 KW system installed at our home in Sangam Vihar, New Delhi. Great service, professional team — and we got our subsidy within a month.',
    rating: 5,
    verified: true,
  },
  {
    id: '2',
    name: 'Rakshit G.',
    area: 'South Extension, Delhi',
    systemSize: '4 KW',
    review:
      'Installed a 4 kW solar system at my home in South Extension. Got the subsidy on time — professional service and behaviour.',
    rating: 5,
    verified: true,
  },
  {
    id: '3',
    name: 'Dherya B.',
    area: 'Nirvana Country, Gurgaon',
    systemSize: '5 KW',
    review:
      'Got a 5 kW solar system installed at my house in Nirvana Country, Gurgaon. Extremely professional service, and I got my subsidy within a month.',
    rating: 5,
    verified: true,
  },
  {
    id: '4',
    name: 'Moksh T.',
    area: 'Dera Mandi, Delhi',
    systemSize: '6 KW',
    review:
      'I had a 6 kW installation at my farmhouse in Dera Mandi. The process was smooth and the staff was well-experienced.',
    rating: 5,
    verified: true,
  },
  {
    id: '5',
    name: 'Rishabh M.',
    area: 'Saket, South Delhi',
    review:
      'We got Adani solar panels installed in Saket, and got our subsidy in under a month. Very best! 👍',
    rating: 5,
    verified: true,
  },
  {
    id: '6',
    name: 'Golu P.',
    review:
      'Best service out there. The staff was professional — they took only 3–4 hours to install the solar.',
    rating: 5,
    verified: true,
  },
];
