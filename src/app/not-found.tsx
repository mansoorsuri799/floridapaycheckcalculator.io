import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page not found",
  description: "The page you are looking for does not exist. Return to Florida Paycheck Calculator.",
};

export default function NotFound() {
  return (
    <div className="container mx-auto flex max-w-xl flex-col items-center px-4 py-24 text-center">
      <h1 className="mb-4 font-display text-3xl font-bold text-ink">Page not found</h1>
      <p className="mb-8 text-ink/75">
        That page is gone or never existed. Head back to Florida Paycheck Calculator to estimate
        take-home pay.
      </p>
      <Link
        href="/"
        className="rounded-xl bg-gradient-to-r from-violet to-pink-deep px-6 py-3 font-semibold text-white"
      >
        Go to homepage
      </Link>
    </div>
  );
}
