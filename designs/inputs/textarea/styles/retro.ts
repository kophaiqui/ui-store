import type { TextareaStyleConfig } from "./default";
export type { TextareaStyleConfig, TextareaResize } from "./default";

export const retroStyle: TextareaStyleConfig = {
  textarea: "w-full rounded-sm border-2 border-[#3d2410] bg-[#fdf6e3] text-[#2c1a0e] placeholder:text-[#7a5230] font-medium transition-all duration-100 focus:outline-none focus:ring-2 focus:ring-[#e8743b]/40 focus:border-[#e8743b] focus:shadow-[2px_2px_0px_0px_#e8743b] disabled:cursor-not-allowed disabled:opacity-50 read-only:bg-amber-100/60 shadow-[2px_2px_0px_0px_#3d2410]",
  sizes: {
    sm: "px-3 py-2 text-xs",
    md: "px-3.5 py-2.5 text-sm",
    lg: "px-4 py-3 text-base",
  },
  resizes: {
    none: "resize-none",
    vertical: "resize-y",
    horizontal: "resize-x",
    both: "resize",
  },
  errorState: "border-red-700 focus:ring-red-700/40 focus:border-red-700 shadow-[2px_2px_0px_0px_#7f1d1d]",
  label: "text-sm font-black text-[#2c1a0e] leading-none uppercase tracking-wide",
  description: "text-xs text-[#7a5230] leading-relaxed",
  error: "text-xs text-red-700 font-medium",
  helper: "text-xs text-[#7a5230]",
  loadingOverlay: "absolute inset-0 flex items-center justify-center rounded-sm bg-[#fdf6e3]/70",
};
