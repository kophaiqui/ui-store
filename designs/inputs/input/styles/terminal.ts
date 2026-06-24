import type { InputStyleConfig } from "./default";
export type { InputStyleConfig, InputVariant, InputSize } from "./default";

export const terminalStyle: InputStyleConfig = {
  base: "flex w-full rounded-sm font-mono text-[#065F46] dark:text-[#22C55E] placeholder:text-[#047857]/50 dark:placeholder:text-[#86EFAC]/40 transition-all duration-100 focus:outline-none disabled:pointer-events-none disabled:opacity-40 read-only:cursor-default",
  sizes: {
    sm: "h-7 text-xs px-2.5",
    md: "h-9 text-sm px-3",
    lg: "h-11 text-base px-4",
  },
  variants: {
    outline: {
      base:  "border border-[#16A34A] bg-white dark:border-[#22C55E] dark:bg-transparent hover:border-[#15803D] dark:hover:border-[#86EFAC] focus:ring-2 focus:ring-[#16A34A]/30 dark:focus:ring-[#22C55E]/30",
      error: "border border-red-600 bg-white dark:border-red-500 dark:bg-transparent focus:ring-2 focus:ring-red-500/30",
    },
    filled: {
      base:  "border border-[#16A34A] bg-[#16A34A]/5 dark:border-[#22C55E] dark:bg-[#22C55E]/5 hover:bg-[#16A34A]/10 dark:hover:bg-[#22C55E]/10 focus:ring-2 focus:ring-[#16A34A]/30 dark:focus:ring-[#22C55E]/30",
      error: "border border-red-600 bg-red-50 dark:border-red-500 dark:bg-red-500/5 ring-2 ring-red-500/20",
    },
    ghost: {
      base:  "border-0 bg-transparent shadow-none border-b border-[#16A34A] dark:border-[#22C55E] rounded-none hover:bg-[#16A34A]/5 dark:hover:bg-[#22C55E]/5 focus:ring-0 focus:border-[#15803D] dark:focus:border-[#86EFAC]",
      error: "border-0 bg-transparent shadow-none border-b border-red-600 dark:border-red-500 rounded-none ring-0",
    },
  },
  icon: "pointer-events-none flex items-center text-[#047857] dark:text-[#86EFAC]",
  errorText: "font-mono text-xs text-red-600 dark:text-red-500",
};
