import type { TextareaStyleConfig } from "./default";
export type { TextareaStyleConfig, TextareaResize } from "./default";

export const retroStyle: TextareaStyleConfig = {
  textarea: "w-full rounded-sm border-2 border-[#3d2410] bg-[#fdf6e3] text-[#2c1a0e] placeholder:text-[#7a5230] font-medium transition-all duration-100 focus:outline-none focus:ring-2 focus:ring-[#e8743b]/40 focus:border-[#e8743b] focus:shadow-[2px_2px_0px_0px_#e8743b] disabled:cursor-not-allowed disabled:opacity-50 read-only:bg-amber-100/60 shadow-[2px_2px_0px_0px_#3d2410] dark:border-[#A78BFA] dark:bg-[#161324] dark:text-[#F5F3FF] dark:placeholder:text-[#A1A1AA] dark:focus:ring-[#A78BFA]/40 dark:focus:border-[#A78BFA] dark:focus:shadow-[2px_2px_0px_0px_#A78BFA] dark:read-only:bg-[#A78BFA]/10 dark:shadow-[2px_2px_0px_0px_#A78BFA]",
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
  errorState: "border-red-700 focus:ring-red-700/40 focus:border-red-700 shadow-[2px_2px_0px_0px_#7f1d1d] dark:border-red-500 dark:focus:ring-red-500/40 dark:focus:border-red-500",
  label: "text-sm font-black text-[#2c1a0e] leading-none uppercase tracking-wide dark:text-[#F5F3FF]",
  description: "text-xs text-[#7a5230] leading-relaxed dark:text-[#A1A1AA]",
  error: "text-xs text-red-700 font-medium dark:text-red-400",
  helper: "text-xs text-[#7a5230] dark:text-[#A1A1AA]",
  loadingOverlay: "absolute inset-0 flex items-center justify-center rounded-sm bg-[#fdf6e3]/70 dark:bg-[#161324]/70",
};
