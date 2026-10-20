import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Solar Savings Calculator',
  description:
    'Calculate how much you can save with rooftop solar in Delhi. Get instant estimates for system size, subsidies, savings, and payback period.',
  openGraph: {
    title: 'Solar Savings Calculator — Raytrix Energy',
    description:
      'Calculate how much you can save with rooftop solar in Delhi. Get instant estimates for system size, subsidies, savings, and payback period.',
    type: 'website',
    siteName: 'Raytrix Energy',
    locale: 'en_IN',
  },
};

export default function SolarCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
