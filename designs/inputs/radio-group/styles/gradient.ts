import type { RadioGroupStyleConfig } from "./default";
export type { RadioGroupStyleConfig };

export const gradientStyle: RadioGroupStyleConfig = {
  root: "relative flex shrink-0 items-center justify-center rounded-full border border-[#FCE7F3] bg-white shadow-sm transition-all duration-150 hover:border-[#7C3AED]/40 data-[checked]:border-[#7C3AED]/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C3AED]/40 dark:border-zinc-700 dark:bg-zinc-800 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] dark:hover:border-fuchsia-500/40 dark:data-[checked]:border-fuchsia-500/60 dark:focus-visible:ring-fuchsia-500/40",
  sizes: {
    sm: "size-[14px]",
    md: "size-[18px]",
    lg: "size-[22px]",
  },
  dot: "bg-gradient-to-br from-[#7C3AED] to-[#EC4899] dark:from-fuchsia-500 dark:to-pink-400",
  dotSizes: {
    sm: "size-[6px]",
    md: "size-[8px]",
    lg: "size-[10px]",
  },
  label: "text-sm font-medium text-[#0F172A] leading-none dark:text-zinc-200",
};
