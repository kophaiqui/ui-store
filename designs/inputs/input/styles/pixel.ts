import type { InputStyleConfig } from "./default";
export type { InputStyleConfig, InputVariant, InputSize } from "./default";

export const pixelStyle: InputStyleConfig = {
  base: "flex w-full rounded-none font-mono text-[#06d6a0] placeholder:text-[#06d6a0]/40 transition-all duration-100 focus:outline-none disabled:pointer-events-none disabled:opacity-40 read-only:cursor-default",
  sizes: {
    sm: "h-7 text-xs px-2.5",
    md: "h-9 text-sm px-3",
    lg: "h-11 text-base px-4",
  },
  variants: {
    outline: {
      base:  "border-2 border-[#06d6a0] bg-[#0d0d12] shadow-[3px_3px_0_0_#000] focus:translate-x-[1px] focus:translate-y-[1px] focus:shadow-[2px_2px_0_0_#000]",
      error: "border-2 border-[#ef476f] bg-[#0d0d12] shadow-[3px_3px_0_0_rgba(239,71,111,0.5)]",
    },
    filled: {
      base:  "border-2 border-transparent bg-[#06d6a0]/10 focus:border-[#06d6a0]",
      error: "border-2 border-[#ef476f] bg-[#ef476f]/10",
    },
    ghost: {
      base:  "border-0 border-b-2 border-[#06d6a0]/40 bg-transparent rounded-none focus:border-[#06d6a0]",
      error: "border-0 border-b-2 border-[#ef476f] bg-transparent rounded-none",
    },
  },
  icon: "pointer-events-none flex items-center text-[#06d6a0]/60",
  errorText: "font-mono text-xs font-bold text-[#ef476f]",
};
