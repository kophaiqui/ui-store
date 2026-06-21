import type { RadioGroupStyleConfig } from "./default";
export type { RadioGroupStyleConfig };

export const gradientStyle: RadioGroupStyleConfig = {
  root: "relative flex shrink-0 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition-all duration-150 hover:border-fuchsia-500/40 data-[checked]:border-fuchsia-500/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-500/40",
  sizes: {
    sm: "size-[14px]",
    md: "size-[18px]",
    lg: "size-[22px]",
  },
  dot: "bg-gradient-to-br from-fuchsia-500 to-pink-400",
  dotSizes: {
    sm: "size-[6px]",
    md: "size-[8px]",
    lg: "size-[10px]",
  },
  label: "text-sm font-medium text-zinc-200 leading-none",
};
