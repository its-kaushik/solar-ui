import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import {
  PhoneCall,
  ClipboardCheck,
  HardHat,
  Gauge,
  FileText,
  IndianRupee,
  ArrowRight,
  CheckCircle,
} from 'lucide-react';
import SectionWrapper from '@/components/SectionWrapper';
import SectionHeading from '@/components/SectionHeading';
import CTAButton from '@/components/CTAButton';

export const metadata: Metadata = {
  title: 'How to Apply for Solar Subsidy',
  description:
    'Step-by-step guide to applying for rooftop solar subsidy in Delhi. We handle the entire process — PM Surya Ghar, BSES registration, net metering, and subsidy disbursement.',
};

const steps = [
  {
    icon: PhoneCall,
    title: 'Contact Us',
    description: 'Reach out via call, WhatsApp, or the contact form. We discuss your requirements, answer questions, and schedule a site visit.',
    youDo: 'Call or fill the form',
    weDo: 'Understand your needs, answer questions',
  },
  {
    icon: ClipboardCheck,
    title: 'Site Survey & System Design',
    description: 'Our team visits your property, inspects the roof, checks shading and orientation, and designs the optimal solar system for your home.',
    youDo: 'Allow access to your roof',
    weDo: 'Complete site survey, share system design and quote',
  },
  {
    icon: FileText,
    title: 'PM Surya Ghar Registration',
    description: 'We register your application on the PM Surya Ghar portal (pmsuryaghar.gov.in) and submit all required documents.',
    youDo: 'Provide Aadhaar, electricity bill, bank details',
    weDo: 'Portal registration, document upload, application submission',
  },
  {
    icon: HardHat,
    title: 'Installation',
    description: 'Professional installation of structure, panels, inverter, safety equipment, wiring, and all electrical connections. Typically completed in 1-2 days.',
    youDo: 'Be available on installation day',
    weDo: 'Full end-to-end installation',
  },
  {
    icon: Gauge,
    title: 'Net Metering & Inspection',
    description: 'We coordinate with BSES for net meter installation, grid synchronization, and DISCOM inspection. BSES provides a free bi-directional meter.',
    youDo: 'Nothing — we handle it',
    weDo: 'BSES coordination, meter installation, inspection',
  },
  {
    icon: IndianRupee,
    title: 'Subsidy Disbursement',
    description: 'We upload the commissioning report on the PM Surya Ghar portal. Subsidy is transferred directly to your bank account via DBT within 30-45 days.',
    youDo: 'Receive subsidy in your bank account',
    weDo: 'Commissioning report upload, follow-up until disbursement',
  },
];

export default function HowToApplyPage() {
  return (
    <>
      <section className="bg-primary py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Subsidy Guide', href: '/subsidy-guide' }, { label: 'How to Apply' }]} />
          <h1 className="font-heading text-3xl font-bold text-text-inverse sm:text-4xl">
            How to Apply for Solar Subsidy
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-base text-gray-300 sm:text-lg">
            We handle the entire process — from application to subsidy disbursement. Here&apos;s how it works.
          </p>
        </div>
      </section>

      {/* Key message */}
      <SectionWrapper>
        <div className="mx-auto max-w-3xl rounded-2xl bg-accent/5 border border-accent/20 p-6 text-center sm:p-8">
          <CheckCircle className="mx-auto h-10 w-10 text-accent" />
          <h2 className="mt-3 font-heading text-xl font-bold text-text sm:text-2xl">
            You Don&apos;t Need to Worry About Paperwork
          </h2>
          <p className="mt-2 text-sm text-text-light sm:text-base">
            From portal registration to document upload to DISCOM coordination to subsidy follow-up —
            we manage everything on your behalf. Your only job is to provide basic documents and enjoy free solar power.
          </p>
        </div>
      </SectionWrapper>

      {/* Steps */}
      <SectionWrapper className="bg-bg-white">
        <SectionHeading
          title="Step-by-Step Process"
          subtitle="Here's exactly what happens from first contact to subsidy in your account."
        />
        <div className="mx-auto max-w-3xl space-y-6">
          {steps.map((step, i) => (
            <div key={step.title} className="rounded-2xl bg-bg p-5 sm:p-6">
              <div className="flex items-start gap-4">
                <div className="relative flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-text-inverse">
                    <step.icon className="h-6 w-6" />
                  </div>
                  <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-secondary text-xs font-bold text-text">
                    {i + 1}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-lg font-bold text-text">{step.title}</h3>
                  <p className="mt-1 text-sm text-text-light">{step.description}</p>
                  <div className="mt-3 grid gap-2 sm:grid-cols-2">
                    <div className="rounded-lg bg-bg-white p-3">
                      <p className="text-xs font-semibold uppercase tracking-wider text-text-light">You do</p>
                      <p className="mt-0.5 text-sm text-text">{step.youDo}</p>
                    </div>
                    <div className="rounded-lg bg-primary/5 p-3">
                      <p className="text-xs font-semibold uppercase tracking-wider text-primary">We do</p>
                      <p className="mt-0.5 text-sm text-text">{step.weDo}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Timeline */}
      <SectionWrapper>
        <SectionHeading title="Typical Timeline" />
        <div className="mx-auto max-w-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-3 pr-4 font-heading font-bold text-text">Phase</th>
                  <th className="py-3 font-heading font-bold text-text">Duration</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="py-3 pr-4 text-text">Consultation + Site Survey</td>
                  <td className="py-3 text-text-light">1-3 days</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 pr-4 text-text">Portal Registration + Approvals</td>
                  <td className="py-3 text-text-light">3-7 days</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 pr-4 text-text">Installation</td>
                  <td className="py-3 text-text-light">1-2 days</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 pr-4 text-text">Net Metering + DISCOM Inspection</td>
                  <td className="py-3 text-text-light">7-15 days</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 text-text">Subsidy Disbursement</td>
                  <td className="py-3 text-text-light">30-45 days</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-text-light">
            Timelines are approximate and may vary based on DISCOM scheduling and portal processing times.
          </p>
        </div>
      </SectionWrapper>

      {/* Related */}
      <SectionWrapper className="bg-bg-white">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm text-text-light">Also read:</p>
          <div className="mt-2 flex flex-col gap-2 sm:flex-row sm:gap-4">
            <Link href="/subsidy-guide/pm-surya-ghar" className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary-light">
              PM Surya Ghar Yojana <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/subsidy-guide/delhi-state-subsidy" className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary-light">
              Delhi State Subsidy & GBI <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper>
        <div className="text-center">
          <h2 className="font-heading text-2xl font-bold text-text sm:text-3xl">
            Let&apos;s Get Started
          </h2>
          <p className="mt-2 text-text-light">
            Contact us today and we&apos;ll guide you through the entire process.
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
