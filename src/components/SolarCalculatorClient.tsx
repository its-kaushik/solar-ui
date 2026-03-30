'use client';

import { useState } from 'react';
import { Calculator, Info } from 'lucide-react';
import SectionWrapper from '@/components/SectionWrapper';
import SectionHeading from '@/components/SectionHeading';
import CalculatorForm from '@/components/CalculatorForm';
import CalculatorResults from '@/components/CalculatorResults';
import { calculate } from '@/lib/calculator';
import { trackCalculatorUsed, trackCalculatorCTA } from '@/lib/analytics';
import type { CalculatorInput, CalculatorResult } from '@/types';

export default function SolarCalculatorClient() {
  const [result, setResult] = useState<CalculatorResult | null>(null);

  const handleCalculate = (input: CalculatorInput) => {
    const calculatedResult = calculate(input);
    setResult(calculatedResult);
    trackCalculatorUsed(calculatedResult.systemSizeKW, input.propertyType, input.area);
  };

  const handleGetQuote = () => {
    if (result) {
      trackCalculatorCTA(result.systemSizeKW);
    }
    const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '';
    const message = result
      ? `Hi, I calculated my solar needs: ${result.systemSizeKW} KW system. Monthly consumption: ${result.monthlyGeneration} units. Please share a quote.`
      : 'Hi, I\'m interested in rooftop solar installation. Please share more details.';
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      '_blank'
    );
  };

  return (
    <>
      <SectionWrapper>
        <div className="mx-auto max-w-5xl">
          {/* Info banner */}
          <div className="mb-8 flex items-start gap-3 rounded-xl border border-primary/20 bg-primary/5 p-4">
            <Info className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
            <p className="text-sm text-text-light">
              Enter your monthly electricity consumption to get an instant estimate of system size,
              cost, subsidies, and savings. No sign-up required.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Form */}
            <div>
              <SectionHeading title="Your Details" />
              <CalculatorForm onCalculate={handleCalculate} />
            </div>

            {/* Results */}
            <div>
              {result ? (
                <CalculatorResults result={result} onGetQuote={handleGetQuote} />
              ) : (
                <div className="flex h-full items-center justify-center rounded-2xl border-2 border-dashed border-gray-200 p-8">
                  <div className="text-center">
                    <Calculator className="mx-auto h-12 w-12 text-primary/20" />
                    <p className="mt-3 font-heading text-base font-semibold text-text-light">
                      Your results will appear here
                    </p>
                    <p className="mt-1 text-sm text-text-light">
                      Fill in the form and click &ldquo;Calculate Savings&rdquo;
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* How it works */}
      <SectionWrapper className="bg-bg-white">
        <SectionHeading
          title="How the Calculator Works"
          subtitle="Our estimates are based on Delhi-specific solar data and current subsidy policies."
        />
        <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-3">
          <div className="rounded-xl bg-bg p-5 text-center">
            <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-primary text-base font-bold text-text-inverse">
              1
            </div>
            <h3 className="mt-3 font-heading text-sm font-bold text-text">System Sizing</h3>
            <p className="mt-1 text-xs text-text-light">
              1 KW generates ~120 units/month in Delhi. We divide your consumption by 120 to recommend the right system size.
            </p>
          </div>
          <div className="rounded-xl bg-bg p-5 text-center">
            <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-primary text-base font-bold text-text-inverse">
              2
            </div>
            <h3 className="mt-3 font-heading text-sm font-bold text-text">Subsidy Calculation</h3>
            <p className="mt-1 text-xs text-text-light">
              Central subsidy (PM Surya Ghar) for residential + Delhi state subsidy & GBI for BSES area.
            </p>
          </div>
          <div className="rounded-xl bg-bg p-5 text-center">
            <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-primary text-base font-bold text-text-inverse">
              3
            </div>
            <h3 className="mt-3 font-heading text-sm font-bold text-text">Savings Estimate</h3>
            <p className="mt-1 text-xs text-text-light">
              Based on average BSES electricity rate of ₹7/unit and 25-year panel lifespan.
            </p>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
