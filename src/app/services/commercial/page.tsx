import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQSection from '@/components/FAQSection';
import {
  TrendingDown,
  Receipt,
  Leaf,
  Building2,
  Zap,
  IndianRupee,
  CheckCircle,
  MapPin,
} from 'lucide-react';
import SectionWrapper from '@/components/SectionWrapper';
import SectionHeading from '@/components/SectionHeading';
import CTAButton from '@/components/CTAButton';

export const metadata: Metadata = {
  title: 'Commercial Solar Installation',
  description:
    'Rooftop solar for offices, factories and housing societies across Faridabad, Palwal and Gurugram. Slash power bills, claim accelerated depreciation, and save through DHBVN net metering.',
};

const benefits = [
  {
    icon: TrendingDown,
    title: 'Lower Your Power Bills',
    description: 'Rooftop solar can trim your monthly electricity spend by 50 to 90 percent. The more units you draw today, the bigger the saving tomorrow.',
  },
  {
    icon: Receipt,
    title: 'Accelerated Depreciation',
    description: 'Commercial solar assets qualify for 40 percent accelerated depreciation, letting your business write down the investment quickly and cut its tax bill.',
  },
  {
    icon: IndianRupee,
    title: 'DHBVN Net-Metering Savings',
    description: 'Surplus generation is exported to the DHBVN grid and credited against your bill, turning unused daytime power into ongoing rupee savings.',
  },
  {
    icon: Leaf,
    title: 'A Greener Brand',
    description: 'Show customers and partners you take sustainability seriously by shrinking your carbon footprint and strengthening your reputation.',
  },
];

const segments = [
  'Corporate and office buildings',
  'Manufacturing plants and industrial units',
  'Warehouses and logistics hubs',
  'Residential societies (group net metering)',
  'Schools, colleges and institutes',
  'Hospitals, clinics and nursing homes',
  'Hotels, banquets and restaurants',
  'Showrooms, shops and malls',
];

const serviceAreas = [
  { area: 'Faridabad', note: 'DHBVN net metering' },
  { area: 'Palwal', note: 'DHBVN net metering' },
  { area: 'Gurugram', note: 'DHBVN net metering' },
];

