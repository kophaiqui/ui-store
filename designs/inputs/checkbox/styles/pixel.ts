import type { CheckboxStyleConfig } from "./default";
export type { CheckboxStyleConfig, CheckboxSize } from "./default";

export const pixelStyle: CheckboxStyleConfig = {
  root: "relative flex shrink-0 items-center justify-center border-2 border-[#06d6a0] bg-[#0d0d12] shadow-[2px_2px_0_0_#000] transition-all duration-100 hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0_0_#000] data-[checked]:bg-[#ef476f] data-[checked]:border-black data-[checked]:shadow-none data-[checked]:translate-x-[2px] data-[checked]:translate-y-[2px] focus-visible:outline-none disabled:pointer-events-none disabled:opacity-40",
  sizes: {
    sm: "size-[14px] rounded-none",
    md: "size-[18px] rounded-none",
    lg: "size-[22px] rounded-none",
  },
  checkSizes: {
    sm: { w: 8,  h: 6, d: "M1 3L2.8 5L7 1" },
    md: { w: 10, h: 7, d: "M1 3.5L3.5 6L9 1" },
    lg: { w: 12, h: 9, d: "M1.5 4.5L4.5 7.5L10.5 1.5" },
  },
  indicator: "flex items-center justify-center text-black",
  label: "font-mono text-sm font-bold text-[#06d6a0] uppercase tracking-wide group-hover:text-[#ffd166] transition-colors duration-100 leading-none",
  description: "font-mono text-xs text-[#06d6a0]/60 leading-relaxed",
};
