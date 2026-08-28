export type { TextareaStyleConfig, TextareaResize } from "./default";
import type { TextareaStyleConfig } from "./default";

export const materialStyle: TextareaStyleConfig = {
  textarea:
    "w-full rounded-lg border border-violet-200/50 bg-white text-foreground placeholder:text-foreground/40 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 hover:border-violet-300 disabled:cursor-not-allowed disabled:opacity-40 read-only:bg-violet-50/40 dark:border-violet-800/30 dark:bg-violet-950/20 dark:hover:border-violet-700 dark:focus:ring-violet-400/20 dark:focus:border-violet-400 dark:read-only:bg-violet-900/15",
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
  errorState: "border-rose-500/60 focus:ring-rose-500/25 focus:border-rose-500 dark:border-rose-500/50 dark:focus:ring-rose-400/30 dark:focus:border-rose-400",
  label: "text-sm font-medium text-foreground/80 leading-none",
  description: "text-xs text-foreground/50 leading-relaxed",
  error: "text-xs text-rose-600 dark:text-rose-300",
  helper: "text-xs text-foreground/50",
  loadingOverlay:
    "absolute inset-0 flex items-center justify-center rounded-lg bg-white/50 backdrop-blur-sm dark:bg-black/30",
};
