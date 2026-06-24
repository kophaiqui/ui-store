export type { SonnerStyleConfig, SonnerToastType, SonnerPosition } from "./default";
import type { SonnerStyleConfig } from "./default";

export const glassStyle: SonnerStyleConfig = {
  viewport: "fixed z-[9999] flex max-h-screen flex-col gap-2 p-4 pointer-events-none",
  positions: {
    "top-left": "top-0 left-0 items-start",
    "top-center": "top-0 left-1/2 -translate-x-1/2 items-center",
    "top-right": "top-0 right-0 items-end",
    "bottom-left": "bottom-0 left-0 items-start",
    "bottom-center": "bottom-0 left-1/2 -translate-x-1/2 items-center",
    "bottom-right": "bottom-0 right-0 items-end",
  },
  toast: "pointer-events-auto flex w-80 items-start gap-3 rounded-2xl border border-black/8 bg-white/85 backdrop-blur-2xl dark:border-white/10 dark:bg-black/50 px-4 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.8)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.08)] data-[starting-style]:opacity-0 data-[starting-style]:translate-y-2 data-[ending-style]:opacity-0 data-[ending-style]:translate-y-2 transition-[opacity,transform] duration-200",
  types: {
    default: "",
    success: "border-emerald-500/20 dark:border-emerald-400/20",
    error:   "border-red-500/20 dark:border-red-400/20",
    warning: "border-amber-500/20 dark:border-amber-400/20",
    info:    "border-sky-500/20 dark:border-sky-400/20",
  },
  title: "text-sm font-medium text-foreground",
  message: "text-xs text-foreground/60 leading-relaxed",
  action: "mt-1 text-xs font-medium text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 transition-colors cursor-pointer",
  close: "ml-auto shrink-0 text-foreground/40 hover:text-foreground transition-colors cursor-pointer",
  trigger: "rounded-lg border border-black/10 bg-black/5 backdrop-blur-sm px-4 py-2 text-sm font-medium text-foreground/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] dark:border-white/10 dark:bg-white/8 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition-all duration-150 hover:bg-black/8 dark:hover:bg-white/12 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/40 dark:focus-visible:ring-sky-400/40",
};
