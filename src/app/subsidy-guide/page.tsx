import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, IndianRupee, Building, Zap } from 'lucide-react';
import SectionWrapper from '@/components/SectionWrapper';
import SectionHeading from '@/components/SectionHeading';
import CTAButton from '@/components/CTAButton';

export const metadata: Metadata = {
  title: 'Solar Subsidy Guide — Delhi',
  description:
    'Complete guide to solar panel subsidies in Delhi. PM Surya Ghar Yojana (up to Rs 78,000), Delhi state subsidy (up to Rs 30,000), and Generation-Based Incentive (Rs 3/kWh).',
};

const subsidyCards = [
  {
    icon: IndianRupee,
    title: 'PM Surya Ghar Muft Bijli Yojana',
    subtitle: 'Central Government',
    amount: 'Up to Rs 78,000',
    description: 'Subsidy for residential rooftop solar. 1KW = Rs 30K, 2KW = Rs 60K, 3KW+ = Rs 78K.',
    href: '/subsidy-guide/pm-surya-ghar',
    color: 'bg-primary/10 text-primary',
  },
  {
    icon: Building,
    title: 'Delhi State Subsidy',
    subtitle: 'Delhi Government',
    amount: 'Up to Rs 30,000',
    description: 'Additional state subsidy of Rs 2,000/KW + Rs 30,000 extra for 3KW systems.',
    href: '/subsidy-guide/delhi-state-subsidy',
    color: 'bg-secondary/10 text-secondary',
  },
  {
    icon: Zap,
    title: 'Generation-Based Incentive (GBI)',
    subtitle: 'Delhi Government',
    amount: 'Rs 2-3 per kWh for 5 years',
    description: 'Earn money for every unit of solar power you generate. Credited to your bank account.',
    href: '/subsidy-guide/delhi-state-subsidy',
    color: 'bg-accent/10 text-accent',
  },
];

export default function SubsidyGuidePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'How much subsidy can I get for solar panels in Delhi?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'You can get up to Rs 1,08,000 in combined subsidies — Rs 78,000 from the central government (PM Surya Ghar) and up to Rs 30,000 from the Delhi state government for a 3KW residential system.',
                },
              },
              {
                '@type': 'Question',
                name: 'Who is eligible for solar subsidy in Delhi?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Residential consumers with a valid electricity connection from BSES Rajdhani (South Delhi) are eligible for both central and state subsidies. The system must be on-grid with net metering.',
                },
              },
            ],
          }),
        }}
      />

      <section className="bg-primary py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="font-heading text-3xl font-bold text-text-inverse sm:text-4xl">
            Solar Subsidy Guide — Delhi
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-base text-gray-300 sm:text-lg">
            Everything you need to know about government subsidies and incentives for rooftop solar in Delhi.
          </p>
        </div>
      </section>

      {/* Combined total */}
      <SectionWrapper>
        <div className="mx-auto max-w-3xl rounded-2xl bg-bg-white p-6 text-center shadow-lg sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-text-light">
            Total Available Subsidy for 3KW Residential System
          </p>
          <p className="mt-2 font-heading text-4xl font-bold text-primary sm:text-5xl">
            Up to Rs 1,08,000
          </p>
          <p className="mt-2 text-sm text-text-light">
            Central (Rs 78,000) + Delhi State (up to Rs 30,000) — disbursed directly to your bank account
          </p>
        </div>
      </SectionWrapper>

      {/* Subsidy cards */}
      <SectionWrapper className="bg-bg-white">
        <SectionHeading title="Available Subsidies & Incentives" />
        <div className="grid gap-6 lg:grid-cols-3">
          {subsidyCards.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className="group rounded-2xl bg-bg p-6 transition-all hover:shadow-md hover:-translate-y-1"
            >
              <div className={`mb-4 inline-flex rounded-xl p-3 ${card.color}`}>
                <card.icon className="h-6 w-6" />
              </div>
              <p className="text-xs font-medium uppercase tracking-wider text-text-light">{card.subtitle}</p>
              <h3 className="mt-1 font-heading text-lg font-bold text-text">{card.title}</h3>
              <p className="mt-1 font-heading text-xl font-bold text-primary">{card.amount}</p>
              <p className="mt-2 text-sm text-text-light">{card.description}</p>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                Read More <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </SectionWrapper>

      {/* How to apply teaser */}
      <SectionWrapper>
        <div className="mx-auto max-w-3xl rounded-2xl bg-accent/5 border border-accent/20 p-6 text-center sm:p-8">
          <h2 className="font-heading text-xl font-bold text-text sm:text-2xl">
            We Handle the Entire Subsidy Process
          </h2>
          <p className="mt-2 text-sm text-text-light sm:text-base">
            Don&apos;t worry about paperwork. From BSES registration to PM Surya Ghar application
            to subsidy disbursement — we take care of everything on your behalf.
          </p>
          <div className="mt-4">
            <Link
              href="/subsidy-guide/how-to-apply"
              className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary-light"
            >
              See How the Process Works
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper className="bg-bg-white">
        <div className="text-center">
          <h2 className="font-heading text-2xl font-bold text-text sm:text-3xl">
            Ready to Claim Your Subsidy?
          </h2>
          <p className="mt-2 text-text-light">
            Contact us for a free consultation. We&apos;ll tell you exactly how much subsidy you can get.
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
