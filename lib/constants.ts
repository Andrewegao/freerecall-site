export const IOS_URL =
  "https://apps.apple.com/app/freerecall/id6782357599";
export const IOS_APP_ID = "6782357599";

export const ANDROID_URL =
  "https://play.google.com/store/apps/details?id=com.qupid.freerecall";

export const COMPANY = "Qupid, LLC";
export const PRODUCT = "FreeRecall";
export const TAGLINE = "Recalls that pay you back.";

export const SITE_ORIGIN =
  process.env.NEXT_PUBLIC_SITE_ORIGIN ?? "https://andrewegao.github.io";
export const SITE_PATH =
  process.env.NEXT_PUBLIC_USE_BASE_PATH === "false" ? "" : "/freerecall-site";
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? `${SITE_ORIGIN}${SITE_PATH}`;

export const NAV_LINKS = [
  { label: "How it works", href: "/#how-it-works" },
  { label: "Recalls", href: "/#recalls" },
  { label: "FAQ", href: "/#faq" },
  { label: "Support", href: "/support" },
];

export const FOOTER_PRODUCT = [
  { label: "App Store", href: IOS_URL, external: true },
  { label: "Google Play", href: ANDROID_URL, external: true },
];

export const FOOTER_COMPANY = [
  { label: "Support", href: "/support" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

export const MARQUEE_BRANDS = [
  "CPSC",
  "FDA",
  "USDA",
  "NHTSA",
  "Baby gear",
  "Appliances",
  "Food",
  "Strollers",
  "Electronics",
  "Furniture",
  "Toys",
  "Cars",
];

export const STEPS: { number: string; title: string; body: string; image: string }[] = [
  {
    number: "01",
    title: "Browse",
    body: "Real recalls with product photos, sorted so you can scan fast. Updated constantly.",
    image: "/screenshots/step-1.png",
  },
  {
    number: "02",
    title: "Recognize",
    body: "Spot something you own — food, baby gear, appliances, electronics, and more.",
    image: "/screenshots/step-2.png",
  },
  {
    number: "03",
    title: "Get money back",
    body: "Open the official agency page and claim your refund, free repair, or replacement.",
    image: "/screenshots/step-3.png",
  },
];

export const REVIEWS: { body: string; name: string }[] = [
  {
    body: "$30 back on a nursing pillow we'd had for a year. FreeRecall flagged it, showed me the official recall page, and I filed in two minutes. No receipt needed.",
    name: "Maya R.",
  },
  {
    body: "Found out our space heater was recalled for a fire risk — full $80 refund from the manufacturer. I never would have seen the notice otherwise.",
    name: "Devin K.",
  },
  {
    body: "Got a free repair kit for our stroller straight from the official recall link. The alert is what caught it before anyone got hurt.",
    name: "Priya S.",
  },
];

export const FAQS: { q: string; a: string }[] = [
  {
    q: "What is FreeRecall?",
    a: "FreeRecall helps you find U.S. government product recalls on things you already own and claim the refund, free repair, or replacement on the official agency site. Most recalls go unnoticed and the money goes unclaimed — FreeRecall changes that.",
  },
  {
    q: "How does FreeRecall work?",
    a: "Browse a feed of real recalls with product photos, recognize something you own, and tap through to the official agency page to claim. We point you to the source; you get the remedy.",
  },
  {
    q: "Is FreeRecall really free?",
    a: "Yes, always. There are no subscriptions, no hidden fees, no ads, and no account required.",
  },
  {
    q: "Where does the recall data come from?",
    a: "From official U.S. government sources, including the CPSC, FDA, USDA, and NHTSA. Every recall shows its source agency, recall ID, and date, with a link to the official notice.",
  },
  {
    q: "Is FreeRecall a government service?",
    a: "No. FreeRecall is an independent app, not affiliated with or endorsed by any government agency. Always confirm details and file your claim on the official agency website.",
  },
  {
    q: "Do I need a receipt to claim?",
    a: "Often not. Many recall remedies need only the product or its model number. Each recall explains exactly what's required, straight from the agency.",
  },
  {
    q: "How much money can I get?",
    a: "It depends on the recall. Outcomes range from a full refund to a free repair or replacement. Each listing shows the remedy the agency or manufacturer is offering.",
  },
  {
    q: "Is my data safe?",
    a: "Yes. There is no account and no sign-in, and your saved recalls stay on your device. See our Privacy Policy for full details.",
  },
];
