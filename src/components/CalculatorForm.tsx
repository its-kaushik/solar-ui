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
  const [systemType, setSystemType] = useState<'on-grid' | 'hybrid' | ''>('');
  const [area, setArea] = useState<'faridabad' | 'palwal' | 'gurugram' | ''>('');
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
    if (!systemType) {
      newErrors.systemType = 'Please select a system type';
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
      systemType: systemType as 'on-grid' | 'hybrid',
      area: area as 'faridabad' | 'palwal' | 'gurugram',
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
          Check your DHBVN bill for &ldquo;Units Consumed&rdquo; in the current billing period.
        </p>
      </div>

      {/* Property type */}
      <fieldset>
        <legend className="mb-1.5 block text-sm font-medium text-text">
          Property Type <span className="text-red-500">*</span>
        </legend>
        <div className="grid grid-cols-2 gap-3">
          {[
            { value: 'residential', label: 'Residential' },
            { value: 'commercial', label: 'Commercial' },
          ].map((opt) => (
            <label
              key={opt.value}
              className={`flex cursor-pointer items-center justify-center rounded-xl border px-4 py-3 text-sm font-medium transition-colors ${
                propertyType === opt.value
                  ? 'border-primary bg-primary/5 text-primary'
                  : 'border-gray-300 bg-bg-white text-text hover:border-primary/50'
              }`}
            >
              <input
                type="radio"
                name="propertyType"
                value={opt.value}
                checked={propertyType === opt.value}
                onChange={(e) => setPropertyType(e.target.value as 'residential' | 'commercial')}
                className="sr-only"
              />
              {opt.label}
            </label>
          ))}
        </div>
        {errors.propertyType && (
          <p className="mt-1 text-xs text-red-500">{errors.propertyType}</p>
        )}
      </fieldset>

      {/* System type */}
      <fieldset>
        <legend className="mb-1.5 block text-sm font-medium text-text">
          System Type <span className="text-red-500">*</span>
        </legend>
        <div className="grid grid-cols-2 gap-3">
          {[
            { value: 'on-grid', label: 'On-Grid', hint: 'Grid-tied, no battery' },
            { value: 'hybrid', label: 'Hybrid', hint: 'With battery backup' },
          ].map((opt) => (
            <label
              key={opt.value}
              className={`flex cursor-pointer flex-col items-center justify-center rounded-xl border px-4 py-3 text-center transition-colors ${
                systemType === opt.value
                  ? 'border-primary bg-primary/5 text-primary'
                  : 'border-gray-300 bg-bg-white text-text hover:border-primary/50'
              }`}
            >
              <input
                type="radio"
                name="systemType"
                value={opt.value}
                checked={systemType === opt.value}
                onChange={(e) => setSystemType(e.target.value as 'on-grid' | 'hybrid')}
                className="sr-only"
              />
              <span className="text-sm font-medium">{opt.label}</span>
              <span className="mt-0.5 text-xs text-text-light">{opt.hint}</span>
            </label>
          ))}
        </div>
        {errors.systemType && (
          <p className="mt-1 text-xs text-red-500">{errors.systemType}</p>
        )}
        <p className="mt-1 text-xs text-text-light">
          Hybrid systems add battery storage for power backup, at a higher per-kW cost.
        </p>
      </fieldset>

      {/* Area */}
      <div>
        <label htmlFor="area" className="mb-1 block text-sm font-medium text-text">
          Area <span className="text-red-500">*</span>
        </label>
        <select
          id="area"
          value={area}
          onChange={(e) => setArea(e.target.value as 'faridabad' | 'palwal' | 'gurugram' | '')}
          className="h-12 w-full rounded-xl border border-gray-300 bg-bg-white px-4 text-base text-text transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
        >
          <option value="">Select your area</option>
          <option value="faridabad">Faridabad</option>
          <option value="palwal">Palwal</option>
          <option value="gurugram">Gurugram</option>
        </select>
        {errors.area && (
          <p className="mt-1 text-xs text-red-500">{errors.area}</p>
        )}
        <p className="mt-1 text-xs text-text-light">
          PM Surya Ghar central subsidy applies to residential consumers across DHBVN areas.
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
