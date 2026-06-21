export type { TextareaStyleConfig, TextareaResize } from "./default";
import type { TextareaStyleConfig } from "./default";

export const glassStyle: TextareaStyleConfig = {
  textarea: "w-full rounded-lg border border-white/15 bg-white/6 backdrop-blur-sm text-foreground placeholder:text-foreground/35 shadow-[inset_0_2px_4px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.04)] transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-sky-400/20 focus:border-sky-400/40 hover:border-white/25 disabled:cursor-not-allowed disabled:opacity-40 read-only:bg-white/3",
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
  errorState: "border-red-400/50 focus:ring-red-400/30 focus:border-red-400/60",
  label: "text-sm font-medium text-foreground/80 leading-none",
  description: "text-xs text-foreground/50 leading-relaxed",
  error: "text-xs text-red-300",
  helper: "text-xs text-foreground/50",
  loadingOverlay: "absolute inset-0 flex items-center justify-center rounded-lg bg-black/20 backdrop-blur-sm",
};
