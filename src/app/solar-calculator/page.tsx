import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import SolarCalculatorClient from '@/components/SolarCalculatorClient';

export const metadata: Metadata = {
  title: 'Solar Savings Calculator',
  description:
    'Calculate your rooftop solar savings in Delhi. Get instant estimates for system size, cost, government subsidies (PM Surya Ghar + Delhi state), and 25-year savings.',
};

export default function SolarCalculatorPage() {
  return (
    <>
      <section className="bg-primary py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Solar Calculator' }]} />
          <h1 className="font-heading text-3xl font-bold text-text-inverse sm:text-4xl">
            Solar Savings Calculator
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-base text-gray-300 sm:text-lg">
            Find out how much you can save with rooftop solar — including government subsidies.
          </p>
        </div>
      </section>

      <SolarCalculatorClient />
    </>
  );
}
