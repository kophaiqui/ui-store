import type { ButtonStyleConfig } from "./default";
export type { ButtonStyleConfig, ButtonVariant, ButtonSize, ButtonShape } from "./default";

export const pixelStyle: ButtonStyleConfig = {
  base: "inline-flex items-center justify-center font-mono font-bold whitespace-nowrap uppercase tracking-widest transition-all duration-100 ease-out focus-visible:outline-none",
  sizes: {
    sm: { base: "h-7 px-3 gap-1.5", square: "size-7", text: "text-xs" },
    md: { base: "h-9 px-4 gap-2",   square: "size-9", text: "text-sm" },
    lg: { base: "h-11 px-6 gap-2.5",square: "size-11",text: "text-base" },
  },
  shapes: {
    default: "rounded-none",
    pill: "rounded-none",
  },
  variants: {
    solid: {
      base:  "bg-[#ef476f] text-black shadow-[4px_4px_0_0_#000]",
      hover: "hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_#000]",
      focus: "focus-visible:outline-4 focus-visible:outline-[#06d6a0]",
    },
    outline: {
      base:  "border-2 border-[#06d6a0] bg-[#0d0d12] text-[#06d6a0] shadow-[4px_4px_0_0_#000]",
      hover: "hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_#000] hover:bg-[#06d6a0]/10",
      focus: "focus-visible:outline-4 focus-visible:outline-[#06d6a0]",
    },
    ghost: {
      base:  "bg-transparent text-[#06d6a0]",
      hover: "hover:bg-[#06d6a0]/10",
      focus: "focus-visible:outline-4 focus-visible:outline-[#06d6a0]",
    },
    soft: {
      base:  "bg-[#06d6a0]/15 text-[#06d6a0] shadow-[3px_3px_0_0_#000]",
      hover: "hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0_0_#000] hover:bg-[#06d6a0]/25",
      focus: "focus-visible:outline-4 focus-visible:outline-[#06d6a0]",
    },
    link: {
      base:  "bg-transparent text-[#ffd166] underline-offset-4 px-0 rounded-none h-auto",
      hover: "hover:text-[#ffd166]/70 hover:underline",
      focus: "focus-visible:outline-4 focus-visible:outline-[#06d6a0]",
    },
    destructive: {
      base:  "bg-[#ef476f] text-black border-2 border-black shadow-[4px_4px_0_0_#000]",
      hover: "hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_#000]",
      focus: "focus-visible:outline-4 focus-visible:outline-[#ef476f]",
    },
  },
  disabled: "opacity-40 pointer-events-none",
};
