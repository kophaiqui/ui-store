import type { RadioGroupStyleConfig } from "./default";
export type { RadioGroupStyleConfig, RadioGroupSize } from "./default";

export const pixelStyle: RadioGroupStyleConfig = {
  root: "relative flex shrink-0 items-center justify-center rounded-full border-2 border-[#06d6a0] bg-[#0d0d12] shadow-[2px_2px_0_0_#000] transition-all duration-100 hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0_0_#000] data-[checked]:bg-[#0d0d12] data-[checked]:border-[#ef476f] data-[checked]:shadow-none data-[checked]:translate-x-[2px] data-[checked]:translate-y-[2px] focus-visible:outline-none",
  sizes: {
    sm: "size-[14px]",
    md: "size-[18px]",
    lg: "size-[22px]",
  },
  dot: "bg-[#ef476f]",
  dotSizes: {
    sm: "size-[6px]",
    md: "size-[8px]",
    lg: "size-[10px]",
  },
  label: "font-mono text-sm font-bold text-[#06d6a0] uppercase tracking-wide group-hover:text-[#ffd166] transition-colors duration-100",
};
