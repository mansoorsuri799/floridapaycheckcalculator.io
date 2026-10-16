import { SITE_ORIGIN } from "@/lib/siteConfig";

function imageLoc(path: string): string {
  return `${SITE_ORIGIN}${path}`;
}

export type SitemapPage = {
  path: string;
  lastMod: string;
  changeFreq: "daily" | "weekly" | "monthly" | "yearly";
  priority: number;
  images?: Array<{ loc: string; title: string; caption: string }>;
};

const LASTMOD = "2026-10-16";

export const SITEMAP_PAGES: SitemapPage[] = [
  {
    path: "/",
    lastMod: LASTMOD,
    changeFreq: "daily",
    priority: 1,
    images: [
      {
        loc: imageLoc("/android-chrome-512x512.png"),
        title: "Florida Paycheck Calculator logo",
        caption: "Brand mark for Florida Paycheck Calculator on floridapaycheckcalculator.io",
      },
      {
        loc: imageLoc("/florida-paycheck-calculator.webp"),
        title: "Florida Paycheck Calculator tool",
        caption: "Free Florida take-home pay calculator homepage",
      },
    ],
  },
  {
    path: "/features",
    lastMod: LASTMOD,
    changeFreq: "weekly",
    priority: 0.9,
    images: [
      {
        loc: imageLoc("/florida-paycheck-calculator-1.webp"),
        title: "Florida Paycheck Calculator features",
        caption: "Hourly, salary, biweekly, and FICA breakdown features",
      },
    ],
  },
  {
    path: "/how-it-works",
    lastMod: LASTMOD,
    changeFreq: "weekly",
    priority: 0.9,
    images: [
      {
        loc: imageLoc("/florida-paycheck-calculator-2.webp"),
        title: "How Florida Paycheck Calculator works",
        caption: "Steps to estimate Florida take-home pay after federal tax and FICA",
      },
    ],
  },
  {
    path: "/hourly-paycheck-calculator",
    lastMod: LASTMOD,
    changeFreq: "weekly",
    priority: 0.95,
    images: [
      {
        loc: imageLoc("/florida-paycheck-calculator-3.webp"),
        title: "Florida Hourly Paycheck Calculator",
        caption: "Convert hourly wages to Florida take-home pay",
      },
    ],
  },
  {
    path: "/salary-paycheck-calculator",
    lastMod: LASTMOD,
    changeFreq: "weekly",
    priority: 0.95,
    images: [
      {
        loc: imageLoc("/florida-paycheck-calculator-1.webp"),
        title: "Florida Salary Paycheck Calculator",
        caption: "Estimate salaried take-home pay in Florida",
      },
    ],
  },
  {
    path: "/biweekly-paycheck-calculator",
    lastMod: LASTMOD,
    changeFreq: "weekly",
    priority: 0.95,
    images: [
      {
        loc: imageLoc("/florida-paycheck-calculator-2.webp"),
        title: "Florida Biweekly Paycheck Calculator",
        caption: "Estimate Florida biweekly net pay after taxes",
      },
    ],
  },
  {
    path: "/about-us",
    lastMod: LASTMOD,
    changeFreq: "monthly",
    priority: 0.7,
    images: [
      {
        loc: imageLoc("/android-chrome-512x512.png"),
        title: "About Florida Paycheck Calculator",
        caption: "Brand logo used on the About page",
      },
    ],
  },
  {
    path: "/blog",
    lastMod: LASTMOD,
    changeFreq: "weekly",
    priority: 0.8,
  },
  {
    path: "/blog/does-florida-have-state-income-tax",
    lastMod: LASTMOD,
    changeFreq: "monthly",
    priority: 0.9,
    images: [
      {
        loc: imageLoc("/florida-paycheck-calculator.webp"),
        title: "Does Florida have state income tax",
        caption: "Guide explaining Florida zero state income tax and paycheck impact",
      },
    ],
  },
  {
    path: "/blog/how-florida-paycheck-taxes-work",
    lastMod: LASTMOD,
    changeFreq: "monthly",
    priority: 0.9,
    images: [
      {
        loc: imageLoc("/florida-paycheck-calculator-1.webp"),
        title: "How Florida paycheck taxes work",
        caption: "Federal withholding, FICA, and Florida paycheck deductions explained",
      },
    ],
  },
  {
    path: "/blog/florida-hourly-paycheck-explained",
    lastMod: LASTMOD,
    changeFreq: "monthly",
    priority: 0.85,
    images: [
      {
        loc: imageLoc("/florida-paycheck-calculator-3.webp"),
        title: "Florida hourly paycheck explained",
        caption: "How to turn hourly wages into Florida take-home pay",
      },
    ],
  },
  {
    path: "/blog/how-401k-affects-florida-paycheck",
    lastMod: LASTMOD,
    changeFreq: "monthly",
    priority: 0.85,
    images: [
      {
        loc: imageLoc("/florida-paycheck-calculator-2.webp"),
        title: "How 401k affects Florida paycheck",
        caption: "Pre-tax 401(k) contributions and Florida take-home pay",
      },
    ],
  },
  {
    path: "/contact-us",
    lastMod: LASTMOD,
    changeFreq: "yearly",
    priority: 0.6,
  },
  {
    path: "/privacy",
    lastMod: LASTMOD,
    changeFreq: "yearly",
    priority: 0.4,
  },
  {
    path: "/disclaimer",
    lastMod: LASTMOD,
    changeFreq: "yearly",
    priority: 0.4,
  },
];

export function absoluteUrl(path: string): string {
  if (path === "/") return `${SITE_ORIGIN}/`;
  return `${SITE_ORIGIN}${path}`;
}
