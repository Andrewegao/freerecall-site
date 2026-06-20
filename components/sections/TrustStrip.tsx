import { Container } from "@/components/layout/Container";

const ITEMS = [
  "iOS & Android",
  "Official agency data",
  "New-recall alerts",
  "No account needed",
  "Always free",
];

export function TrustStrip() {
  return (
    <section className="border-y border-[var(--color-border-subtle)] bg-[var(--color-bg-grid)]/30 py-4">
      <Container>
        <div className="flex flex-wrap items-center justify-center gap-x-0 gap-y-2">
          {ITEMS.map((label, i) => (
            <span key={label} className="inline-flex items-center">
              <span className="whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
                {label}
              </span>
              {i < ITEMS.length - 1 && (
                <span aria-hidden className="mx-5 text-[var(--color-border-strong)] select-none">·</span>
              )}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
