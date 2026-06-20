import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FadeUp } from "@/components/motion/FadeUp";
import { STEPS } from "@/lib/constants";

export function HowItWorks() {
  return (
    <Section id="how-it-works">
      <Container>
        <div className="mb-12 max-w-3xl">
          <FadeUp>
            <Eyebrow>How it works</Eyebrow>
          </FadeUp>
          <FadeUp delay={0.05}>
            <h2 className="mt-6 text-balance text-[length:var(--text-h2)] font-semibold leading-[1.05] tracking-[-0.03em]">
              Three taps. That&rsquo;s it.
            </h2>
          </FadeUp>
        </div>

        <div className="relative grid gap-0 md:grid-cols-3">
          <div
            aria-hidden
            className="absolute top-[28px] left-0 right-0 hidden h-px md:block"
            style={{
              background:
                "linear-gradient(to right, transparent, var(--color-border-strong) 15%, var(--color-border-strong) 85%, transparent)",
            }}
          />

          {STEPS.map((step, i) => (
            <FadeUp key={step.number} delay={0.08 * i}>
              <div className={[
                "relative flex flex-col pb-10 pt-0 md:px-8 md:pb-0",
                i > 0 ? "border-t border-[var(--color-border-subtle)] pt-10 md:border-t-0 md:pt-0 md:border-l" : "",
              ].join(" ")}>

                <div className="relative z-10 mb-7 flex size-14 shrink-0 items-center justify-center rounded-full border border-[var(--color-border-strong)] bg-[var(--color-bg)]">
                  <span className="font-serif text-xl italic text-[var(--color-accent)]">
                    {i + 1}
                  </span>
                </div>

                <h3 className="text-[length:clamp(1.25rem,0.5vw+1rem,1.375rem)] font-medium tracking-tight text-[var(--color-text-primary)]">
                  {step.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-[var(--color-text-secondary)]">
                  {step.body}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </Container>
    </Section>
  );
}
