import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQSection from '@/components/FAQSection';
import {
  Zap,
  BatteryCharging,
  Cable,
  Shield,
  ArrowRight,
  CheckCircle,
} from 'lucide-react';
import SectionWrapper from '@/components/SectionWrapper';
import SectionHeading from '@/components/SectionHeading';
import CTAButton from '@/components/CTAButton';

export const metadata: Metadata = {
  title: 'Residential Solar Installation',
  description:
    'Get rooftop solar panels installed at your home in Delhi. On-Grid, Off-Grid & Hybrid systems. Up to Rs 1,08,000 subsidy under PM Surya Ghar Yojana. Free consultation.',
};

const systemTypes = [
  {
    name: 'On-Grid',
    description: 'Connected to the electricity grid via net metering. Excess power is exported to the grid and adjusted against your bill.',
    subsidy: 'Yes — eligible for PM Surya Ghar & Delhi state subsidy',
    bestFor: 'Most homes with reliable grid supply',
    icon: Zap,
  },
  {
    name: 'Off-Grid',
    description: 'Standalone system with lithium-ion battery storage. No grid connection. Power available even during outages.',
    subsidy: 'No',
    bestFor: 'Areas with unreliable power or no grid access',
    icon: BatteryCharging,
  },
  {
    name: 'Hybrid',
    description: 'Grid-connected with battery backup. Net metering benefits plus uninterrupted power during outages.',
    subsidy: 'Depends on configuration',
    bestFor: 'Homes wanting both grid savings and backup',
    icon: Cable,
  },
];

const equipment = [
  { label: 'Solar Panels', value: 'Adani Solar, Vikram Solar' },
  { label: 'Inverters', value: 'String, Micro, and Hybrid inverters' },
  { label: 'Batteries', value: 'Lithium-ion (Off-Grid & Hybrid)' },
  { label: 'Safety', value: 'DC SPD, AC SPD, Lightning arrestor, Earthing' },
  { label: 'Structure', value: 'Custom galvanized mounting frame' },
  { label: 'Metering', value: 'Net meter installation (On-Grid & Hybrid)' },
];

const installationScope = [
  'Site survey and roof assessment',
  'System design and panel layout',
  'Mounting structure installation',
  'Solar panel installation',
  'Inverter installation with DC & AC SPD',
  'Lightning arrestor and earthing system',
  'Net meter installation',
  'Grid synchronization and DISCOM coordination',
  'Complete subsidy paperwork assistance',
];

const warranties = [
  { component: 'Solar Panels', duration: '25-year performance warranty', provider: 'Manufacturer' },
  { component: 'Inverters', duration: '5 to 10-year warranty', provider: 'Manufacturer' },
  { component: 'Batteries', duration: '5 to 10-year warranty', provider: 'Manufacturer' },
  { component: 'Mounting Structure', duration: '10-year warranty', provider: 'Manufacturer' },
  { component: 'Workmanship', duration: '5-year free maintenance (3 visits/year)', provider: 'Raytrix Energy' },
];

