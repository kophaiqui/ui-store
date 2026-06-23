import type { ButtonStyleConfig } from "./default";
export type { ButtonStyleConfig };

export const neumorphismStyle: ButtonStyleConfig = {
  base: "inline-flex items-center justify-center font-semibold whitespace-nowrap transition-all duration-200 ease-out focus-visible:outline-none bg-[#e0e5ec] text-slate-700",
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
      base:  "text-blue-600 shadow-[3px_3px_6px_rgba(163,177,198,0.25),-3px_-3px_6px_rgba(255,255,255,0.18)]",
      hover: "hover:shadow-[2px_2px_4px_rgba(163,177,198,0.2),-2px_-2px_4px_rgba(255,255,255,0.14)]",
      focus: "focus-visible:ring-2 focus-visible:ring-blue-400/40",
    },
    outline: {
      base:  "text-slate-700 shadow-[3px_3px_6px_rgba(163,177,198,0.25),-3px_-3px_6px_rgba(255,255,255,0.18)]",
      hover: "hover:shadow-[2px_2px_4px_rgba(163,177,198,0.2),-2px_-2px_4px_rgba(255,255,255,0.14)]",
      focus: "focus-visible:ring-2 focus-visible:ring-blue-400/40",
    },
    ghost: {
      base:  "text-slate-600 shadow-none",
      hover: "hover:shadow-[2px_2px_4px_rgba(163,177,198,0.18),-2px_-2px_4px_rgba(255,255,255,0.12)]",
      focus: "focus-visible:ring-2 focus-visible:ring-blue-400/40",
    },
    soft: {
      base:  "text-slate-600 shadow-[2px_2px_5px_rgba(163,177,198,0.2),-2px_-2px_5px_rgba(255,255,255,0.16)]",
      hover: "hover:shadow-[1px_1px_3px_rgba(163,177,198,0.16),-1px_-1px_3px_rgba(255,255,255,0.12)]",
      focus: "focus-visible:ring-2 focus-visible:ring-blue-400/40",
    },
    link: {
      base:  "bg-transparent text-blue-600 underline-offset-4 px-0 h-auto shadow-none",
      hover: "hover:text-blue-500 hover:underline",
      focus: "focus-visible:ring-2 focus-visible:ring-blue-400/40",
    },
    destructive: {
      base:  "text-red-500 shadow-[3px_3px_6px_rgba(163,177,198,0.25),-3px_-3px_6px_rgba(255,255,255,0.18)]",
      hover: "hover:shadow-[2px_2px_4px_rgba(163,177,198,0.2),-2px_-2px_4px_rgba(255,255,255,0.14)]",
      focus: "focus-visible:ring-2 focus-visible:ring-red-400/40",
    },
  },
  disabled: "opacity-40 pointer-events-none",
};
