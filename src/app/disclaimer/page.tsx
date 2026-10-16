import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { CONTACT_EMAIL, SITE_DOMAIN, SITE_NAME, SITE_ORIGIN } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: `Legal disclaimer for ${SITE_NAME} — educational paycheck estimates, not tax or payroll advice.`,
  alternates: { canonical: `${SITE_ORIGIN}/disclaimer` },
};

export default function DisclaimerPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Disclaimer", href: "/disclaimer" }]} />
      <div className="container mx-auto max-w-3xl px-4 pb-10 pt-8">
        <h1 className="mb-6 font-display text-3xl font-bold text-ink">Disclaimer</h1>
        <div className="space-y-5 text-ink/80 leading-relaxed">
          <p>Last updated: October 16, 2026</p>
          <p>
            {SITE_NAME} on {SITE_DOMAIN} provides educational paycheck calculators and articles for
            Florida workers. We are not a CPA firm, payroll provider, tax preparer, or government
            agency. We do not process payroll or file returns.
          </p>
          <h2 className="font-display text-xl font-semibold text-ink">Estimates only</h2>
          <p>
            Calculator results use approximate federal brackets, standard deduction, and FICA rates
            for planning. Employer payroll systems use IRS withholding methods, your exact Form W-4,
            year-to-date wages, and benefits elections. Always confirm figures with your pay stub, HR,
            or a qualified tax professional.
          </p>
          <h2 className="font-display text-xl font-semibold text-ink">No professional advice</h2>
          <p>
            Nothing on this site is tax, legal, accounting, or financial advice. Tax law and IRS
            parameters change. Content may contain errors or become outdated. Use the site at your
            own risk.
          </p>
          <h2 className="font-display text-xl font-semibold text-ink">Contact</h2>
          <p>
            Questions:{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-violet underline">
              {CONTACT_EMAIL}
            </a>
            .
          </p>
        </div>
      </div>
    </>
  );
}
