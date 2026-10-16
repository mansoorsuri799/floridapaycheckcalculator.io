"use client";

import { useId, useMemo, useState } from "react";
import {
  FilingStatus,
  PAY_FREQUENCY_LABELS,
  PayFrequency,
  PayType,
  calculatePaycheck,
  formatMoney,
  formatPercent,
} from "@/lib/paycheckMath";

type PaycheckCalculatorProps = {
  title?: string;
  subtitle?: string;
  titleAs?: "h1" | "h2";
  framed?: boolean;
  showHeader?: boolean;
  defaultPayType?: PayType;
  defaultFrequency?: PayFrequency;
  defaultSalary?: string;
  defaultHourly?: string;
  defaultHours?: string;
};

const FILING_LABELS: Record<FilingStatus, string> = {
  single: "Single",
  married_joint: "Married filing jointly",
  married_separate: "Married filing separately",
  head: "Head of household",
};

export default function PaycheckCalculator({
  title = "Florida paycheck calculator",
  subtitle = "Estimate take-home pay in Florida after federal tax and FICA — $0 state income tax.",
  titleAs = "h2",
  framed = false,
  showHeader = false,
  defaultPayType = "salary",
  defaultFrequency = "biweekly",
  defaultSalary = "75000",
  defaultHourly = "25",
  defaultHours = "40",
}: PaycheckCalculatorProps) {
  const formId = useId();
  const [payType, setPayType] = useState<PayType>(defaultPayType);
  const [frequency, setFrequency] = useState<PayFrequency>(defaultFrequency);
  const [salary, setSalary] = useState(defaultSalary);
  const [hourly, setHourly] = useState(defaultHourly);
  const [hours, setHours] = useState(defaultHours);
  const [filing, setFiling] = useState<FilingStatus>("single");
  const [pretax, setPretax] = useState("0");
  const [posttax, setPosttax] = useState("0");
  const [dependentsCredit, setDependentsCredit] = useState("0");

  const TitleTag = titleAs;

  const result = useMemo(() => {
    return calculatePaycheck({
      payType,
      salaryAnnual: Number(salary) || 0,
      hourlyRate: Number(hourly) || 0,
      hoursPerWeek: Number(hours) || 0,
      payFrequency: frequency,
      filingStatus: filing,
      pretaxDeductionAnnual: Number(pretax) || 0,
      posttaxDeductionPerPeriod: Number(posttax) || 0,
      dependentsCreditAnnual: Number(dependentsCredit) || 0,
    });
  }, [payType, salary, hourly, hours, frequency, filing, pretax, posttax, dependentsCredit]);

  const shellClass = framed
    ? "overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-[0_24px_60px_-28px_rgba(255,122,47,0.35)]"
    : "";

  return (
    <div className={shellClass}>
      {showHeader && (
        <div className="mb-5">
          <TitleTag className="font-display text-2xl font-bold text-ink">{title}</TitleTag>
          <p className="mt-1 text-sm text-ink/70">{subtitle}</p>
        </div>
      )}

      <div className="grid gap-6 lg:grid-cols-2">
        <form
          className="space-y-4 rounded-2xl border border-ink/10 bg-white/90 p-4 sm:p-5"
          onSubmit={(e) => e.preventDefault()}
          aria-labelledby={`${formId}-inputs`}
        >
          <h3 id={`${formId}-inputs`} className="font-display text-lg font-semibold text-ink">
            Your pay details
          </h3>

          <div>
            <span className="calc-label">Pay type</span>
            <div className="flex flex-wrap gap-2">
              {([
                ["salary", "Salary"],
                ["hourly", "Hourly"],
              ] as const).map(([value, label]) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setPayType(value)}
                  className={`rounded-lg px-3 py-2 text-sm font-semibold transition ${
                    payType === value
                      ? "bg-violet text-white"
                      : "border border-ink/15 bg-brand text-ink hover:border-violet/50"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {payType === "salary" ? (
            <div>
              <label className="calc-label" htmlFor={`${formId}-salary`}>
                Annual salary (USD)
              </label>
              <input
                id={`${formId}-salary`}
                className="calc-input"
                inputMode="decimal"
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
              />
            </div>
          ) : (
            <div className="grid gap-3 sm:grid-cols-2">
              <div>
                <label className="calc-label" htmlFor={`${formId}-hourly`}>
                  Hourly rate (USD)
                </label>
                <input
                  id={`${formId}-hourly`}
                  className="calc-input"
                  inputMode="decimal"
                  value={hourly}
                  onChange={(e) => setHourly(e.target.value)}
                />
              </div>
              <div>
                <label className="calc-label" htmlFor={`${formId}-hours`}>
                  Hours per week
                </label>
                <input
                  id={`${formId}-hours`}
                  className="calc-input"
                  inputMode="decimal"
                  value={hours}
                  onChange={(e) => setHours(e.target.value)}
                />
              </div>
            </div>
          )}

          <div>
            <label className="calc-label" htmlFor={`${formId}-freq`}>
              Pay frequency
            </label>
            <select
              id={`${formId}-freq`}
              className="calc-input"
              value={frequency}
              onChange={(e) => setFrequency(e.target.value as PayFrequency)}
            >
              {(Object.keys(PAY_FREQUENCY_LABELS) as PayFrequency[]).map((key) => (
                <option key={key} value={key}>
                  {PAY_FREQUENCY_LABELS[key]}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="calc-label" htmlFor={`${formId}-filing`}>
              Federal filing status
            </label>
            <select
              id={`${formId}-filing`}
              className="calc-input"
              value={filing}
              onChange={(e) => setFiling(e.target.value as FilingStatus)}
            >
              {(Object.keys(FILING_LABELS) as FilingStatus[]).map((key) => (
                <option key={key} value={key}>
                  {FILING_LABELS[key]}
                </option>
              ))}
            </select>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <div>
              <label className="calc-label" htmlFor={`${formId}-pretax`}>
                Pre-tax deductions / year
              </label>
              <input
                id={`${formId}-pretax`}
                className="calc-input"
                inputMode="decimal"
                value={pretax}
                onChange={(e) => setPretax(e.target.value)}
                placeholder="401(k), HSA, medical"
              />
            </div>
            <div>
              <label className="calc-label" htmlFor={`${formId}-posttax`}>
                Post-tax / paycheck
              </label>
              <input
                id={`${formId}-posttax`}
                className="calc-input"
                inputMode="decimal"
                value={posttax}
                onChange={(e) => setPosttax(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label className="calc-label" htmlFor={`${formId}-credit`}>
              Estimated annual tax credits
            </label>
            <input
              id={`${formId}-credit`}
              className="calc-input"
              inputMode="decimal"
              value={dependentsCredit}
              onChange={(e) => setDependentsCredit(e.target.value)}
              placeholder="Child tax credit, etc."
            />
          </div>

          <p className="text-xs leading-relaxed text-ink/55">
            Estimates use approximate 2026 federal brackets, standard deduction, Social Security
            (6.2%), and Medicare (1.45%). Florida state and local income tax are $0. Not tax advice.
          </p>
        </form>

        <div
          className="rounded-2xl border border-ink/10 bg-gradient-to-br from-white to-brand-deep/40 p-4 sm:p-5"
          aria-live="polite"
        >
          <h3 className="font-display text-lg font-semibold text-ink">Take-home estimate</h3>
          {!result ? (
            <p className="mt-4 text-sm text-ink/65">Enter a valid salary or hourly rate to see results.</p>
          ) : (
            <>
              <p className="mt-3 font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
                {formatMoney(result.netPerPeriod)}
              </p>
              <p className="mt-1 text-sm text-ink/65">
                net per {PAY_FREQUENCY_LABELS[frequency].toLowerCase()} paycheck ·{" "}
                {formatMoney(result.annualNet)} / year
              </p>

              <dl className="mt-6 space-y-2.5 text-sm">
                {[
                  ["Gross pay", formatMoney(result.grossPerPeriod)],
                  ["Pre-tax deductions", `− ${formatMoney(result.pretaxPerPeriod)}`],
                  ["Federal income tax", `− ${formatMoney(result.federalIncomePerPeriod)}`],
                  ["Social Security (6.2%)", `− ${formatMoney(result.socialSecurityPerPeriod)}`],
                  ["Medicare (1.45%)", `− ${formatMoney(result.medicarePerPeriod)}`],
                  ["Florida state income tax", formatMoney(0)],
                  ["Florida local income tax", formatMoney(0)],
                  ["Post-tax deductions", `− ${formatMoney(result.posttaxPerPeriod)}`],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="flex items-center justify-between gap-3 border-b border-ink/8 pb-2"
                  >
                    <dt className="text-ink/70">{label}</dt>
                    <dd className="font-semibold text-ink">{value}</dd>
                  </div>
                ))}
                <div className="flex items-center justify-between gap-3 pt-1">
                  <dt className="font-semibold text-ink">Net take-home</dt>
                  <dd className="font-display text-lg font-bold text-teal">{formatMoney(result.netPerPeriod)}</dd>
                </div>
              </dl>

              <p className="mt-4 text-xs text-ink/55">
                Effective federal + FICA rate ≈ {formatPercent(result.effectiveTaxRate)} of gross.
                Annual gross {formatMoney(result.annualGross)}.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
