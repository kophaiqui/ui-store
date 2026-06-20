export type SonnerToastType = "default" | "success" | "error" | "warning" | "info";
export type SonnerPosition = "top-left" | "top-center" | "top-right" | "bottom-left" | "bottom-center" | "bottom-right";

export type SonnerStyleConfig = {
  viewport: string;
  positions: Record<SonnerPosition, string>;
  toast: string;
  types: Record<SonnerToastType, string>;
  title: string;
  message: string;
  action: string;
  close: string;
  trigger: string;
};

export const defaultStyle: SonnerStyleConfig = {
  viewport:
    "fixed z-[9999] flex max-h-screen flex-col gap-2 p-4 pointer-events-none",
  positions: {
    "top-left": "top-0 left-0 items-start",
    "top-center": "top-0 left-1/2 -translate-x-1/2 items-center",
    "top-right": "top-0 right-0 items-end",
    "bottom-left": "bottom-0 left-0 items-start",
    "bottom-center": "bottom-0 left-1/2 -translate-x-1/2 items-center",
    "bottom-right": "bottom-0 right-0 items-end",
  },
  toast:
    "pointer-events-auto flex w-80 items-start gap-3 rounded-xl border border-border bg-card/95 backdrop-blur-md px-4 py-3 shadow-xl shadow-black/20 data-[starting-style]:opacity-0 data-[starting-style]:translate-y-2 data-[ending-style]:opacity-0 data-[ending-style]:translate-y-2 transition-[opacity,transform] duration-200",
  types: {
    default: "",
    success: "border-emerald-500/30",
    error: "border-red-500/30",
    warning: "border-amber-500/30",
    info: "border-blue-500/30",
  },
  title: "text-sm font-medium text-foreground",
  message: "text-xs text-muted-foreground leading-relaxed",
  action:
    "mt-1 text-xs font-medium text-emerald-500 hover:text-emerald-400 transition-colors cursor-pointer",
  close:
    "ml-auto shrink-0 text-muted-foreground/60 hover:text-foreground transition-colors cursor-pointer",
  trigger:
    "rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium text-foreground/90 transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/40",
};
