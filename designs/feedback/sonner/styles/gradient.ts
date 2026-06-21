import type { SonnerStyleConfig } from "./default";
export type { SonnerStyleConfig };

export const gradientStyle: SonnerStyleConfig = {
  viewport: "fixed z-[9999] flex max-h-screen flex-col gap-2 p-4 pointer-events-none",
  positions: {
    "top-left":      "top-0 left-0 items-start",
    "top-center":    "top-0 left-1/2 -translate-x-1/2 items-center",
    "top-right":     "top-0 right-0 items-end",
    "bottom-left":   "bottom-0 left-0 items-start",
    "bottom-center": "bottom-0 left-1/2 -translate-x-1/2 items-center",
    "bottom-right":  "bottom-0 right-0 items-end",
  },
  toast: "pointer-events-auto flex w-80 items-start gap-3 rounded-xl border border-zinc-800 bg-zinc-900/95 backdrop-blur-md px-4 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.06)] data-[starting-style]:opacity-0 data-[ending-style]:opacity-0 transition-[opacity] duration-200",
  types: {
    default: "",
    success: "border-emerald-500/30",
    error:   "border-red-500/30",
    warning: "border-amber-500/30",
    info:    "border-fuchsia-500/30",
  },
  title: "text-sm font-medium text-zinc-100",
  message: "text-xs text-zinc-400 leading-relaxed",
  action: "mt-1 text-xs font-medium text-fuchsia-400 hover:text-fuchsia-300 transition-colors cursor-pointer",
  close: "ml-auto shrink-0 text-zinc-600 hover:text-zinc-300 transition-colors cursor-pointer",
  trigger: "rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-2 text-sm font-medium text-zinc-200 transition-all duration-150 hover:border-zinc-600 hover:bg-zinc-700 active:scale-[0.97] focus-visible:outline-none",
};
