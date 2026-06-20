import { Container } from "./Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import type { ReactNode } from "react";

export function LegalShell({
  eyebrow,
  title,
  meta,
  children,
}: {
  eyebrow: string;
  title: string;
  meta?: string;
  children: ReactNode;
}) {
  return (
    <section className="pt-[clamp(7rem,8vw+5rem,11rem)] pb-32">
      <Container narrow>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-6 text-balance text-[length:var(--text-h2)] font-semibold leading-[1.05] tracking-[-0.03em]">
          {title}
        </h1>
        {meta && (
          <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--color-text-muted)]">
            {meta}
          </p>
        )}
        <div className="legal-prose mt-12">{children}</div>
      </Container>
    </section>
  );
}
