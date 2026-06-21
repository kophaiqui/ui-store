export type { SonnerStyleConfig, SonnerToastType, SonnerPosition } from "./default";
import type { SonnerStyleConfig } from "./default";

export const minimalStyle: SonnerStyleConfig = {
  viewport: "fixed z-[9999] flex max-h-screen flex-col gap-2 p-4 pointer-events-none",
  positions: {
    "top-left": "top-0 left-0 items-start",
    "top-center": "top-0 left-1/2 -translate-x-1/2 items-center",
    "top-right": "top-0 right-0 items-end",
    "bottom-left": "bottom-0 left-0 items-start",
    "bottom-center": "bottom-0 left-1/2 -translate-x-1/2 items-center",
    "bottom-right": "bottom-0 right-0 items-end",
  },
  toast: "pointer-events-auto flex w-80 items-start gap-3 rounded-none border-l-2 border-foreground bg-background px-4 py-3 shadow-none data-[starting-style]:opacity-0 data-[starting-style]:translate-y-2 data-[ending-style]:opacity-0 data-[ending-style]:translate-y-2 transition-[opacity,transform] duration-200",
  types: {
    default: "border-foreground",
    success: "border-emerald-500",
    error:   "border-red-500",
    warning: "border-amber-500",
    info:    "border-blue-500",
  },
  title: "text-sm font-medium text-foreground",
  message: "text-xs text-muted-foreground leading-relaxed",
  action: "mt-1 text-xs font-medium text-foreground underline underline-offset-2 hover:text-muted-foreground transition-colors cursor-pointer",
  close: "ml-auto shrink-0 text-muted-foreground/60 hover:text-foreground transition-colors cursor-pointer",
  trigger: "rounded-none border-0 border-b border-border bg-transparent px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-foreground focus-visible:outline-none",
};
