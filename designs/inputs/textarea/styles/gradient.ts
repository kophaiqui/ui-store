import type { TextareaStyleConfig } from "./default";
export type { TextareaStyleConfig };

export const gradientStyle: TextareaStyleConfig = {
  textarea: "w-full rounded-xl border border-zinc-700 bg-zinc-900 text-zinc-200 placeholder:text-zinc-600 shadow-[inset_0_2px_4px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.04)] transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/20 focus:border-fuchsia-500/60 disabled:cursor-not-allowed disabled:opacity-40 read-only:bg-zinc-800/30",
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
  errorState: "border-red-500/60 focus:ring-red-500/20 focus:border-red-500/80",
  label: "text-sm font-medium text-zinc-300 leading-none",
  description: "text-xs text-zinc-500 leading-relaxed",
  error: "text-xs text-red-400",
  helper: "text-xs text-zinc-600",
  loadingOverlay: "absolute inset-0 flex items-center justify-center rounded-xl bg-zinc-950/60 backdrop-blur-[1px]",
};
