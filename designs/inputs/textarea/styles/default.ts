export type TextareaResize = "none" | "vertical" | "horizontal" | "both";

export type TextareaStyleConfig = {
  textarea: string;
  sizes: Record<"sm" | "md" | "lg", string>;
  resizes: Record<TextareaResize, string>;
  errorState: string;
  label: string;
  description: string;
  error: string;
  helper: string;
  loadingOverlay: string;
};

export const defaultStyle: TextareaStyleConfig = {
  textarea:
    "w-full rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500 disabled:cursor-not-allowed disabled:opacity-40 read-only:bg-muted/30",
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
  errorState: "border-red-500 focus:ring-red-500/40 focus:border-red-500",
  label: "text-sm font-medium text-foreground/90 leading-none",
  description: "text-xs text-muted-foreground leading-relaxed",
  error: "text-xs text-red-400",
  helper: "text-xs text-muted-foreground",
  loadingOverlay:
    "absolute inset-0 flex items-center justify-center rounded-lg bg-background/60 backdrop-blur-[1px]",
};
