import SectionWrapper from '@/components/SectionWrapper';
import SectionHeading from '@/components/SectionHeading';
import CTAButton from '@/components/CTAButton';

export default function Home() {
  return (
    <>
      {/* Hero placeholder */}
      <section className="bg-primary py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="font-heading text-sm font-semibold uppercase tracking-wider text-secondary">
            Har Chhat Pe Solar
          </p>
          <h1 className="mt-4 font-heading text-3xl font-bold text-text-inverse sm:text-4xl lg:text-5xl">
            Powering Delhi, One Rooftop at a Time
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-gray-300 sm:text-lg">
            End-to-end solar installation with full subsidy assistance.
            BSES Rajdhani registered. 5 years free maintenance.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <CTAButton text="Get Free Consultation" href="#contact" variant="secondary" className="w-full sm:w-auto" />
            <CTAButton text="Calculate Your Savings" href="/solar-calculator" variant="outline" className="w-full border-white text-white hover:bg-white hover:text-primary sm:w-auto" />
          </div>
        </div>
      </section>

      {/* Content placeholder — will be built in Phase 2 */}
      <SectionWrapper>
        <SectionHeading
          title="Why Choose Kaushik Solar Power?"
          subtitle="BSES Rajdhani registered, MNRE enrolled, and committed to quality."
        />
        <p className="text-center text-text-light">
          Full site coming soon. This is the Phase 1 layout shell.
        </p>
      </SectionWrapper>
    </>
  );
}
