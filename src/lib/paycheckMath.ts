/** 2026 tax-year estimates for educational paycheck projections (not IRS Exact Method). */

export type PayType = "salary" | "hourly";
export type PayFrequency =
  | "weekly"
  | "biweekly"
  | "semimonthly"
  | "monthly"
  | "annually";
export type FilingStatus = "single" | "married_joint" | "married_separate" | "head";

export const PAY_PERIODS_PER_YEAR: Record<PayFrequency, number> = {
  weekly: 52,
  biweekly: 26,
  semimonthly: 24,
  monthly: 12,
  annually: 1,
};

export const PAY_FREQUENCY_LABELS: Record<PayFrequency, string> = {
  weekly: "Weekly",
  biweekly: "Biweekly",
  semimonthly: "Semi-monthly",
  monthly: "Monthly",
  annually: "Annually",
};

/** Approximate 2026 Social Security wage base */
export const SS_WAGE_BASE_2026 = 184_500;
export const SS_RATE = 0.062;
export const MEDICARE_RATE = 0.0145;
export const ADDITIONAL_MEDICARE_RATE = 0.009;
export const ADDITIONAL_MEDICARE_THRESHOLD: Record<FilingStatus, number> = {
  single: 200_000,
  married_joint: 250_000,
  married_separate: 125_000,
  head: 200_000,
};

/** Approximate 2026 standard deductions */
export const STANDARD_DEDUCTION_2026: Record<FilingStatus, number> = {
  single: 15_750,
  married_joint: 31_500,
  married_separate: 15_750,
  head: 23_625,
};

type Bracket = { upTo: number; rate: number };

/** Approximate 2026 federal income tax brackets (taxable income) */
const BRACKETS_SINGLE: Bracket[] = [
  { upTo: 12_400, rate: 0.1 },
  { upTo: 50_400, rate: 0.12 },
  { upTo: 105_700, rate: 0.22 },
  { upTo: 201_775, rate: 0.24 },
  { upTo: 256_225, rate: 0.32 },
  { upTo: 640_600, rate: 0.35 },
  { upTo: Infinity, rate: 0.37 },
];

const BRACKETS_JOINT: Bracket[] = [
  { upTo: 24_800, rate: 0.1 },
  { upTo: 100_800, rate: 0.12 },
  { upTo: 211_400, rate: 0.22 },
  { upTo: 403_550, rate: 0.24 },
  { upTo: 512_450, rate: 0.32 },
  { upTo: 768_700, rate: 0.35 },
  { upTo: Infinity, rate: 0.37 },
];

const BRACKETS_HOH: Bracket[] = [
  { upTo: 17_700, rate: 0.1 },
  { upTo: 67_450, rate: 0.12 },
  { upTo: 105_700, rate: 0.22 },
  { upTo: 201_750, rate: 0.24 },
  { upTo: 256_200, rate: 0.32 },
  { upTo: 640_600, rate: 0.35 },
  { upTo: Infinity, rate: 0.37 },
];

function bracketsFor(status: FilingStatus): Bracket[] {
  if (status === "married_joint") return BRACKETS_JOINT;
  if (status === "head") return BRACKETS_HOH;
  return BRACKETS_SINGLE;
}

export function federalIncomeTaxAnnual(taxableIncome: number, status: FilingStatus): number {
  if (taxableIncome <= 0) return 0;
  const brackets = bracketsFor(status);
  let tax = 0;
  let prev = 0;
  for (const b of brackets) {
    const slice = Math.min(taxableIncome, b.upTo) - prev;
    if (slice > 0) tax += slice * b.rate;
    if (taxableIncome <= b.upTo) break;
    prev = b.upTo;
  }
  return tax;
}

export type PaycheckInput = {
  payType: PayType;
  salaryAnnual: number;
  hourlyRate: number;
  hoursPerWeek: number;
  payFrequency: PayFrequency;
  filingStatus: FilingStatus;
  pretaxDeductionAnnual: number;
  posttaxDeductionPerPeriod: number;
  dependentsCreditAnnual: number;
};

