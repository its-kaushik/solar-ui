import type { Metadata } from 'next';
import { Star } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import SectionWrapper from '@/components/SectionWrapper';
import SectionHeading from '@/components/SectionHeading';
import ProjectCard from '@/components/ProjectCard';
import CTAButton from '@/components/CTAButton';
import { projects } from '@/data/projects';
import { testimonials } from '@/data/testimonials';

export const metadata: Metadata = {
  title: 'Our Work — Projects & Testimonials',
  description:
    'Browse rooftop solar installations we have completed across Faridabad, Palwal, and Gurugram. Genuine projects, measurable savings, and honest customer feedback.',
};

export default function OurWorkPage() {
  return (
    <>
      <section className="bg-primary py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Our Work' }]} />
          <h1 className="font-heading text-3xl font-bold text-text-inverse sm:text-4xl">
            Our Work
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-base text-gray-300 sm:text-lg">
            Working systems. Lower bills. Take a look at what we&apos;ve delivered for families and businesses across South Haryana.
          </p>
        </div>
      </section>

      {/* Portfolio */}
      <SectionWrapper>
        <SectionHeading
          title="Recent Projects"
          subtitle="We handle the full EPC scope on every job — site survey, installation, DHBVN net metering, and seeing the subsidy through to disbursement."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-text-light">
          We&apos;ll keep adding to this list as new installations go live across the region.
        </p>
      </SectionWrapper>

      {/* Testimonials */}
      <SectionWrapper className="bg-bg-white">
        <SectionHeading
          title="What Our Customers Say"
          subtitle="In the words of the South Haryana homeowners and businesses who made the switch to solar with us."
        />
        <div className="mx-auto max-w-3xl space-y-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="rounded-2xl bg-bg p-6"
            >
              {/* Stars */}
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < testimonial.rating
                        ? 'fill-secondary text-secondary'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-text">
                &ldquo;{testimonial.review}&rdquo;
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-text-inverse">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-text">{testimonial.name}</p>
                  <p className="text-xs text-text-light">
                    {testimonial.systemSize} System — {testimonial.area}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper>
        <div className="text-center">
          <h2 className="font-heading text-2xl font-bold text-text sm:text-3xl">
            Ready to Become Our Next Happy Customer?
          </h2>
          <p className="mt-2 text-text-light">
            Book a no-cost consultation and see exactly what rooftop solar could save your household or business.
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
