import type { SpinnerStyleConfig } from "./default";
export type { SpinnerStyleConfig };

export const gradientStyle: SpinnerStyleConfig = {
  wrapper: "inline-flex items-center gap-2",
  svg: "animate-spin text-[#7C3AED] dark:text-fuchsia-400",
  sizes: {
    xs: { svgSize: "12", strokeWidth: 2 },
    sm: { svgSize: "16", strokeWidth: 1.8 },
    md: { svgSize: "20", strokeWidth: 1.6 },
    lg: { svgSize: "28", strokeWidth: 1.5 },
    xl: { svgSize: "36", strokeWidth: 1.4 },
  },
  label: "text-sm font-medium text-[#64748B] dark:text-zinc-400",
};
