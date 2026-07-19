export interface ServiceAreaFAQ {
  q: string;
  a: string;
}

export interface ServiceArea {
  slug: string;
  city: string;
  state: string;
  discomShort: string;
  discomFull: string;
  metaTitle: string;
  metaDescription: string;
  heroSubtitle: string;
  /** Maximum central subsidy shown on the page, e.g. "₹78,000". */
  subsidyMax: string;
  /** Localities used to match projects/testimonials is done by city name; these are for display. */
  localities: string[];
  /** "Solar in {city}" body paragraphs. */
  intro: string[];
  /** Subsidy explanation paragraphs. */
  subsidyNote: string[];
  /** Google Maps embed query. */
  mapQuery: string;
  faqs: ServiceAreaFAQ[];
}

export const serviceAreas: ServiceArea[] = [
  {
    slug: 'faridabad',
    city: 'Faridabad',
    state: 'Haryana',
    discomShort: 'DHBVN',
    discomFull: 'Dakshin Haryana Bijli Vitran Nigam (DHBVN)',
    metaTitle: 'Solar Panel Installation in Faridabad',
    metaDescription:
      'Rooftop solar installation in Faridabad with up to ₹78,000 PM Surya Ghar subsidy. We handle DHBVN net metering, paperwork, and end-to-end installation. Free site survey.',
    heroSubtitle:
      'Rooftop solar for Faridabad homes with up to ₹78,000 central subsidy — we handle your DHBVN net metering, PM Surya Ghar application, and installation end to end.',
    subsidyMax: '₹78,000',
    localities: [
      'NIT Faridabad',
      'Greater Faridabad (Neharpar)',
      'Sectors 15–89',
      'Ballabgarh',
      'Surajkund',
      'Old Faridabad',
    ],
    intro: [
      "Faridabad's electricity bills climb every summer as cooling load peaks, and with so many independent houses and multi-storey homes across the city, rooftop solar is one of the most effective ways to bring those bills down. Raytrix Energy installs grid-connected rooftop solar across Faridabad — from NIT Faridabad and the older sectors to Greater Faridabad (Neharpar), Ballabgarh, and Surajkund.",
      'Because Faridabad falls under Dakshin Haryana Bijli Vitran Nigam (DHBVN) rather than Delhi’s BSES, net metering and approvals are processed through DHBVN. We know the DHBVN application flow and manage the feasibility approval, bi-directional meter change, and inspection on your behalf — so you never have to navigate the DISCOM yourself.',
      'A typical Faridabad home installs a 2–5 kW system. At roughly 4 units per day for every 1 kW, a 3 kW system generates about 360 units a month — enough to offset most of a mid-sized household’s consumption, with surplus units exported to the grid and credited on your DHBVN bill through net metering.',
    ],
    subsidyNote: [
      'Faridabad homeowners are eligible for the central PM Surya Ghar Muft Bijli Yojana subsidy of up to ₹78,000 for a 3 kW or larger residential system — ₹30,000 per kW for the first 2 kW plus ₹18,000 for the third kW. This is a national scheme and applies in Haryana exactly as it does elsewhere in India; the application is filed on the national portal with DHBVN as your DISCOM.',
      'One honest clarification: the additional Delhi state subsidy (₹30,000) and the Delhi Generation-Based Incentive are specific to Delhi (BSES) connections and do not apply in Haryana. So a Faridabad system qualifies for the ₹78,000 central subsidy rather than the ₹1,08,000 combined figure quoted for Delhi. We confirm the exact amount for your system upfront — no surprises.',
    ],
    mapQuery: 'Faridabad, Haryana',
    faqs: [
      {
        q: 'Do I get a solar subsidy in Faridabad?',
        a: 'Yes. Faridabad homes qualify for the central PM Surya Ghar subsidy of up to ₹78,000 for a 3 kW or larger residential system. The Delhi state subsidy and GBI are Delhi-only, so they do not apply here — your benefit is the ₹78,000 central subsidy.',
      },
      {
        q: 'Which DISCOM handles net metering in Faridabad?',
        a: 'Faridabad is served by Dakshin Haryana Bijli Vitran Nigam (DHBVN). Your net-metering feasibility approval, bi-directional meter, and inspection are all processed through DHBVN, and we manage that paperwork for you.',
      },
      {
        q: 'How much does a solar system cost in Faridabad?',
        a: 'It depends on your roof, system size, and component choices, so we give you an exact quote after a free site survey. The ₹78,000 central subsidy offsets a significant part of the cost, and we can help arrange a solar loan for the balance.',
      },
      {
        q: 'Which areas of Faridabad do you cover?',
        a: 'We install across Faridabad, including NIT Faridabad, Greater Faridabad (Neharpar), Sectors 15–89, Ballabgarh, Surajkund, and Old Faridabad. If you are unsure about your area, send us your location on WhatsApp and we will confirm.',
      },
      {
        q: 'How long does the whole process take?',
        a: 'The physical installation usually takes 1–2 days. Net metering and DHBVN approval typically follow over a few weeks, and the PM Surya Ghar subsidy is credited to your bank account roughly 60–90 days after commissioning.',
      },
    ],
  },
  {
    slug: 'gurgaon',
    city: 'Gurgaon',
    state: 'Haryana',
    discomShort: 'DHBVN',
    discomFull: 'Dakshin Haryana Bijli Vitran Nigam (DHBVN)',
    metaTitle: 'Solar Panel Installation in Gurgaon (Gurugram)',
    metaDescription:
      'Rooftop solar installation in Gurgaon (Gurugram) with up to ₹78,000 PM Surya Ghar subsidy. DHBVN net metering, paperwork, and end-to-end installation. Free site survey.',
    heroSubtitle:
      'Rooftop solar for Gurgaon (Gurugram) homes with up to ₹78,000 central subsidy — DHBVN net metering, PM Surya Ghar paperwork, and installation handled end to end.',
    subsidyMax: '₹78,000',
    localities: [
      'DLF Phases 1–5',
      'Sushant Lok',
      'Nirvana Country',
      'South City',
      'Sohna Road',
      'Golf Course Road',
      'Palam Vihar',
      'New Gurgaon sectors',
    ],
    intro: [
      'Gurgaon has some of the highest household electricity bills in the NCR, driven by year-round cooling load across its builder floors, independent floors, and villas. Rooftop solar pays back quickly here, and Raytrix Energy installs across Gurugram — DLF phases, Sushant Lok, Nirvana Country, South City, Sohna Road, Golf Course Road, Palam Vihar, and the New Gurgaon sectors.',
      'Gurgaon is served by Dakshin Haryana Bijli Vitran Nigam (DHBVN), so net metering and approvals go through DHBVN rather than Delhi’s BSES. We manage the DHBVN feasibility approval, bi-directional meter installation, and inspection for you as part of a fully managed, end-to-end installation.',
      'Independent floors and villas in Gurgaon typically install 3–6 kW systems. One of our customers in Nirvana Country installed a 5 kW system and received the subsidy within a month — the kind of turnaround we aim for on every project.',
    ],
    subsidyNote: [
      'Gurgaon homeowners are eligible for the central PM Surya Ghar Muft Bijli Yojana subsidy of up to ₹78,000 for a 3 kW or larger residential system — ₹30,000 per kW for the first 2 kW plus ₹18,000 for the third kW. It is a national scheme, filed on the national portal with DHBVN as your DISCOM, and applies in Haryana just as it does across India.',
      'To be clear: because Gurgaon is in Haryana and not on the Delhi BSES grid, the extra Delhi state subsidy and the Delhi GBI do not apply — your system qualifies for the ₹78,000 central subsidy, not the ₹1,08,000 Delhi figure. We confirm the exact amount for your roof before you commit.',
    ],
    mapQuery: 'Gurgaon, Haryana',
    faqs: [
      {
        q: 'Do I get a solar subsidy in Gurgaon?',
        a: 'Yes. Gurgaon (Gurugram) homes qualify for the central PM Surya Ghar subsidy of up to ₹78,000 for a 3 kW or larger residential system. The Delhi state subsidy and GBI are Delhi-only and do not apply in Haryana, so your benefit is the ₹78,000 central subsidy.',
      },
      {
        q: 'Which DISCOM handles net metering in Gurgaon?',
        a: 'Gurgaon is served by Dakshin Haryana Bijli Vitran Nigam (DHBVN). The net-metering feasibility approval, bi-directional meter, and inspection are processed through DHBVN, and we handle that paperwork for you.',
      },
      {
        q: 'How much does a solar system cost in Gurgaon?',
        a: 'Cost depends on your roof, system size, and components, so we provide an exact quote after a free site survey. The ₹78,000 central subsidy covers a significant share, and we can help arrange a solar loan for the balance.',
      },
      {
        q: 'Which areas of Gurgaon do you cover?',
        a: 'We install across Gurugram — including DLF phases, Sushant Lok, Nirvana Country, South City, Sohna Road, Golf Course Road, Palam Vihar, and the New Gurgaon sectors. Share your location on WhatsApp and we will confirm coverage for your address.',
      },
      {
        q: 'How long does the whole process take?',
        a: 'Installation itself is usually 1–2 days. Net metering and DHBVN approval follow over a few weeks, and the PM Surya Ghar subsidy is credited to your bank account roughly 60–90 days after commissioning.',
      },
    ],
  },
];

export function getServiceArea(slug: string): ServiceArea | undefined {
  return serviceAreas.find((a) => a.slug === slug);
}
