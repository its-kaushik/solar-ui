import type { CalculatorInput, CalculatorResult } from '@/types';

const CONSTANTS = {
  // Generation — South Haryana: a 1 kW rooftop system yields ~1,460 units/year (~4 units/day)
  ANNUAL_UNITS_PER_KW: 1460,

  // Indicative installed cost per kW (before subsidy), tiered by system size.
  // The first tier whose `maxKW` is >= the system size applies
  // (systems below 2 kW fall into the first tier).
  COST_TIERS: [
    { maxKW: 2, min: 70000, max: 75000 },        // up to 2 kW
    { maxKW: 3, min: 61000, max: 70000 },        // > 2 to 3 kW
    { maxKW: 4, min: 56000, max: 66000 },        // > 3 to 4 kW
    { maxKW: 5, min: 53000, max: 58000 },        // > 4 to 5 kW
    { maxKW: 6, min: 53000, max: 57000 },        // > 5 to 6 kW
    { maxKW: 7, min: 50000, max: 52000 },        // > 6 to 7 kW
    { maxKW: 8, min: 48000, max: 50000 },        // > 7 to 8 kW
    { maxKW: 9, min: 46000, max: 48000 },        // > 8 to 9 kW
    { maxKW: 10, min: 46000, max: 50000 },       // > 9 to 10 kW
    { maxKW: 20, min: 43000, max: 45000 },       // > 10 to 20 kW
    { maxKW: 30, min: 38000, max: 41000 },       // > 20 to 30 kW
    { maxKW: Infinity, min: 35000, max: 35000 }, // above 30 kW
  ],

  // Hybrid systems (on-grid + battery storage) — installed cost per kW range.
  // Independent of the tiered on-grid schedule above.
  HYBRID_COST_PER_KW: { min: 78000, max: 87000 },

  // Central Subsidy (PM Surya Ghar) — Residential only, nationwide
  CENTRAL_SUBSIDY: {
    RATE_FIRST_2KW: 30000, // Rs per KW for first 2 KW
    RATE_2_TO_3KW: 18000,  // Rs per KW for the 3rd KW
    MAX_CAPACITY_KW: 3,
    MAX_AMOUNT: 78000,
  },

  // DHBVN domestic tariff — weighted average across HERC FY2025-26 slabs
  AVG_ELECTRICITY_RATE: 7,

  // System lifespan
  PANEL_LIFESPAN_YEARS: 25,

  // Commercial threshold
  COMMERCIAL_QUOTE_THRESHOLD_KW: 15,
};

export function calculateSystemSize(monthlyUnits: number): number {
  // Size from annual consumption: 1 kW generates ~1,460 units/year
  const annualUnits = monthlyUnits * 12;
  const rawSize = annualUnits / CONSTANTS.ANNUAL_UNITS_PER_KW;
  // Round up to nearest 0.5 KW
  return Math.ceil(rawSize * 2) / 2;
}

export function getCostPerKW(systemSizeKW: number): { min: number; max: number } {
  const tier =
    CONSTANTS.COST_TIERS.find((t) => systemSizeKW <= t.maxKW) ??
    CONSTANTS.COST_TIERS[CONSTANTS.COST_TIERS.length - 1];
  return { min: tier.min, max: tier.max };
}

export function calculateCentralSubsidy(
  systemSizeKW: number,
  propertyType: 'residential' | 'commercial'
): number {
  if (propertyType === 'commercial') return 0;

  const cappedSize = Math.min(systemSizeKW, CONSTANTS.CENTRAL_SUBSIDY.MAX_CAPACITY_KW);

  if (cappedSize <= 2) {
    return cappedSize * CONSTANTS.CENTRAL_SUBSIDY.RATE_FIRST_2KW;
  }

  // First 2 KW at 30,000/KW + remaining at 18,000/KW
  const first2KW = 2 * CONSTANTS.CENTRAL_SUBSIDY.RATE_FIRST_2KW;
  const remaining = (cappedSize - 2) * CONSTANTS.CENTRAL_SUBSIDY.RATE_2_TO_3KW;
  return first2KW + remaining;
}

export function calculate(input: CalculatorInput): CalculatorResult {
  const systemSizeKW = calculateSystemSize(input.monthlyUnits);

  const showContactForQuote =
    input.propertyType === 'commercial' &&
    systemSizeKW > CONSTANTS.COMMERCIAL_QUOTE_THRESHOLD_KW;

  const isHybrid = input.systemType === 'hybrid';

  let estimatedCostMin: number;
  let estimatedCostMax: number;
  if (isHybrid) {
    // Hybrid: per-kW cost range
    estimatedCostMin = systemSizeKW * CONSTANTS.HYBRID_COST_PER_KW.min;
    estimatedCostMax = systemSizeKW * CONSTANTS.HYBRID_COST_PER_KW.max;
  } else {
    const { min: costPerKWMin, max: costPerKWMax } = getCostPerKW(systemSizeKW);
    estimatedCostMin = systemSizeKW * costPerKWMin;
    estimatedCostMax = systemSizeKW * costPerKWMax;
  }

  const centralSubsidy = calculateCentralSubsidy(systemSizeKW, input.propertyType);

  const netCostMin = Math.max(0, estimatedCostMin - centralSubsidy);
  const netCostMax = Math.max(0, estimatedCostMax - centralSubsidy);

  const monthlyGeneration = Math.round((systemSizeKW * CONSTANTS.ANNUAL_UNITS_PER_KW) / 12);
  const monthlySavings = monthlyGeneration * CONSTANTS.AVG_ELECTRICITY_RATE;
  const annualSavings = monthlySavings * 12;

  const paybackYearsMin = annualSavings > 0 ? netCostMin / annualSavings : 0;
  const paybackYearsMax = annualSavings > 0 ? netCostMax / annualSavings : 0;

  const totalSavings25Years =
    annualSavings * CONSTANTS.PANEL_LIFESPAN_YEARS - netCostMin;

  return {
    systemSizeKW,
    estimatedCostMin,
    estimatedCostMax,
    centralSubsidy,
    netCostMin,
    netCostMax,
    monthlyGeneration,
    monthlySavings,
    paybackYearsMin: Math.round(paybackYearsMin * 10) / 10,
    paybackYearsMax: Math.round(paybackYearsMax * 10) / 10,
    totalSavings25Years,
    showContactForQuote,
  };
}
