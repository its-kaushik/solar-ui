import type { Metadata } from 'next';
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
    'Solar panel maintenance services in Delhi. 5 years free maintenance with every installation — 3 visits/year including panel cleaning, system check, and performance monitoring.',
};

const maintenanceIncludes = [
  { icon: SprayCan, title: 'Panel Cleaning', description: 'Thorough cleaning of all solar panels to remove dust, bird droppings, and debris that reduce efficiency.' },
  { icon: Gauge, title: 'System Health Check', description: 'Complete diagnostic of system performance — voltage, current, and generation output verification.' },
  { icon: Cable, title: 'Inverter Inspection', description: 'Check inverter operation, error logs, fan/cooling, and firmware. Ensure optimal power conversion.' },
  { icon: Wrench, title: 'Wiring & Connection Check', description: 'Inspect all wiring, junction boxes, connectors, and earthing for loose connections or damage.' },
  { icon: ShieldCheck, title: 'Safety Equipment Check', description: 'Verify DC SPD, AC SPD, lightning arrestor, and earthing system are functional.' },
  { icon: Clock, title: 'Performance Monitoring', description: 'Compare actual generation against expected output. Identify and resolve any underperformance.' },
];

export default function MaintenancePage() {
  const phone = process.env.NEXT_PUBLIC_PHONE_NUMBER || '';

  return (
    <>
      <section className="bg-primary py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="font-heading text-3xl font-bold text-text-inverse sm:text-4xl">
            Maintenance & AMC
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-base text-gray-300 sm:text-lg">
            Keep your solar system running at peak efficiency with regular maintenance.
          </p>
        </div>
      </section>

      {/* Free Maintenance */}
      <SectionWrapper>
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex rounded-full bg-accent/10 px-6 py-2 text-sm font-bold text-accent">
            Included Free with Every Installation
          </div>
          <h2 className="mt-4 font-heading text-2xl font-bold text-text sm:text-3xl">
            5 Years Free Maintenance
          </h2>
          <p className="mt-3 text-text-light">
            Every solar system installed by Kaushik Solar Power comes with 5 years of
            complimentary maintenance — <span className="font-semibold text-text">3 scheduled visits per year</span>.
            No additional cost, no hidden charges.
          </p>
        </div>
      </SectionWrapper>

      {/* What's Covered */}
      <SectionWrapper className="bg-bg-white">
        <SectionHeading
          title="What Each Visit Covers"
          subtitle="Our maintenance visits are thorough and systematic."
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
                  <td className="py-3 pr-4 font-medium text-text">Free maintenance period</td>
                  <td className="py-3 text-text-light">5 years from installation date</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 pr-4 font-medium text-text">Visit frequency</td>
                  <td className="py-3 text-text-light">3 visits per year (every 4 months)</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 pr-4 font-medium text-text">Total free visits</td>
                  <td className="py-3 text-text-light">15 visits over 5 years</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 pr-4 font-medium text-text">Scheduling</td>
                  <td className="py-3 text-text-light">We contact you proactively to schedule visits</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-text">Emergency support</td>
                  <td className="py-3 text-text-light">Available via phone/WhatsApp</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </SectionWrapper>

      {/* After 5 Years */}
      <SectionWrapper className="bg-bg-white">
        <SectionHeading
          title="After 5 Years?"
          subtitle="Continued maintenance options to keep your system at its best."
        />
        <div className="mx-auto max-w-2xl">
          <div className="rounded-2xl bg-bg p-6 sm:p-8">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                <p className="text-sm text-text">
                  <span className="font-semibold">Paid AMC plans</span> — Annual Maintenance Contracts available at competitive rates.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                <p className="text-sm text-text">
                  <span className="font-semibold">On-demand service</span> — Call us anytime for one-off maintenance visits.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                <p className="text-sm text-text">
                  <span className="font-semibold">Manufacturer warranty continues</span> — Panel performance warranty (25 years) and inverter warranty (5-10 years) are independent of our AMC.
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
            Emergency Support
          </h2>
          <p className="mt-2 text-sm text-text-light sm:text-base">
            System not working? Inverter showing an error? Contact us immediately —
            we&apos;re here to help.
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
            Need a New Solar System?
          </h2>
          <p className="mt-2 text-text-light">
            Every installation comes with 5 years free maintenance included.
          </p>
          <div className="mt-6">
            <CTAButton text="Get Free Consultation" href="/contact" />
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
