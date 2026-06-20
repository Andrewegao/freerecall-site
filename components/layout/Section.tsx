import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

export function Section({
  id,
  children,
  className,
  as: As = "section",
  spacing = "default",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  as?: "section" | "div" | "header" | "footer";
  spacing?: "default" | "tight" | "loose" | "none";
}) {
  const padding =
    spacing === "none"
      ? ""
      : spacing === "tight"
      ? "py-[var(--section-y-tight)]"
      : spacing === "loose"
      ? "py-[var(--section-y-loose)]"
      : "py-[var(--section-y)]";

  return (
    <As id={id} className={cn("relative", padding, className)}>
      {children}
    </As>
  );
}
