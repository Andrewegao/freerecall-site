import { cn } from "@/lib/cn";

export function GridBackdrop({
  className,
  intensity = "default",
}: {
  className?: string;
  intensity?: "default" | "strong";
}) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 -z-10 overflow-hidden",
        className
      )}
    >
      <div
        className="absolute inset-0 bg-grid mask-radial-fade animate-[grid-drift_24s_linear_infinite] opacity-70"
      />
      <div
        className={cn(
          "absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[140px]",
          intensity === "strong"
            ? "size-[680px] bg-[var(--color-accent-glow)] opacity-50"
            : "size-[520px] bg-[var(--color-accent-glow)] opacity-30"
        )}
      />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-[var(--color-bg)]" />
    </div>
  );
}
