import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

export function Eyebrow({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em]",
        "border-[var(--color-border-subtle)] bg-[var(--color-accent-tint)] text-[var(--color-accent)]",
        className
      )}
    >
      <span className="size-1.5 rounded-full bg-[var(--color-accent)] shadow-[0_0_8px_var(--color-accent-glow)]" />
      {children}
    </span>
  );
}
