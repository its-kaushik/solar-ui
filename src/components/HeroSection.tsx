import { Shield, Award, BadgeCheck } from 'lucide-react';
import CTAButton from './CTAButton';

const trustBadges = [
  { icon: Shield, label: 'MNRE Enrolled' },
  { icon: BadgeCheck, label: 'BSES Rajdhani Registered' },
  { icon: Award, label: 'PM Surya Ghar Empaneled' },
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-primary">
      {/* Background pattern overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(245,158,11,0.15),_transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
        <div className="text-center">
          <p className="font-heading text-sm font-semibold uppercase tracking-widest text-secondary">
            Har Chhat Pe Solar
          </p>

          <h1 className="mt-4 font-heading text-3xl font-bold leading-tight text-text-inverse sm:text-4xl lg:text-5xl lg:leading-tight">
            Powering Delhi,
            <br />
            One Rooftop at a Time
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-300 sm:mt-6 sm:text-lg">
            End-to-end rooftop solar installation with full government subsidy assistance.
            Get up to <span className="font-semibold text-secondary">Rs 1,08,000</span> in subsidies.
            5 years free maintenance included.
          </p>

          {/* CTA buttons */}
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
            <CTAButton
              text="Get Free Consultation"
              href="#contact"
              variant="secondary"
              className="w-full sm:w-auto"
            />
            <CTAButton
              text="Calculate Your Savings"
              href="/solar-calculator"
              variant="outline"
              className="w-full border-white text-white hover:bg-white hover:text-primary sm:w-auto"
            />
          </div>

          {/* Trust badges */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {trustBadges.map((badge) => (
              <div
                key={badge.label}
                className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-gray-200"
              >
                <badge.icon className="h-4 w-4 text-secondary" />
                <span>{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
