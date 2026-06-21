import type { RadioStyleConfig } from "./default";
export type { RadioStyleConfig };

export const neumorphismStyle: RadioStyleConfig = {
  root: "relative flex shrink-0 items-center justify-center rounded-full bg-[#e8ecf1] shadow-[inset_3px_3px_6px_rgba(163,177,198,0.5),inset_-3px_-3px_6px_rgba(255,255,255,0.7)] transition-all duration-200 data-[checked]:shadow-[inset_3px_3px_6px_rgba(163,177,198,0.5),inset_-3px_-3px_6px_rgba(255,255,255,0.7)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/40 disabled:pointer-events-none disabled:opacity-40",
  sizes: {
    sm: "size-[14px]",
    md: "size-[18px]",
    lg: "size-[22px]",
  },
  dot: "rounded-full bg-blue-500 transition-transform duration-100 scale-0 data-[checked]:scale-100",
  dotSizes: {
    sm: "size-[5px]",
    md: "size-[7px]",
    lg: "size-[9px]",
  },
  label: "text-sm font-semibold text-slate-700 leading-none",
  description: "text-xs text-slate-500 leading-relaxed",
};
