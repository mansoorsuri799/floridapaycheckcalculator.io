import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import ContactForm from "@/components/ContactForm";
import { CONTACT_EMAIL, SITE_NAME, SITE_ORIGIN } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Contact Florida Paycheck Calculator",
  description:
    "Contact the Florida Paycheck Calculator team for product questions, feedback, or support on floridapaycheckcalculator.io.",
  alternates: { canonical: `${SITE_ORIGIN}/contact-us` },
  openGraph: {
    title: "Contact Florida Paycheck Calculator",
    description: `Reach the ${SITE_NAME} team.`,
    url: `${SITE_ORIGIN}/contact-us`,
    siteName: SITE_NAME,
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contact Us", href: "/contact-us" }]} />
      <div className="container mx-auto max-w-3xl px-4 pb-10 pt-8">
        <h1 className="mb-3 font-display text-3xl font-bold text-ink md:text-4xl">Contact us</h1>
        <p className="mb-8 text-lg text-ink/75">
          Feedback on the calculator, withholding estimates, or guides? Send a message or email{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-violet underline">
            {CONTACT_EMAIL}
          </a>
          .
        </p>
        <ContactForm />
      </div>
    </>
  );
}
