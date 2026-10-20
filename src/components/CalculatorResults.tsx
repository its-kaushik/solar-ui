'use client';

import { IndianRupee, Zap, TrendingDown } from 'lucide-react';
import { motion } from 'framer-motion';
import type { CalculatorInput, CalculatorResult } from '@/types';
import CTAButton from '@/components/CTAButton';
import CalculatorLeadCapture from '@/components/CalculatorLeadCapture';
import { formatCurrency } from '@/lib/format';

interface CalculatorResultsProps {
  input: CalculatorInput;
  result: CalculatorResult;
}

function formatPayback(minYears: number, maxYears: number): string {
  if (maxYears <= 1) return 'Within 1 year';
  if (minYears < 1) return `Within ${Math.ceil(maxYears)} years`;
  return `${minYears} – ${maxYears} years`;
}

export default function CalculatorResults({ input, result }: CalculatorResultsProps) {
  // Commercial > 15KW — show "contact us" instead of estimates
  if (result.showContactForQuote) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="rounded-2xl border border-gray-200 bg-bg-white p-6"
      >
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
          <Zap className="h-4 w-4" />
          Recommended: {result.systemSizeKW} KW System
        </div>
        <h3 className="font-heading text-xl font-bold text-text">
          Custom Quote Required
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-text-light">
          For commercial systems above 15 KW, pricing is customized based on site conditions,
          roof type, electrical infrastructure, and project complexity. Contact us for a free
          site assessment and accurate quotation.
        </p>
        <div className="mt-5">
          <CTAButton text="Get Free Assessment" href="/contact" />
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-4"
    >
      {/* System size */}
      <div className="rounded-2xl border border-gray-200 bg-bg-white p-6">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
          <Zap className="h-4 w-4" />
          Recommended System
        </div>
        <p className="font-heading text-3xl font-bold text-text">
          {result.systemSizeKW} KW
        </p>
        <p className="mt-1 text-sm text-text-light">
          Generates ~{result.monthlyGeneration} units/month
        </p>
      </div>

      {/* Subsidy */}
      {result.totalSubsidy > 0 && (
        <div className="rounded-2xl border border-gray-200 bg-bg-white p-6">
          <h3 className="mb-3 flex items-center gap-2 font-heading text-sm font-semibold uppercase tracking-wider text-text-light">
            <IndianRupee className="h-4 w-4" />
            Your Government Subsidy
          </h3>
          <div className="space-y-2.5">
            {result.centralSubsidy > 0 && (
              <div className="flex items-center justify-between text-sm">
                <span className="text-text-light">PM Surya Ghar (Central)</span>
                <span className="font-semibold text-text">
                  {formatCurrency(result.centralSubsidy)}
                </span>
              </div>
            )}
            {result.stateSubsidy > 0 && (
              <div className="flex items-center justify-between text-sm">
                <span className="text-text-light">Delhi Government Subsidy</span>
                <span className="font-semibold text-text">
                  {formatCurrency(result.stateSubsidy)}
                </span>
              </div>
            )}
            <div className="border-t border-gray-200 pt-2.5">
              <div className="flex items-center justify-between">
                <span className="font-heading text-base font-bold text-text">Total Subsidy</span>
                <span className="font-heading text-xl font-bold text-accent">
                  {formatCurrency(result.totalSubsidy)}
                </span>
              </div>
            </div>
          </div>
          <p className="mt-3 text-xs text-text-light">
            Credited to your bank account after installation. We file all the paperwork.
          </p>
        </div>
      )}

      {/* Savings */}
      <div className="rounded-2xl border border-gray-200 bg-bg-white p-6">
        <h3 className="mb-3 flex items-center gap-2 font-heading text-sm font-semibold uppercase tracking-wider text-text-light">
          <TrendingDown className="h-4 w-4" />
          Your Savings
        </h3>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl bg-accent/5 p-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-accent">Monthly Savings</p>
            <p className="mt-1 font-heading text-2xl font-bold text-text">
              {formatCurrency(result.monthlySavings)}
            </p>
          </div>
          {result.annualGBI > 0 && (
            <div className="rounded-xl bg-secondary/5 p-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-secondary-light">
                GBI Income/Year
              </p>
              <p className="mt-1 font-heading text-2xl font-bold text-text">
                {formatCurrency(result.annualGBI)}
              </p>
              <p className="mt-0.5 text-xs text-text-light">For 5 years</p>
            </div>
          )}
          <div className="rounded-xl bg-primary/5 p-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-primary">
              Payback Period
            </p>
            <p className="mt-1 font-heading text-2xl font-bold text-text">
              {formatPayback(result.paybackYearsMin, result.paybackYearsMax)}
            </p>
          </div>
          <div className="rounded-xl bg-accent/5 p-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-accent">
              25-Year Total Savings
            </p>
            <p className="mt-1 font-heading text-2xl font-bold text-text">
              {formatCurrency(result.totalSavings25Years)}
            </p>
          </div>
        </div>
      </div>

      {/* Lead capture */}
      <CalculatorLeadCapture input={input} result={result} />

      {/* Disclaimer */}
      <p className="text-xs leading-relaxed text-text-light">
        <span className="font-semibold">Disclaimer:</span> These are approximate estimates based
        on average Delhi conditions and current central and Delhi government subsidy policy. Actual
        generation, subsidy, and savings may vary based on roof area, orientation, shading,
        equipment chosen, and current electricity tariff rates. Contact us for an accurate
        assessment.
      </p>
    </motion.div>
  );
}
