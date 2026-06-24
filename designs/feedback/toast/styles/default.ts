export type ToastVariant = "default" | "success" | "error" | "warning" | "info";

export type ToastStyleConfig = {
  root: string;
  viewport: string;
  closeBtn: string;
  variants: Record<ToastVariant, {
    border: string;
    progressColor: string;
    titleColor: string;
    descColor: string;
  }>;
};

export const defaultStyle: ToastStyleConfig = {
  root: "relative overflow-hidden flex items-start gap-3 rounded-xl border px-4 py-3 bg-card shadow-[0_8px_32px_rgba(0,0,0,0.5)] data-[ending-style]:translate-x-[110%] data-[ending-style]:opacity-0 data-[starting-style]:translate-x-[110%] data-[starting-style]:opacity-0 transition-all duration-250 ease-out",
  viewport: "fixed bottom-4 right-4 z-[9999] flex flex-col gap-2 w-[340px] max-w-[calc(100vw-2rem)] focus:outline-none",
  closeBtn: "shrink-0 flex size-5 items-center justify-center rounded text-muted-foreground/50 hover:text-foreground/80 transition-colors duration-100 focus:outline-none",
  variants: {
    default: { border: "border-border",          progressColor: "bg-foreground/30",  titleColor: "text-foreground",       descColor: "text-muted-foreground"   },
    success: { border: "border-emerald-500/30",  progressColor: "bg-emerald-400",    titleColor: "text-foreground",       descColor: "text-muted-foreground"   },
    error:   { border: "border-red-500/30",      progressColor: "bg-red-400",        titleColor: "text-foreground",       descColor: "text-muted-foreground"   },
    warning: { border: "border-amber-500/30",    progressColor: "bg-amber-400",      titleColor: "text-foreground",       descColor: "text-muted-foreground"   },
    info:    { border: "border-blue-500/30",     progressColor: "bg-blue-400",       titleColor: "text-foreground",       descColor: "text-muted-foreground"   },
  },
};