export default function ResidentialSolarPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Residential Solar Installation',
            provider: { '@type': 'Organization', name: 'Raytrix Energy (OPC) Private Limited' },
            areaServed: ['Delhi', 'Faridabad', 'Gurgaon'],
            serviceType: 'Solar Panel Installation',
          }),
        }}
      />

      {/* Page Header */}
      <section className="bg-primary py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Services' }, { label: 'Residential Solar' }]} />
          <h1 className="font-heading text-3xl font-bold text-text-inverse sm:text-4xl">
            Residential Solar Installation
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-base text-gray-300 sm:text-lg">
            Power your home with clean solar energy. Get up to Rs 1,08,000 in government subsidies.
          </p>
        </div>
      </section>

      {/* System Types */}
      <SectionWrapper>
        <SectionHeading
          title="Choose Your System Type"
          subtitle="We install On-Grid, Off-Grid, and Hybrid solar systems for homes."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {systemTypes.map((sys) => (
            <div key={sys.name} className="rounded-2xl bg-bg-white p-6 shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <sys.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-bold text-text">{sys.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-light">{sys.description}</p>
              <div className="mt-4 space-y-2 text-sm">
                <p>
                  <span className="font-semibold text-text">Subsidy:</span>{' '}
                  <span className="text-text-light">{sys.subsidy}</span>
                </p>
                <p>
                  <span className="font-semibold text-text">Best for:</span>{' '}
                  <span className="text-text-light">{sys.bestFor}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Equipment */}
      <SectionWrapper className="bg-bg-white">
        <SectionHeading
          title="Equipment We Use"
          subtitle="Top-tier components from trusted manufacturers."
        />
        <div className="mx-auto max-w-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-3 pr-4 font-heading font-bold text-text">Component</th>
                  <th className="py-3 font-heading font-bold text-text">Details</th>
                </tr>
              </thead>
              <tbody>
                {equipment.map((item) => (
                  <tr key={item.label} className="border-b border-gray-100">
                    <td className="py-3 pr-4 font-medium text-text">{item.label}</td>
                    <td className="py-3 text-text-light">{item.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </SectionWrapper>

      {/* Installation Scope */}
      <SectionWrapper>
        <SectionHeading
          title="What&apos;s Included"
          subtitle="End-to-end EPC — we handle everything."
        />
        <div className="mx-auto max-w-2xl">
          <div className="space-y-3">
            {installationScope.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-xl bg-bg-white p-4 shadow-sm">
                <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                <span className="text-sm text-text">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Warranty */}
      <SectionWrapper className="bg-bg-white">
        <SectionHeading
          title="Warranties & Maintenance"
          subtitle="Long-term protection for your investment."
        />
        <div className="mx-auto max-w-3xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-3 pr-4 font-heading font-bold text-text">Component</th>
                  <th className="py-3 pr-4 font-heading font-bold text-text">Warranty</th>
                  <th className="py-3 font-heading font-bold text-text">Provider</th>
                </tr>
              </thead>
              <tbody>
                {warranties.map((w) => (
                  <tr key={w.component} className="border-b border-gray-100">
                    <td className="py-3 pr-4 font-medium text-text">{w.component}</td>
                    <td className="py-3 pr-4 text-text-light">{w.duration}</td>
                    <td className="py-3 text-text-light">{w.provider}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-text-light">
            Exact warranty durations for inverters and batteries depend on the specific make/model selected. Details will be shared during the quotation stage.
          </p>
        </div>
      </SectionWrapper>

      {/* Subsidy Callout */}
      <SectionWrapper>
        <div className="mx-auto max-w-3xl rounded-2xl bg-secondary/10 p-6 text-center sm:p-8">
          <Shield className="mx-auto h-10 w-10 text-secondary" />
          <h2 className="mt-3 font-heading text-xl font-bold text-text sm:text-2xl">
            Eligible for Government Subsidy
          </h2>
          <p className="mt-2 text-sm text-text-light sm:text-base">
            Residential on-grid systems in Delhi are eligible for up to{' '}
            <span className="font-bold text-primary">Rs 1,08,000</span> in combined central and state subsidies.
            We handle the complete application process on your behalf.
          </p>
          <div className="mt-4">
            <Link
              href="/subsidy-guide"
              className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary-light"
            >
              Read the Complete Subsidy Guide
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </SectionWrapper>

      <FAQSection
        faqs={[
          {
            q: 'How much does rooftop solar cost for a home in Delhi?',
            a: 'A 3KW on-grid system typically costs Rs 1.8–2.2 lakh before subsidy. After the combined central and Delhi state subsidy of up to Rs 1,08,000, your effective cost can be as low as Rs 70,000–1,10,000.',
          },
          {
            q: 'How much electricity can a residential solar system generate?',
            a: 'In Delhi, 1 KW of solar generates approximately 120 units per month (about 4 units/day). A 3KW system produces around 360 units/month, enough for most households.',
          },
          {
            q: 'What is the difference between On-Grid, Off-Grid, and Hybrid solar?',
            a: 'On-Grid connects to the DISCOM grid and qualifies for net metering and subsidies. Off-Grid uses batteries and works independently. Hybrid combines both — grid-connected with battery backup for power cuts.',
          },
          {
            q: 'Do solar panels work during monsoon or cloudy weather?',
            a: 'Yes, solar panels generate electricity even on cloudy days, though at reduced capacity (about 30–50% of peak output). Annual averages already account for monsoon months.',
          },
          {
            q: 'How long do solar panels last?',
            a: 'Solar panels come with a 25-year performance warranty and can last 30+ years. Inverters typically last 10–15 years. We provide 5 years of free maintenance with every installation.',
          },
        ]}
      />

      {/* CTA */}
      <SectionWrapper className="bg-bg-white">
        <div className="text-center">
          <h2 className="font-heading text-2xl font-bold text-text sm:text-3xl">
            Ready to Go Solar?
          </h2>
          <p className="mt-2 text-text-light">
            Get a free site survey and customized quote for your home.
          </p>
          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <CTAButton text="Get a Free Quote" href="/contact" />
            <CTAButton text="Calculate Your Savings" href="/solar-calculator" variant="outline" />
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
