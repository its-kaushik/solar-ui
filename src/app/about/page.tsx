import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import {
  Shield,
  Award,
  Target,
  Eye,
  Heart,
  Sparkles,
  Lightbulb,
  Leaf,
  MapPin,
  BadgeCheck,
} from 'lucide-react';
import SectionWrapper from '@/components/SectionWrapper';
import SectionHeading from '@/components/SectionHeading';
import CTAButton from '@/components/CTAButton';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Get to know RS Solar Infrastructure Private Limited — a South Haryana solar installer registered with DHBVN and enrolled with MNRE. Our mission, values, and credentials.',
};

const values = [
  {
    icon: Sparkles,
    title: 'Quality First',
    description: 'Every project uses premium-grade panels and inverters from established names such as Adani and Vikram Solar.',
  },
  {
    icon: Eye,
    title: 'Transparency',
    description: 'What we quote is what you pay. Each cost, step, and timeline is spelled out clearly before work begins.',
  },
  {
    icon: Heart,
    title: 'Customer First',
    description: 'We stay by your side from the first survey through to subsidy credit — backed by five years of free maintenance.',
  },
  {
    icon: Leaf,
    title: 'Sustainability',
    description: 'Each rooftop we power up trims carbon emissions and moves South Haryana toward cleaner air.',
  },
];

const credentials = [
  { icon: BadgeCheck, label: 'DHBVN DISCOM — Registered Vendor' },
  { icon: Award, label: 'MNRE — Enrolled' },
  { icon: Shield, label: 'PM Surya Ghar Yojana — Empaneled' },
  { icon: BadgeCheck, label: 'Company CIN — Registered Pvt Ltd' },
  { icon: BadgeCheck, label: 'GST Registered' },
  { icon: BadgeCheck, label: 'MSME Registered' },
];

