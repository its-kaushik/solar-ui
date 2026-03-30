import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloatingButton from '@/components/WhatsAppFloatingButton';
import MobileCTABar from '@/components/MobileCTABar';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: '--font-plus-jakarta-sans',
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.raytrixenergy.com'),
  title: {
    default: 'Raytrix Energy — Rooftop Solar Installation in Delhi',
    template: '%s — Raytrix Energy',
  },
  description:
    'Get rooftop solar panels installed in Delhi with up to ₹1,08,000 government subsidy. BSES registered. Free consultation & 5 years maintenance.',
  openGraph: {
    title: 'Raytrix Energy — Rooftop Solar Installation in Delhi',
    description:
      'Get rooftop solar panels installed in Delhi with up to ₹1,08,000 government subsidy.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Raytrix Energy',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@raytrixenergy',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable}`}>
      <body className="font-body antialiased">
        <GoogleAnalytics />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloatingButton />
        <MobileCTABar />
      </body>
    </html>
  );
}
