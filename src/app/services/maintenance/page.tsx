import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import {
  Wrench,
  SprayCan,
  Gauge,
  Cable,
  ShieldCheck,
  Clock,
  CheckCircle,
  Phone,
} from 'lucide-react';
import SectionWrapper from '@/components/SectionWrapper';
import SectionHeading from '@/components/SectionHeading';
import CTAButton from '@/components/CTAButton';

export const metadata: Metadata = {
  title: 'Maintenance & AMC',
  description:
    'Solar maintenance across Faridabad, Palwal and Gurugram. Every install includes 5 years of free upkeep — 3 visits a year covering panel cleaning, system checks and performance monitoring.',
};

const maintenanceIncludes = [
  { icon: SprayCan, title: 'Panel Cleaning', description: 'A careful wash of every module to clear away the dust, bird droppings and grime that quietly eat into your output.' },
  { icon: Gauge, title: 'System Health Check', description: 'A full diagnostic that confirms voltage, current and generation figures are all where they should be.' },
  { icon: Cable, title: 'Inverter Inspection', description: 'We review the inverter for error logs, cooling, firmware and overall operation so power conversion stays efficient.' },
  { icon: Wrench, title: 'Wiring & Connection Check', description: 'Every cable, junction box, connector and earthing point is examined for looseness, wear or damage.' },
  { icon: ShieldCheck, title: 'Safety Equipment Check', description: 'We confirm the DC and AC surge protection, lightning arrestor and earthing are all in working order.' },
  { icon: Clock, title: 'Performance Monitoring', description: 'Actual generation is measured against the expected yield so any shortfall is caught and fixed early.' },
];

export default function MaintenancePage() {
  const phone = process.env.NEXT_PUBLIC_PHONE_NUMBER || '';

  return (
    <>
      <section className="bg-primary py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Services' }, { label: 'Maintenance & AMC' }]} />
          <h1 className="font-heading text-3xl font-bold text-text-inverse sm:text-4xl">
            Maintenance & AMC
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-base text-gray-300 sm:text-lg">
            Regular upkeep that keeps your solar system performing at its best, year after year.
          </p>
        </div>
      </section>

      {/* Free Maintenance */}
      <SectionWrapper>
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex rounded-full bg-accent/10 px-6 py-2 text-sm font-bold text-accent">
            Bundled Free with Every Install
          </div>
          <h2 className="mt-4 font-heading text-2xl font-bold text-text sm:text-3xl">
            Five Years of Free Maintenance
          </h2>
          <p className="mt-3 text-text-light">
            Each system we put up at RS Solar Infrastructure carries five years of upkeep at no charge —{' '}
            <span className="font-semibold text-text">three planned visits every year</span>.
            Nothing extra to pay, and no fine print.
          </p>
        </div>
      </SectionWrapper>

      {/* What's Covered */}
      <SectionWrapper className="bg-bg-white">
        <SectionHeading
          title="What Happens on Every Visit"
          subtitle="Each call-out follows the same careful, end-to-end checklist."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {maintenanceIncludes.map((item) => (
            <div key={item.title} className="rounded-2xl bg-bg p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                <item.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-heading text-base font-bold text-text">{item.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-text-light">{item.description}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Maintenance Schedule */}
      <SectionWrapper>
        <SectionHeading title="Maintenance Schedule" />
        <div className="mx-auto max-w-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-3 pr-4 font-heading font-bold text-text">Detail</th>
                  <th className="py-3 font-heading font-bold text-text">Specification</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="py-3 pr-4 font-medium text-text">Free upkeep window</td>
                  <td className="py-3 text-text-light">Five years starting from your commissioning date</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 pr-4 font-medium text-text">How often we visit</td>
                  <td className="py-3 text-text-light">Three times a year, roughly every four months</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 pr-4 font-medium text-text">Visits included</td>
                  <td className="py-3 text-text-light">Fifteen in all across the five years</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 pr-4 font-medium text-text">Booking visits</td>
                  <td className="py-3 text-text-light">We reach out to you to line each one up</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-text">Urgent help</td>
                  <td className="py-3 text-text-light">Reachable on phone or WhatsApp</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </SectionWrapper>

      {/* After 5 Years */}
      <SectionWrapper className="bg-bg-white">
        <SectionHeading
          title="And Once the Five Years Are Up?"
          subtitle="Ongoing care options so your system keeps delivering."
        />
        <div className="mx-auto max-w-2xl">
          <div className="rounded-2xl bg-bg p-6 sm:p-8">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                <p className="text-sm text-text">
                  <span className="font-semibold">Paid AMC plans</span> — sign up for an Annual Maintenance Contract at a fair, competitive rate.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                <p className="text-sm text-text">
                  <span className="font-semibold">Pay-as-you-go service</span> — ring us whenever you need a single, one-time visit.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                <p className="text-sm text-text">
                  <span className="font-semibold">Factory warranty stays intact</span> — the 25-year panel performance cover and the 5 to 10-year inverter cover run separately from our AMC.
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Emergency Contact */}
      <SectionWrapper>
        <div className="mx-auto max-w-3xl rounded-2xl bg-primary/5 p-6 text-center sm:p-8">
          <Phone className="mx-auto h-10 w-10 text-primary" />
          <h2 className="mt-3 font-heading text-xl font-bold text-text sm:text-2xl">
            Urgent Support
          </h2>
          <p className="mt-2 text-sm text-text-light sm:text-base">
            Output dropped to zero? Inverter flashing a fault? Get in touch right away —
            we&apos;re ready to sort it out.
          </p>
          {phone && (
            <a
              href={`tel:+91${phone}`}
              className="mt-4 inline-flex h-12 items-center gap-2 rounded-xl bg-primary px-6 font-semibold text-text-inverse transition-colors hover:bg-primary-light"
            >
              <Phone className="h-5 w-5" />
              Call +91 {phone}
            </a>
          )}
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper className="bg-bg-white">
        <div className="text-center">
          <h2 className="font-heading text-2xl font-bold text-text sm:text-3xl">
            Looking to Install a New System?
          </h2>
          <p className="mt-2 text-text-light">
            Five years of free maintenance is built into every installation we do.
          </p>
          <div className="mt-6">
            <CTAButton text="Get Free Consultation" href="/contact" />
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
