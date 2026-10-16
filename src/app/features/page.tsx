import Image from "next/image";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaButton from "@/components/CtaButton";
import FaqSection from "@/components/FaqSection";
import {
  BRAND_FEATURE_2,
  BRAND_FEATURE_4,
  OG_IMAGE,
  SITE_NAME,
  SITE_ORIGIN,
} from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Features — Florida Paycheck Calculator Tools",
  description:
    "Features of Florida Paycheck Calculator: hourly and salary modes, biweekly pay, FICA breakdown, $0 state tax, pre-tax deductions, and free take-home estimates.",
  alternates: { canonical: `${SITE_ORIGIN}/features` },
  openGraph: {
    title: "Features — Florida Paycheck Calculator Tools",
    description: "Everything you need to estimate Florida take-home pay.",
    url: `${SITE_ORIGIN}/features`,
    siteName: SITE_NAME,
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Florida Paycheck Calculator features" }],
  },
};

const faqs = [
  {
    question: "Is Florida Paycheck Calculator free?",
    answer:
      "Yes. All core estimate tools on floridapaycheckcalculator.io are free and do not require an account.",
  },
  {
    question: "Does it include Florida state tax?",
    answer:
      "Florida personal income tax and local wage tax are shown as $0 because the state does not levy them. Federal income tax and FICA are still estimated.",
  },
];

const features = [
  {
    title: "Hourly and salary modes",
    body: "Switch between annual salary and hourly rate × hours so both W-2 paths share one engine.",
  },
  {
    title: "Pay frequency presets",
    body: "Weekly, biweekly, semi-monthly, monthly, and annual — match the schedule on your stub.",
  },
  {
    title: "Federal + FICA line items",
    body: "See estimated federal income tax, Social Security 6.2%, and Medicare 1.45% per paycheck.",
  },
  {
    title: "Florida $0 state & local tax",
    body: "Explicit zero lines so you never wonder whether a national calculator forgot Florida rules.",
  },
  {
    title: "Pre-tax and post-tax deductions",
    body: "Model 401(k), HSA-style annual pre-tax amounts and simple post-tax amounts per check.",
  },
  {
    title: "Filing status support",
    body: "Single, married filing jointly or separately, and head of household for bracket estimates.",
  },
];

export default function FeaturesPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Features", href: "/features" }]} />
      <div className="container mx-auto max-w-5xl px-4 pb-12 pt-6">
        <h1 className="mb-3 font-display text-3xl font-bold text-ink md:text-4xl">
          Florida Paycheck Calculator features
        </h1>
        <p className="mb-10 max-w-3xl text-lg text-ink/75">
          Built for Sunshine State workers who need clear take-home estimates—not a payroll sales
          funnel.
        </p>

        <div className="mb-12 grid gap-6 sm:grid-cols-2">
          {features.map((f) => (
            <div key={f.title} className="rounded-xl border border-ink/10 bg-white/70 p-5">
              <h2 className="mb-2 font-display text-xl font-semibold text-ink">{f.title}</h2>
              <p className="text-sm leading-relaxed text-ink/70">{f.body}</p>
            </div>
          ))}
        </div>

        <div className="mb-12 grid gap-6 md:grid-cols-2">
          <div className="relative aspect-video overflow-hidden rounded-2xl border border-ink/10">
            <Image
              src={BRAND_FEATURE_2}
              alt="Florida paycheck calculator feature breakdown of take-home pay"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-video overflow-hidden rounded-2xl border border-ink/10">
            <Image
              src={BRAND_FEATURE_4}
              alt="Florida paycheck calculator hourly and salary modes"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>

        <FaqSection title="Feature FAQs" items={faqs} />

        <div className="mt-12 text-center">
          <CtaButton href="/#calculator" ariaLabel="Try Florida Paycheck Calculator">
            TRY THE CALCULATOR
          </CtaButton>
        </div>
      </div>
    </>
  );
}
