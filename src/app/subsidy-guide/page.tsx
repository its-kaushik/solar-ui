import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, IndianRupee, Building, Zap } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQSection from '@/components/FAQSection';
import SectionWrapper from '@/components/SectionWrapper';
import SectionHeading from '@/components/SectionHeading';
import CTAButton from '@/components/CTAButton';

export const metadata: Metadata = {
  title: 'Solar Subsidy Guide — South Haryana',
  description:
    'Your complete handbook to rooftop solar subsidies across Faridabad, Palwal and Gurugram. Learn about PM Surya Ghar (up to Rs 78,000), HAREDA support for Antyodaya families, and DHBVN net metering.',
};

const subsidyCards = [
  {
    icon: IndianRupee,
    title: 'PM Surya Ghar Muft Bijli Yojana',
    subtitle: 'Central Government',
    amount: 'Up to Rs 78,000',
    description: 'The nationwide rooftop solar grant for homes. 1KW earns Rs 30K, 2KW earns Rs 60K, and 3KW or larger earns the full Rs 78K.',
    href: '/subsidy-guide/pm-surya-ghar',
    color: 'bg-primary/10 text-primary',
  },
  {
    icon: Building,
    title: 'Haryana State Support (HAREDA)',
    subtitle: 'Haryana Government',
    amount: 'For Antyodaya families',
    description: 'Extra HAREDA assistance of about Rs 25,000/KW (up to 2KW) reserved for low-income households earning under Rs 1.80 lakh a year.',
    href: '/subsidy-guide/haryana-state-subsidy',
    color: 'bg-secondary/10 text-secondary',
  },
  {
    icon: Zap,
    title: 'DHBVN Net Metering',
    subtitle: 'DHBVN / HERC',
    amount: 'Bill credits for exports',
    description: 'Send surplus units back to the DHBVN grid and offset them against future bills under HERC net-metering rules.',
    href: '/subsidy-guide/haryana-state-subsidy',
    color: 'bg-accent/10 text-accent',
  },
];

export default function SubsidyGuidePage() {
  return (
    <>
      <section className="bg-primary py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Subsidy Guide' }]} />
          <h1 className="font-heading text-3xl font-bold text-text-inverse sm:text-4xl">
            Solar Subsidy Guide — South Haryana
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-base text-gray-300 sm:text-lg">
            A clear, plain-language walkthrough of every government grant and incentive available for rooftop solar in Faridabad, Palwal and Gurugram.
          </p>
        </div>
      </section>

      {/* Combined total */}
      <SectionWrapper>
        <div className="mx-auto max-w-3xl rounded-2xl bg-bg-white p-6 text-center shadow-lg sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-text-light">
            Central Subsidy for a 3KW Residential System
          </p>
          <p className="mt-2 font-heading text-4xl font-bold text-primary sm:text-5xl">
            Up to Rs 78,000
          </p>
          <p className="mt-2 text-sm text-text-light">
            Paid under PM Surya Ghar straight into your bank account — with extra HAREDA support available for eligible Antyodaya households
          </p>
        </div>
      </SectionWrapper>

      {/* Subsidy cards */}
      <SectionWrapper className="bg-bg-white">
        <SectionHeading title="Grants & Incentives You Can Tap Into" />
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
            We Run the Whole Subsidy Journey for You
          </h2>
          <p className="mt-2 text-sm text-text-light sm:text-base">
            Forget the red tape. From your DHBVN net-metering request to the PM Surya Ghar filing
            right through to the money landing in your account — every step is handled by our team.
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

      <FAQSection
        faqs={[
          {
            q: 'How much solar subsidy is available in South Haryana?',
            a: 'For a 3KW home system the central PM Surya Ghar scheme pays up to Rs 78,000. There is no general state top-up in Haryana, but Antyodaya families with yearly income up to Rs 1.80 lakh can claim additional HAREDA support of roughly Rs 25,000/KW for up to 2KW.',
          },
          {
            q: 'Who qualifies for solar subsidy in Faridabad, Palwal or Gurugram?',
            a: 'Any homeowner with a live DHBVN electricity connection can claim the central PM Surya Ghar grant, provided the plant is grid-tied with net metering. The added HAREDA amount is limited to low-income Antyodaya households.',
          },
          {
            q: 'Do I have to file the subsidy paperwork myself?',
            a: 'Not at all. RS Solar Infrastructure manages the complete application for you — DHBVN net-metering, the PM Surya Ghar National Portal submission, and follow-up until the grant is released through HAREDA.',
          },
          {
            q: 'When does the subsidy money actually arrive?',
            a: 'Once your system is inspected and commissioned by DHBVN, the PM Surya Ghar grant is usually credited to your bank account within about 30 to 60 days. We keep chasing the agencies until it lands.',
          },
        ]}
      />

      {/* CTA */}
      <SectionWrapper className="bg-bg-white">
        <div className="text-center">
          <h2 className="font-heading text-2xl font-bold text-text sm:text-3xl">
            Ready to Claim Your Subsidy?
          </h2>
          <p className="mt-2 text-text-light">
            Book a free consultation and we&apos;ll give you an exact figure for the subsidy you qualify for.
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
