import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Gift } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQSection from '@/components/FAQSection';
import SectionWrapper from '@/components/SectionWrapper';
import SectionHeading from '@/components/SectionHeading';
import CTAButton from '@/components/CTAButton';

export const metadata: Metadata = {
  title: 'Haryana Solar Subsidy & HAREDA Support',
  description:
    'How rooftop solar subsidy works in Haryana: the central PM Surya Ghar grant (up to Rs 78,000), extra HAREDA support for Antyodaya families, and DHBVN net metering under HERC rules.',
};

const otherBenefits = [
  { title: 'DHBVN Net Metering', description: 'Homes can connect under DHBVN net metering, letting surplus units flow back to the grid and offset future consumption.' },
  { title: 'HERC-Regulated Settlement', description: 'Export and import are reconciled under the net-metering framework set by the Haryana Electricity Regulatory Commission (HERC).' },
  { title: 'Online Application Route', description: 'Net-metering requests are filed through the DHBVN online portal, with no need to visit a sub-division office for routine steps.' },
  { title: 'Single-Window Subsidy via HAREDA', description: 'HAREDA, the state nodal agency, coordinates registration and release of the rooftop solar subsidy in Haryana.' },
  { title: 'Long-Term Asset Value', description: 'A grid-tied system keeps trimming your DHBVN bills for two decades or more, well beyond the payback period.' },
];

