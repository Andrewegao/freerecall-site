import { cn } from "@/lib/cn";
import type { ReactNode, HTMLAttributes } from "react";

export function GlassCard({
  children,
  className,
  as: As = "div",
  interactive = false,
  ...props
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "article" | "li";
  interactive?: boolean;
} & HTMLAttributes<HTMLElement>) {
  return (
    <As
      className={cn(
        "relative rounded-[20px] border bg-[var(--color-surface)] backdrop-blur-xl",
        "border-[var(--color-border-subtle)]",
        "before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:rounded-t-[20px]",
        "before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent",
        interactive &&
          "transition-[transform,border-color,background-color] duration-300 ease-out hover:-translate-y-[2px] hover:border-[var(--color-border-strong)] hover:bg-[var(--color-surface-elevated)]",
        className
      )}
      {...props}
    >
      {children}
    </As>
  );
}
