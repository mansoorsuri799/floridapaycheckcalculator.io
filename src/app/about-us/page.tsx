import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaButton from "@/components/CtaButton";
import { BRAND_LOGO, CONTACT_EMAIL, SITE_DOMAIN, SITE_NAME, SITE_ORIGIN } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "About Florida Paycheck Calculator",
  description:
    "About Florida Paycheck Calculator on floridapaycheckcalculator.io — a free take-home pay estimator for Florida hourly and salary workers.",
  alternates: { canonical: `${SITE_ORIGIN}/about-us` },
  openGraph: {
    title: "About Florida Paycheck Calculator",
    description: `Independent Florida paycheck estimator and guides on ${SITE_DOMAIN}.`,
    url: `${SITE_ORIGIN}/about-us`,
    siteName: SITE_NAME,
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About Us", href: "/about-us" }]} />
      <div className="container mx-auto max-w-4xl px-4 pb-10 pt-8">
        <div className="mb-10 flex flex-col items-start gap-8 md:flex-row">
          <div className="relative h-40 w-40 flex-shrink-0 overflow-hidden rounded-2xl border border-ink/10 bg-white">
            <Image
              src={BRAND_LOGO}
              alt="Florida Paycheck Calculator logo"
              fill
              sizes="160px"
              className="object-contain p-3"
              priority
            />
          </div>
          <div>
            <h1 className="mb-4 font-display text-3xl font-bold text-ink md:text-4xl">
              About {SITE_NAME}
            </h1>
            <p className="text-lg leading-relaxed text-ink/80">
              {SITE_NAME} is a free web tool on {SITE_DOMAIN} that helps Florida workers estimate
              take-home pay after federal tax and FICA. We highlight Florida’s $0 state income tax
              clearly. We are not a payroll vendor and we do not file taxes for you.
            </p>
          </div>
        </div>

        <section className="mb-10 space-y-4 text-ink/80 leading-relaxed">
          <h2 className="font-display text-2xl font-bold text-ink">What we build</h2>
          <p>
            The core product is a{" "}
            <Link href="/" className="text-violet underline">
              Florida paycheck calculator
            </Link>{" "}
            with hourly and salary modes, plus focused tools for{" "}
            <Link href="/hourly-paycheck-calculator" className="text-violet underline">
              hourly
            </Link>
            ,{" "}
            <Link href="/salary-paycheck-calculator" className="text-violet underline">
              salary
            </Link>
            , and{" "}
            <Link href="/biweekly-paycheck-calculator" className="text-violet underline">
              biweekly
            </Link>{" "}
            pay. Guides cover state tax, FICA, and 401(k) paycheck impact—topics people actually
            search.
          </p>
          <p>
            Questions? Email{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-violet underline">
              {CONTACT_EMAIL}
            </a>{" "}
            or use our{" "}
            <Link href="/contact-us" className="text-violet underline">
              contact page
            </Link>
            .
          </p>
        </section>

        <div className="text-center">
          <CtaButton href="/#calculator" ariaLabel="Try Florida Paycheck Calculator">
            TRY THE CALCULATOR
          </CtaButton>
        </div>
      </div>
    </>
  );
}
