import { cn } from "@/lib/cn";

export function GooglePlayBadge({
  href,
  className,
  size = "md",
}: {
  href: string;
  className?: string;
  size?: "md" | "sm";
}) {
  const isSm = size === "sm";
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Get it on Google Play"
      className={cn(
        "inline-flex items-center rounded-[10px] bg-black",
        "border border-white/[0.18] transition-all duration-200 hover:bg-[#1c1c1e] hover:scale-[1.02] active:scale-[0.99]",
        isSm
          ? "h-[36px] min-w-[124px] gap-[8px] px-[11px]"
          : "h-[46px] min-w-[152px] gap-[10px] px-[14px]",
        className
      )}
    >
      <svg viewBox="0 0 22 24" aria-hidden="true" className={cn("w-auto shrink-0", isSm ? "h-[17px]" : "h-[22px]")}>
        <defs>
          <linearGradient id="gp-b" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00C4FF" />
            <stop offset="100%" stopColor="#1565C0" />
          </linearGradient>
          <linearGradient id="gp-g" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#5BDB6F" />
            <stop offset="100%" stopColor="#1E9E48" />
          </linearGradient>
          <linearGradient id="gp-y" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFE235" />
            <stop offset="100%" stopColor="#FFA900" />
          </linearGradient>
          <linearGradient id="gp-r" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FF6D6D" />
            <stop offset="100%" stopColor="#D9234E" />
          </linearGradient>
        </defs>
        <path d="M0.5 1.2C0.5 0.5 1 0.1 1.6 0.4L21 11.5c.6.3.6 1.1 0 1.4L1.6 23.6C1 23.9.5 23.5.5 22.8V1.2z" fill="url(#gp-b)" />
        <path d="M0.5 1.2L12 12.2l-10.4 11.4C1 23.9.5 23.5.5 22.8V1.2z" fill="url(#gp-g)" />
        <path d="M12 12.2L0.5 1.2C0.5.5 1 .1 1.6.4L12 6.1v6.1z" fill="url(#gp-y)" />
        <path d="M12 12.2v6.1L1.6 23.6C1 23.9.5 23.5.5 22.8L12 12.2z" fill="url(#gp-r)" />
      </svg>
      <div className="flex flex-col leading-none">
        <span className={cn("font-normal tracking-[0.06em] text-white/70", isSm ? "text-[8px]" : "text-[10px]")}>
          Get it on
        </span>
        <span className={cn("font-semibold tracking-[-0.01em] text-white", isSm ? "text-[12px]" : "text-[15px]")}>
          Google Play
        </span>
      </div>
    </a>
  );
}
