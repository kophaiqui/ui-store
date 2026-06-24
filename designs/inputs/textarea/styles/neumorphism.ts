import type { TextareaStyleConfig } from "./default";
export type { TextareaStyleConfig };

export const neumorphismStyle: TextareaStyleConfig = {
  textarea: "w-full rounded-2xl bg-[#e8ecf1] dark:bg-[#1E293B] text-slate-700 dark:text-[#E2E8F0] placeholder:text-slate-400 dark:placeholder:text-slate-500 shadow-[inset_3px_3px_7px_rgba(163,177,198,0.5),inset_-3px_-3px_7px_rgba(255,255,255,0.7)] dark:shadow-[inset_3px_3px_7px_rgba(0,0,0,0.5),inset_-3px_-3px_7px_rgba(255,255,255,0.03)] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400/30 dark:focus:ring-[#818CF8]/30 disabled:cursor-not-allowed disabled:opacity-40 read-only:opacity-60",
  sizes: {
    sm: "px-3 py-2 text-xs",
    md: "px-4 py-2.5 text-sm",
    lg: "px-4 py-3 text-base",
  },
  resizes: {
    none: "resize-none",
    vertical: "resize-y",
    horizontal: "resize-x",
    both: "resize",
  },
  errorState: "ring-2 ring-red-400/40",
  label: "text-sm font-semibold text-slate-700 dark:text-[#E2E8F0] leading-none",
  description: "text-xs text-slate-500 dark:text-[#94A3B8] leading-relaxed",
  error: "text-xs text-red-500",
  helper: "text-xs text-slate-400 dark:text-slate-500",
  loadingOverlay: "absolute inset-0 flex items-center justify-center rounded-2xl bg-[#e8ecf1]/60 dark:bg-[#1E293B]/60",
};
