import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaButton from "@/components/CtaButton";
import FaqSection from "@/components/FaqSection";
import { BRAND_FEATURE_3, OG_IMAGE, SITE_NAME, SITE_ORIGIN } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "How It Works — Florida Paycheck Calculator",
  description:
    "Learn how Florida Paycheck Calculator estimates take-home pay: gross wages, pre-tax deductions, federal tax, FICA, and $0 Florida state tax.",
  alternates: { canonical: `${SITE_ORIGIN}/how-it-works` },
  openGraph: {
    title: "How It Works — Florida Paycheck Calculator",
    description: "Step-by-step: from wages to Florida net pay.",
    url: `${SITE_ORIGIN}/how-it-works`,
    siteName: SITE_NAME,
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "How Florida Paycheck Calculator works" }],
  },
};

const faqs = [
  {
    question: "Does this use IRS Publication 15-T Exact Method tables?",
    answer:
      "No. We use an educational annualization approach with approximate brackets and standard deduction. Employer payroll systems use official IRS tables and your exact W-4.",
  },
  {
    question: "Why might my real stub differ?",
    answer:
      "Year-to-date wages, bonuses, multiple jobs, supplemental rates, local benefits, garnishments, and W-4 elections can change withholding. Always treat our output as an estimate.",
  },
];

const steps = [
  {
    title: "1. Capture gross pay",
    body: "Salary is divided by periods per year. Hourly pay is rate × weekly hours × 52, then divided by your selected frequency.",
  },
  {
    title: "2. Apply pre-tax deductions",
    body: "Annual pre-tax amounts (for example 401(k) or HSA) reduce estimated federal taxable wages and FICA wages in our model.",
  },
  {
    title: "3. Estimate federal income tax",
    body: "We subtract an approximate standard deduction, apply federal brackets for your filing status, then spread the annual tax across pay periods.",
  },
  {
    title: "4. Add FICA and Florida zeros",
    body: "Social Security (6.2% up to wage base) and Medicare (1.45%, plus Additional Medicare when applicable) are included. Florida state and local income tax stay $0.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <Breadcrumbs
        items={[{ label: "Home", href: "/" }, { label: "How It Works", href: "/how-it-works" }]}
      />
      <div className="container mx-auto max-w-4xl px-4 pb-12 pt-6">
        <h1 className="mb-3 font-display text-3xl font-bold text-ink md:text-4xl">
          How Florida Paycheck Calculator works
        </h1>
        <p className="mb-10 text-lg text-ink/75">
          Transparent math for Florida take-home estimates — not a black-box payroll pitch.
        </p>

        <div className="relative mb-12 aspect-video overflow-hidden rounded-2xl border border-ink/10">
          <Image
            src={BRAND_FEATURE_3}
            alt="Diagram-style view of Florida paycheck calculation steps"
            fill
            sizes="(max-width: 768px) 100vw, 800px"
            className="object-cover"
            priority
          />
        </div>

        <ol className="mb-12 space-y-8">
          {steps.map((step) => (
            <li key={step.title}>
              <h2 className="mb-2 font-display text-2xl font-bold text-ink">{step.title}</h2>
              <p className="leading-relaxed text-ink/75">{step.body}</p>
            </li>
          ))}
        </ol>

        <p className="mb-8 leading-relaxed text-ink/75">
          For tax-context reading, see{" "}
          <Link href="/blog/how-florida-paycheck-taxes-work" className="text-violet underline">
            how Florida paycheck taxes work
          </Link>{" "}
          and{" "}
          <Link href="/blog/does-florida-have-state-income-tax" className="text-violet underline">
            does Florida have state income tax
          </Link>
          .
        </p>

        <FaqSection title="How-it-works FAQs" items={faqs} />

        <div className="mt-12 text-center">
          <CtaButton href="/#calculator" ariaLabel="Open Florida paycheck calculator">
            OPEN CALCULATOR
          </CtaButton>
        </div>
      </div>
    </>
  );
}
