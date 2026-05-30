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
    'A plain-English, step-by-step path to claiming rooftop solar subsidy across Faridabad, Palwal and Gurugram. We run it all — PM Surya Ghar, DHBVN net metering, and grant disbursement.',
};

const steps = [
  {
    icon: PhoneCall,
    title: 'Get in Touch',
    description: 'Drop us a call, a WhatsApp message, or fill the contact form. We talk through what you need, clear up any doubts, and book a site visit.',
    youDo: 'Ring us or submit the form',
    weDo: 'Map out your needs and answer every question',
  },
  {
    icon: ClipboardCheck,
    title: 'Roof Survey & Design',
    description: 'We come to your property, study the roof, factor in shading and direction, and engineer the best-fit solar setup for your home.',
    youDo: 'Give us access to the rooftop',
    weDo: 'Run the survey and hand over the design and quote',
  },
  {
    icon: FileText,
    title: 'PM Surya Ghar Filing',
    description: 'We lodge your application on the PM Surya Ghar National Portal (pmsuryaghar.gov.in) and submit every required document.',
    youDo: 'Share Aadhaar, electricity bill, bank details',
    weDo: 'Portal sign-up, document uploads, application filing',
  },
  {
    icon: HardHat,
    title: 'Installation',
    description: 'Expert fitting of the mounting structure, panels, inverter, safety gear, cabling and all electrical work — typically wrapped up in one to two days.',
    youDo: 'Be around on the install day',
    weDo: 'Complete end-to-end installation',
  },
  {
    icon: Gauge,
    title: 'Net Metering & Inspection',
    description: 'We liaise with DHBVN for the net meter, grid synchronisation and the DISCOM inspection so your plant is officially cleared.',
    youDo: 'Nothing — we take care of it',
    weDo: 'DHBVN coordination, meter fitting, inspection',
  },
  {
    icon: IndianRupee,
    title: 'Grant Disbursement',
    description: 'We file the commissioning report on the National Portal. The subsidy is then transferred straight to your bank account, usually within 30 to 60 days.',
    youDo: 'Receive the grant in your account',
    weDo: 'File the commissioning report and follow up to payout',
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
            From the first application to the money in your account, our team runs the lot. Here&apos;s exactly how it unfolds.
          </p>
        </div>
      </section>

      {/* Key message */}
      <SectionWrapper>
        <div className="mx-auto max-w-3xl rounded-2xl bg-accent/5 border border-accent/20 p-6 text-center sm:p-8">
          <CheckCircle className="mx-auto h-10 w-10 text-accent" />
          <h2 className="mt-3 font-heading text-xl font-bold text-text sm:text-2xl">
            Leave the Paperwork Entirely to Us
          </h2>
          <p className="mt-2 text-sm text-text-light sm:text-base">
            Portal sign-up, document uploads, DHBVN coordination, grant follow-up — the whole lot is handled on your behalf.
            All you do is hand over a few basic documents and start enjoying near-free solar power.
          </p>
        </div>
      </SectionWrapper>

      {/* Steps */}
      <SectionWrapper className="bg-bg-white">
        <SectionHeading
          title="The Process, Step by Step"
          subtitle="A clear look at everything that happens between your first call and the grant reaching your account."
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
                  <td className="py-3 pr-4 text-text">Consultation and roof survey</td>
                  <td className="py-3 text-text-light">1-3 days</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 pr-4 text-text">Portal filing and approvals</td>
                  <td className="py-3 text-text-light">3-7 days</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 pr-4 text-text">Installation</td>
                  <td className="py-3 text-text-light">1-2 days</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 pr-4 text-text">Net metering and DHBVN inspection</td>
                  <td className="py-3 text-text-light">7-15 days</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 text-text">Grant disbursement</td>
                  <td className="py-3 text-text-light">30-60 days</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-text-light">
            These durations are indicative and can shift depending on DHBVN scheduling and how quickly the portal processes each stage.
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
            <Link href="/subsidy-guide/haryana-state-subsidy" className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary-light">
              Haryana State Subsidy <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper>
        <div className="text-center">
          <h2 className="font-heading text-2xl font-bold text-text sm:text-3xl">
            Let&apos;s Begin
          </h2>
          <p className="mt-2 text-text-light">
            Reach out today and we&apos;ll steer you through every stage from here.
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
