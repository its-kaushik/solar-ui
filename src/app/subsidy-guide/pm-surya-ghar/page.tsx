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
    'Everything you need to know about PM Surya Ghar Muft Bijli Yojana. Claim up to Rs 78,000 for home rooftop solar — slabs, who qualifies, how to apply, and the documents you will need.',
};

const subsidySlabs = [
  { size: '1 KW', rate: 'Rs 30,000/KW', total: 'Rs 30,000' },
  { size: '2 KW', rate: 'Rs 30,000/KW', total: 'Rs 60,000' },
  { size: '3 KW', rate: 'Rs 30,000/KW (first 2) + Rs 18,000/KW', total: 'Rs 78,000' },
  { size: '3+ KW', rate: 'Capped at 3 KW', total: 'Rs 78,000 (max)' },
];

const eligibility = [
  'You are a residential consumer holding a live electricity connection',
  'Your connection is served by DHBVN across Faridabad, Palwal or Gurugram',
  'The plant is grid-connected and runs on net metering',
  'A single household may claim the grant only once',
  'Installation is carried out by an empanelled vendor such as RS Solar Infrastructure',
];

const documents = [
  "Applicant's Aadhaar card",
  'Most recent electricity bill',
  'Bank account particulars for the direct transfer',
  'Recent passport-size photograph',
  'Proof of property ownership, or a no-objection letter from the owner',
  'PAN card (handy to have, though not mandatory)',
];

const process = [
  { step: 1, title: 'Sign Up on the National Portal', description: 'Open an account at pmsuryaghar.gov.in using your DHBVN consumer number to get started.' },
  { step: 2, title: 'Pick an Empanelled Installer', description: 'Choose RS Solar Infrastructure as your rooftop solar vendor on the portal.' },
  { step: 3, title: 'Survey & Build', description: 'Our engineers assess your roof, finalise the design, and carry out the installation.' },
  { step: 4, title: 'Net Meter Fitting', description: 'DHBVN fits a bi-directional meter and inspects the completed plant.' },
  { step: 5, title: 'Submit the Commissioning Report', description: 'We file all paperwork and the commissioning certificate on the National Portal.' },
  { step: 6, title: 'Grant Released', description: 'The subsidy lands in your bank account through direct benefit transfer, generally within 30 to 60 days.' },
];

const faqs = [
  {
    q: 'Who can apply for the PM Surya Ghar grant?',
    a: 'It is open to residential consumers who hold a valid electricity connection, with the plant set up on-grid and net-metered. Commercial users do not qualify for this central scheme.',
  },
  {
    q: 'What will I receive for a 3KW system?',
    a: 'Rs 78,000 in total. You get Rs 30,000 per KW for the first 2 KW and Rs 18,000 for the third KW. The grant stops counting capacity beyond 3 KW.',
  },
  {
    q: 'In what form is the subsidy paid?',
    a: 'It comes as a direct benefit transfer straight into your bank account once the system is installed and commissioned by DHBVN.',
  },
  {
    q: 'What is the wait before the money shows up?',
    a: 'Usually 30 to 60 days from when the commissioning report is filed and cleared on the National Portal following the DHBVN inspection.',
  },
  {
    q: 'Is there any extra state subsidy in Haryana?',
    a: 'Haryana has no universal state top-up. The PM Surya Ghar grant (up to Rs 78,000) is the benefit for most homes, though Antyodaya families earning under Rs 1.80 lakh a year can get additional HAREDA support.',
  },
  {
    q: 'Must I handle the application on my own?',
    a: 'No. RS Solar Infrastructure takes care of the full process for you — from portal sign-up and document uploads to chasing the agencies until the grant is paid.',
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
            Put rooftop solar on your home and claim as much as Rs 78,000 from the national scheme.
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
          title="How the Application Works"
          subtitle="Every one of these steps is taken care of by our team."
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
              No need to stress about collecting all of this. We walk you through it and flag precisely which papers apply to your case.
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
            <Link href="/subsidy-guide/haryana-state-subsidy" className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary-light">
              Haryana State Subsidy <ArrowRight className="h-4 w-4" />
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
            Ready to Lock In Your Rs 78,000 Grant?
          </h2>
          <p className="mt-2 text-text-light">Leave the paperwork to us and simply enjoy power that costs you next to nothing.</p>
          <div className="mt-6">
            <CTAButton text="Get Free Consultation" href="/contact" />
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
