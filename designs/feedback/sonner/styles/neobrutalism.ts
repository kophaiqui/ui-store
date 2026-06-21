import type { SonnerStyleConfig } from "./default";
export type { SonnerStyleConfig };

export const neobrutalismStyle: SonnerStyleConfig = {
  viewport: "fixed z-[9999] flex max-h-screen flex-col gap-2 p-4 pointer-events-none",
  positions: {
    "top-left":      "top-0 left-0 items-start",
    "top-center":    "top-0 left-1/2 -translate-x-1/2 items-center",
    "top-right":     "top-0 right-0 items-end",
    "bottom-left":   "bottom-0 left-0 items-start",
    "bottom-center": "bottom-0 left-1/2 -translate-x-1/2 items-center",
    "bottom-right":  "bottom-0 right-0 items-end",
  },
  toast: "pointer-events-auto flex w-80 items-start gap-3 rounded-none border-2 border-zinc-950 bg-white px-4 py-3 shadow-[4px_4px_0px_0px_#09090b] data-[starting-style]:opacity-0 data-[ending-style]:opacity-0 transition-[opacity] duration-200",
  types: {
    default: "",
    success: "bg-yellow-300",
    error:   "bg-red-200",
    warning: "bg-orange-200",
    info:    "bg-blue-100",
  },
  title: "text-sm font-black text-zinc-950",
  message: "text-xs font-medium text-zinc-700 leading-relaxed",
  action: "mt-1 text-xs font-black text-zinc-950 underline hover:no-underline transition-all cursor-pointer uppercase",
  close: "ml-auto shrink-0 text-zinc-500 hover:text-zinc-950 transition-colors cursor-pointer",
  trigger: "rounded-none border-2 border-zinc-950 bg-white px-4 py-2 text-sm font-bold text-zinc-950 shadow-[3px_3px_0px_0px_#09090b] transition-all hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_#09090b] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none focus-visible:outline-none",
};
