import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Solar Savings Calculator',
  description:
    'Calculate how much you can save with rooftop solar in Delhi. Get instant estimates for system size, cost, subsidies, and payback period.',
};

export default function SolarCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
