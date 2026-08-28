export type { SonnerStyleConfig, SonnerToastType, SonnerPosition } from "./default";
import type { SonnerStyleConfig } from "./default";

export const materialStyle: SonnerStyleConfig = {
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
    "pointer-events-auto flex w-80 items-start gap-3 rounded-2xl border border-violet-200/40 bg-white dark:border-violet-800/30 dark:bg-[#1d1b20] px-4 py-3 shadow-[0_8px_24px_rgba(103,80,164,0.18)] dark:shadow-[0_8px_24px_rgba(0,0,0,0.5)] data-[starting-style]:opacity-0 data-[starting-style]:translate-y-2 data-[ending-style]:opacity-0 data-[ending-style]:translate-y-2 transition-[opacity,transform] duration-200",
  types: {
    default: "",
    success: "border-teal-400/40 dark:border-teal-400/20",
    error: "border-rose-400/40 dark:border-rose-400/20",
    warning: "border-amber-400/40 dark:border-amber-400/20",
    info: "border-sky-400/40 dark:border-sky-400/20",
  },
  title: "text-sm font-medium text-foreground",
  message: "text-xs text-foreground/60 leading-relaxed",
  action:
    "mt-1 text-xs font-medium text-violet-600 hover:text-violet-700 dark:text-violet-400 dark:hover:text-violet-300 transition-colors cursor-pointer",
  close:
    "ml-auto shrink-0 text-foreground/40 hover:text-foreground transition-colors cursor-pointer",
  trigger:
    "rounded-full border border-violet-300/60 bg-transparent px-4 py-2 text-sm font-medium text-violet-700 dark:border-violet-700/40 dark:text-violet-300 transition-colors hover:bg-violet-50 dark:hover:bg-violet-500/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/40",
};
