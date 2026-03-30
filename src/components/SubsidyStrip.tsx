import Link from 'next/link';
import { ArrowRight, IndianRupee } from 'lucide-react';

export default function SubsidyStrip() {
  return (
    <section className="bg-secondary/10 border-y border-secondary/20">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-3 px-4 py-4 sm:flex-row sm:justify-between sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 text-center sm:text-left">
          <div className="hidden rounded-full bg-secondary/20 p-2 sm:block">
            <IndianRupee className="h-5 w-5 text-secondary" />
          </div>
          <p className="text-base font-semibold text-text sm:text-lg">
            Get up to <span className="text-primary">Rs 1,08,000</span> in government subsidies on your rooftop solar system
          </p>
        </div>
        <Link
          href="/subsidy-guide"
          className="inline-flex items-center gap-1 whitespace-nowrap rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-text-inverse transition-colors hover:bg-primary-light"
        >
          Subsidy Guide
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
