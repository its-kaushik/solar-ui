import type { Metadata } from 'next';
import ServiceAreaPage from '@/components/ServiceAreaPage';
import { getServiceArea } from '@/data/service-areas';

const area = getServiceArea('gurgaon')!;

export const metadata: Metadata = {
  title: area.metaTitle,
  description: area.metaDescription,
  alternates: { canonical: '/service-areas/gurgaon' },
  openGraph: {
    title: `${area.metaTitle} — Raytrix Energy`,
    description: area.metaDescription,
    type: 'website',
    siteName: 'Raytrix Energy',
    locale: 'en_IN',
  },
};

export default function GurgaonPage() {
  return <ServiceAreaPage area={area} />;
}
