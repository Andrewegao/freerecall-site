import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { FadeUp } from "@/components/motion/FadeUp";
import { MARQUEE_BRANDS } from "@/lib/constants";

export function Marquee() {
  const items = [...MARQUEE_BRANDS, ...MARQUEE_BRANDS];

  return (
    <Section id="recalls" spacing="tight">
      <Container>
        <div className="mb-12 flex flex-col items-center text-center">
          <FadeUp>
            <h2 className="max-w-2xl text-balance text-[clamp(1.875rem,2vw+1rem,2.25rem)] font-semibold leading-[1.1] tracking-[-0.02em]">
              Recalls hit these every week.{" "}
              <span className="text-[var(--color-text-muted)]">You may own one.</span>
            </h2>
          </FadeUp>
        </div>
      </Container>

      <div className="group relative w-full overflow-hidden mask-edges-fade py-6">
        <div
          className="flex w-max will-change-transform animate-[marquee_44s_linear_infinite] group-hover:[animation-play-state:paused]"
          aria-hidden
        >
          {items.map((b, i) => (
            <span key={`${b}-${i}`} className="inline-flex items-center">
              <span className="select-none whitespace-nowrap font-mono text-[length:clamp(1.5rem,1.25vw+1rem,1.875rem)] font-medium uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
                {b}
              </span>
              <span className="mx-[clamp(2rem,1vw+1.5rem,3rem)] text-[var(--color-border-strong)]" aria-hidden>·</span>
            </span>
          ))}
        </div>
      </div>
    </Section>
  );
}
