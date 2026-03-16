'use client';

import { useState } from 'react';
import { Calculator } from 'lucide-react';
import type { CalculatorInput } from '@/types';

interface CalculatorFormProps {
  onCalculate: (input: CalculatorInput) => void;
}

export default function CalculatorForm({ onCalculate }: CalculatorFormProps) {
  const [monthlyUnits, setMonthlyUnits] = useState('');
  const [propertyType, setPropertyType] = useState<'residential' | 'commercial' | ''>('');
  const [area, setArea] = useState<'south-delhi' | 'faridabad' | 'gurgaon' | ''>('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    const units = Number(monthlyUnits);
    if (!monthlyUnits || isNaN(units) || units < 50 || units > 50000) {
      newErrors.monthlyUnits = 'Please enter a valid number between 50 and 50,000';
    }
    if (!propertyType) {
      newErrors.propertyType = 'Please select a property type';
    }
    if (!area) {
      newErrors.area = 'Please select your area';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    onCalculate({
      monthlyUnits: Number(monthlyUnits),
      propertyType: propertyType as 'residential' | 'commercial',
      area: area as 'south-delhi' | 'faridabad' | 'gurgaon',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Monthly units */}
      <div>
        <label htmlFor="monthlyUnits" className="mb-1 block text-sm font-medium text-text">
          Monthly Electricity Consumption (units/kWh) <span className="text-red-500">*</span>
        </label>
        <input
          type="number"
          id="monthlyUnits"
          min={50}
          max={50000}
          value={monthlyUnits}
          onChange={(e) => setMonthlyUnits(e.target.value)}
          placeholder="e.g., 300"
          className="h-12 w-full rounded-xl border border-gray-300 bg-bg-white px-4 text-base text-text transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
        />
        {errors.monthlyUnits && (
          <p className="mt-1 text-xs text-red-500">{errors.monthlyUnits}</p>
        )}
        <p className="mt-1 text-xs text-text-light">
          Check your BSES bill for &ldquo;Units Consumed&rdquo; in the current billing period.
        </p>
      </div>

      {/* Property type */}
      <div>
        <label htmlFor="propertyType" className="mb-1 block text-sm font-medium text-text">
          Property Type <span className="text-red-500">*</span>
        </label>
        <select
          id="propertyType"
          value={propertyType}
          onChange={(e) => setPropertyType(e.target.value as 'residential' | 'commercial' | '')}
          className="h-12 w-full rounded-xl border border-gray-300 bg-bg-white px-4 text-base text-text transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
        >
          <option value="">Select property type</option>
          <option value="residential">Residential</option>
          <option value="commercial">Commercial</option>
        </select>
        {errors.propertyType && (
          <p className="mt-1 text-xs text-red-500">{errors.propertyType}</p>
        )}
      </div>

      {/* Area */}
      <div>
        <label htmlFor="area" className="mb-1 block text-sm font-medium text-text">
          Area <span className="text-red-500">*</span>
        </label>
        <select
          id="area"
          value={area}
          onChange={(e) => setArea(e.target.value as 'south-delhi' | 'faridabad' | 'gurgaon' | '')}
          className="h-12 w-full rounded-xl border border-gray-300 bg-bg-white px-4 text-base text-text transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
        >
          <option value="">Select your area</option>
          <option value="south-delhi">South Delhi (BSES Rajdhani)</option>
          <option value="faridabad">Faridabad</option>
          <option value="gurgaon">Gurgaon</option>
        </select>
        {errors.area && (
          <p className="mt-1 text-xs text-red-500">{errors.area}</p>
        )}
        <p className="mt-1 text-xs text-text-light">
          PM Surya Ghar & Delhi state subsidy available only for South Delhi (BSES Rajdhani area).
        </p>
      </div>

      <button
        type="submit"
        className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 font-heading text-base font-semibold text-text-inverse transition-colors hover:bg-primary-light sm:w-auto"
      >
        <Calculator className="h-5 w-5" />
        Calculate Savings
      </button>
    </form>
  );
}
