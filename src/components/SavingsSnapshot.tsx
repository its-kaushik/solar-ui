import { TrendingUp, Zap, IndianRupee, Sun } from 'lucide-react';
import CTAButton from './CTAButton';

const stats = [
  { icon: IndianRupee, label: 'Subsidy (Central + State)', value: 'Up to Rs 1,08,000' },
  { icon: Zap, label: 'Annual Bill Savings', value: '~Rs 50,000/yr' },
  { icon: TrendingUp, label: 'GBI Income (5 years)', value: 'Rs 3/unit' },
  { icon: Sun, label: 'Payback Period', value: '~3-4 Years' },
];

export default function SavingsSnapshot() {
  return (
    <div className="mx-auto max-w-3xl">
      <div className="overflow-hidden rounded-2xl bg-bg-white shadow-lg">
        {/* Header */}
        <div className="bg-primary px-6 py-5 text-center">
          <h3 className="font-heading text-xl font-bold text-text-inverse sm:text-2xl">
            A typical 3KW system saves you
          </h3>
          <p className="mt-1 text-3xl font-bold text-secondary sm:text-4xl">
            ~Rs 50,000/year
          </p>
          <p className="mt-1 text-sm text-gray-300">on electricity bills</p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 gap-4 p-6 sm:gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-accent/10">
                <stat.icon className="h-5 w-5 text-accent" />
              </div>
              <p className="text-lg font-bold text-text sm:text-xl">{stat.value}</p>
              <p className="mt-0.5 text-xs text-text-light sm:text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="border-t border-gray-100 px-6 py-4 text-center">
          <CTAButton
            text="Calculate Your Exact Savings"
            href="/solar-calculator"
            variant="primary"
            className="w-full sm:w-auto"
          />
        </div>
      </div>
    </div>
  );
}
