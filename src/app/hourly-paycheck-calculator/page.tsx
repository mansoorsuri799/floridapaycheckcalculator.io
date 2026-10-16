import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import PaycheckCalculator from "@/components/PaycheckCalculator";
import FaqSection from "@/components/FaqSection";
import CtaButton from "@/components/CtaButton";
import { OG_IMAGE, SITE_NAME, SITE_ORIGIN } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Florida Hourly Paycheck Calculator — Take-Home Pay",
  description:
    "Free Florida hourly paycheck calculator. Convert hourly wages and hours into weekly, biweekly, or monthly take-home pay after federal tax and FICA.",
  alternates: { canonical: `${SITE_ORIGIN}/hourly-paycheck-calculator` },
  openGraph: {
    title: "Florida Hourly Paycheck Calculator — Take-Home Pay",
    description: "Estimate Florida net pay from hourly rate and hours worked.",
    url: `${SITE_ORIGIN}/hourly-paycheck-calculator`,
    siteName: SITE_NAME,
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Florida hourly paycheck calculator" }],
  },
};

const faqs = [
  {
    question: "How does a Florida hourly paycheck calculator work?",
    answer:
      "It annualizes hourly rate × hours per week × 52, then divides by your pay frequency and subtracts estimated federal income tax and FICA. Florida state and local income tax remain $0.",
  },
  {
    question: "Does overtime change the estimate?",
    answer:
      "Enter your average weekly hours including overtime, or run separate scenarios for regular vs. overtime weeks. The tool uses a flat hourly rate × hours model for planning.",
  },
];

export default function HourlyPaycheckPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Hourly Paycheck Calculator", href: "/hourly-paycheck-calculator" },
        ]}
      />
      <div className="container mx-auto max-w-6xl px-4 pb-12 pt-6">
        <h1 className="mb-2 font-display text-3xl font-bold text-ink md:text-4xl">
          Florida hourly paycheck calculator
        </h1>
        <p className="mb-8 max-w-3xl text-lg text-ink/75">
          Turn an hourly wage into estimated take-home pay for Florida employees — after federal tax
          and FICA, with no state income tax.
        </p>

        <PaycheckCalculator
          defaultPayType="hourly"
          defaultHourly="22"
          defaultHours="40"
          defaultFrequency="biweekly"
        />

        <section className="mt-14 max-w-3xl space-y-4 leading-relaxed text-ink/80">
          <h2 className="font-display text-2xl font-bold text-ink">
            Why Florida hourly workers use a paycheck calculator
          </h2>
          <p>
            Hourly schedules swing with overtime, seasonality, and tip-adjacent roles across Florida
            hospitality and logistics. A dedicated{" "}
            <strong className="text-ink">Florida hourly paycheck calculator</strong> shows how rate
            and hours map to net pay before you accept a new offer or plan a second job.
          </p>
          <p>
            Read the fuller guide:{" "}
            <Link href="/blog/florida-hourly-paycheck-explained" className="text-violet underline">
              Florida hourly paycheck explained
            </Link>
            . Prefer annual salary inputs? Try the{" "}
            <Link href="/salary-paycheck-calculator" className="text-violet underline">
              Florida salary paycheck calculator
            </Link>
            .
          </p>
        </section>

        <FaqSection title="Hourly paycheck FAQs" items={faqs} />

        <div className="mt-12 text-center">
          <CtaButton href="/#calculator" ariaLabel="Open main Florida paycheck calculator">
            OPEN MAIN CALCULATOR
          </CtaButton>
        </div>
      </div>
    </>
  );
}
