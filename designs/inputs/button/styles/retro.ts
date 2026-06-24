import type { ButtonStyleConfig } from "./default";
export type { ButtonStyleConfig, ButtonVariant, ButtonSize, ButtonShape } from "./default";

export const retroStyle: ButtonStyleConfig = {
  base: "inline-flex items-center justify-center font-bold whitespace-nowrap transition-all duration-100 focus-visible:outline-none",
  sizes: {
    sm: { base: "h-7 px-3 gap-1.5", square: "size-7", text: "text-xs" },
    md: { base: "h-9 px-4 gap-2",   square: "size-9", text: "text-sm" },
    lg: { base: "h-11 px-6 gap-2.5",square: "size-11",text: "text-base" },
  },
  shapes: {
    default: "rounded-sm",
    pill:    "rounded",
  },
  variants: {
    solid: {
      base:  "bg-[#e8743b] border-2 border-[#3d2410] text-[#2c1a0e] shadow-[3px_3px_0px_0px_#3d2410] dark:bg-[#A78BFA] dark:border-[#A78BFA] dark:text-[#F5F3FF] dark:shadow-[3px_3px_0px_0px_#A78BFA]",
      hover: "hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_#3d2410] dark:hover:shadow-[2px_2px_0px_0px_#A78BFA]",
      focus: "focus-visible:ring-2 focus-visible:ring-[#e8743b]/60 focus-visible:ring-offset-1 dark:focus-visible:ring-[#A78BFA]/60",
    },
    outline: {
      base:  "bg-[#fdf6e3] border-2 border-[#3d2410] text-[#2c1a0e] shadow-[3px_3px_0px_0px_#3d2410] dark:bg-[#161324] dark:border-[#A78BFA] dark:text-[#F5F3FF] dark:shadow-[3px_3px_0px_0px_#A78BFA]",
      hover: "hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_#3d2410] dark:hover:shadow-[2px_2px_0px_0px_#A78BFA]",
      focus: "focus-visible:ring-2 focus-visible:ring-[#3d2410]/40 focus-visible:ring-offset-1 dark:focus-visible:ring-[#A78BFA]/40",
    },
    ghost: {
      base:  "bg-transparent text-[#7a5230] dark:text-[#A1A1AA]",
      hover: "hover:bg-amber-100 hover:text-[#2c1a0e] dark:hover:bg-[#A78BFA]/20 dark:hover:text-[#F5F3FF]",
      focus: "focus-visible:ring-2 focus-visible:ring-[#3d2410]/30 dark:focus-visible:ring-[#A78BFA]/30",
    },
    soft: {
      base:  "bg-amber-100 border border-[#c4844a] text-[#2c1a0e] dark:bg-[#A78BFA]/15 dark:border-[#A78BFA]/50 dark:text-[#F5F3FF]",
      hover: "hover:bg-amber-200 dark:hover:bg-[#A78BFA]/25",
      focus: "focus-visible:ring-2 focus-visible:ring-[#e8743b]/40 dark:focus-visible:ring-[#A78BFA]/40",
    },
    link: {
      base:  "bg-transparent text-[#e8743b] underline-offset-4 px-0 rounded-none h-auto dark:text-[#A78BFA]",
      hover: "hover:text-[#c4612a] hover:underline dark:hover:text-[#c4b5fd]",
      focus: "focus-visible:ring-2 focus-visible:ring-[#e8743b]/40 dark:focus-visible:ring-[#A78BFA]/40",
    },
    destructive: {
      base:  "bg-[#fdf6e3] border-2 border-red-800 text-red-800 shadow-[3px_3px_0px_0px_#7f1d1d] dark:bg-[#161324] dark:border-red-500 dark:text-red-400 dark:shadow-[3px_3px_0px_0px_#7f1d1d]",
      hover: "hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_#7f1d1d] hover:bg-red-50 dark:hover:bg-red-950/40",
      focus: "focus-visible:ring-2 focus-visible:ring-red-700/40",
    },
  },
  disabled: "opacity-50",
};
