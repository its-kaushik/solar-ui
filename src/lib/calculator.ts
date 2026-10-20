import type { CalculatorInput, CalculatorResult } from '@/types';

const CONSTANTS = {
  // Generation
  UNITS_PER_KW_PER_MONTH: 120, // 4 units/day × 30 days (Delhi average)

  // Cost per KW (indicative, before subsidy) — used for payback only, never shown
  COST_PER_KW_MIN: 55000,
  COST_PER_KW_MAX: 65000,

  // Central Subsidy (PM Surya Ghar) — Residential only
  CENTRAL_SUBSIDY: {
    RATE_FIRST_2KW: 30000, // Rs per KW for first 2 KW
    RATE_2_TO_3KW: 18000,  // Rs per KW for 2-3 KW
    MAX_CAPACITY_KW: 3,
    MAX_AMOUNT: 78000,
  },

  // Delhi State Capital Subsidy — Delhi residential only (Delhi Solar Energy
  // Policy, amended Sept 2026). Matches the central subsidy at 3 KW:
  // Rs 52,000 for 2 KW, Rs 78,000 for 3 KW and above.
  STATE_SUBSIDY: {
    RATE_PER_KW: 26000,
    MAX_CAPACITY_KW: 3,
  },

  // Generation-Based Incentive (GBI) — Delhi only
  GBI: {
    RATE_UPTO_3KW: 3,    // Rs per kWh
    RATE_3_TO_10KW: 2,    // Rs per kWh
    DURATION_YEARS: 5,
  },

  // BSES electricity rate (weighted average)
  AVG_ELECTRICITY_RATE: 7,

  // System lifespan
  PANEL_LIFESPAN_YEARS: 25,

  // Commercial threshold
  COMMERCIAL_QUOTE_THRESHOLD_KW: 15,
};

export function calculateSystemSize(monthlyUnits: number): number {
  const rawSize = monthlyUnits / CONSTANTS.UNITS_PER_KW_PER_MONTH;
  // Round up to nearest 0.5 KW
  return Math.ceil(rawSize * 2) / 2;
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

export function calculateStateSubsidy(
  systemSizeKW: number,
  area: 'south-delhi' | 'faridabad' | 'gurgaon',
  propertyType: 'residential' | 'commercial'
): number {
  if (area !== 'south-delhi' || propertyType === 'commercial') return 0;

  const cappedSize = Math.min(systemSizeKW, CONSTANTS.STATE_SUBSIDY.MAX_CAPACITY_KW);
  return cappedSize * CONSTANTS.STATE_SUBSIDY.RATE_PER_KW;
}

export function calculateGBI(
  systemSizeKW: number,
  area: 'south-delhi' | 'faridabad' | 'gurgaon'
): number {
  if (area !== 'south-delhi') return 0;

  const annualGeneration = systemSizeKW * CONSTANTS.UNITS_PER_KW_PER_MONTH * 12;

  const ratePerKWh =
    systemSizeKW <= 3
      ? CONSTANTS.GBI.RATE_UPTO_3KW
      : CONSTANTS.GBI.RATE_3_TO_10KW;

  return annualGeneration * ratePerKWh;
}

export function calculate(input: CalculatorInput): CalculatorResult {
  const systemSizeKW = calculateSystemSize(input.monthlyUnits);

  const showContactForQuote =
    input.propertyType === 'commercial' &&
    systemSizeKW > CONSTANTS.COMMERCIAL_QUOTE_THRESHOLD_KW;

  const estimatedCostMin = systemSizeKW * CONSTANTS.COST_PER_KW_MIN;
  const estimatedCostMax = systemSizeKW * CONSTANTS.COST_PER_KW_MAX;

  const centralSubsidy = calculateCentralSubsidy(systemSizeKW, input.propertyType);
  const stateSubsidy = calculateStateSubsidy(systemSizeKW, input.area, input.propertyType);
  const totalSubsidy = centralSubsidy + stateSubsidy;

  const netCostMin = Math.max(0, estimatedCostMin - totalSubsidy);
  const netCostMax = Math.max(0, estimatedCostMax - totalSubsidy);

  const monthlyGeneration = systemSizeKW * CONSTANTS.UNITS_PER_KW_PER_MONTH;
  const monthlySavings = monthlyGeneration * CONSTANTS.AVG_ELECTRICITY_RATE;
  const annualSavings = monthlySavings * 12;

  const annualGBI = calculateGBI(systemSizeKW, input.area);

  const totalAnnualBenefit = annualSavings + annualGBI;
  const paybackYearsMin = totalAnnualBenefit > 0 ? netCostMin / totalAnnualBenefit : 0;
  const paybackYearsMax = totalAnnualBenefit > 0 ? netCostMax / totalAnnualBenefit : 0;

  const totalSavings25Years =
    annualSavings * CONSTANTS.PANEL_LIFESPAN_YEARS +
    annualGBI * CONSTANTS.GBI.DURATION_YEARS -
    netCostMin;

  return {
    systemSizeKW,
    estimatedCostMin,
    estimatedCostMax,
    centralSubsidy,
    stateSubsidy,
    totalSubsidy,
    netCostMin,
    netCostMax,
    monthlyGeneration,
    monthlySavings,
    annualGBI,
    paybackYearsMin: Math.round(paybackYearsMin * 10) / 10,
    paybackYearsMax: Math.round(paybackYearsMax * 10) / 10,
    totalSavings25Years,
    showContactForQuote,
  };
}
