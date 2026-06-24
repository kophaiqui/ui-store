import type { TextareaStyleConfig } from "./default";
export type { TextareaStyleConfig };

export const neobrutalismStyle: TextareaStyleConfig = {
  textarea: "w-full rounded-none border-2 border-zinc-950 dark:border-white bg-white dark:bg-[#111111] text-zinc-950 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-600 shadow-[3px_3px_0px_0px_#09090b] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,0.7)] font-medium transition-all duration-100 focus:outline-none focus:translate-x-[2px] focus:translate-y-[2px] focus:shadow-[1px_1px_0px_0px_#09090b] dark:focus:shadow-[1px_1px_0px_0px_rgba(255,255,255,0.7)] disabled:cursor-not-allowed disabled:opacity-40 read-only:bg-zinc-100 dark:read-only:bg-[#1A1A1A]",
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
  errorState: "border-red-500 shadow-[3px_3px_0px_0px_rgba(239,68,68,0.5)]",
  label: "text-sm font-black text-zinc-950 dark:text-white uppercase tracking-wide leading-none",
  description: "text-xs font-medium text-zinc-600 dark:text-[#9CA3AF] leading-relaxed",
  error: "text-xs font-bold text-red-600 dark:text-red-400",
  helper: "text-xs font-medium text-zinc-500 dark:text-[#9CA3AF]",
  loadingOverlay: "absolute inset-0 flex items-center justify-center rounded-none bg-white/60 dark:bg-[#111111]/60",
};
