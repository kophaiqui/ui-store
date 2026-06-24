import type { CheckboxStyleConfig } from "./default";
export type { CheckboxStyleConfig, CheckboxSize } from "./default";

export const terminalStyle: CheckboxStyleConfig = {
  root: "relative flex shrink-0 items-center justify-center border border-[#16A34A] bg-white transition-all duration-100 hover:bg-[#16A34A]/10 data-[checked]:border-[#16A34A] data-[checked]:bg-[#16A34A] dark:border-[#22C55E] dark:bg-transparent dark:hover:bg-[#22C55E]/10 dark:data-[checked]:border-[#22C55E] dark:data-[checked]:bg-[#22C55E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16A34A]/50 dark:focus-visible:ring-[#22C55E]/50 focus-visible:ring-offset-1 disabled:pointer-events-none disabled:opacity-40 rounded-sm",
  sizes: {
    sm: "size-[14px] rounded-[2px]",
    md: "size-[18px] rounded-[2px]",
    lg: "size-[22px] rounded-sm",
  },
  checkSizes: {
    sm: { w: 8,  h: 6, d: "M1 3L2.8 5L7 1" },
    md: { w: 10, h: 7, d: "M1 3.5L3.5 6L9 1" },
    lg: { w: 12, h: 9, d: "M1.5 4.5L4.5 7.5L10.5 1.5" },
  },
  indicator: "flex items-center justify-center text-white dark:text-black",
  label: "font-mono text-sm font-bold text-[#065F46] dark:text-[#22C55E] group-hover:text-[#065F46] dark:group-hover:text-[#86EFAC] transition-colors duration-100 leading-none",
  description: "font-mono text-xs text-[#047857] dark:text-[#86EFAC] leading-relaxed",
};
