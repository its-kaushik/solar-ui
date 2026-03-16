'use client';

import { IndianRupee, Zap, TrendingDown, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import type { CalculatorResult } from '@/types';
import CTAButton from '@/components/CTAButton';

interface CalculatorResultsProps {
  result: CalculatorResult;
  onGetQuote: () => void;
}

function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
}

export default function CalculatorResults({ result, onGetQuote }: CalculatorResultsProps) {
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

      {/* Cost breakdown */}
      <div className="rounded-2xl border border-gray-200 bg-bg-white p-6">
        <h3 className="mb-3 flex items-center gap-2 font-heading text-sm font-semibold uppercase tracking-wider text-text-light">
          <IndianRupee className="h-4 w-4" />
          Cost Breakdown
        </h3>
        <div className="space-y-2.5">
          <div className="flex items-center justify-between text-sm">
            <span className="text-text-light">Estimated System Cost</span>
            <span className="font-semibold text-text">
              {formatCurrency(result.estimatedCostMin)} – {formatCurrency(result.estimatedCostMax)}
            </span>
          </div>
          {result.centralSubsidy > 0 && (
            <div className="flex items-center justify-between text-sm">
              <span className="text-text-light">PM Surya Ghar Subsidy</span>
              <span className="font-semibold text-accent">
                -{formatCurrency(result.centralSubsidy)}
              </span>
            </div>
          )}
          {result.stateSubsidy > 0 && (
            <div className="flex items-center justify-between text-sm">
              <span className="text-text-light">Delhi State Subsidy</span>
              <span className="font-semibold text-accent">
                -{formatCurrency(result.stateSubsidy)}
              </span>
            </div>
          )}
          {result.totalSubsidy > 0 && (
            <div className="border-t border-gray-100 pt-2.5">
              <div className="flex items-center justify-between text-sm">
                <span className="font-semibold text-text">Total Subsidy</span>
                <span className="font-bold text-accent">
                  -{formatCurrency(result.totalSubsidy)}
                </span>
              </div>
            </div>
          )}
          <div className="border-t border-gray-200 pt-2.5">
            <div className="flex items-center justify-between">
              <span className="font-heading text-base font-bold text-text">Your Net Cost</span>
              <span className="font-heading text-xl font-bold text-primary">
                {formatCurrency(result.netCostMin)} – {formatCurrency(result.netCostMax)}
              </span>
            </div>
          </div>
        </div>
      </div>

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
              {result.paybackYearsMin} – {result.paybackYearsMax} years
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

      {/* CTA */}
      <div className="flex flex-col gap-3 rounded-2xl bg-primary/5 p-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-heading text-base font-bold text-text">
            Ready to get an exact quote?
          </p>
          <p className="mt-0.5 text-sm text-text-light">
            Free site survey. No obligation.
          </p>
        </div>
        <button
          onClick={onGetQuote}
          className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-primary px-6 font-heading text-sm font-semibold text-text-inverse transition-colors hover:bg-primary-light"
        >
          Get Exact Quote
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>

      {/* Disclaimer */}
      <p className="text-xs leading-relaxed text-text-light">
        <span className="font-semibold">Disclaimer:</span> These are approximate estimates based
        on average Delhi conditions. Actual system cost, generation, and savings may vary based on
        roof area, orientation, shading, equipment chosen, and current electricity tariff rates.
        Contact us for an accurate assessment.
      </p>
    </motion.div>
  );
}
