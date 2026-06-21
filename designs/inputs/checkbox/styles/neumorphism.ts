import type { CheckboxStyleConfig } from "./default";
export type { CheckboxStyleConfig };

export const neumorphismStyle: CheckboxStyleConfig = {
  root: "relative flex shrink-0 items-center justify-center bg-[#e8ecf1] shadow-[inset_3px_3px_6px_rgba(163,177,198,0.5),inset_-3px_-3px_6px_rgba(255,255,255,0.7)] transition-all duration-200 data-[checked]:shadow-[inset_3px_3px_6px_rgba(163,177,198,0.5),inset_-3px_-3px_6px_rgba(255,255,255,0.7)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/40 disabled:pointer-events-none disabled:opacity-40",
  sizes: {
    sm: "size-[14px] rounded-[3px]",
    md: "size-[18px] rounded-md",
    lg: "size-[22px] rounded-lg",
  },
  checkSizes: {
    sm: { w: 8,  h: 6, d: "M1 3L2.8 5L7 1" },
    md: { w: 10, h: 7, d: "M1 3.5L3.5 6L9 1" },
    lg: { w: 12, h: 9, d: "M1.5 4.5L4.5 7.5L10.5 1.5" },
  },
  indicator: "flex items-center justify-center text-blue-500",
  label: "text-sm font-semibold text-slate-700 leading-none",
  description: "text-xs text-slate-500 leading-relaxed",
};
