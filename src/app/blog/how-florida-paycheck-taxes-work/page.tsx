import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import BlogPostSchema from "@/components/BlogPostSchema";
import CtaButton from "@/components/CtaButton";
import FaqSection from "@/components/FaqSection";
import { BRAND_FEATURE_2, OG_IMAGE, SITE_NAME, SITE_ORIGIN } from "@/lib/siteConfig";

const title = "How Florida Paycheck Taxes Work (Federal + FICA)";
const description =
  "Understand federal withholding, Social Security, Medicare, and pre-tax deductions on a Florida paycheck when state income tax is $0.";
const slug = "how-florida-paycheck-taxes-work";
const published = "2026-10-16";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${SITE_ORIGIN}/blog/${slug}` },
  openGraph: {
    title,
    description,
    url: `${SITE_ORIGIN}/blog/${slug}`,
    siteName: SITE_NAME,
    type: "article",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: title }],
  },
};

const faqs = [
  {
    question: "What taxes are on a Florida paycheck?",
    answer:
      "Federal income tax, Social Security, and Medicare are the core withholdings. Florida state income tax and local wage tax are $0. Benefits and retirement elections may also appear.",
  },
  {
    question: "What is FICA on a Florida pay stub?",
    answer:
      "FICA is Social Security (6.2% employee) and Medicare (1.45% employee). High earners may also see Additional Medicare Tax.",
  },
];

export default function BlogPost() {
  return (
    <>
      <BlogPostSchema
        title={title}
        description={description}
        slug={slug}
        datePublished={published}
        image={`${SITE_ORIGIN}${BRAND_FEATURE_2}`}
      />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "How Florida Paycheck Taxes Work" },
        ]}
      />
      <article className="container mx-auto max-w-3xl px-4 pb-12 pt-6">
        <h1 className="mb-4 font-display text-3xl font-bold text-ink md:text-4xl">{title}</h1>
        <p className="mb-8 text-sm text-ink/50">Updated October 16, 2026 · 11 min read</p>

        <div className="space-y-5 text-ink/80 leading-relaxed">
          <p>
            Searching “Florida paycheck calculator” usually means you want to know what leaves each
            check. Florida’s headline rule is famous—no personal state income tax—but the rest of
            the stub looks a lot like other U.S. W-2 jobs. This guide explains{" "}
            <strong className="text-ink">how Florida paycheck taxes work</strong> so you can read
            estimates with confidence.
          </p>

          <h2 className="pt-4 font-display text-2xl font-bold text-ink">1. Gross pay first</h2>
          <p>
            Start with wages before taxes. Salaried employees divide annual pay by periods (26 for
            biweekly). Hourly employees multiply rate × hours, then annualize. Our{" "}
            <Link href="/" className="text-violet underline">
              Florida paycheck calculator
            </Link>{" "}
            does that conversion automatically.
          </p>

          <h2 className="pt-4 font-display text-2xl font-bold text-ink">
            2. Pre-tax deductions lower taxable wages
          </h2>
          <p>
            Traditional 401(k) contributions, many HSA deposits, and certain medical premiums reduce
            wages subject to federal income tax. Some also reduce FICA wages. Roth 401(k)
            contributions are generally post-tax and do not lower current taxable wages the same way.
            Model pre-tax elections in the calculator or read{" "}
            <Link href="/blog/how-401k-affects-florida-paycheck" className="text-violet underline">
              how a 401(k) affects your Florida paycheck
            </Link>
            .
          </p>

          <h2 className="pt-4 font-display text-2xl font-bold text-ink">
            3. Federal income tax withholding
          </h2>
          <p>
            Employers use your W-4 and IRS methods to withhold federal income tax. Filing status,
            dependents, multiple jobs, and extra withholding all matter. Educational calculators
            approximate annual liability with brackets and a standard deduction, then spread it
            across pay periods. Payroll software is more precise because it tracks year-to-date
            wages.
          </p>

          <h2 className="pt-4 font-display text-2xl font-bold text-ink">4. FICA: Social Security and Medicare</h2>
          <p>
            Social Security tax is 6.2% of covered wages up to the annual wage base. Medicare is
            1.45% with no wage-base cap. Earners above IRS thresholds may owe Additional Medicare
            Tax. Florida does not replace FICA with a state program—these federal payroll taxes
            still appear on nearly every Florida W-2 stub.
          </p>

          <h2 className="pt-4 font-display text-2xl font-bold text-ink">
            5. Florida state and local income tax = $0
          </h2>
          <p>
            There is no Florida personal income tax withholding on wages and no city income tax on
            employee paychecks. That is the core difference versus states like New York or
            California. Details:{" "}
            <Link href="/blog/does-florida-have-state-income-tax" className="text-violet underline">
              does Florida have state income tax?
            </Link>
          </p>

          <h2 className="pt-4 font-display text-2xl font-bold text-ink">6. Net pay and budgeting</h2>
          <p>
            Net pay is gross minus taxes and deductions. Biweekly workers should budget for months
            with two checks versus the occasional three-check month. Try the{" "}
            <Link href="/biweekly-paycheck-calculator" className="text-violet underline">
              Florida biweekly paycheck calculator
            </Link>{" "}
            when that is your schedule.
          </p>
        </div>

        <FaqSection title="Paycheck tax FAQs" items={faqs} />

        <div className="mt-12 text-center">
          <CtaButton href="/#calculator" ariaLabel="Open Florida paycheck calculator">
            OPEN CALCULATOR
          </CtaButton>
        </div>
      </article>
    </>
  );
}
