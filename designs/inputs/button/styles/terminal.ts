import type { ButtonStyleConfig } from "./default";
export type { ButtonStyleConfig, ButtonVariant, ButtonSize, ButtonShape } from "./default";

export const terminalStyle: ButtonStyleConfig = {
  base: "inline-flex items-center justify-center font-mono font-bold whitespace-nowrap transition-all duration-100 focus-visible:outline-none",
  sizes: {
    sm: { base: "h-7 px-3 gap-1.5", square: "size-7", text: "text-xs" },
    md: { base: "h-9 px-4 gap-2",   square: "size-9", text: "text-sm" },
    lg: { base: "h-11 px-6 gap-2.5",square: "size-11",text: "text-base" },
  },
  shapes: {
    default: "rounded-sm",
    pill:    "rounded-sm",
  },
  variants: {
    solid: {
      base:  "bg-[#16A34A] border border-[#16A34A] text-white dark:bg-[#22C55E] dark:border-[#22C55E] dark:text-black dark:shadow-[0_0_8px_rgba(34,197,94,0.35)]",
      hover: "hover:bg-[#15803D] hover:border-[#15803D] dark:hover:bg-[#16A34A] dark:hover:border-[#16A34A]",
      focus: "focus-visible:ring-2 focus-visible:ring-[#16A34A]/50 dark:focus-visible:ring-[#22C55E]/50 focus-visible:ring-offset-1",
    },
    outline: {
      base:  "bg-transparent border border-[#16A34A] text-[#065F46] dark:border-[#22C55E] dark:text-[#22C55E]",
      hover: "hover:bg-[#16A34A]/10 dark:hover:bg-[#22C55E]/10",
      focus: "focus-visible:ring-2 focus-visible:ring-[#16A34A]/40 dark:focus-visible:ring-[#22C55E]/40 focus-visible:ring-offset-1",
    },
    ghost: {
      base:  "bg-transparent text-[#047857] dark:text-[#86EFAC]",
      hover: "hover:bg-[#16A34A]/10 hover:text-[#065F46] dark:hover:bg-[#22C55E]/10 dark:hover:text-[#22C55E]",
      focus: "focus-visible:ring-2 focus-visible:ring-[#16A34A]/30 dark:focus-visible:ring-[#22C55E]/30",
    },
    soft: {
      base:  "bg-[#16A34A]/10 border border-[#16A34A]/30 text-[#065F46] dark:bg-[#22C55E]/10 dark:border-[#22C55E]/30 dark:text-[#86EFAC]",
      hover: "hover:bg-[#16A34A]/20 dark:hover:bg-[#22C55E]/20",
      focus: "focus-visible:ring-2 focus-visible:ring-[#16A34A]/40 dark:focus-visible:ring-[#22C55E]/40",
    },
    link: {
      base:  "bg-transparent text-[#16A34A] underline-offset-4 px-0 rounded-none h-auto dark:text-[#22C55E]",
      hover: "hover:text-[#15803D] hover:underline dark:hover:text-[#86EFAC]",
      focus: "focus-visible:ring-2 focus-visible:ring-[#16A34A]/40 dark:focus-visible:ring-[#22C55E]/40",
    },
    destructive: {
      base:  "bg-transparent border border-red-600 text-red-600 dark:border-red-500 dark:text-red-500",
      hover: "hover:bg-red-600/10 dark:hover:bg-red-500/10",
      focus: "focus-visible:ring-2 focus-visible:ring-red-500/40",
    },
  },
  disabled: "opacity-40",
};
