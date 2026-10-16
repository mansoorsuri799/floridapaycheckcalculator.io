import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import PaycheckCalculator from "@/components/PaycheckCalculator";
import FaqSection from "@/components/FaqSection";
import CtaButton from "@/components/CtaButton";
import { OG_IMAGE, SITE_NAME, SITE_ORIGIN } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Florida Salary Paycheck Calculator — Net Pay",
  description:
    "Free Florida salary paycheck calculator. Split annual salary into weekly, biweekly, or monthly take-home pay after federal tax and FICA.",
  alternates: { canonical: `${SITE_ORIGIN}/salary-paycheck-calculator` },
  openGraph: {
    title: "Florida Salary Paycheck Calculator — Net Pay",
    description: "Estimate Florida salaried take-home pay with $0 state income tax.",
    url: `${SITE_ORIGIN}/salary-paycheck-calculator`,
    siteName: SITE_NAME,
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Florida salary paycheck calculator" }],
  },
};

const faqs = [
  {
    question: "How is a Florida salary paycheck calculated?",
    answer:
      "Annual salary is divided by pay periods (for example 26 for biweekly). Pre-tax deductions reduce taxable wages, then approximate federal income tax and FICA are subtracted. Florida state income tax is $0.",
  },
  {
    question: "Should I use gross or net salary from an offer letter?",
    answer:
      "Enter the gross annual salary before taxes. Net figures on offers are estimates that may use different assumptions than your actual W-4.",
  },
];

export default function SalaryPaycheckPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Salary Paycheck Calculator", href: "/salary-paycheck-calculator" },
        ]}
      />
      <div className="container mx-auto max-w-6xl px-4 pb-12 pt-6">
        <h1 className="mb-2 font-display text-3xl font-bold text-ink md:text-4xl">
          Florida salary paycheck calculator
        </h1>
        <p className="mb-8 max-w-3xl text-lg text-ink/75">
          Convert annual salary into per-paycheck take-home pay for Florida W-2 employees — federal
          tax and FICA included, state income tax at zero.
        </p>

        <PaycheckCalculator
          defaultPayType="salary"
          defaultSalary="85000"
          defaultFrequency="biweekly"
        />

        <section className="mt-14 max-w-3xl space-y-4 leading-relaxed text-ink/80">
          <h2 className="font-display text-2xl font-bold text-ink">
            Salary offers vs. Florida take-home pay
          </h2>
          <p>
            Offer letters quote gross pay. Rent, savings, and budgets run on net. This{" "}
            <strong className="text-ink">Florida salary paycheck calculator</strong> bridges that
            gap with transparent line items so you can compare jobs in Florida against other states
            fairly.
          </p>
          <p>
            Learn more about withholdings in{" "}
            <Link href="/blog/how-florida-paycheck-taxes-work" className="text-violet underline">
              how Florida paycheck taxes work
            </Link>
            , or model every-two-weeks pay on the{" "}
            <Link href="/biweekly-paycheck-calculator" className="text-violet underline">
              biweekly paycheck calculator
            </Link>
            .
          </p>
        </section>

        <FaqSection title="Salary paycheck FAQs" items={faqs} />

        <div className="mt-12 text-center">
          <CtaButton href="/#calculator" ariaLabel="Open main Florida paycheck calculator">
            OPEN MAIN CALCULATOR
          </CtaButton>
        </div>
      </div>
    </>
  );
}
