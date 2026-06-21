import type { SonnerStyleConfig } from "./default";
export type { SonnerStyleConfig };

export const neumorphismStyle: SonnerStyleConfig = {
  viewport: "fixed z-[9999] flex max-h-screen flex-col gap-2 p-4 pointer-events-none",
  positions: {
    "top-left":      "top-0 left-0 items-start",
    "top-center":    "top-0 left-1/2 -translate-x-1/2 items-center",
    "top-right":     "top-0 right-0 items-end",
    "bottom-left":   "bottom-0 left-0 items-start",
    "bottom-center": "bottom-0 left-1/2 -translate-x-1/2 items-center",
    "bottom-right":  "bottom-0 right-0 items-end",
  },
  toast: "pointer-events-auto flex w-80 items-start gap-3 rounded-2xl bg-[#e8ecf1] px-4 py-3 shadow-[6px_6px_12px_rgba(163,177,198,0.5),-6px_-6px_12px_rgba(255,255,255,0.7)] data-[starting-style]:opacity-0 data-[ending-style]:opacity-0 transition-[opacity] duration-200",
  types: {
    default: "",
    success: "",
    error:   "",
    warning: "",
    info:    "",
  },
  title: "text-sm font-semibold text-slate-800",
  message: "text-xs text-slate-500 leading-relaxed",
  action: "mt-1 text-xs font-semibold text-blue-600 hover:text-blue-500 transition-colors cursor-pointer",
  close: "ml-auto shrink-0 text-slate-400 hover:text-slate-700 transition-colors cursor-pointer",
  trigger: "rounded-2xl bg-[#e8ecf1] px-4 py-2 text-sm font-semibold text-slate-700 shadow-[4px_4px_8px_rgba(163,177,198,0.5),-4px_-4px_8px_rgba(255,255,255,0.7)] transition-all duration-200 hover:shadow-[2px_2px_5px_rgba(163,177,198,0.4),-2px_-2px_5px_rgba(255,255,255,0.6)] active:shadow-[inset_2px_2px_5px_rgba(163,177,198,0.5),inset_-2px_-2px_5px_rgba(255,255,255,0.7)] focus-visible:outline-none",
};
