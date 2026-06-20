import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { FadeUp } from "@/components/motion/FadeUp";
import { Eyebrow } from "@/components/ui/Eyebrow";

const FACTS = [
  {
    stat: "1000s",
    detail: "of products are recalled in the U.S. every year — food, baby gear, cars, and more.",
  },
  {
    stat: "Most",
    detail: "people never see the recall notice that affects them.",
  },
  {
    stat: "Free",
    detail: "refunds, repairs, and replacements go unclaimed once deadlines pass.",
  },
];

export function Problem() {
  return (
    <Section spacing="loose" className="relative">
      <Container className="relative">

        {/* Heading */}
        <div className="mx-auto mb-14 flex max-w-3xl flex-col items-center text-center">
          <FadeUp>
            <Eyebrow>The problem</Eyebrow>
          </FadeUp>
          <FadeUp delay={0.05}>
            <h2 className="mt-6 text-balance text-[length:var(--text-h2-lg)] font-semibold leading-[1.05] tracking-[-0.03em]">
              The refund is real.{" "}
              <span className="text-[var(--color-text-muted)]">The notice isn&rsquo;t.</span>
            </h2>
          </FadeUp>
          <FadeUp delay={0.12}>
            <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-[var(--color-text-secondary)]">
              Agencies and manufacturers recall unsafe products and offer
              refunds, free repairs, or replacements. Most people never see the
              notice. The deadline passes. The money goes back.
            </p>
          </FadeUp>
        </div>

        {/* Giant editorial stats */}
        <div className="grid gap-0 sm:grid-cols-3">
          {FACTS.map((f, i) => (
            <FadeUp key={f.stat} delay={0.06 * i}>
              <div className={[
                "flex flex-col px-0 py-10 sm:px-10 sm:py-0",
                i > 0 ? "border-t border-[var(--color-border-subtle)] sm:border-t-0 sm:border-l" : "",
              ].join(" ")}>
                <span className="font-serif text-[length:var(--text-stat)] italic leading-none tracking-tight text-[var(--color-text-primary)]">
                  {f.stat}
                </span>
                <p className="mt-5 max-w-[22ch] text-[15px] leading-relaxed text-[var(--color-text-muted)]">
                  {f.detail}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>

      </Container>
    </Section>
  );
}