export default function HaryanaStateSubsidyPage() {
  return (
    <>
      <section className="bg-primary py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Subsidy Guide', href: '/subsidy-guide' }, { label: 'Haryana State Subsidy' }]} />
          <p className="text-sm font-semibold uppercase tracking-wider text-secondary">Haryana Government</p>
          <h1 className="mt-2 font-heading text-3xl font-bold text-text-inverse sm:text-4xl">
            Haryana Solar Subsidy & HAREDA Support
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-base text-gray-300 sm:text-lg">
            What the state actually offers on rooftop solar — and how it sits alongside the central PM Surya Ghar grant.
          </p>
        </div>
      </section>

      {/* What Haryana offers */}
      <SectionWrapper>
        <SectionHeading title="What State Support Looks Like in Haryana" />
        <div className="mx-auto max-w-2xl">
          <p className="text-sm text-text-light">
            It helps to be clear from the outset: Haryana does not run a blanket state top-up on top of the central
            subsidy, nor does it pay a generation-linked incentive. For the large majority of households across
            Faridabad, Palwal and Gurugram, the benefit is the nationwide PM Surya Ghar grant of up to
            Rs 78,000. The one state-level addition is targeted at low-income families.
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-3 pr-4 font-heading font-bold text-text">Who</th>
                  <th className="py-3 font-heading font-bold text-text">What they get</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="py-3 pr-4 font-medium text-text">Most households</td>
                  <td className="py-3 text-text-light">Central PM Surya Ghar grant only — up to Rs 78,000</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 pr-4 font-medium text-text">Antyodaya / low-income families</td>
                  <td className="py-3 text-text-light">Extra HAREDA support of about Rs 25,000/KW, up to 2 KW</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-text">Income ceiling for the extra support</td>
                  <td className="py-3 font-semibold text-primary">Annual household income up to Rs 1.80 lakh</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-text-light">
            The additional HAREDA amount is reserved for Antyodaya households and is income-tested; it is not open to every consumer.
          </p>
        </div>
      </SectionWrapper>

      {/* HAREDA support detail */}
      <SectionWrapper className="bg-bg-white">
        <SectionHeading title="HAREDA Support for Antyodaya Families" />
        <div className="mx-auto max-w-2xl">
          <div className="rounded-2xl bg-bg p-6">
            <p className="text-sm text-text-light">
              If a household&apos;s yearly income is at or below Rs 1.80 lakh, it may qualify as an Antyodaya family
              under HAREDA. For these families the state adds roughly Rs 25,000 for every KW installed, capped at 2 KW,
              on top of the central PM Surya Ghar grant. This is designed to bring rooftop solar within reach of homes
              for which the upfront cost would otherwise be a barrier.
            </p>
            <div className="mt-4 space-y-2 text-sm text-text-light">
              <p><span className="font-semibold text-text">Who it covers:</span> residential Antyodaya households with annual income up to Rs 1.80 lakh.</p>
              <p><span className="font-semibold text-text">How much:</span> about Rs 25,000 per KW, up to a 2 KW ceiling.</p>
              <p><span className="font-semibold text-text">Where it comes from:</span> processed and released through HAREDA, the state nodal agency.</p>
            </div>
          </div>
          <p className="mt-4 text-xs text-text-light">
            Eligibility and exact amounts are confirmed by HAREDA at the time of application. We help you check whether your household qualifies.
          </p>
        </div>
      </SectionWrapper>

      {/* Net metering with DHBVN */}
      <SectionWrapper>
        <SectionHeading
          title="Net Metering Through DHBVN"
          subtitle="Turn the units your roof produces into savings on your bill."
        />
        <div className="mx-auto max-w-2xl">
          <p className="text-sm text-text-light">
            Across Faridabad, Palwal and Gurugram, DHBVN is the distribution utility that handles your grid connection
            and net metering. When your panels generate more than the home is using, the extra electricity is pushed
            onto the DHBVN network and recorded by a bi-directional meter. Those exported units are then set off against
            what you draw from the grid later, under the net-metering rules laid down by HERC.
          </p>
          <div className="mt-6 rounded-2xl bg-accent/5 border border-accent/20 p-5">
            <h3 className="font-heading text-base font-bold text-text">How the billing works</h3>
            <div className="mt-3 space-y-1 text-sm text-text-light">
              <p>Your meter tracks both the units you import and the units you export.</p>
              <p>At each billing cycle, DHBVN nets the two against each other.</p>
              <p>You are billed only for the net import, so heavy-generation months can shrink the bill considerably.</p>
            </div>
          </div>
          <div className="mt-4 space-y-2 text-sm text-text-light">
            <p><span className="font-semibold text-text">Applying:</span> net-metering requests are submitted on the DHBVN online portal — a step we complete on your behalf.</p>
            <p><span className="font-semibold text-text">Regulator:</span> the terms of settlement follow HERC&apos;s net-metering regulations for Haryana.</p>
          </div>
        </div>
      </SectionWrapper>

      {/* Other Haryana points */}
      <SectionWrapper className="bg-bg-white">
        <SectionHeading
          title="Other Things Worth Knowing in Haryana"
          subtitle="A few more practical points beyond the subsidy itself."
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
            q: 'Does Haryana give a state subsidy on top of PM Surya Ghar?',
            a: 'Not for everyone. There is no universal state top-up in Haryana. For most homes the benefit is the central PM Surya Ghar grant of up to Rs 78,000. The only state-level addition is HAREDA support for Antyodaya families whose annual income is up to Rs 1.80 lakh.',
          },
          {
            q: 'How much extra can an Antyodaya family receive?',
            a: 'Eligible low-income households can get roughly Rs 25,000 per KW, capped at 2 KW, through HAREDA — over and above the central PM Surya Ghar grant.',
          },
          {
            q: 'How does net metering work with DHBVN?',
            a: 'DHBVN fits a bi-directional meter that logs both the units you import and the surplus you export to the grid. At each billing cycle the two are netted off under HERC rules, and you pay only for the net import.',
          },
          {
            q: 'Where do I apply for net metering in South Haryana?',
            a: 'Net-metering applications for Faridabad, Palwal and Gurugram are filed through the DHBVN online portal. RS Solar Infrastructure handles this submission as part of the installation.',
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
            Make the Most of What You Qualify For
          </h2>
          <p className="mt-2 text-text-light">Let us check your eligibility and claim every rupee you&apos;re entitled to.</p>
          <div className="mt-6">
            <CTAButton text="Get Free Consultation" href="/contact" />
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
