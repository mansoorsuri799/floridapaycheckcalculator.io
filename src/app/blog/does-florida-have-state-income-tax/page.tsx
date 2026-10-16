import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import BlogPostSchema from "@/components/BlogPostSchema";
import CtaButton from "@/components/CtaButton";
import FaqSection from "@/components/FaqSection";
import { BRAND_HERO, OG_IMAGE, SITE_NAME, SITE_ORIGIN } from "@/lib/siteConfig";

const title = "Does Florida Have State Income Tax? Paycheck Impact";
const description =
  "Florida has no personal state income tax and no local wage tax. Learn what still comes out of your paycheck and how to estimate take-home pay.";
const slug = "does-florida-have-state-income-tax";
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
    question: "Does Florida have state income tax in 2026?",
    answer:
      "No. Florida does not impose a personal state income tax on wages. Cities and counties also do not add local income taxes on employee paychecks.",
  },
  {
    question: "If there is no state tax, why is my Florida paycheck reduced?",
    answer:
      "Federal income tax withholding and FICA (Social Security and Medicare) still apply. Optional benefits and retirement contributions can also reduce net pay.",
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
        image={`${SITE_ORIGIN}${BRAND_HERO}`}
      />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "Does Florida Have State Income Tax?" },
        ]}
      />
      <article className="container mx-auto max-w-3xl px-4 pb-12 pt-6">
        <h1 className="mb-4 font-display text-3xl font-bold text-ink md:text-4xl">{title}</h1>
        <p className="mb-8 text-sm text-ink/50">Updated October 16, 2026 · 9 min read</p>

        <div className="prose-fl space-y-5 text-ink/80 leading-relaxed">
          <p>
            One of the most searched questions next to “Florida paycheck calculator” is simple:{" "}
            <strong className="text-ink">does Florida have state income tax?</strong> For personal
            wages, the answer is no. Florida does not tax ordinary income the way many other states
            do, and Florida cities do not layer local wage taxes onto W-2 stubs.
          </p>
          <p>
            That $0 state line is a real advantage when you compare take-home pay across state lines.
            It is not the same as a tax-free paycheck. Federal rules still apply, and FICA still
            funds Social Security and Medicare. A clear{" "}
            <Link href="/" className="text-violet underline">
              Florida paycheck calculator
            </Link>{" "}
            shows both truths on one screen.
          </p>

          <h2 className="pt-4 font-display text-2xl font-bold text-ink">
            What “no state income tax” means on a pay stub
          </h2>
          <p>
            Employers in Florida withhold federal income tax based on your Form W-4 and IRS tables.
            They also withhold employee Social Security and Medicare. They do not withhold a Florida
            personal income tax because the state does not levy one on wages. When national
            calculators bury that fact, Florida workers get confused. We keep the Florida state and
            local lines explicit at $0.
          </p>
          <p>
            Florida still funds government with other taxes—notably sales tax and certain business
            taxes. Those do not appear as income-tax deductions on employee paychecks. If you are
            self-employed, you may owe federal self-employment tax and estimated payments; that is a
            different structure than W-2 withholding.
          </p>

          <h2 className="pt-4 font-display text-2xl font-bold text-ink">
            What still reduces Florida take-home pay
          </h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>Federal income tax withholding</li>
            <li>Social Security tax (employee share, subject to annual wage base)</li>
            <li>Medicare tax (plus Additional Medicare Tax for high earners)</li>
            <li>Pre-tax benefits such as 401(k), HSA, or medical premiums</li>
            <li>Post-tax deductions such as garnishments or certain insurance</li>
          </ul>
          <p>
            For a line-by-line walkthrough, read{" "}
            <Link href="/blog/how-florida-paycheck-taxes-work" className="text-violet underline">
              how Florida paycheck taxes work
            </Link>
            .
          </p>

          <h2 className="pt-4 font-display text-2xl font-bold text-ink">
            Why job offers look better (and still need net math)
          </h2>
          <p>
            Relocating from a high-tax state to Florida can increase take-home pay even at the same
            gross salary. Housing, insurance, and sales tax can offset some of that gain, so net
            paycheck math is only one part of a move. Still, ignoring Florida’s $0 state income tax
            understates the benefit of Sunshine State wages.
          </p>
          <p>
            Use the{" "}
            <Link href="/salary-paycheck-calculator" className="text-violet underline">
              salary paycheck calculator
            </Link>{" "}
            or{" "}
            <Link href="/hourly-paycheck-calculator" className="text-violet underline">
              hourly paycheck calculator
            </Link>{" "}
            to turn an offer into estimated net pay before you sign.
          </p>

          <h2 className="pt-4 font-display text-2xl font-bold text-ink">Quick checklist</h2>
          <ol className="list-decimal space-y-2 pl-5">
            <li>Confirm the offer is gross annual or hourly—not already “net.”</li>
            <li>Model federal filing status and any pre-tax 401(k) elections.</li>
            <li>Expect Florida state income tax = $0 on the estimate.</li>
            <li>Compare biweekly vs. monthly cash flow for rent and bills.</li>
          </ol>
        </div>

        <FaqSection title="State tax FAQs" items={faqs} />

        <div className="mt-12 text-center">
          <CtaButton href="/#calculator" ariaLabel="Estimate Florida take-home pay">
            ESTIMATE TAKE-HOME PAY
          </CtaButton>
        </div>
      </article>
    </>
  );
}
