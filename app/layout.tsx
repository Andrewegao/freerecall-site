import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Instrument_Serif } from "next/font/google";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { CloudflareAnalytics } from "@/components/CloudflareAnalytics";
import {
  COMPANY,
  IOS_APP_ID,
  PRODUCT,
  SITE_ORIGIN,
  SITE_URL,
  TAGLINE,
} from "@/lib/constants";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_ORIGIN),
  title: {
    default: `${PRODUCT}: ${TAGLINE}`,
    template: `%s · ${PRODUCT}`,
  },
  description:
    "FreeRecall helps you find U.S. government product recalls on things you already own and claim your refund, free repair, or replacement. Free for iOS and Android.",
  applicationName: PRODUCT,
  authors: [{ name: COMPANY }],
  keywords: [
    "product recall",
    "recall",
    "refund",
    "recalled",
    "consumer safety",
    "CPSC",
    "FDA",
  ],
  appleWebApp: {
    capable: true,
    title: PRODUCT,
  },
  other: {
    "apple-itunes-app": `app-id=${IOS_APP_ID}`,
  },
  openGraph: {
    type: "website",
    title: `${PRODUCT}: ${TAGLINE}`,
    description:
      "Recalls that pay you back. Free for iOS and Android.",
    siteName: PRODUCT,
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: `${PRODUCT}: ${TAGLINE}`,
    description:
      "Recalls that pay you back. Free for iOS and Android.",
  },
};

export const viewport: Viewport = {
  themeColor: "#070708",
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} ${instrumentSerif.variable}`}
    >
      <body>
        <NavBar />
        <main>{children}</main>
        <Footer />
        <CloudflareAnalytics />
      </body>
    </html>
  );
}
