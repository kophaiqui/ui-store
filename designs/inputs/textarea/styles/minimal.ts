export type { TextareaStyleConfig, TextareaResize } from "./default";
import type { TextareaStyleConfig } from "./default";

export const minimalStyle: TextareaStyleConfig = {
  textarea: "w-full rounded-none border-0 border-b border-border bg-transparent text-foreground placeholder:text-muted-foreground transition-colors duration-150 focus:outline-none focus:ring-0 focus:border-foreground disabled:cursor-not-allowed disabled:opacity-40 read-only:opacity-60",
  sizes: {
    sm: "px-0 py-2 text-xs",
    md: "px-0 py-2.5 text-sm",
    lg: "px-0 py-3 text-base",
  },
  resizes: {
    none: "resize-none",
    vertical: "resize-y",
    horizontal: "resize-x",
    both: "resize",
  },
  errorState: "border-red-500 focus:border-red-500",
  label: "text-xs font-medium text-muted-foreground leading-none uppercase tracking-wider",
  description: "text-xs text-muted-foreground leading-relaxed",
  error: "text-xs text-red-500",
  helper: "text-xs text-muted-foreground",
  loadingOverlay: "absolute inset-0 flex items-center justify-center bg-background/60",
};
