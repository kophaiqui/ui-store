export type { TextareaStyleConfig, TextareaResize } from "./default";
import type { TextareaStyleConfig } from "./default";

export const auroraStyle: TextareaStyleConfig = {
  textarea:
    "w-full rounded-lg border border-indigo-400/20 bg-indigo-950/50 text-teal-50 placeholder:text-indigo-300/40 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-teal-400/25 focus:border-teal-400/40 hover:border-indigo-400/35 disabled:cursor-not-allowed disabled:opacity-40 read-only:bg-indigo-950/30",
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
  errorState: "border-rose-400/50 focus:ring-rose-400/25 focus:border-rose-400/60",
  label: "text-sm font-medium text-indigo-200 leading-none",
  description: "text-xs text-indigo-300/50 leading-relaxed",
  error: "text-xs text-rose-300",
  helper: "text-xs text-indigo-300/50",
  loadingOverlay:
    "absolute inset-0 flex items-center justify-center rounded-lg bg-[#0a0e1f]/60 backdrop-blur-[1px]",
};
