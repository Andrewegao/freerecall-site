import { cn } from "@/lib/cn";

export function AppStoreBadge({
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
      aria-label="Download on the App Store"
      className={cn(
        "inline-flex items-center rounded-[10px] bg-black",
        "border border-white/[0.18] transition-all duration-200 hover:bg-[#1c1c1e] hover:scale-[1.02] active:scale-[0.99]",
        isSm
          ? "h-[36px] min-w-[124px] gap-[8px] px-[11px]"
          : "h-[46px] min-w-[152px] gap-[10px] px-[14px]",
        className
      )}
    >
      <svg
        viewBox="0 0 814 1000"
        aria-hidden="true"
        className={cn("w-auto shrink-0 fill-white", isSm ? "h-[17px]" : "h-[22px]")}
      >
        <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-57.8-155.5-127.4C46 790.7 0 663 0 541.8c0-207.5 135.4-317.3 269-317.3 70.1 0 128.4 46.4 172.5 46.4 42.8 0 109.9-49 192.8-49 31.3 0 108.2 2.6 168.5 80.2zm-127.8-157.2c30.6-36.2 52.4-86.7 52.4-137.2 0-7.1-.6-14.3-1.9-20.1-49.9 1.9-109.2 33.2-144.6 75.5-28 31.6-54.2 83.1-54.2 135.3 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 132.8-72.9z" />
      </svg>
      <div className="flex flex-col leading-none">
        <span className={cn("font-normal tracking-[0.06em] text-white/70", isSm ? "text-[8px]" : "text-[10px]")}>
          Download on the
        </span>
        <span className={cn("font-semibold tracking-[-0.01em] text-white", isSm ? "text-[12px]" : "text-[15px]")}>
          App Store
        </span>
      </div>
    </a>
  );
}
