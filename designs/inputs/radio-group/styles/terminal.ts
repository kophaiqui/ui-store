import type { RadioGroupStyleConfig } from "./default";
export type { RadioGroupStyleConfig, RadioGroupSize } from "./default";

export const terminalStyle: RadioGroupStyleConfig = {
  root: "relative flex shrink-0 items-center justify-center rounded-full border border-[#16A34A] bg-white transition-all duration-100 hover:bg-[#16A34A]/10 data-[checked]:border-[#16A34A] dark:border-[#22C55E] dark:bg-transparent dark:hover:bg-[#22C55E]/10 dark:data-[checked]:border-[#22C55E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16A34A]/50 dark:focus-visible:ring-[#22C55E]/50 focus-visible:ring-offset-1",
  sizes: {
    sm: "size-[14px]",
    md: "size-[18px]",
    lg: "size-[22px]",
  },
  dot: "bg-[#16A34A] dark:bg-[#22C55E]",
  dotSizes: {
    sm: "size-[6px]",
    md: "size-[8px]",
    lg: "size-[10px]",
  },
  label: "font-mono text-sm font-bold text-[#065F46] dark:text-[#22C55E] group-hover:text-[#065F46] dark:group-hover:text-[#86EFAC] transition-colors duration-100",
};
