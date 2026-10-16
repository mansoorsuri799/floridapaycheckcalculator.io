import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SITE_NAME, SITE_ORIGIN } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Florida Paycheck Blog — Tax & Take-Home Guides",
  description:
    "SERP-backed Florida paycheck guides: state income tax, federal withholding & FICA, hourly pay, and 401(k) paycheck impact.",
  alternates: { canonical: `${SITE_ORIGIN}/blog` },
  openGraph: {
    title: "Florida Paycheck Blog — Tax & Take-Home Guides",
    description: "Practical Florida paycheck articles from Florida Paycheck Calculator.",
    url: `${SITE_ORIGIN}/blog`,
    siteName: SITE_NAME,
    type: "website",
  },
};

const posts = [
  {
    href: "/blog/does-florida-have-state-income-tax",
    title: "Does Florida Have State Income Tax? Paycheck Impact",
    excerpt:
      "Why Florida wages face $0 state income tax, what still comes out of your check, and how that compares to other states.",
    date: "October 2026",
    read: "9 min read",
  },
  {
    href: "/blog/how-florida-paycheck-taxes-work",
    title: "How Florida Paycheck Taxes Work (Federal + FICA)",
    excerpt:
      "Break down federal withholding, Social Security, Medicare, and pre-tax deductions on a Florida pay stub.",
    date: "October 2026",
    read: "11 min read",
  },
  {
    href: "/blog/florida-hourly-paycheck-explained",
    title: "Florida Hourly Paycheck Explained",
    excerpt:
      "Convert hourly rate and hours into weekly or biweekly take-home pay with Florida’s $0 state tax advantage.",
    date: "October 2026",
    read: "8 min read",
  },
  {
    href: "/blog/how-401k-affects-florida-paycheck",
    title: "How a 401(k) Affects Your Florida Paycheck",
    excerpt:
      "See how pre-tax retirement contributions change taxable wages and take-home pay for Florida employees.",
    date: "October 2026",
    read: "8 min read",
  },
];

export default function BlogPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }]} />
      <div className="container mx-auto max-w-5xl px-4 pb-10 pt-8">
        <h1 className="mb-3 font-display text-3xl font-bold text-ink md:text-4xl">
          Florida paycheck blog
        </h1>
        <p className="mb-10 text-lg text-ink/75">
          Only topics people search alongside a Florida paycheck calculator — state tax, withholding,
          hourly pay, and 401(k) impact. No filler posts.
        </p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <Link
              key={post.href}
              href={post.href}
              className="group block border border-ink/10 bg-white/70 p-6 transition-colors hover:border-violet/50 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet"
            >
              <article>
                <h2 className="mb-3 font-display text-xl font-bold text-ink group-hover:text-violet">
                  {post.title}
                </h2>
                <p className="mb-4 text-ink/70">{post.excerpt}</p>
                <div className="mb-4 flex items-center gap-2 text-sm text-ink/50">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.read}</span>
                </div>
                <span className="font-semibold text-violet group-hover:underline">Read more →</span>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
