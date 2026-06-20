"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Container } from "./Container";
import { NAV_LINKS, IOS_URL, ANDROID_URL, PRODUCT, SITE_PATH } from "@/lib/constants";
import { cn } from "@/lib/cn";

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-[var(--color-border-subtle)] bg-[rgba(7,7,8,0.65)] backdrop-blur-xl"
          : "border-b border-transparent"
      )}
    >
      <Container className="flex h-16 items-center justify-between">
        <Link
          href="/"
          className="group flex items-center gap-2.5 text-[15px] font-semibold tracking-tight transition-colors hover:text-[var(--color-accent)]"
        >
          <Image
            src={`${SITE_PATH}/app-icon.png`}
            alt="FreeRecall app icon"
            width={28}
            height={28}
            className="rounded-[8px] shadow-[0_0_20px_-4px_var(--color-accent-glow)] transition-transform group-hover:scale-105"
            unoptimized
          />
          <span>{PRODUCT}</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-text-primary)]"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href={ANDROID_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-[var(--color-border-strong)] px-4 py-1.5 text-xs font-medium text-[var(--color-text-secondary)] transition-colors hover:bg-[var(--color-surface-elevated)] hover:text-[var(--color-text-primary)]"
          >
            Google Play
          </a>
          <a
            href={IOS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[var(--color-accent)] px-4 py-1.5 text-xs font-semibold text-black transition-colors hover:bg-[var(--color-accent-hover)]"
          >
            App Store
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="grid size-11 place-items-center rounded-full border border-[var(--color-border-subtle)] md:hidden"
        >
          <span className="relative block h-3 w-4">
            <span
              className={cn(
                "absolute left-0 top-0 h-px w-full bg-current transition-transform",
                open ? "translate-y-1.5 rotate-45" : ""
              )}
            />
            <span
              className={cn(
                "absolute bottom-0 left-0 h-px w-full bg-current transition-transform",
                open ? "-translate-y-1.5 -rotate-45" : ""
              )}
            />
          </span>
        </button>
      </Container>

      {open && (
        <div className="border-t border-[var(--color-border-subtle)] bg-[var(--color-bg)] md:hidden">
          <Container className="flex flex-col gap-1 py-6">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base text-[var(--color-text-secondary)] transition-colors hover:bg-[var(--color-surface)] hover:text-[var(--color-text-primary)]"
              >
                {l.label}
              </Link>
            ))}
            <div className="mt-3 flex gap-2">
              <a
                href={ANDROID_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 rounded-[12px] border border-[var(--color-border-strong)] py-3 text-center text-sm font-medium text-[var(--color-text-secondary)]"
              >
                Google Play
              </a>
              <a
                href={IOS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 rounded-[12px] bg-[var(--color-accent)] py-3 text-center text-sm font-semibold text-black"
              >
                App Store
              </a>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
