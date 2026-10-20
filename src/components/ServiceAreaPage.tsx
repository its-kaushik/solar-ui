import Link from 'next/link';
import { MapPin, CheckCircle, ArrowRight } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import SectionWrapper from '@/components/SectionWrapper';
import SectionHeading from '@/components/SectionHeading';
import CTAButton from '@/components/CTAButton';
import ProjectCard from '@/components/ProjectCard';
import TestimonialCard from '@/components/TestimonialCard';
import GoogleRating from '@/components/GoogleRating';
import FAQSection from '@/components/FAQSection';
import type { ServiceArea } from '@/data/service-areas';
import { postalAddress } from '@/data/offices';
import { projects } from '@/data/projects';
import { testimonials } from '@/data/testimonials';
import { googleReviews } from '@/data/reviews';

const installationScope = [
  'Free site survey and roof assessment',
  'System design and panel layout',
  'Galvanized mounting structure and panel installation',
  'Inverter, DC/AC SPD, lightning arrestor, and earthing',
  'DHBVN net-meter application and bi-directional meter',
  'DISCOM coordination and inspection',
  'Complete PM Surya Ghar subsidy paperwork',
  '5 years free maintenance (3 visits/year)',
];

export default function ServiceAreaPage({ area }: { area: ServiceArea }) {
  const localProjects = projects.filter((p) => p.area.includes(area.city));
  const localTestimonials = testimonials.filter((t) => t.area?.includes(area.city));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: `Solar Panel Installation in ${area.city}`,
            provider: area.office
              ? {
                  '@type': 'LocalBusiness',
                  name: `Raytrix Energy — ${area.office.label}`,
                  parentOrganization: {
                    '@type': 'Organization',
                    name: 'Raytrix Energy (OPC) Private Limited',
                  },
                  address: postalAddress(area.office),
                  hasMap: area.office.mapsUrl,
                }
              : {
                  '@type': 'Organization',
                  name: 'Raytrix Energy (OPC) Private Limited',
                },
            areaServed: { '@type': 'City', name: area.city },
            serviceType: 'Rooftop Solar Panel Installation',
          }),
        }}
      />

      {/* Hero */}
      <section className="bg-primary py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Service Areas' }, { label: area.city }]} />
          <h1 className="font-heading text-3xl font-bold text-text-inverse sm:text-4xl">
            Solar Panel Installation in {area.city}
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-base text-gray-300 sm:text-lg">
            {area.heroSubtitle}
          </p>
          <div className="mt-6 flex justify-center">
            <GoogleRating dark />
          </div>
        </div>
      </section>

      {/* Intro */}
      <SectionWrapper>
        <SectionHeading
          title={`Rooftop Solar in ${area.city}`}
          subtitle={`Serviced by ${area.discomFull}`}
        />
        <div className="mx-auto max-w-3xl space-y-4 text-sm leading-relaxed text-text-light sm:text-base">
          {area.intro.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
          <p>
            Not sure what size you need?{' '}
            <Link href="/solar-calculator" className="font-semibold text-primary hover:text-primary-light">
              Try our free solar calculator
            </Link>{' '}
            or read about{' '}
            <Link href="/services/residential" className="font-semibold text-primary hover:text-primary-light">
              our residential installation process
            </Link>
            .
          </p>
        </div>
      </SectionWrapper>

      {/* Subsidy */}
      <SectionWrapper className="bg-bg-white">
        <div className="mx-auto max-w-3xl rounded-2xl bg-secondary/10 p-6 text-center sm:p-8">
          <p className="font-heading text-sm font-semibold uppercase tracking-wider text-primary">
            PM Surya Ghar Subsidy in {area.city}
          </p>
          <p className="mt-2 font-heading text-3xl font-bold text-primary sm:text-4xl">
            Up to {area.subsidyMax}
          </p>
          <div className="mt-4 space-y-3 text-left text-sm leading-relaxed text-text-light sm:text-base">
            {area.subsidyNote.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
          <div className="mt-5">
            <Link
              href="/subsidy-guide/pm-surya-ghar"
              className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary-light"
            >
              Read the PM Surya Ghar Subsidy Guide
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </SectionWrapper>

      {/* What's included */}
      <SectionWrapper>
        <SectionHeading
          title="What's Included"
          subtitle={`End-to-end installation in ${area.city} — we handle everything, including ${area.discomShort} paperwork.`}
        />
        <div className="mx-auto max-w-2xl space-y-3">
          {installationScope.map((item) => (
            <div key={item} className="flex items-start gap-3 rounded-xl bg-bg-white p-4 shadow-sm">
              <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
              <span className="text-sm text-text">{item}</span>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Local projects */}
      {localProjects.length > 0 && (
        <SectionWrapper className="bg-bg-white">
          <SectionHeading
            title={`Our Work in ${area.city}`}
            subtitle="A recent installation in your area."
          />
          <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {localProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </SectionWrapper>
      )}

      {/* Local reviews / social proof */}
      <SectionWrapper>
        <SectionHeading
          title="Trusted by NCR Homeowners"
          subtitle="A 5.0 rating across 25 verified Google reviews."
        />
        <div className="mb-8 flex justify-center">
          <GoogleRating />
        </div>
        {localTestimonials.length > 0 && (
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {localTestimonials.map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
        )}
        <div className="mt-8 text-center">
          <a
            href={googleReviews.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary-light"
          >
            Read all {googleReviews.count} reviews on Google
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </SectionWrapper>

      {/* Map */}
      <SectionWrapper className="bg-bg-white">
        <SectionHeading title={`Serving All of ${area.city}`} />
        <div className="mx-auto max-w-3xl">
          <div className="overflow-hidden rounded-2xl">
            <iframe
              src={`https://maps.google.com/maps?q=${encodeURIComponent(area.mapQuery)}&t=&z=${area.office ? 13 : 12}&ie=UTF8&iwloc=&output=embed`}
              width="100%"
              height="256"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`${area.city} service area on Google Maps`}
            />
          </div>
          {area.office && (
            <a
              href={area.office.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-start justify-center gap-2 text-center text-sm text-text hover:text-primary"
            >
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>
                <span className="font-semibold">Our {area.office.label}:</span> {area.office.fullAddress}
              </span>
            </a>
          )}
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {area.localities.map((loc) => (
              <span
                key={loc}
                className="inline-flex items-center gap-1 rounded-full bg-bg px-3 py-1 text-xs text-text-light"
              >
                <MapPin className="h-3 w-3 text-primary" />
                {loc}
              </span>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <FAQSection faqs={area.faqs.map((f) => ({ q: f.q, a: f.a }))} />

      {/* CTA */}
      <SectionWrapper className="bg-bg-white">
        <div className="text-center">
          <h2 className="font-heading text-2xl font-bold text-text sm:text-3xl">
            Book a Free Site Survey in {area.city}
          </h2>
          <p className="mt-2 text-text-light">
            We&apos;ll assess your roof and give you an exact quote and subsidy figure — no obligation.
          </p>
          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <CTAButton text="Book a Free Site Survey" href="/contact" />
            <CTAButton text="See My Savings in 30 Seconds" href="/solar-calculator" variant="outline" />
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
