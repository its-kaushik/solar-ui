import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Gift } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQSection from '@/components/FAQSection';
import SectionWrapper from '@/components/SectionWrapper';
import SectionHeading from '@/components/SectionHeading';
import CTAButton from '@/components/CTAButton';

export const metadata: Metadata = {
  title: 'Delhi State Solar Subsidy & GBI',
  description:
    'Delhi state solar subsidy: Rs 2,000/KW + Rs 30,000 for 3KW systems. Plus Generation-Based Incentive (GBI) of Rs 2-3 per kWh for 5 years. Complete guide.',
};

const otherBenefits = [
  { title: 'Free Bi-Directional Meter', description: 'BSES provides a free net meter for systems up to 10 KW.' },
  { title: '100% Charge Exemptions', description: 'Full exemption from wheeling charge, banking charge, and cross-subsidy surcharge for systems commissioned before March 2027.' },
  { title: 'Net Metering Fees Waived', description: 'Application and processing fees for net metering are waived under the Delhi Solar Policy.' },
  { title: 'No Electrical Inspection', description: 'Solar plants up to 500 KVA are exempt from electrical inspection requirements.' },
  { title: 'Accelerated Depreciation', description: '40% accelerated depreciation benefit for commercial and industrial consumers.' },
];

export default function DelhiStateSubsidyPage() {
  return (
    <>
      <section className="bg-primary py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Subsidy Guide', href: '/subsidy-guide' }, { label: 'Delhi State Subsidy' }]} />
          <p className="text-sm font-semibold uppercase tracking-wider text-secondary">Delhi Government</p>
          <h1 className="mt-2 font-heading text-3xl font-bold text-text-inverse sm:text-4xl">
            Delhi State Subsidy & GBI
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-base text-gray-300 sm:text-lg">
            Additional subsidies and incentives from the Delhi state government — on top of the central subsidy.
          </p>
        </div>
      </section>

      {/* State Capital Subsidy */}
      <SectionWrapper>
        <SectionHeading title="Delhi State Capital Subsidy" />
        <div className="mx-auto max-w-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-3 pr-4 font-heading font-bold text-text">Benefit</th>
                  <th className="py-3 font-heading font-bold text-text">Details</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="py-3 pr-4 font-medium text-text">Basic State Subsidy</td>
                  <td className="py-3 text-text-light">Rs 2,000/KW (up to Rs 10,000 per consumer)</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 pr-4 font-medium text-text">Additional Subsidy (3KW)</td>
                  <td className="py-3 text-text-light">Rs 30,000 for 3 KW rooftop solar installations</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-text">Maximum State Subsidy</td>
                  <td className="py-3 font-semibold text-primary">Up to Rs 30,000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-text-light">
            State subsidy is available for residential consumers in the BSES area (Delhi) and is stackable with the central PM Surya Ghar subsidy.
          </p>
        </div>
      </SectionWrapper>

      {/* Combined subsidy example */}
      <SectionWrapper className="bg-bg-white">
        <SectionHeading title="Combined Subsidy Example: 3KW System" />
        <div className="mx-auto max-w-2xl">
          <div className="rounded-2xl bg-bg p-6">
            <div className="space-y-3">
              <div className="flex items-center justify-between border-b border-gray-200 pb-3">
                <span className="text-sm text-text">Central Subsidy (PM Surya Ghar)</span>
                <span className="font-semibold text-text">Rs 78,000</span>
              </div>
              <div className="flex items-center justify-between border-b border-gray-200 pb-3">
                <span className="text-sm text-text">Delhi State Subsidy</span>
                <span className="font-semibold text-text">Up to Rs 30,000</span>
              </div>
              <div className="flex items-center justify-between pt-1">
                <span className="font-heading font-bold text-text">Total Subsidy</span>
                <span className="font-heading text-xl font-bold text-primary">Up to Rs 1,08,000</span>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* GBI */}
      <SectionWrapper>
        <SectionHeading
          title="Generation-Based Incentive (GBI)"
          subtitle="Earn money for every unit of solar power you generate."
        />
        <div className="mx-auto max-w-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-3 pr-4 font-heading font-bold text-text">System Size</th>
                  <th className="py-3 pr-4 font-heading font-bold text-text">GBI Rate</th>
                  <th className="py-3 font-heading font-bold text-text">Duration</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="py-3 pr-4 font-medium text-text">Up to 3 KW</td>
                  <td className="py-3 pr-4 font-semibold text-accent">Rs 3/kWh</td>
                  <td className="py-3 text-text-light">5 years</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-text">3 KW to 10 KW</td>
                  <td className="py-3 pr-4 font-semibold text-accent">Rs 2/kWh</td>
                  <td className="py-3 text-text-light">5 years</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* GBI calculation example */}
          <div className="mt-6 rounded-2xl bg-accent/5 border border-accent/20 p-5">
            <h3 className="font-heading text-base font-bold text-text">Example: 3KW System GBI Income</h3>
            <div className="mt-3 space-y-1 text-sm text-text-light">
              <p>Monthly generation: 3 KW x 120 units/KW = <span className="font-semibold text-text">360 units</span></p>
              <p>Monthly GBI: 360 x Rs 3 = <span className="font-semibold text-text">Rs 1,080/month</span></p>
              <p>Annual GBI: <span className="font-semibold text-text">Rs 12,960/year</span></p>
              <p>5-year total GBI: <span className="font-semibold text-primary">Rs 64,800</span></p>
            </div>
          </div>

          <div className="mt-4 space-y-2 text-sm text-text-light">
            <p><span className="font-semibold text-text">How it works:</span> GBI amount is first adjusted against your monthly electricity bill. Any surplus is deposited directly into your bank account by the DISCOM.</p>
            <p><span className="font-semibold text-text">Eligibility:</span> Domestic, commercial, and industrial consumers are all eligible for GBI.</p>
          </div>
        </div>
      </SectionWrapper>

      {/* Other Delhi Benefits */}
      <SectionWrapper className="bg-bg-white">
        <SectionHeading
          title="Other Delhi Solar Benefits"
          subtitle="Beyond subsidies and GBI, Delhi offers several additional advantages."
        />
        <div className="mx-auto max-w-2xl space-y-3">
          {otherBenefits.map((benefit) => (
            <div key={benefit.title} className="flex items-start gap-3 rounded-xl bg-bg p-4">
              <Gift className="mt-0.5 h-5 w-5 flex-shrink-0 text-secondary" />
              <div>
                <h3 className="text-sm font-semibold text-text">{benefit.title}</h3>
                <p className="mt-0.5 text-sm text-text-light">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <FAQSection
        faqs={[
          {
            q: 'Who is eligible for Delhi state solar subsidy?',
            a: 'Residential consumers with a valid BSES electricity connection in Delhi are eligible. The system must be on-grid with net metering. Both new and existing homes qualify.',
          },
          {
            q: 'Can I get both central and Delhi state subsidy?',
            a: 'Yes. The PM Surya Ghar (central) and Delhi state subsidy are separate schemes and can be combined. For a 3KW system, you can get up to Rs 78,000 + Rs 30,000 = Rs 1,08,000 total.',
          },
          {
            q: 'How is the GBI amount credited?',
            a: 'The Generation-Based Incentive is first adjusted against your monthly electricity bill. Any surplus after bill adjustment is deposited directly into your bank account by the DISCOM.',
          },
          {
            q: 'How long does Delhi state subsidy disbursement take?',
            a: 'After system commissioning and net meter installation, the state subsidy is typically disbursed within 2–3 months via bank transfer. We follow up with the DISCOM on your behalf.',
          },
        ]}
      />

      {/* Related */}
      <SectionWrapper>
        <div className="mx-auto max-w-3xl">
          <p className="text-sm text-text-light">Also read:</p>
          <div className="mt-2 flex flex-col gap-2 sm:flex-row sm:gap-4">
            <Link href="/subsidy-guide/pm-surya-ghar" className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary-light">
              PM Surya Ghar Yojana <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/subsidy-guide/how-to-apply" className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary-light">
              How to Apply <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper className="bg-bg-white">
        <div className="text-center">
          <h2 className="font-heading text-2xl font-bold text-text sm:text-3xl">
            Maximize Your Subsidies
          </h2>
          <p className="mt-2 text-text-light">Let us help you claim every rupee you&apos;re entitled to.</p>
          <div className="mt-6">
            <CTAButton text="Get Free Consultation" href="/contact" />
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
