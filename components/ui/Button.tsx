import { cn } from "@/lib/cn";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-[14px] px-6 py-3 text-sm font-semibold tracking-tight transition-all duration-200 active:scale-[0.99]";

const variants: Record<Variant, string> = {
  primary: "bg-white text-black hover:bg-white/95 hover:scale-[1.02]",
  ghost:
    "border border-[var(--color-border-strong)] bg-transparent text-[var(--color-text-primary)] hover:bg-[var(--color-surface-elevated)]",
};

export function Button({
  children,
  variant = "primary",
  className,
  href,
  external,
  ...props
}: {
  children: ReactNode;
  variant?: Variant;
  className?: string;
  href: string;
  external?: boolean;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "children">) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={cn(base, variants[variant], className)}
      {...props}
    >
      {children}
    </a>
  );
}
