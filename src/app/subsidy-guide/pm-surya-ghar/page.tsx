import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle, FileText, AlertCircle } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import SectionWrapper from '@/components/SectionWrapper';
import SectionHeading from '@/components/SectionHeading';
import CTAButton from '@/components/CTAButton';

export const metadata: Metadata = {
  title: 'PM Surya Ghar Yojana — Subsidy Guide',
  description:
    'Complete guide to PM Surya Ghar Muft Bijli Yojana. Get up to Rs 78,000 subsidy for rooftop solar. Eligibility, amounts, application process, and required documents.',
};

const subsidySlabs = [
  { size: '1 KW', rate: 'Rs 30,000/KW', total: 'Rs 30,000' },
  { size: '2 KW', rate: 'Rs 30,000/KW', total: 'Rs 60,000' },
  { size: '3 KW', rate: 'Rs 30,000/KW (first 2) + Rs 18,000/KW', total: 'Rs 78,000' },
  { size: '3+ KW', rate: 'Capped at 3 KW', total: 'Rs 78,000 (max)' },
];

const eligibility = [
  'Residential consumer with a valid electricity connection',
  'Electricity connection under BSES (for Delhi)',
  'System must be on-grid with net metering',
  'Only one subsidy per household',
  'System must be installed by a registered vendor (like Raytrix Energy)',
];

const documents = [
  'Aadhaar card of the applicant',
  'Electricity bill (latest)',
  'Bank account details (for DBT)',
  'Passport-size photograph',
  'Property ownership proof or NOC from owner',
  'PAN card (optional but recommended)',
];

const process = [
  { step: 1, title: 'Register on PM Surya Ghar Portal', description: 'Create an account on pmsuryaghar.gov.in with your electricity consumer number.' },
  { step: 2, title: 'Choose a Registered Vendor', description: 'Select Raytrix Energy as your installation vendor from the portal.' },
  { step: 3, title: 'Site Survey & Installation', description: 'We visit your site, design the system, and complete the installation.' },
  { step: 4, title: 'Net Meter Installation', description: 'BSES installs a bi-directional meter and inspects the system.' },
  { step: 5, title: 'Upload Commissioning Report', description: 'We upload all required documents and the commissioning report on the portal.' },
  { step: 6, title: 'Subsidy Disbursement', description: 'Subsidy amount is transferred directly to your bank account via DBT within 30-45 days.' },
];

const faqs = [
  {
    q: 'Who is eligible for PM Surya Ghar subsidy?',
    a: 'Any residential consumer with a valid electricity connection. The system must be on-grid with net metering. Commercial consumers are not eligible for this central subsidy.',
  },
  {
    q: 'How much subsidy will I get for a 3KW system?',
    a: 'Rs 78,000. The subsidy is Rs 30,000/KW for the first 2 KW and Rs 18,000/KW for capacity between 2-3 KW. The maximum subsidy is capped at 3 KW.',
  },
  {
    q: 'How is the subsidy paid?',
    a: 'The subsidy is disbursed via Direct Benefit Transfer (DBT) directly to your bank account after installation and commissioning.',
  },
  {
    q: 'How long does it take to receive the subsidy?',
    a: 'Typically 30-45 days after the commissioning report is uploaded and verified on the PM Surya Ghar portal.',
  },
  {
    q: 'Can I get both central and state subsidy?',
    a: 'Yes! The PM Surya Ghar subsidy (central) and Delhi state subsidy are stackable. You can receive both.',
  },
  {
    q: 'Do I need to apply myself?',
    a: 'No. Raytrix Energy handles the entire application process on your behalf — from registration to document upload to follow-up.',
  },
];

