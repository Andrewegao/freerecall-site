import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { FAQItem } from "@/components/ui/FAQItem";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FadeUp } from "@/components/motion/FadeUp";
import { FAQS } from "@/lib/constants";

export function FAQ() {
  return (
    <Section id="faq">
      <Container>
        <div className="grid gap-16 lg:grid-cols-[1fr_2fr]">
          <div className="lg:sticky lg:top-32 lg:h-fit">
            <FadeUp>
              <Eyebrow>FAQ</Eyebrow>
            </FadeUp>
            <FadeUp delay={0.05}>
              <h2 className="mt-6 text-balance text-[length:var(--text-h2)] font-semibold leading-[1.05] tracking-[-0.03em]">
                Questions, answered.
              </h2>
            </FadeUp>
            <FadeUp delay={0.12}>
              <p className="mt-6 text-[15px] leading-relaxed text-[var(--color-text-secondary)]">
                More in our{" "}
                <Link
                  href="/support"
                  className="text-[var(--color-accent)] underline decoration-[var(--color-accent)]/30 underline-offset-4 transition-colors hover:decoration-[var(--color-accent)]"
                >
                  full support page
                </Link>
                .
              </p>
            </FadeUp>
          </div>

          <FadeUp delay={0.08}>
            <div className="border-t border-[var(--color-border-subtle)]">
              {FAQS.map((f) => (
                <FAQItem key={f.q} q={f.q} a={f.a} />
              ))}
            </div>
          </FadeUp>
        </div>
      </Container>
    </Section>
  );
}
