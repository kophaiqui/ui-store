import type { CheckboxStyleConfig } from "./default";
export type { CheckboxStyleConfig };

export const gradientStyle: CheckboxStyleConfig = {
  root: "relative flex shrink-0 items-center justify-center border border-[#FCE7F3] bg-white shadow-sm transition-all duration-150 hover:border-[#7C3AED]/40 data-[checked]:border-[#7C3AED]/60 data-[checked]:bg-[#7C3AED]/8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C3AED]/40 disabled:pointer-events-none disabled:opacity-40 dark:border-zinc-700 dark:bg-zinc-800 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.06),inset_0_2px_3px_rgba(0,0,0,0.2)] dark:hover:border-fuchsia-500/40 dark:data-[checked]:border-fuchsia-500/60 dark:data-[checked]:bg-fuchsia-500/15 dark:focus-visible:ring-fuchsia-500/40",
  sizes: {
    sm: "size-[14px] rounded-[3px]",
    md: "size-[18px] rounded",
    lg: "size-[22px] rounded-md",
  },
  checkSizes: {
    sm: { w: 8,  h: 6, d: "M1 3L2.8 5L7 1" },
    md: { w: 10, h: 7, d: "M1 3.5L3.5 6L9 1" },
    lg: { w: 12, h: 9, d: "M1.5 4.5L4.5 7.5L10.5 1.5" },
  },
  indicator: "flex items-center justify-center text-[#7C3AED] dark:text-fuchsia-400",
  label: "text-sm font-medium text-[#0F172A] leading-none dark:text-zinc-200",
  description: "text-xs text-[#64748B] leading-relaxed dark:text-zinc-500",
};
