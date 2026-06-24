import type { TextareaStyleConfig } from "./default";
export type { TextareaStyleConfig };

export const gradientStyle: TextareaStyleConfig = {
  textarea: "w-full rounded-xl border border-[#FCE7F3] bg-white text-[#0F172A] placeholder:text-[#64748B] shadow-sm transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-[#7C3AED]/20 focus:border-[#7C3AED]/60 disabled:cursor-not-allowed disabled:opacity-40 read-only:bg-[#FDF2F8]/60 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 dark:placeholder:text-zinc-600 dark:shadow-[inset_0_2px_4px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.04)] dark:focus:ring-fuchsia-500/20 dark:focus:border-fuchsia-500/60 dark:read-only:bg-zinc-800/30",
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
  errorState: "border-red-400/60 focus:ring-red-500/20 focus:border-red-500/80 dark:border-red-500/60 dark:focus:ring-red-500/20 dark:focus:border-red-500/80",
  label: "text-sm font-medium text-[#0F172A] leading-none dark:text-zinc-300",
  description: "text-xs text-[#64748B] leading-relaxed dark:text-zinc-500",
  error: "text-xs text-red-600 dark:text-red-400",
  helper: "text-xs text-[#64748B] dark:text-zinc-600",
  loadingOverlay: "absolute inset-0 flex items-center justify-center rounded-xl bg-white/70 dark:bg-zinc-950/60 dark:backdrop-blur-[1px]",
};
