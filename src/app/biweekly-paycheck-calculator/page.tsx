import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import PaycheckCalculator from "@/components/PaycheckCalculator";
import FaqSection from "@/components/FaqSection";
import CtaButton from "@/components/CtaButton";
import { OG_IMAGE, SITE_NAME, SITE_ORIGIN } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Florida Biweekly Paycheck Calculator — 26 Pay Periods",
  description:
    "Free Florida biweekly paycheck calculator. Estimate take-home pay for 26 pay periods per year after federal tax and FICA. No Florida state income tax.",
  alternates: { canonical: `${SITE_ORIGIN}/biweekly-paycheck-calculator` },
  openGraph: {
    title: "Florida Biweekly Paycheck Calculator — 26 Pay Periods",
    description: "See Florida net pay on a biweekly schedule.",
    url: `${SITE_ORIGIN}/biweekly-paycheck-calculator`,
    siteName: SITE_NAME,
    type: "website",
    images: [
      { url: OG_IMAGE, width: 1200, height: 630, alt: "Florida biweekly paycheck calculator" },
    ],
  },
};

const faqs = [
  {
    question: "How many biweekly paychecks are in a year?",
    answer:
      "Usually 26. Semi-monthly pay (24 times per year) is different — twice a month on fixed calendar dates. Switch the frequency if your employer uses semi-monthly.",
  },
  {
    question: "Why does my biweekly check look smaller some months?",
    answer:
      "Benefits elections, bonuses, garnishments, or three-paycheck months vs. two-paycheck months can change cash flow even when annual salary is fixed.",
  },
];

export default function BiweeklyPaycheckPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Biweekly Paycheck Calculator", href: "/biweekly-paycheck-calculator" },
        ]}
      />
      <div className="container mx-auto max-w-6xl px-4 pb-12 pt-6">
        <h1 className="mb-2 font-display text-3xl font-bold text-ink md:text-4xl">
          Florida biweekly paycheck calculator
        </h1>
        <p className="mb-8 max-w-3xl text-lg text-ink/75">
          Model the common 26-paycheck schedule used across Florida. Estimate net pay after federal
          withholding and FICA — with $0 state income tax.
        </p>

        <PaycheckCalculator defaultPayType="salary" defaultSalary="72000" defaultFrequency="biweekly" />

        <section className="mt-14 max-w-3xl space-y-4 leading-relaxed text-ink/80">
          <h2 className="font-display text-2xl font-bold text-ink">
            Biweekly vs. semi-monthly in Florida
          </h2>
          <p>
            Biweekly means every two weeks (26 checks). Semi-monthly means twice a month (24 checks).
            Gross per check differs even at the same annual salary. This{" "}
            <strong className="text-ink">Florida biweekly paycheck calculator</strong> defaults to
            26 periods so you can budget rent and bills against the schedule most private employers
            use.
          </p>
          <p>
            Also try the{" "}
            <Link href="/hourly-paycheck-calculator" className="text-violet underline">
              hourly paycheck calculator
            </Link>{" "}
            or the main{" "}
            <Link href="/" className="text-violet underline">
              Florida paycheck calculator
            </Link>
            .
          </p>
        </section>

        <FaqSection title="Biweekly paycheck FAQs" items={faqs} />

        <div className="mt-12 text-center">
          <CtaButton href="/#calculator" ariaLabel="Open main Florida paycheck calculator">
            OPEN MAIN CALCULATOR
          </CtaButton>
        </div>
      </div>
    </>
  );
}
