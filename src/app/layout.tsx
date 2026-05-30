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
  metadataBase: new URL('https://www.rssolarinfrastructure.com'),
  title: {
    default: 'RS Solar Infrastructure — Rooftop Solar Installation in Faridabad, Palwal & Gurugram',
    template: '%s — RS Solar Infrastructure',
  },
  description:
    'Rooftop solar installation across Faridabad, Palwal, and Gurugram with up to ₹78,000 PM Surya Ghar subsidy. DHBVN net-metering specialists. Free consultation & 5 years maintenance.',
  openGraph: {
    title: 'RS Solar Infrastructure — Rooftop Solar Installation in South Haryana',
    description:
      'Rooftop solar for homes and businesses in Faridabad, Palwal, and Gurugram with up to ₹78,000 PM Surya Ghar subsidy.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'RS Solar Infrastructure',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@rssolarinfra',
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
