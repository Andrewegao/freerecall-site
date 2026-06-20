import Image from "next/image";
import Link from "next/link";
import { Container } from "./Container";
import {
  ANDROID_URL,
  COMPANY,
  FOOTER_COMPANY,
  IOS_URL,
  PRODUCT,
  SITE_PATH,
} from "@/lib/constants";
import { AppStoreBadge } from "@/components/ui/AppStoreBadge";
import { GooglePlayBadge } from "@/components/ui/GooglePlayBadge";

const FOOTER_LINKS = [
  { label: "How it works", href: "/#how-it-works" },
  { label: "Recalls", href: "/#recalls" },
  { label: "FAQ", href: "/#faq" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-[var(--color-border-subtle)]">
      <Container className="py-[clamp(3rem,3vw+1.5rem,4rem)]">
        <div className="grid gap-12 md:grid-cols-[2fr_1fr_1fr]">

          {/* Brand column */}
          <div>
            <Link href="/" className="flex items-center gap-2.5 text-[15px] font-semibold tracking-tight">
              <Image
                src={`${SITE_PATH}/app-icon.png`}
                alt="FreeRecall app icon"
                width={28}
                height={28}
                className="rounded-[8px]"
                unoptimized
              />
              {PRODUCT}
            </Link>
            <p className="mt-4 max-w-[240px] text-sm leading-relaxed text-[var(--color-text-muted)]">
              Find product recalls on things you own and claim your refund,
              free repair, or replacement. Always free.
            </p>
            {/* Store badges in footer */}
            <div className="mt-6 flex flex-col gap-2">
              <AppStoreBadge href={IOS_URL} size="sm" />
              <GooglePlayBadge href={ANDROID_URL} size="sm" />
            </div>
          </div>

          {/* Product links */}
          <div>
            <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.14em] text-[var(--color-text-muted)]">
              Product
            </p>
            <ul className="space-y-3 text-sm text-[var(--color-text-secondary)]">
              {FOOTER_LINKS.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="transition-colors hover:text-[var(--color-text-primary)]"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company links */}
          <div>
            <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.14em] text-[var(--color-text-muted)]">
              Legal
            </p>
            <ul className="space-y-3 text-sm text-[var(--color-text-secondary)]">
              {FOOTER_COMPANY.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="transition-colors hover:text-[var(--color-text-primary)]"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-[var(--color-border-subtle)] pt-6 text-xs text-[var(--color-text-muted)] sm:flex-row sm:items-center">
          <p className="font-mono uppercase tracking-wider">
            &copy; {new Date().getFullYear()} {COMPANY}. All rights reserved.
          </p>
          <p className="max-w-md leading-relaxed sm:text-right">
            {PRODUCT} is an independent app, not a government service. Recall
            information sourced from official U.S. agencies.
          </p>
        </div>
      </Container>
    </footer>
  );
}