const serviceAreas = [
  { area: 'Faridabad', type: 'Subsidy + non-subsidy projects', highlight: true },
  { area: 'Palwal', type: 'Subsidy + non-subsidy projects', highlight: true },
  { area: 'Gurugram', type: 'Subsidy + non-subsidy projects', highlight: true },
];

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'RS Solar Infrastructure Private Limited',
            description: 'South Haryana-based solar power installation company.',
            url: 'https://www.rssolarinfrastructure.com',
            email: 'rssolarinfra@gmail.com',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Faridabad',
              addressRegion: 'Haryana',
              addressCountry: 'IN',
            },
            areaServed: [
              { '@type': 'City', name: 'Faridabad' },
              { '@type': 'City', name: 'Palwal' },
              { '@type': 'City', name: 'Gurugram' },
            ],
            sameAs: [
              'https://www.instagram.com/rssolarinfra',
              'https://www.facebook.com/rssolarinfra/',
              'https://x.com/rssolarinfra',
            ],
          }),
        }}
      />

      {/* Page Header */}
      <section className="bg-primary py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'About Us' }]} />
          <h1 className="font-heading text-3xl font-bold text-text-inverse sm:text-4xl">
            About RS Solar Infrastructure
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-base text-gray-300 sm:text-lg">
            Bringing clean, affordable solar power to homes and businesses across South Haryana.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <SectionWrapper>
        <div className="mx-auto max-w-3xl">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl bg-bg-white p-6 shadow-md">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                <Target className="h-5 w-5 text-primary" />
              </div>
              <h2 className="font-heading text-xl font-bold text-text">Our Mission</h2>
              <p className="mt-2 text-sm leading-relaxed text-text-light">
                To put rooftop solar within reach of every household and enterprise in South Haryana —
                Faridabad, Palwal, and Gurugram — through turnkey installation and full subsidy support,
                delivered with quality, honesty, and lasting value.
              </p>
            </div>
            <div className="rounded-2xl bg-bg-white p-6 shadow-md">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-secondary/10">
                <Lightbulb className="h-5 w-5 text-secondary" />
              </div>
              <h2 className="font-heading text-xl font-bold text-text">Our Vision</h2>
              <p className="mt-2 text-sm leading-relaxed text-text-light">
                A South Haryana where every rooftop produces its own clean power — shrinking electricity
                bills, unlocking government incentives, and building a greener tomorrow.
                Har Chhat Pe Solar.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Company Story */}
      <SectionWrapper className="bg-bg-white">
        <div className="mx-auto max-w-3xl">
          <SectionHeading title="Our Story" />
          <div className="prose prose-gray mx-auto max-w-none text-text-light">
            <p>
              RS Solar Infrastructure Private Limited started from one clear conviction — that solar energy
              belongs to everyone, not only to those who can decode the maze of subsidies, approvals, and
              installation work on their own.
            </p>
            <p>
              Registered with DHBVN and enrolled with the MNRE, we shoulder the entire solar journey for
              our clients — the opening site survey, panel installation, net metering, DISCOM approvals,
              and the PM Surya Ghar subsidy filing. There&apos;s no paperwork or technical jargon for you
              to untangle; our team manages all of it.
            </p>
            <p>
              We look after homeowners across Faridabad, Palwal, and Gurugram with complete PM Surya Ghar
              subsidy assistance, and we also build commercial and non-subsidy systems for offices,
              factories, and societies throughout South Haryana.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Leadership */}
      <SectionWrapper>
        <div className="mx-auto max-w-3xl">
          <SectionHeading title="Our Leadership" />
          <div className="rounded-2xl bg-bg-white p-6 shadow-md sm:p-8">
            <p className="text-sm leading-relaxed text-text-light">
              RS Solar Infrastructure Private Limited grew out of a genuine enthusiasm for renewable
              energy and a promise to deliver dependable service. We want solar within reach of every
              family in South Haryana, and our leadership keeps a hands-on eye on each installation so
              that quality and customer satisfaction never slip.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Credentials */}
      <SectionWrapper className="bg-bg-white">
        <SectionHeading
          title="Our Credentials"
          subtitle="Registered, enrolled, and empaneled — the proof points that earn your trust."
        />
        <div className="mx-auto max-w-3xl">
          <div className="grid gap-3 sm:grid-cols-2">
            {credentials.map((cred) => (
              <div
                key={cred.label}
                className="flex items-center gap-3 rounded-xl bg-bg p-4"
              >
                <cred.icon className="h-5 w-5 flex-shrink-0 text-accent" />
                <span className="text-sm font-medium text-text">{cred.label}</span>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Service Areas */}
      <SectionWrapper>
        <SectionHeading
          title="Service Areas"
          subtitle="The South Haryana cities where we put solar on rooftops."
        />
        <div className="mx-auto max-w-2xl">
          <div className="space-y-3">
            {serviceAreas.map((sa) => (
              <div
                key={sa.area}
                className={`flex items-center justify-between rounded-xl p-4 ${
                  sa.highlight ? 'bg-primary/5 border border-primary/20' : 'bg-bg-white shadow-sm'
                }`}
              >
                <div className="flex items-center gap-3">
                  <MapPin className={`h-5 w-5 ${sa.highlight ? 'text-primary' : 'text-text-light'}`} />
                  <span className="font-heading font-bold text-text">{sa.area}</span>
                </div>
                <span className="text-sm text-text-light">{sa.type}</span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-center text-xs text-text-light">
            The PM Surya Ghar subsidy applies to residential rooftops only, processed through DHBVN and HAREDA.
          </p>
        </div>
      </SectionWrapper>

      {/* Values */}
      <SectionWrapper className="bg-bg-white">
        <SectionHeading
          title="Our Values"
          subtitle="The principles behind every system we install."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <div key={v.title} className="text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                <v.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-heading text-base font-bold text-text">{v.title}</h3>
              <p className="mt-1 text-sm text-text-light">{v.description}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper>
        <div className="text-center">
          <h2 className="font-heading text-2xl font-bold text-text sm:text-3xl">
            Ready to Go Solar?
          </h2>
          <p className="mt-2 text-text-light">
            Book a free consultation and see exactly how much you stand to save.
          </p>
          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <CTAButton text="Get Free Consultation" href="/contact" />
            <CTAButton text="Calculate Your Savings" href="/solar-calculator" variant="outline" />
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
