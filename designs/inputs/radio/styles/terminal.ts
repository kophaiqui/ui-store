import type { RadioStyleConfig } from "./default";
export type { RadioStyleConfig, RadioSize } from "./default";

export const terminalStyle: RadioStyleConfig = {
  root: "relative flex shrink-0 items-center justify-center rounded-full border border-[#16A34A] bg-white transition-all duration-100 hover:bg-[#16A34A]/10 data-[checked]:border-[#16A34A] data-[checked]:bg-[#16A34A]/5 dark:border-[#22C55E] dark:bg-transparent dark:hover:bg-[#22C55E]/10 dark:data-[checked]:border-[#22C55E] dark:data-[checked]:bg-[#22C55E]/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16A34A]/50 dark:focus-visible:ring-[#22C55E]/50 focus-visible:ring-offset-1 disabled:pointer-events-none disabled:opacity-40",
  sizes: {
    sm: "size-[14px]",
    md: "size-[18px]",
    lg: "size-[22px]",
  },
  dot: "rounded-full bg-[#16A34A] dark:bg-[#22C55E] transition-transform duration-100 scale-0 data-[checked]:scale-100",
  dotSizes: {
    sm: "size-[6px]",
    md: "size-[8px]",
    lg: "size-[10px]",
  },
  label: "font-mono text-sm font-bold text-[#065F46] dark:text-[#22C55E] group-hover:text-[#065F46] dark:group-hover:text-[#86EFAC] transition-colors duration-100 leading-none",
  description: "font-mono text-xs text-[#047857] dark:text-[#86EFAC] leading-relaxed",
};
