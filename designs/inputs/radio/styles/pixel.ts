import type { RadioStyleConfig } from "./default";
export type { RadioStyleConfig, RadioSize } from "./default";

export const pixelStyle: RadioStyleConfig = {
  root: "relative flex shrink-0 items-center justify-center rounded-full border-2 border-[#06d6a0] bg-[#0d0d12] shadow-[2px_2px_0_0_#000] transition-all duration-100 hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0_0_#000] data-[checked]:border-[#ef476f] data-[checked]:bg-[#ef476f]/10 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-40",
  sizes: {
    sm: "size-[14px]",
    md: "size-[18px]",
    lg: "size-[22px]",
  },
  dot: "rounded-full bg-[#ef476f] transition-transform duration-100 scale-0 data-[checked]:scale-100",
  dotSizes: {
    sm: "size-[6px]",
    md: "size-[8px]",
    lg: "size-[10px]",
  },
  label: "font-mono text-sm font-bold text-[#06d6a0] uppercase tracking-wide group-hover:text-[#ffd166] transition-colors duration-100 leading-none",
  description: "font-mono text-xs text-[#06d6a0]/60 leading-relaxed",
};
