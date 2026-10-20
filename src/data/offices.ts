export interface Office {
  /** Short label shown above the address, e.g. "Delhi (Registered Office)". */
  label: string;
  city: string;
  streetAddress: string;
  addressLocality: string;
  addressRegion: string;
  postalCode: string;
  /** One-line address for display. */
  fullAddress: string;
  /** Link that opens the office in Google Maps. */
  mapsUrl: string;
  /** Google Maps embed query. */
  mapQuery: string;
}

export const registeredOffice: Office = {
  label: 'Delhi (Registered Office)',
  city: 'Delhi',
  streetAddress: 'A-85/A, Sangam Vihar, Deoli',
  addressLocality: 'New Delhi',
  addressRegion: 'Delhi',
  postalCode: '110062',
  fullAddress: 'A-85/A, Sangam Vihar, Deoli, South Delhi, New Delhi – 110062',
  mapsUrl: 'https://maps.app.goo.gl/Uq22636vrX41PDYP9',
  mapQuery: 'A-85/A, Sangam Vihar, Deoli, New Delhi, 110062',
};

export const faridabadOffice: Office = {
  label: 'Faridabad Office',
  city: 'Faridabad',
  streetAddress: 'A-140, Ground Floor, Ashoka Enclave - 2',
  addressLocality: 'Faridabad',
  addressRegion: 'Haryana',
  postalCode: '121003',
  fullAddress: 'A-140, Ground Floor, Ashoka Enclave - 2, Faridabad, Haryana – 121003',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=A-140%2C+Ashoka+Enclave+2%2C+Faridabad%2C+Haryana+121003',
  mapQuery: 'A-140, Ashoka Enclave 2, Faridabad, Haryana 121003',
};

export const offices: Office[] = [registeredOffice, faridabadOffice];

export function postalAddress(office: Office) {
  return {
    '@type': 'PostalAddress',
    streetAddress: office.streetAddress,
    addressLocality: office.addressLocality,
    addressRegion: office.addressRegion,
    postalCode: office.postalCode,
    addressCountry: 'IN',
  };
}