export default function PMSuryaGharPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((faq) => ({
              '@type': 'Question',
              name: faq.q,
              acceptedAnswer: { '@type': 'Answer', text: faq.a },
            })),
          }),
        }}
      />

      <section className="bg-primary py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Subsidy Guide', href: '/subsidy-guide' }, { label: 'PM Surya Ghar' }]} />
          <p className="text-sm font-semibold uppercase tracking-wider text-secondary">Central Government Subsidy</p>
          <h1 className="mt-2 font-heading text-3xl font-bold text-text-inverse sm:text-4xl">
            PM Surya Ghar Muft Bijli Yojana
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-base text-gray-300 sm:text-lg">
            Get up to Rs 78,000 subsidy for rooftop solar panels on your home.
          </p>
        </div>
      </section>

      {/* Subsidy Amounts */}
      <SectionWrapper>
        <SectionHeading title="Subsidy Amounts" />
        <div className="mx-auto max-w-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-3 pr-4 font-heading font-bold text-text">System Size</th>
                  <th className="py-3 pr-4 font-heading font-bold text-text">Rate</th>
                  <th className="py-3 font-heading font-bold text-text">Total Subsidy</th>
                </tr>
              </thead>
              <tbody>
                {subsidySlabs.map((slab) => (
                  <tr key={slab.size} className="border-b border-gray-100">
                    <td className="py-3 pr-4 font-medium text-text">{slab.size}</td>
                    <td className="py-3 pr-4 text-text-light">{slab.rate}</td>
                    <td className="py-3 font-semibold text-primary">{slab.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </SectionWrapper>

      {/* Eligibility */}
      <SectionWrapper className="bg-bg-white">
        <SectionHeading title="Eligibility Criteria" />
        <div className="mx-auto max-w-2xl space-y-3">
          {eligibility.map((item) => (
            <div key={item} className="flex items-start gap-3 rounded-xl bg-bg p-4">
              <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
              <span className="text-sm text-text">{item}</span>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Application Process */}
      <SectionWrapper>
        <SectionHeading
          title="Application Process"
          subtitle="We handle all these steps for you."
        />
        <div className="mx-auto max-w-2xl space-y-4">
          {process.map((step) => (
            <div key={step.step} className="flex gap-4 rounded-xl bg-bg-white p-4 shadow-sm">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-text-inverse">
                {step.step}
              </div>
              <div>
                <h3 className="font-heading text-sm font-bold text-text">{step.title}</h3>
                <p className="mt-0.5 text-sm text-text-light">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Documents Required */}
      <SectionWrapper className="bg-bg-white">
        <SectionHeading title="Documents Required" />
        <div className="mx-auto max-w-2xl">
          <div className="grid gap-3 sm:grid-cols-2">
            {documents.map((doc) => (
              <div key={doc} className="flex items-center gap-3 rounded-xl bg-bg p-4">
                <FileText className="h-4 w-4 flex-shrink-0 text-primary" />
                <span className="text-sm text-text">{doc}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 flex items-start gap-2 rounded-xl bg-secondary/5 border border-secondary/20 p-4">
            <AlertCircle className="h-5 w-5 flex-shrink-0 text-secondary" />
            <p className="text-xs text-text-light">
              Don&apos;t worry about gathering these documents. We guide you through the process and tell you exactly what&apos;s needed.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* FAQs */}
      <SectionWrapper>
        <SectionHeading title="Frequently Asked Questions" />
        <div className="mx-auto max-w-3xl space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="rounded-2xl bg-bg-white p-5 shadow-sm">
              <h3 className="font-heading text-sm font-bold text-text">{faq.q}</h3>
              <p className="mt-2 text-sm text-text-light">{faq.a}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Related */}
      <SectionWrapper className="bg-bg-white">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm text-text-light">Also read:</p>
          <div className="mt-2 flex flex-col gap-2 sm:flex-row sm:gap-4">
            <Link href="/subsidy-guide/delhi-state-subsidy" className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary-light">
              Delhi State Subsidy <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/subsidy-guide/how-to-apply" className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary-light">
              How to Apply <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper>
        <div className="text-center">
          <h2 className="font-heading text-2xl font-bold text-text sm:text-3xl">
            Ready to Claim Your Rs 78,000 Subsidy?
          </h2>
          <p className="mt-2 text-text-light">We handle the entire process — you just enjoy free solar power.</p>
          <div className="mt-6">
            <CTAButton text="Get Free Consultation" href="/contact" />
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