export default function CommercialSolarPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Commercial Solar Installation',
            provider: { '@type': 'Organization', name: 'RS Solar Infrastructure Private Limited' },
            areaServed: ['Faridabad', 'Palwal', 'Gurugram'],
            serviceType: 'Commercial Solar Panel Installation',
          }),
        }}
      />

      <section className="bg-primary py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Services' }, { label: 'Commercial Solar' }]} />
          <h1 className="font-heading text-3xl font-bold text-text-inverse sm:text-4xl">
            Commercial Solar Installation
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-base text-gray-300 sm:text-lg">
            Scalable rooftop solar for South Haryana businesses. Cut costs, claim tax benefits, go green.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <SectionWrapper>
        <SectionHeading
          title="Why Businesses Choose Solar"
          subtitle="It is not only the sustainable choice — it is a sound financial one."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {benefits.map((b) => (
            <div key={b.title} className="rounded-2xl bg-bg-white p-6 shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <b.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-bold text-text">{b.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-light">{b.description}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* System Sizes */}
      <SectionWrapper className="bg-bg-white">
        <SectionHeading
          title="System Capacities"
          subtitle="From a compact office array to a sprawling factory rooftop, we size it to fit."
        />
        <div className="mx-auto max-w-3xl">
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { range: '1 - 10 KW', label: 'Small Office', icon: Building2 },
              { range: '10 - 50 KW', label: 'Medium Business', icon: Building2 },
              { range: '50+ KW', label: 'Large Commercial', icon: Building2 },
            ].map((size) => (
              <div key={size.range} className="rounded-2xl bg-bg p-5 text-center">
                <size.icon className="mx-auto h-8 w-8 text-primary" />
                <p className="mt-3 font-heading text-xl font-bold text-text">{size.range}</p>
                <p className="text-sm text-text-light">{size.label}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-center text-sm text-text-light">
            There is no ceiling on capacity. Every system is engineered around your available roof area and how much power you actually use.
          </p>
        </div>
      </SectionWrapper>

      {/* Segments */}
      <SectionWrapper>
        <SectionHeading
          title="Who We Work With"
          subtitle="Rooftop solar suits virtually every kind of commercial premises."
        />
        <div className="mx-auto max-w-2xl">
          <div className="grid gap-3 sm:grid-cols-2">
            {segments.map((seg) => (
              <div key={seg} className="flex items-center gap-3 rounded-xl bg-bg-white p-4 shadow-sm">
                <CheckCircle className="h-5 w-5 flex-shrink-0 text-accent" />
                <span className="text-sm text-text">{seg}</span>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Net Metering & Depreciation */}
      <SectionWrapper className="bg-bg-white">
        <SectionHeading title="Net Metering & Tax Benefits" />
        <div className="mx-auto max-w-3xl">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl bg-bg p-6">
              <Zap className="h-8 w-8 text-secondary" />
              <h3 className="mt-3 font-heading text-lg font-bold text-text">DHBVN Net Metering</h3>
              <p className="mt-2 text-sm text-text-light">
                Any solar power you do not use flows to the DHBVN grid and is set off against your bill.
                On high-generation days your meter effectively winds back as exports outpace imports.
              </p>
            </div>
            <div className="rounded-2xl bg-bg p-6">
              <IndianRupee className="h-8 w-8 text-accent" />
              <h3 className="mt-3 font-heading text-lg font-bold text-text">Accelerated Depreciation</h3>
              <p className="mt-2 text-sm text-text-light">
                Businesses can claim 40 percent accelerated depreciation on the solar asset in year one,
                lowering taxable income. Paired with net-metering credits, this sharpens your overall returns.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Financing */}
      <SectionWrapper>
        <div className="mx-auto max-w-3xl rounded-2xl bg-primary/5 p-6 text-center sm:p-8">
          <IndianRupee className="mx-auto h-10 w-10 text-primary" />
          <h2 className="mt-3 font-heading text-xl font-bold text-text sm:text-2xl">
            Financing & Loan Support
          </h2>
          <p className="mt-2 text-sm text-text-light sm:text-base">
            We guide commercial clients through the solar loan process so you can get started with
            little money down. Over time, the savings on your power bills cover the cost of the system.
          </p>
        </div>
      </SectionWrapper>

      {/* Service Areas */}
      <SectionWrapper className="bg-bg-white">
        <SectionHeading title="Service Areas" />
        <div className="mx-auto max-w-2xl space-y-3">
          {serviceAreas.map((sa) => (
            <div key={sa.area} className="flex items-center justify-between rounded-xl bg-bg p-4">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="font-heading font-bold text-text">{sa.area}</span>
              </div>
              <span className="text-sm text-text-light">{sa.note}</span>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <FAQSection
        faqs={[
          {
            q: 'How quickly does a commercial solar system pay back?',
            a: 'For most businesses the payback period runs about 3 to 4 years on the strength of bill savings alone. Add 40 percent accelerated depreciation and DHBVN net-metering credits and the returns arrive sooner still. Once recovered, you enjoy 20-plus years of near-free generation.',
          },
          {
            q: 'Can a residential society put solar on its rooftops?',
            a: 'Absolutely. A society can install solar over its common areas to offset shared electricity charges, wired into the society meter under DHBVN net metering. Residential societies may also tap the PM Surya Ghar central subsidy where eligible.',
          },
          {
            q: 'Which tax advantages apply to commercial solar?',
            a: 'A firm can claim 40 percent accelerated depreciation on the solar asset in the very first year, meaningfully reducing taxable profit. Input credit on GST paid for the system is available too.',
          },
          {
            q: 'How much rooftop area does a commercial system need?',
            a: 'Plan for roughly 100 sq ft of shade-free roof per kilowatt, so a 10KW array calls for about 1,000 sq ft. Our free site visit measures exactly how much usable space your roof offers.',
          },
        ]}
      />

      {/* CTA */}
      <SectionWrapper>
        <div className="text-center">
          <h2 className="font-heading text-2xl font-bold text-text sm:text-3xl">
            Request a Tailored Assessment
          </h2>
          <p className="mt-2 text-text-light">
            No two commercial sites are alike. Reach out for a free survey and a quote shaped to your premises.
          </p>
          <div className="mt-6">
            <CTAButton text="Contact Us for Assessment" href="/contact" />
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
