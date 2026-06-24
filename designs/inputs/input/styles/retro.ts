import type { InputStyleConfig } from "./default";
export type { InputStyleConfig, InputVariant, InputSize } from "./default";

export const retroStyle: InputStyleConfig = {
  base: "flex w-full rounded-sm text-[#2c1a0e] placeholder:text-[#7a5230] transition-all duration-100 focus:outline-none disabled:pointer-events-none disabled:opacity-50 read-only:cursor-default font-medium dark:text-[#F5F3FF] dark:placeholder:text-[#A1A1AA]",
  sizes: {
    sm: "h-7 text-xs px-2.5",
    md: "h-9 text-sm px-3",
    lg: "h-11 text-base px-4",
  },
  variants: {
    outline: {
      base:  "border-2 border-[#3d2410] bg-[#fdf6e3] shadow-[2px_2px_0px_0px_#3d2410] hover:shadow-[3px_3px_0px_0px_#3d2410] focus:border-[#e8743b] focus:ring-2 focus:ring-[#e8743b]/30 focus:shadow-[2px_2px_0px_0px_#e8743b] dark:border-[#A78BFA] dark:bg-[#161324] dark:shadow-[2px_2px_0px_0px_#A78BFA] dark:hover:shadow-[3px_3px_0px_0px_#A78BFA] dark:focus:border-[#A78BFA] dark:focus:ring-[#A78BFA]/30 dark:focus:shadow-[2px_2px_0px_0px_#A78BFA]",
      error: "border-2 border-red-700 bg-[#fdf6e3] shadow-[2px_2px_0px_0px_#7f1d1d] focus:ring-2 focus:ring-red-700/30 dark:bg-[#161324] dark:border-red-500",
    },
    filled: {
      base:  "border-2 border-[#3d2410] bg-amber-100 hover:bg-amber-50 focus:bg-[#fdf6e3] focus:ring-2 focus:ring-[#e8743b]/30 dark:border-[#A78BFA] dark:bg-[#1e1a2e] dark:hover:bg-[#A78BFA]/10 dark:focus:bg-[#161324] dark:focus:ring-[#A78BFA]/30",
      error: "border-2 border-red-700 bg-red-50 ring-2 ring-red-700/30 dark:bg-red-950/30 dark:border-red-500",
    },
    ghost: {
      base:  "border-0 bg-transparent shadow-none border-b-2 border-[#3d2410] rounded-none hover:bg-amber-50/60 focus:bg-amber-50/60 focus:ring-0 focus:border-[#e8743b] dark:border-[#A78BFA] dark:hover:bg-[#A78BFA]/10 dark:focus:bg-[#A78BFA]/10 dark:focus:border-[#A78BFA]",
      error: "border-0 bg-transparent shadow-none border-b-2 border-red-700 rounded-none ring-0 dark:border-red-500",
    },
  },
  icon: "pointer-events-none flex items-center text-[#7a5230] dark:text-[#A1A1AA]",
  errorText: "text-xs text-red-700 font-medium dark:text-red-400",
};
