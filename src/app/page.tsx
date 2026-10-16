import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import FaqSection from "@/components/FaqSection";
import CtaButton from "@/components/CtaButton";
import PaycheckCalculator from "@/components/PaycheckCalculator";
import { WEB_APPLICATION_JSON_LD } from "@/lib/appFacts";
import { imageObjectLicensing } from "@/lib/schemaImageLicensing";
import {
  BRAND_FEATURE_2,
  BRAND_FEATURE_3,
  BRAND_HERO,
  BRAND_LOGO,
  OG_IMAGE,
  SITE_NAME,
  SITE_ORIGIN,
  SITE_RATING,
} from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: {
    default: "Florida Paycheck Calculator — Free Take-Home Pay",
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Free Florida paycheck calculator for hourly or salary pay. Estimate take-home pay after federal tax and FICA. Florida has no state income tax and no local wage tax.",
  alternates: { canonical: SITE_ORIGIN },
  openGraph: {
    title: "Florida Paycheck Calculator — Free Take-Home Pay",
    description:
      "Estimate Florida net pay for salary or hourly jobs. Biweekly, weekly, and monthly frequencies supported.",
    url: SITE_ORIGIN,
    siteName: SITE_NAME,
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Florida Paycheck Calculator homepage — free take-home pay tool",
      },
    ],
  },
};

const faqs = [
  {
    question: "What is a Florida paycheck calculator?",
    answer:
      "A Florida paycheck calculator estimates your take-home (net) pay from gross wages after federal income tax withholding and FICA (Social Security and Medicare). Because Florida has no state income tax and no local wage tax, those lines stay at $0.",
  },
  {
    question: "Does Florida have state income tax on paychecks?",
    answer:
      "No. Florida does not levy a personal state income tax, and Florida cities do not add local income taxes on wages. Your paycheck still has federal withholding and FICA. See our guide on whether Florida has state income tax for details.",
  },
  {
    question: "What taxes come out of a Florida paycheck?",
    answer:
      "Typical employee deductions include federal income tax (based on W-4 and filing status), Social Security at 6.2% up to the annual wage base, and Medicare at 1.45% (plus Additional Medicare Tax for high earners). Optional pre-tax items like 401(k), HSA, and medical premiums reduce taxable wages.",
  },
  {
    question: "Can I use this for hourly and salary pay?",
    answer:
      "Yes. Switch between salary and hourly modes. Hourly mode annualizes rate × hours × 52, then splits by your pay frequency. Dedicated pages cover Florida hourly, salary, and biweekly paycheck calculators.",
  },
  {
    question: "How accurate is this Florida take-home pay estimate?",
    answer:
      "It uses approximate 2026 federal brackets, standard deduction, and FICA rates for educational estimates. Employer payroll software uses IRS withholding tables, year-to-date wages, and your exact W-4. Treat results as a planning guide—not a pay stub replacement.",
  },
  {
    question: "What pay frequencies are supported?",
    answer:
      "Weekly, biweekly (every two weeks), semi-monthly (twice a month), monthly, and annual. Biweekly is the most common search for Florida employees who want net pay per check.",
  },
  {
    question: "Is this Florida paycheck calculator free?",
    answer:
      "Yes. The full tool on floridapaycheckcalculator.io is free, with no account required. It is an educational estimator, not a payroll service or tax filing product.",
  },
];

