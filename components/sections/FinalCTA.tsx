import { Container } from "@/components/layout/Container";
import { GridBackdrop } from "@/components/motion/GridBackdrop";
import { FadeUp } from "@/components/motion/FadeUp";
import { AppStoreBadge } from "@/components/ui/AppStoreBadge";
import { GooglePlayBadge } from "@/components/ui/GooglePlayBadge";
import { ANDROID_URL, IOS_URL } from "@/lib/constants";

const TRUST = [
  "Always free",
  "No signup",
  "No ads",
];

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-[clamp(6rem,5vw+2rem,9rem)]">
      <GridBackdrop intensity="strong" />

      <Container className="relative">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">

          <FadeUp>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-accent)]">
              Takes 2 minutes
            </p>
          </FadeUp>

          <FadeUp delay={0.06}>
            <h2 className="mt-6 text-balance text-[length:var(--text-cta)] font-semibold leading-[0.96] tracking-[-0.04em]">
              Your money is{" "}
              <span className="font-serif italic font-normal text-[var(--color-accent)]">
                waiting.
              </span>
            </h2>
          </FadeUp>

          <FadeUp delay={0.14}>
            <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
              <AppStoreBadge href={IOS_URL} />
              <GooglePlayBadge href={ANDROID_URL} />
            </div>
          </FadeUp>

          {/* Trust row */}
          <FadeUp delay={0.22}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-0 gap-y-1">
              {TRUST.map((t, i) => (
                <span key={t} className="inline-flex items-center">
                  <span className="text-[12px] text-[var(--color-text-muted)]">{t}</span>
                  {i < TRUST.length - 1 && (
                    <span aria-hidden className="mx-3 text-[var(--color-border-strong)]">·</span>
                  )}
                </span>
              ))}
            </div>
          </FadeUp>

        </div>
      </Container>
    </section>
  );
}