export type PaycheckBreakdown = {
  periodsPerYear: number;
  grossPerPeriod: number;
  annualGross: number;
  pretaxPerPeriod: number;
  federalTaxableAnnual: number;
  federalIncomePerPeriod: number;
  socialSecurityPerPeriod: number;
  medicarePerPeriod: number;
  floridaStatePerPeriod: number;
  floridaLocalPerPeriod: number;
  posttaxPerPeriod: number;
  totalTaxesPerPeriod: number;
  netPerPeriod: number;
  annualNet: number;
  effectiveTaxRate: number;
};

export function calculatePaycheck(input: PaycheckInput): PaycheckBreakdown | null {
  const periods = PAY_PERIODS_PER_YEAR[input.payFrequency];
  if (!periods || periods < 1) return null;

  let annualGross = 0;
  if (input.payType === "salary") {
    if (!(input.salaryAnnual > 0)) return null;
    annualGross = input.salaryAnnual;
  } else {
    if (!(input.hourlyRate > 0) || !(input.hoursPerWeek > 0)) return null;
    annualGross = input.hourlyRate * input.hoursPerWeek * 52;
  }

  const pretaxAnnual = Math.max(0, input.pretaxDeductionAnnual);
  const pretaxCapped = Math.min(pretaxAnnual, annualGross);
  const ficaWagesAnnual = Math.max(0, annualGross - pretaxCapped);

  const ssAnnual = Math.min(ficaWagesAnnual, SS_WAGE_BASE_2026) * SS_RATE;
  let medicareAnnual = ficaWagesAnnual * MEDICARE_RATE;
  const addMedThreshold = ADDITIONAL_MEDICARE_THRESHOLD[input.filingStatus];
  if (ficaWagesAnnual > addMedThreshold) {
    medicareAnnual += (ficaWagesAnnual - addMedThreshold) * ADDITIONAL_MEDICARE_RATE;
  }

  const standardDeduction = STANDARD_DEDUCTION_2026[input.filingStatus];
  const federalTaxable = Math.max(0, annualGross - pretaxCapped - standardDeduction);
  let federalAnnual = federalIncomeTaxAnnual(federalTaxable, input.filingStatus);
  federalAnnual = Math.max(0, federalAnnual - Math.max(0, input.dependentsCreditAnnual));

  const floridaStateAnnual = 0;
  const floridaLocalAnnual = 0;

  const grossPerPeriod = annualGross / periods;
  const pretaxPerPeriod = pretaxCapped / periods;
  const federalIncomePerPeriod = federalAnnual / periods;
  const socialSecurityPerPeriod = ssAnnual / periods;
  const medicarePerPeriod = medicareAnnual / periods;
  const floridaStatePerPeriod = floridaStateAnnual / periods;
  const floridaLocalPerPeriod = floridaLocalAnnual / periods;
  const posttaxPerPeriod = Math.max(0, input.posttaxDeductionPerPeriod);

  const totalTaxesPerPeriod =
    federalIncomePerPeriod +
    socialSecurityPerPeriod +
    medicarePerPeriod +
    floridaStatePerPeriod +
    floridaLocalPerPeriod;

  const netPerPeriod = Math.max(
    0,
    grossPerPeriod - pretaxPerPeriod - totalTaxesPerPeriod - posttaxPerPeriod
  );
  const annualNet = netPerPeriod * periods;
  const effectiveTaxRate =
    annualGross > 0 ? (federalAnnual + ssAnnual + medicareAnnual) / annualGross : 0;

  return {
    periodsPerYear: periods,
    grossPerPeriod,
    annualGross,
    pretaxPerPeriod,
    federalTaxableAnnual: federalTaxable,
    federalIncomePerPeriod,
    socialSecurityPerPeriod,
    medicarePerPeriod,
    floridaStatePerPeriod,
    floridaLocalPerPeriod,
    posttaxPerPeriod,
    totalTaxesPerPeriod,
    netPerPeriod,
    annualNet,
    effectiveTaxRate,
  };
}

export function formatMoney(n: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
  }).format(n);
}

export function formatPercent(n: number): string {
  return `${(n * 100).toFixed(1)}%`;
}