export default function Home() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_ORIGIN}/#website`,
        url: `${SITE_ORIGIN}/`,
        name: SITE_NAME,
        description:
          "Free Florida paycheck calculator for take-home pay after federal tax and FICA.",
        inLanguage: "en-US",
        publisher: { "@id": `${SITE_ORIGIN}/#organization` },
      },
      {
        "@type": "WebPage",
        "@id": `${SITE_ORIGIN}/#webpage`,
        url: `${SITE_ORIGIN}/`,
        name: "Florida Paycheck Calculator — Free Take-Home Pay",
        isPartOf: { "@id": `${SITE_ORIGIN}/#website` },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `${SITE_ORIGIN}${BRAND_HERO}`,
          width: 1200,
          height: 630,
          ...imageObjectLicensing,
        },
      },
      {
        ...WEB_APPLICATION_JSON_LD,
        "@id": `${SITE_ORIGIN}/#software`,
        description:
          "Web-based Florida paycheck calculator for hourly and salary take-home pay estimates.",
      },
      {
        "@type": "HowTo",
        name: "How to use the Florida paycheck calculator",
        description: "Estimate Florida take-home pay in four steps.",
        step: [
          {
            "@type": "HowToStep",
            name: "Choose salary or hourly",
            text: "Select pay type and enter annual salary or hourly rate and hours per week.",
          },
          {
            "@type": "HowToStep",
            name: "Set pay frequency",
            text: "Pick weekly, biweekly, semi-monthly, monthly, or annually to match your pay stubs.",
          },
          {
            "@type": "HowToStep",
            name: "Add filing status and deductions",
            text: "Choose federal filing status and optional pre-tax or post-tax deductions.",
          },
          {
            "@type": "HowToStep",
            name: "Read net pay",
            text: "See gross, federal tax, Social Security, Medicare, $0 Florida state tax, and take-home pay.",
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <section id="calculator" className="relative overflow-hidden scroll-mt-16">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="hero-glow absolute -left-20 top-0 h-48 w-48 rounded-full bg-violet/20 blur-3xl" />
          <div
            className="hero-glow absolute -right-10 top-20 h-56 w-56 rounded-full bg-teal/15 blur-3xl"
            style={{ animationDelay: "1.5s" }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-4 pb-8 pt-5 sm:px-6 sm:pb-12 sm:pt-8 lg:px-8">
          <h1 className="mb-2 font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            <span className="brand-gradient-text">{SITE_NAME}</span>
          </h1>
          <p className="mb-6 max-w-2xl font-display text-lg font-semibold leading-snug text-ink sm:text-xl md:text-2xl">
            Estimate Florida take-home pay after federal tax — with $0 state income tax
          </p>

          <PaycheckCalculator defaultFrequency="biweekly" />

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink/75 sm:text-lg">
            Free Florida payroll-style estimator for hourly or salaried employees. Model weekly,
            biweekly, and monthly checks with FICA and federal withholding built in.
          </p>

          <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2 text-sm text-ink/65 sm:gap-3">
              <span
                className="inline-flex items-center gap-1.5"
                aria-label={`Rated ${SITE_RATING.ratingValue} out of 5`}
              >
                <span className="font-semibold text-gold">{SITE_RATING.ratingValue}</span>
                <span className="tracking-tight text-gold" aria-hidden="true">
                  ★★★★★
                </span>
                <span>({Number(SITE_RATING.ratingCount).toLocaleString()})</span>
              </span>
              <span className="text-ink/30">·</span>
              <span>Free</span>
              <span className="text-ink/30">·</span>
              <span>Web</span>
              <span className="text-ink/30">·</span>
              <span>Paycheck tool</span>
            </div>
            <Link
              href="/how-it-works"
              className="text-sm font-semibold text-violet underline-offset-4 hover:underline"
            >
              See how the estimate works →
            </Link>
          </div>
        </div>
      </section>

      <div className="container mx-auto max-w-6xl px-4 py-12">
        <section className="mb-16 max-w-3xl">
          <h2 className="mb-4 font-display text-2xl font-bold text-ink md:text-3xl">
            Free Florida paycheck calculator for take-home pay
          </h2>
          <p className="mb-4 text-lg leading-relaxed text-ink/80">
            A <strong className="text-ink">Florida paycheck calculator</strong> answers one
            practical question: after taxes and deductions, how much lands in your bank account?
            Workers in Miami, Orlando, Tampa, Jacksonville, and every other Florida city share the
            same big advantage—no state income tax—yet federal withholding and FICA still reduce
            gross pay. This free tool models that reality without a payroll login or sales pitch.
          </p>
          <p className="leading-relaxed text-ink/75">
            Whether you searched for a Florida take-home pay calculator, Florida payroll
            calculator, or Florida net pay estimator, the workflow is the same: enter wages, choose
            pay frequency and filing status, optionally add 401(k) or benefits, then read gross vs.
            net. No account required.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="mb-4 font-display text-2xl font-bold text-ink md:text-3xl">
            How Florida paycheck taxes work
          </h2>
          <p className="mb-6 max-w-3xl leading-relaxed text-ink/80">
            People also ask what comes out of a Florida paycheck. Unlike many states, Florida does
            not stack a state income tax on top of federal rules. Use our deep guide on{" "}
            <Link
              href="/blog/how-florida-paycheck-taxes-work"
              className="text-violet underline hover:no-underline"
            >
              how Florida paycheck taxes work
            </Link>{" "}
            or the quick map below.
          </p>
          <ol className="mb-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                n: "01",
                t: "Start with gross pay",
                d: "Salary ÷ periods, or hourly rate × hours annualized, then split by pay frequency.",
              },
              {
                n: "02",
                t: "Subtract pre-tax items",
                d: "401(k), HSA, FSA, and some medical premiums lower federal taxable wages.",
              },
              {
                n: "03",
                t: "Apply federal + FICA",
                d: "Federal income tax (brackets + standard deduction estimate), Social Security 6.2%, Medicare 1.45%.",
              },
              {
                n: "04",
                t: "Florida state & local = $0",
                d: "No Florida personal income tax and no city wage tax — a clean line on your stub.",
              },
            ].map((step) => (
              <li key={step.n} className="border-t border-violet/40 pt-4">
                <span className="font-display text-sm font-bold text-teal">{step.n}</span>
                <h3 className="mt-2 font-display text-xl font-semibold text-ink">{step.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">{step.d}</p>
              </li>
            ))}
          </ol>
          <div className="rounded-xl border border-ink/10 bg-white/70 p-5 sm:p-6">
            <h3 className="mb-2 font-display text-lg font-semibold text-ink">
              Example: $75,000 salary, biweekly, single
            </h3>
            <p className="leading-relaxed text-ink/75">
              Gross per check is about <strong className="text-ink">$2,884.62</strong> ($75,000 ÷
              26). After approximate federal income tax and FICA—with Florida state tax at{" "}
              <strong className="text-violet">$0</strong>—take-home is typically in the low-to-mid
              $2,000s depending on W-4 and deductions. Enter the same numbers above to see a live
              breakdown.
            </p>
          </div>
        </section>

        <section className="mb-16 grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="mb-4 font-display text-2xl font-bold text-ink md:text-3xl">
              Florida has no state income tax — what that means on your stub
            </h2>
            <p className="mb-4 leading-relaxed text-ink/80">
              One of the most searched Florida paycheck topics is whether the state taxes wages.
              Florida does not. That keeps more of each dollar compared with high-tax states, but it
              does not mean paychecks arrive tax-free. Federal income tax and FICA still apply, and
              Additional Medicare Tax can hit high earners.
            </p>
            <ul className="space-y-3 text-ink/80">
              <li>
                <strong className="text-ink">State income tax:</strong> 0%
              </li>
              <li>
                <strong className="text-ink">Local income / wage tax:</strong> 0%
              </li>
              <li>
                <strong className="text-ink">Federal + FICA:</strong> still withheld each pay period
              </li>
            </ul>
            <p className="mt-4 text-sm text-ink/70">
              Full explainer:{" "}
              <Link href="/blog/does-florida-have-state-income-tax" className="text-violet underline">
                Does Florida have state income tax?
              </Link>
            </p>
          </div>
          <div className="relative aspect-video overflow-hidden rounded-2xl border border-ink/10">
            <Image
              src={BRAND_FEATURE_2}
              alt="Florida paycheck calculator showing take-home pay with zero state income tax"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={70}
              className="object-cover"
            />
          </div>
        </section>

        <section className="mb-16">
          <h2 className="mb-4 font-display text-2xl font-bold text-ink md:text-3xl">
            Hourly, salary, and biweekly Florida paycheck tools
          </h2>
          <p className="mb-8 max-w-3xl leading-relaxed text-ink/80">
            Search demand clusters around hourly wages, salaried jobs, and biweekly pay cycles. Use
            the hub calculator above or open a focused lander for the intent you care about.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                href: "/hourly-paycheck-calculator",
                title: "Florida hourly paycheck calculator",
                body: "Convert hourly rate and hours into weekly, biweekly, or monthly take-home pay.",
              },
              {
                href: "/salary-paycheck-calculator",
                title: "Florida salary paycheck calculator",
                body: "Split annual salary into per-check gross and net with federal tax and FICA.",
              },
              {
                href: "/biweekly-paycheck-calculator",
                title: "Florida biweekly paycheck calculator",
                body: "Model the common 26-pay-period schedule Florida employers use.",
              },
            ].map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="block border border-ink/10 bg-white/70 p-5 transition hover:border-violet/40"
              >
                <h3 className="mb-2 font-display text-lg font-semibold text-ink">{card.title}</h3>
                <p className="text-sm leading-relaxed text-ink/70">{card.body}</p>
                <span className="mt-3 inline-block text-sm font-semibold text-violet">
                  Open tool →
                </span>
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-16 max-w-3xl">
          <h2 className="mb-4 font-display text-2xl font-bold text-ink md:text-3xl">
            FICA, federal withholding, and pre-tax deductions
          </h2>
          <p className="mb-4 leading-relaxed text-ink/80">
            Even with $0 Florida state tax, Social Security and Medicare are mandatory for most W-2
            employees. Pre-tax 401(k) and health contributions can reduce taxable wages and change
            net pay — explore{" "}
            <Link href="/blog/how-401k-affects-florida-paycheck" className="text-violet underline">
              how a 401(k) affects a Florida paycheck
            </Link>
            .
          </p>
          <ul className="mb-4 list-disc space-y-2 pl-5 text-ink/75">
            <li>
              <strong className="text-ink">Social Security</strong> — 6.2% employee share up to the
              annual wage base
            </li>
            <li>
              <strong className="text-ink">Medicare</strong> — 1.45% employee share (Additional
              Medicare Tax may apply above IRS thresholds)
            </li>
            <li>
              <strong className="text-ink">Federal income tax</strong> — estimated from filing status,
              standard deduction, and brackets
            </li>
          </ul>
          <p className="leading-relaxed text-ink/75">
            Hourly workers can also read{" "}
            <Link href="/blog/florida-hourly-paycheck-explained" className="text-violet underline">
              Florida hourly paycheck explained
            </Link>{" "}
            for overtime and hours-to-net examples.
          </p>
        </section>

        <section className="mb-16 grid gap-10 md:grid-cols-2 md:items-center">
          <div className="relative order-2 aspect-video overflow-hidden rounded-2xl border border-ink/10 md:order-1">
            <Image
              src={BRAND_FEATURE_3}
              alt="Florida paycheck breakdown with federal tax FICA and take-home pay"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={70}
              className="object-cover"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="mb-4 font-display text-2xl font-bold text-ink md:text-3xl">
              Why use this free Florida paycheck calculator
            </h2>
            <ul className="space-y-4 text-ink/80">
              <li>
                <h3 className="mb-1 font-display text-lg font-semibold text-ink">
                  Built for Florida’s tax rules
                </h3>
                <p className="text-sm leading-relaxed text-ink/70">
                  State and local income tax lines stay at zero so estimates match what Sunshine
                  State workers actually see.
                </p>
              </li>
              <li>
                <h3 className="mb-1 font-display text-lg font-semibold text-ink">
                  Hourly and salary in one place
                </h3>
                <p className="text-sm leading-relaxed text-ink/70">
                  Switch modes without jumping between unrelated national calculators that bury
                  Florida context.
                </p>
              </li>
              <li>
                <h3 className="mb-1 font-display text-lg font-semibold text-ink">
                  Transparent educational math
                </h3>
                <p className="text-sm leading-relaxed text-ink/70">
                  We show every major line: federal, Social Security, Medicare, and $0 Florida tax.
                  Not a payroll vendor upsell page.
                </p>
              </li>
            </ul>
            <p className="mt-6 text-sm text-ink/70">
              Step-by-step walkthrough:{" "}
              <Link href="/how-it-works" className="text-violet underline">
                how Florida Paycheck Calculator works
              </Link>
              .
            </p>
          </div>
        </section>

        <section className="mb-16 max-w-3xl">
          <h2 className="mb-4 font-display text-2xl font-bold text-ink md:text-3xl">
            Who this Florida net pay calculator helps
          </h2>
          <p className="mb-4 leading-relaxed text-ink/80">
            Job seekers comparing offers, hourly employees checking overtime weeks, remote workers
            relocating to Florida, and anyone budgeting rent or savings against real take-home pay.
            Small business owners can also sanity-check employee net pay before running payroll
            software—while remembering this site is an estimator, not ADP or Gusto.
          </p>
          <p className="leading-relaxed text-ink/75">
            Compare feature details on our{" "}
            <Link href="/features" className="text-violet underline">
              features page
            </Link>
            , or contact us if you spot a calculation edge case we should document.
          </p>
        </section>

        <FaqSection title="Florida paycheck calculator FAQs" items={faqs} includeSchema={false} />

        <section className="mt-16 border-t border-ink/10 pt-12 text-center">
          <div className="relative mx-auto mb-6 h-16 w-16">
            <Image src={BRAND_LOGO} alt="" width={64} height={64} className="object-contain" />
          </div>
          <h2 className="mb-3 font-display text-2xl font-bold text-ink md:text-3xl">
            Ready to estimate your Florida take-home pay?
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-ink/75">
            Scroll up to the free calculator, enter salary or hourly wages, and see net pay with $0
            Florida state tax.
          </p>
          <CtaButton href="/#calculator" ariaLabel="Back to Florida paycheck calculator" icon="arrow">
            BACK TO CALCULATOR
          </CtaButton>
        </section>
      </div>
    </>
  );
}
