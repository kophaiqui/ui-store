import type { ButtonStyleConfig } from "./default";
export type { ButtonStyleConfig };

export const neumorphismStyle: ButtonStyleConfig = {
  base: "inline-flex items-center justify-center font-semibold whitespace-nowrap transition-all duration-200 ease-out focus-visible:outline-none bg-[#e0e5ec] dark:bg-[#1E293B] text-slate-700 dark:text-[#E2E8F0]",
  sizes: {
    sm: { base: "h-7 px-3 gap-1.5", square: "size-7", text: "text-xs" },
    md: { base: "h-9 px-4 gap-2",   square: "size-9", text: "text-sm" },
    lg: { base: "h-11 px-6 gap-2.5",square: "size-11",text: "text-sm" },
  },
  shapes: {
    default: "rounded-2xl",
    pill: "rounded-full",
  },
  variants: {
    solid: {
      base:  "text-[#818CF8] dark:text-[#818CF8] shadow-[3px_3px_6px_rgba(163,177,198,0.25),-3px_-3px_6px_rgba(255,255,255,0.18)] dark:shadow-[3px_3px_6px_rgba(0,0,0,0.5),-3px_-3px_6px_rgba(255,255,255,0.04)]",
      hover: "hover:shadow-[2px_2px_4px_rgba(163,177,198,0.2),-2px_-2px_4px_rgba(255,255,255,0.14)] dark:hover:shadow-[2px_2px_4px_rgba(0,0,0,0.4),-2px_-2px_4px_rgba(255,255,255,0.03)]",
      focus: "focus-visible:ring-2 focus-visible:ring-[#818CF8]/40",
    },
    outline: {
      base:  "text-slate-700 dark:text-[#E2E8F0] shadow-[3px_3px_6px_rgba(163,177,198,0.25),-3px_-3px_6px_rgba(255,255,255,0.18)] dark:shadow-[3px_3px_6px_rgba(0,0,0,0.5),-3px_-3px_6px_rgba(255,255,255,0.04)]",
      hover: "hover:shadow-[2px_2px_4px_rgba(163,177,198,0.2),-2px_-2px_4px_rgba(255,255,255,0.14)] dark:hover:shadow-[2px_2px_4px_rgba(0,0,0,0.4),-2px_-2px_4px_rgba(255,255,255,0.03)]",
      focus: "focus-visible:ring-2 focus-visible:ring-[#818CF8]/40",
    },
    ghost: {
      base:  "text-slate-600 dark:text-[#94A3B8] shadow-none",
      hover: "hover:shadow-[2px_2px_4px_rgba(163,177,198,0.18),-2px_-2px_4px_rgba(255,255,255,0.12)] dark:hover:shadow-[2px_2px_4px_rgba(0,0,0,0.4),-2px_-2px_4px_rgba(255,255,255,0.03)]",
      focus: "focus-visible:ring-2 focus-visible:ring-[#818CF8]/40",
    },
    soft: {
      base:  "text-slate-600 dark:text-[#94A3B8] shadow-[2px_2px_5px_rgba(163,177,198,0.2),-2px_-2px_5px_rgba(255,255,255,0.16)] dark:shadow-[2px_2px_5px_rgba(0,0,0,0.5),-2px_-2px_5px_rgba(255,255,255,0.03)]",
      hover: "hover:shadow-[1px_1px_3px_rgba(163,177,198,0.16),-1px_-1px_3px_rgba(255,255,255,0.12)] dark:hover:shadow-[1px_1px_3px_rgba(0,0,0,0.4),-1px_-1px_3px_rgba(255,255,255,0.02)]",
      focus: "focus-visible:ring-2 focus-visible:ring-[#818CF8]/40",
    },
    link: {
      base:  "bg-transparent text-[#818CF8] underline-offset-4 px-0 h-auto shadow-none",
      hover: "hover:text-[#6366F1] dark:hover:text-[#A5B4FC] hover:underline",
      focus: "focus-visible:ring-2 focus-visible:ring-[#818CF8]/40",
    },
    destructive: {
      base:  "text-red-500 dark:text-red-400 shadow-[3px_3px_6px_rgba(163,177,198,0.25),-3px_-3px_6px_rgba(255,255,255,0.18)] dark:shadow-[3px_3px_6px_rgba(0,0,0,0.5),-3px_-3px_6px_rgba(255,255,255,0.04)]",
      hover: "hover:shadow-[2px_2px_4px_rgba(163,177,198,0.2),-2px_-2px_4px_rgba(255,255,255,0.14)] dark:hover:shadow-[2px_2px_4px_rgba(0,0,0,0.4),-2px_-2px_4px_rgba(255,255,255,0.03)]",
      focus: "focus-visible:ring-2 focus-visible:ring-red-400/40",
    },
  },
  disabled: "opacity-40 pointer-events-none",
};
