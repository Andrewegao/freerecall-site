import { Container } from "@/components/layout/Container";
import { GridBackdrop } from "@/components/motion/GridBackdrop";
import { FadeUp } from "@/components/motion/FadeUp";
import { AppStoreBadge } from "@/components/ui/AppStoreBadge";
import { GooglePlayBadge } from "@/components/ui/GooglePlayBadge";
import { ANDROID_URL, IOS_URL } from "@/lib/constants";

const STATS = [
  { value: "1000s", label: "of recalls every year" },
  { value: "Free", label: "no ads, no account" },
  { value: "Official", label: "CPSC, FDA, USDA & NHTSA" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-[clamp(7rem,6vw+3rem,10rem)] pb-[clamp(4rem,3vw+1.5rem,6rem)]">
      <GridBackdrop intensity="strong" />

      <Container className="relative">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">

          {/* Live indicator pill */}
          <FadeUp>
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border-strong)] bg-[var(--color-surface-elevated)] px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--color-text-muted)]">
              <span className="relative flex size-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-accent)] opacity-50" />
                <span className="relative inline-flex size-1.5 rounded-full bg-[var(--color-accent)]" />
              </span>
              Free · iOS &amp; Android
            </span>
          </FadeUp>

          <FadeUp delay={0.06}>
            <h1 className="mt-8 text-balance text-[length:var(--text-hero)] font-semibold leading-[0.97] tracking-[-0.04em]">
              Recalls quietly{" "}
              <span className="font-serif italic font-normal text-[var(--color-accent)]">
                expire.
              </span>
              <br className="hidden sm:block" /> Claim what&rsquo;s yours.
            </h1>
          </FadeUp>

          <FadeUp delay={0.14}>
            <p className="mt-7 max-w-2xl text-pretty text-[length:clamp(1.0625rem,0.5vw+0.9rem,1.25rem)] leading-relaxed text-[var(--color-text-secondary)]">
              FreeRecall shows you real U.S. recalls on things you already
              own, so you can claim your refund, free repair, or replacement in minutes.
            </p>
          </FadeUp>

          {/* Download badges */}
          <FadeUp delay={0.22}>
            <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
              <AppStoreBadge href={IOS_URL} />
              <GooglePlayBadge href={ANDROID_URL} />
            </div>
          </FadeUp>

          {/* Stats — integrated with top highlight line */}
          <FadeUp delay={0.3}>
            <div className="relative mt-12 grid w-full max-w-2xl grid-cols-3">
              {/* Top shine */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 top-0 h-px rounded-full"
                style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.1) 30%, rgba(255,255,255,0.1) 70%, transparent)" }}
              />
              {/* Bottom border */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 bottom-0 h-px"
                style={{ background: "linear-gradient(to right, transparent, var(--color-border-subtle) 30%, var(--color-border-subtle) 70%, transparent)" }}
              />

              {STATS.map((s, i) => (
                <div
                  key={s.value}
                  className={[
                    "flex flex-col items-center px-[clamp(0.75rem,2vw+0.25rem,2rem)] py-[clamp(1.25rem,0.5vw+1rem,1.5rem)]",
                    i > 0 ? "border-l border-[var(--color-border-subtle)]" : "",
                  ].join(" ")}
                >
                  <span className="font-serif text-[length:clamp(1.5rem,1.25vw+1rem,1.875rem)] italic text-[var(--color-accent)]">
                    {s.value}
                  </span>
                  <span className="mt-1.5 text-center text-[11px] leading-snug tracking-wide text-[var(--color-text-muted)]">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </FadeUp>

        </div>
      </Container>
    </section>
  );
}
