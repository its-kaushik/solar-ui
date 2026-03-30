import type { Metadata } from 'next';
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
    'Learn about Raytrix Energy (OPC) Private Limited — a Delhi-based solar installation company registered with BSES and MNRE. Our mission, values, and credentials.',
};

const values = [
  {
    icon: Sparkles,
    title: 'Quality First',
    description: 'We use only top-tier equipment from trusted manufacturers like Adani and Vikram Solar.',
  },
  {
    icon: Eye,
    title: 'Transparency',
    description: 'No hidden costs, no surprises. We clearly explain every step, cost, and timeline upfront.',
  },
  {
    icon: Heart,
    title: 'Customer First',
    description: 'From site survey to subsidy disbursement, we are with you at every step. 5 years free maintenance included.',
  },
  {
    icon: Leaf,
    title: 'Sustainability',
    description: 'Every rooftop solar system reduces carbon emissions and contributes to a cleaner Delhi.',
  },
];

const credentials = [
  { icon: BadgeCheck, label: 'BSES DISCOM — Registered Vendor' },
  { icon: Award, label: 'MNRE — Enrolled' },
  { icon: Shield, label: 'PM Surya Ghar Yojana — Empaneled' },
  { icon: BadgeCheck, label: 'Company CIN — Registered OPC' },
  { icon: BadgeCheck, label: 'GST Registered' },
  { icon: BadgeCheck, label: 'MSME Registered' },
];

const serviceAreas = [
  { area: 'Delhi', type: 'Subsidy + Non-subsidy projects', highlight: true },
  { area: 'Faridabad', type: 'Non-subsidy projects', highlight: false },
  { area: 'Gurgaon', type: 'Non-subsidy projects', highlight: false },
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
            name: 'Raytrix Energy (OPC) Private Limited',
            description: 'Delhi-based solar power installation company.',
            url: 'https://www.raytrixenergy.com',
            email: 'raytrixenergy@gmail.com',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Delhi',
              addressRegion: 'Delhi',
              addressCountry: 'IN',
            },
            areaServed: [
              { '@type': 'City', name: 'Delhi' },
              { '@type': 'City', name: 'Faridabad' },
              { '@type': 'City', name: 'Gurgaon' },
            ],
            sameAs: [
              'https://www.instagram.com/raytrixenergy',
              'https://www.facebook.com/raytrixenergy/',
              'https://x.com/raytrixenergy',
            ],
          }),
        }}
      />

      {/* Page Header */}
      <section className="bg-primary py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="font-heading text-3xl font-bold text-text-inverse sm:text-4xl">
            About Raytrix Energy
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-base text-gray-300 sm:text-lg">
            Powering Delhi&apos;s homes and businesses with clean, affordable solar energy.
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
                To make rooftop solar accessible to every home and business in Delhi-NCR by providing
                end-to-end installation services with complete government subsidy assistance, ensuring
                quality, transparency, and long-term value.
              </p>
            </div>
            <div className="rounded-2xl bg-bg-white p-6 shadow-md">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-secondary/10">
                <Lightbulb className="h-5 w-5 text-secondary" />
              </div>
              <h2 className="font-heading text-xl font-bold text-text">Our Vision</h2>
              <p className="mt-2 text-sm leading-relaxed text-text-light">
                A Delhi where every rooftop generates clean solar power — reducing electricity bills,
                earning through government incentives, and contributing to a sustainable future.
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
              Raytrix Energy (OPC) Private Limited was founded with a simple belief — solar energy should
              be accessible to everyone, not just those who can navigate the complex world of subsidies,
              approvals, and installations on their own.
            </p>
            <p>
              As a BSES registered vendor and MNRE enrolled company, we handle the complete
              solar journey for our customers — from the initial site survey to panel installation,
              net metering, DISCOM approvals, and government subsidy applications. Our customers
              don&apos;t need to worry about paperwork or technical details. We take care of everything.
            </p>
            <p>
              We serve residential customers in Delhi with full PM Surya Ghar subsidy assistance,
              and also install non-subsidy systems across Delhi, Faridabad, and Gurgaon for both
              homes and commercial establishments.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Founder */}
      <SectionWrapper>
        <div className="mx-auto max-w-3xl">
          <SectionHeading title="Founder" />
          <div className="rounded-2xl bg-bg-white p-6 shadow-md sm:p-8">
            <div className="flex flex-col items-center gap-6 sm:flex-row">
              <div className="flex h-24 w-24 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                <span className="font-heading text-2xl font-bold text-primary">MK</span>
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold text-text">Mayank Kaushik</h3>
                <p className="text-sm font-medium text-primary">Founder & Director</p>
                <p className="mt-2 text-sm leading-relaxed text-text-light">
                  With a passion for renewable energy and a commitment to quality service,
                  Mayank founded Raytrix Energy to make solar energy accessible to every
                  household in Delhi. He personally oversees every installation to ensure the
                  highest standards of quality and customer satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Credentials */}
      <SectionWrapper className="bg-bg-white">
        <SectionHeading
          title="Our Credentials"
          subtitle="Registered, enrolled, and empaneled — the trust signals that matter."
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
          subtitle="Where we install solar systems."
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
            PM Surya Ghar subsidy is available only for residential projects in Delhi (BSES area).
          </p>
        </div>
      </SectionWrapper>

      {/* Values */}
      <SectionWrapper className="bg-bg-white">
        <SectionHeading
          title="Our Values"
          subtitle="What drives every installation we do."
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
            Get a free consultation and find out how much you can save.
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
