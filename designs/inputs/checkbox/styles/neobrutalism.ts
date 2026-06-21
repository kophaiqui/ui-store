import type { CheckboxStyleConfig } from "./default";
export type { CheckboxStyleConfig };

export const neobrutalismStyle: CheckboxStyleConfig = {
  root: "relative flex shrink-0 items-center justify-center border-2 border-zinc-950 bg-white shadow-[2px_2px_0px_0px_#09090b] transition-all duration-100 hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_#09090b] data-[checked]:bg-yellow-300 data-[checked]:shadow-none data-[checked]:translate-x-[2px] data-[checked]:translate-y-[2px] focus-visible:outline-none disabled:pointer-events-none disabled:opacity-40",
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
  indicator: "flex items-center justify-center text-zinc-950",
  label: "text-sm font-bold text-zinc-950 group-hover:text-zinc-700 transition-colors duration-100 leading-none",
  description: "text-xs font-medium text-zinc-600 leading-relaxed",
};
