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
    'Home rooftop solar across Faridabad, Palwal & Gurugram. On-Grid, Off-Grid and Hybrid systems with DHBVN net metering. Claim up to Rs 78,000 under PM Surya Ghar. Book a free survey.',
};

const systemTypes = [
  {
    name: 'On-Grid',
    description: 'Tied directly into the DHBVN grid through net metering. Whatever your panels produce beyond what you use flows back to the grid and is credited against your monthly bill.',
    subsidy: 'Yes — qualifies for the PM Surya Ghar central subsidy',
    bestFor: 'Households with a steady DHBVN supply',
    icon: Zap,
  },
  {
    name: 'Off-Grid',
    description: 'A self-contained setup paired with lithium-ion storage and no grid link. Your home keeps running on stored power even when the supply drops.',
    subsidy: 'Not applicable',
    bestFor: 'Locations with patchy supply or no grid reach',
    icon: BatteryCharging,
  },
  {
    name: 'Hybrid',
    description: 'A grid-tied system that also carries battery backup — you keep the net-metering credits while staying powered through outages.',
    subsidy: 'Varies with the chosen configuration',
    bestFor: 'Homes that want bill savings and backup together',
    icon: Cable,
  },
];

const equipment = [
  { label: 'Solar Panels', value: 'Adani Solar, Vikram Solar' },
  { label: 'Inverters', value: 'String, micro, and hybrid options' },
  { label: 'Batteries', value: 'Lithium-ion (for Off-Grid & Hybrid)' },
  { label: 'Safety', value: 'DC & AC surge protection, lightning arrestor, earthing' },
  { label: 'Structure', value: 'Galvanized mounting frame built to your roof' },
  { label: 'Metering', value: 'DHBVN net meter (On-Grid & Hybrid)' },
];

const installationScope = [
  'On-site survey and rooftop evaluation',
  'System sizing and panel layout planning',
  'Erection of the mounting structure',
  'Mounting and wiring of the solar modules',
  'Inverter setup with DC and AC surge protection',
  'Earthing and lightning protection installation',
  'DHBVN net meter fitting',
  'Grid sync and DHBVN liaison',
  'End-to-end help with subsidy documentation',
];

const warranties = [
  { component: 'Solar Panels', duration: '25-year performance warranty', provider: 'Manufacturer' },
  { component: 'Inverters', duration: '5 to 10-year warranty', provider: 'Manufacturer' },
  { component: 'Batteries', duration: '5 to 10-year warranty', provider: 'Manufacturer' },
  { component: 'Mounting Structure', duration: '10-year warranty', provider: 'Manufacturer' },
  { component: 'Workmanship', duration: '5 years of free maintenance (3 visits a year)', provider: 'RS Solar Infrastructure' },
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
            provider: { '@type': 'Organization', name: 'RS Solar Infrastructure Private Limited' },
            areaServed: ['Faridabad', 'Palwal', 'Gurugram'],
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
            Run your home on clean solar across South Haryana and claim up to Rs 78,000 in central subsidy.
          </p>
        </div>
      </section>

      {/* System Types */}
      <SectionWrapper>
        <SectionHeading
          title="Pick the Right System for Your Home"
          subtitle="On-Grid, Off-Grid, and Hybrid setups, all installed for residential rooftops."
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
          title="The Components We Install"
          subtitle="Reliable, well-known brands chosen for long-term performance."
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
          title="Everything We Handle for You"
          subtitle="A complete turnkey EPC service from survey to switch-on."
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
          title="Warranties & Upkeep"
          subtitle="Years of cover so your investment stays protected."
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
            The precise warranty term for your inverter and battery varies by the make and model you choose. We will spell these out when we send your quote.
          </p>
        </div>
      </SectionWrapper>

      {/* Subsidy Callout */}
      <SectionWrapper>
        <div className="mx-auto max-w-3xl rounded-2xl bg-secondary/10 p-6 text-center sm:p-8">
          <Shield className="mx-auto h-10 w-10 text-secondary" />
          <h2 className="mt-3 font-heading text-xl font-bold text-text sm:text-2xl">
            You Qualify for Government Support
          </h2>
          <p className="mt-2 text-sm text-text-light sm:text-base">
            Home on-grid systems across South Haryana can draw up to{' '}
            <span className="font-bold text-primary">Rs 78,000</span> under the central PM Surya Ghar scheme.
            Our team files the entire application for you, start to finish.
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
            q: 'What does a home rooftop system cost in Faridabad, Palwal or Gurugram?',
            a: 'Expect roughly Rs 1.8–2.2 lakh for a 3KW on-grid system before any subsidy. Once the PM Surya Ghar central subsidy of up to Rs 78,000 is applied, your net outlay usually lands somewhere between Rs 1 lakh and Rs 1.45 lakh.',
          },
          {
            q: 'How much power will a home solar system actually produce?',
            a: 'Across South Haryana, each kilowatt yields close to 120 units a month, roughly 4 units a day. So a 3KW array generates around 360 units monthly, which covers the needs of a typical family home.',
          },
          {
            q: 'How do On-Grid, Off-Grid and Hybrid systems differ?',
            a: 'On-Grid links to the DHBVN network for net metering and the central subsidy. Off-Grid runs on its own battery bank, fully independent of the grid. Hybrid blends the two, staying grid-connected while holding battery reserves for outages.',
          },
          {
            q: 'Will the panels still work in the monsoon or under cloud cover?',
            a: 'They do keep generating on overcast days, just at a lower level — typically 30 to 50 percent of peak. The yearly generation figures we quote already factor in the monsoon season.',
          },
          {
            q: 'What is the working life of a solar system?',
            a: 'Panels carry a 25-year performance warranty and frequently run well past 30 years, while inverters generally serve 10 to 15 years. Every install from us also includes 5 years of free maintenance.',
          },
        ]}
      />

      {/* CTA */}
      <SectionWrapper className="bg-bg-white">
        <div className="text-center">
          <h2 className="font-heading text-2xl font-bold text-text sm:text-3xl">
            Ready to Make the Switch?
          </h2>
          <p className="mt-2 text-text-light">
            Book a no-cost rooftop survey and a quote built around your home.
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
