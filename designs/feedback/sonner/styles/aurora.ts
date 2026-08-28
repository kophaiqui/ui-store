export type { SonnerStyleConfig, SonnerToastType, SonnerPosition } from "./default";
import type { SonnerStyleConfig } from "./default";

export const auroraStyle: SonnerStyleConfig = {
  viewport: "fixed z-[9999] flex max-h-screen flex-col gap-2 p-4 pointer-events-none",
  positions: {
    "top-left": "top-0 left-0 items-start",
    "top-center": "top-0 left-1/2 -translate-x-1/2 items-center",
    "top-right": "top-0 right-0 items-end",
    "bottom-left": "bottom-0 left-0 items-start",
    "bottom-center": "bottom-0 left-1/2 -translate-x-1/2 items-center",
    "bottom-right": "bottom-0 right-0 items-end",
  },
  toast:
    "pointer-events-auto flex w-80 items-start gap-3 rounded-xl border border-indigo-400/20 bg-[#0b1022]/95 backdrop-blur-xl px-4 py-3 shadow-[0_0_28px_rgba(99,102,241,0.15),0_8px_32px_rgba(0,0,0,0.5)] data-[starting-style]:opacity-0 data-[starting-style]:translate-y-2 data-[ending-style]:opacity-0 data-[ending-style]:translate-y-2 transition-[opacity,transform] duration-200",
  types: {
    default: "",
    success: "border-teal-400/30",
    error: "border-rose-400/30",
    warning: "border-amber-400/30",
    info: "border-indigo-400/30",
  },
  title: "text-sm font-medium text-teal-50",
  message: "text-xs text-indigo-300/60 leading-relaxed",
  action:
    "mt-1 text-xs font-medium text-teal-300 hover:text-teal-200 transition-colors cursor-pointer",
  close:
    "ml-auto shrink-0 text-indigo-300/50 hover:text-teal-200 transition-colors cursor-pointer",
  trigger:
    "rounded-lg border border-indigo-400/20 bg-indigo-950/50 px-4 py-2 text-sm font-medium text-indigo-200 transition-colors hover:bg-indigo-900/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400/40",
};
