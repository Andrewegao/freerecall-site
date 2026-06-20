import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { FadeUp } from "@/components/motion/FadeUp";
import { REVIEWS } from "@/lib/constants";

function emphasizeAmounts(text: string) {
  return text.split(/(\$[\d,]+)/g).map((part, i) =>
    /^\$[\d,]+$/.test(part) ? (
      <span key={i} className="font-semibold text-[var(--color-accent)]">
        {part}
      </span>
    ) : (
      part
    )
  );
}

export function Reviews() {
  return (
    <Section>
      <Container>
        <div className="mb-12 flex flex-col items-center text-center">
          <FadeUp>
            <h2 className="max-w-2xl text-balance text-[length:var(--text-h2)] font-semibold leading-[1.05] tracking-[-0.03em]">
              Here&rsquo;s what people got back.
            </h2>
          </FadeUp>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {REVIEWS.map((r, i) => (
            <FadeUp key={r.name} delay={0.06 * i}>
              <div className="relative flex h-full flex-col rounded-2xl border border-[var(--color-border-subtle)] bg-[var(--color-surface)] p-[clamp(1.5rem,1vw+1rem,2rem)] backdrop-blur-xl transition-colors duration-200 hover:border-[var(--color-border-strong)] hover:bg-[var(--color-surface-elevated)]">
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 top-0 h-px rounded-t-2xl"
                  style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.07), transparent)" }}
                />

                <blockquote className="flex-1 text-[17px] leading-[1.65] text-[var(--color-text-primary)]">
                  {emphasizeAmounts(r.body)}
                </blockquote>

                <p className="mt-8 text-[14px] font-medium text-[var(--color-text-secondary)]">
                  {r.name}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </Container>
    </Section>
  );
}
