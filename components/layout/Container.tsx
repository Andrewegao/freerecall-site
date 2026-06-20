import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

export function Container({
  children,
  className,
  narrow = false,
}: {
  children: ReactNode;
  className?: string;
  narrow?: boolean;
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-[clamp(1.5rem,1vw+1rem,2rem)]",
        narrow ? "max-w-[720px]" : "max-w-[1200px]",
        className
      )}
    >
      {children}
    </div>
  );
}
