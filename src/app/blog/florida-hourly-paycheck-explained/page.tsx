import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import BlogPostSchema from "@/components/BlogPostSchema";
import CtaButton from "@/components/CtaButton";
import FaqSection from "@/components/FaqSection";
import { BRAND_FEATURE_4, OG_IMAGE, SITE_NAME, SITE_ORIGIN } from "@/lib/siteConfig";

const title = "Florida Hourly Paycheck Explained";
const description =
  "Learn how Florida hourly wages convert to weekly and biweekly take-home pay after federal tax and FICA, with $0 state income tax.";
const slug = "florida-hourly-paycheck-explained";
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
    question: "How do I estimate a Florida hourly paycheck?",
    answer:
      "Multiply hourly rate by hours in the pay period for a rough gross, or annualize rate × hours × 52 and divide by pay periods. Then subtract estimated federal tax and FICA.",
  },
  {
    question: "Is overtime taxed differently in Florida?",
    answer:
      "Overtime is still ordinary wage income for federal tax and FICA. Florida does not add a state income tax on overtime wages.",
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
        image={`${SITE_ORIGIN}${BRAND_FEATURE_4}`}
      />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "Florida Hourly Paycheck Explained" },
        ]}
      />
      <article className="container mx-auto max-w-3xl px-4 pb-12 pt-6">
        <h1 className="mb-4 font-display text-3xl font-bold text-ink md:text-4xl">{title}</h1>
        <p className="mb-8 text-sm text-ink/50">Updated October 16, 2026 · 8 min read</p>

        <div className="space-y-5 text-ink/80 leading-relaxed">
          <p>
            Hourly jobs dominate Florida hospitality, healthcare support, logistics, and retail.
            Gross hourly rates are easy to compare; net pay is what pays rent. This article explains
            how a <strong className="text-ink">Florida hourly paycheck</strong> is built and how to
            estimate it before your first stub arrives.
          </p>

          <h2 className="pt-4 font-display text-2xl font-bold text-ink">
            From hourly rate to annual gross
          </h2>
          <p>
            A common planning formula is hourly rate × hours per week × 52. Forty hours at $22/hour
            is $45,760/year before taxes. If you regularly work overtime, raise the weekly hours or
            run a separate high-hours scenario. The{" "}
            <Link href="/hourly-paycheck-calculator" className="text-violet underline">
              Florida hourly paycheck calculator
            </Link>{" "}
            uses that annualization, then splits by pay frequency.
          </p>

          <h2 className="pt-4 font-display text-2xl font-bold text-ink">Taxes that still apply</h2>
          <p>
            Florida’s lack of state income tax helps hourly workers keep more of each dollar, but
            federal income tax and FICA still withhold. Tip-heavy roles may have tip reporting rules
            that affect gross wages—confirm with your employer’s payroll practice. For the tax stack,
            see{" "}
            <Link href="/blog/how-florida-paycheck-taxes-work" className="text-violet underline">
              how Florida paycheck taxes work
            </Link>
            .
          </p>

          <h2 className="pt-4 font-display text-2xl font-bold text-ink">
            Weekly vs. biweekly cash flow
          </h2>
          <p>
            Weekly pay smooths cash flow; biweekly pay creates larger deposits every other week.
            Neither changes annual tax liability by itself, but budgeting differs. Switch frequency
            in the calculator to see both views without changing your hourly rate.
          </p>

          <h2 className="pt-4 font-display text-2xl font-bold text-ink">Practical example</h2>
          <p>
            Suppose $20/hour × 40 hours. Annual gross ≈ $41,600. On a biweekly schedule, gross per
            check is about $1,600 before deductions. After approximate federal tax and FICA—with
            Florida state tax at $0—net lands lower, often in a mid-$1,200s range for a single filer
            with minimal pre-tax benefits (exact results vary). Plug your numbers into the tool for a
            personalized estimate.
          </p>
        </div>

        <FaqSection title="Hourly paycheck FAQs" items={faqs} />

        <div className="mt-12 text-center">
          <CtaButton href="/hourly-paycheck-calculator" ariaLabel="Open hourly paycheck calculator">
            OPEN HOURLY CALCULATOR
          </CtaButton>
        </div>
      </article>
    </>
  );
}
