import Link from 'next/link';
import CtaButton from '@/components/CtaButton';
import { CONTACT_EMAIL, SITE_DOMAIN, SITE_NAME, SITE_TAGLINE } from '@/lib/siteConfig';

export default function Footer() {
  return (
    <footer className="relative z-20 border-t border-ink/10 bg-gradient-to-br from-ink via-[#243044] to-teal-deep pt-8 pb-2 px-4 text-white md:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h2 className="mb-4 font-display text-xl font-bold text-white">{SITE_NAME}</h2>
            <p className="mb-4 text-sm text-white/75">{SITE_TAGLINE}</p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-sm text-orange-200 underline hover:no-underline"
            >
              {CONTACT_EMAIL}
            </a>
          </div>

          <div>
            <h2 className="mb-4 text-lg font-semibold text-white">Tools</h2>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-white/85 hover:text-white hover:underline">Florida Paycheck Calculator</Link></li>
              <li><Link href="/hourly-paycheck-calculator" className="text-white/85 hover:text-white hover:underline">Hourly Paycheck Calculator</Link></li>
              <li><Link href="/salary-paycheck-calculator" className="text-white/85 hover:text-white hover:underline">Salary Paycheck Calculator</Link></li>
              <li><Link href="/biweekly-paycheck-calculator" className="text-white/85 hover:text-white hover:underline">Biweekly Paycheck Calculator</Link></li>
              <li><Link href="/features" className="text-white/85 hover:text-white hover:underline">Features</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-lg font-semibold text-white">Guides</h2>
            <ul className="space-y-2 text-sm">
              <li><Link href="/how-it-works" className="text-white/85 hover:text-white hover:underline">How It Works</Link></li>
              <li><Link href="/blog/does-florida-have-state-income-tax" className="text-white/85 hover:text-white hover:underline">Does Florida Have State Income Tax?</Link></li>
              <li><Link href="/blog/how-florida-paycheck-taxes-work" className="text-white/85 hover:text-white hover:underline">How Florida Paycheck Taxes Work</Link></li>
              <li><Link href="/blog/florida-hourly-paycheck-explained" className="text-white/85 hover:text-white hover:underline">Florida Hourly Paycheck Explained</Link></li>
              <li><Link href="/blog/how-401k-affects-florida-paycheck" className="text-white/85 hover:text-white hover:underline">How 401(k) Affects Your Paycheck</Link></li>
              <li><Link href="/about-us" className="text-white/85 hover:text-white hover:underline">About Us</Link></li>
              <li><Link href="/contact-us" className="text-white/85 hover:text-white hover:underline">Contact Us</Link></li>
              <li><Link href="/privacy" className="text-white/85 hover:text-white hover:underline">Privacy Policy</Link></li>
              <li><Link href="/disclaimer" className="text-white/85 hover:text-white hover:underline">Disclaimer</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-lg font-semibold text-white">Estimate free</h2>
            <p className="mb-4 text-sm text-white/80">
              See Florida take-home pay after federal tax and FICA — with $0 state income tax.
            </p>
            <CtaButton href="/#calculator" ariaLabel="Open the free Florida paycheck calculator" icon="arrow">
              OPEN CALCULATOR
            </CtaButton>
          </div>
        </div>

        <div className="mt-8 border-t border-white/15 pt-4 pb-3 text-center text-sm text-white/70">
          <p className="mb-0">
            © 2026 {SITE_NAME}. All rights reserved. |{' '}
            <Link href="/" className="underline hover:no-underline text-white/90">{SITE_DOMAIN}</Link>
          </p>
          <p className="mt-2 text-xs text-white/45">
            Educational paycheck estimates only. Not tax, legal, or payroll advice. Confirm figures with your employer or a tax professional.
          </p>
        </div>
      </div>
    </footer>
  );
}
