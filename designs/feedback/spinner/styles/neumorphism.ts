import type { SpinnerStyleConfig } from "./default";
export type { SpinnerStyleConfig };

export const neumorphismStyle: SpinnerStyleConfig = {
  wrapper: "inline-flex items-center gap-2",
  svg: "animate-spin text-blue-500 dark:text-[#818CF8]",
  sizes: {
    xs: { svgSize: "12", strokeWidth: 1.8 },
    sm: { svgSize: "16", strokeWidth: 1.8 },
    md: { svgSize: "20", strokeWidth: 1.6 },
    lg: { svgSize: "28", strokeWidth: 1.5 },
    xl: { svgSize: "36", strokeWidth: 1.4 },
  },
  label: "text-sm font-medium text-slate-600 dark:text-[#94A3B8]",
};
