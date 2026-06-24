import type { SonnerStyleConfig } from "./default";
export type { SonnerStyleConfig, SonnerToastType, SonnerPosition } from "./default";

export const terminalStyle: SonnerStyleConfig = {
  viewport: "fixed z-[9999] flex max-h-screen flex-col gap-2 p-4 pointer-events-none",
  positions: {
    "top-left":      "top-0 left-0 items-start",
    "top-center":    "top-0 left-1/2 -translate-x-1/2 items-center",
    "top-right":     "top-0 right-0 items-end",
    "bottom-left":   "bottom-0 left-0 items-start",
    "bottom-center": "bottom-0 left-1/2 -translate-x-1/2 items-center",
    "bottom-right":  "bottom-0 right-0 items-end",
  },
  toast: "pointer-events-auto flex w-80 items-start gap-3 rounded-sm border border-[#16A34A] bg-white dark:border-[#22C55E] dark:bg-[#0F0F0F] dark:shadow-[0_0_12px_rgba(34,197,94,0.2)] px-4 py-3 data-[starting-style]:opacity-0 data-[starting-style]:translate-y-2 data-[ending-style]:opacity-0 data-[ending-style]:translate-y-2 transition-[opacity,transform] duration-200",
  types: {
    default: "",
    success: "border-[#16A34A] dark:border-[#22C55E]",
    error:   "border-red-600 dark:border-red-500",
    warning: "border-amber-500 dark:border-amber-400",
    info:    "border-[#0EA5E9] dark:border-[#38BDF8]",
  },
  title: "font-mono text-sm font-bold text-[#065F46] dark:text-[#22C55E] uppercase tracking-wide",
  message: "font-mono text-xs text-[#047857] dark:text-[#86EFAC] leading-relaxed",
  action: "mt-1 font-mono text-xs font-bold text-[#16A34A] dark:text-[#22C55E] hover:text-[#15803D] dark:hover:text-[#86EFAC] transition-colors cursor-pointer uppercase",
  close: "ml-auto shrink-0 text-[#047857] dark:text-[#86EFAC] hover:text-[#065F46] dark:hover:text-[#22C55E] transition-colors cursor-pointer",
  trigger: "rounded-sm border border-[#16A34A] bg-transparent px-4 py-2 font-mono text-sm font-bold text-[#065F46] dark:border-[#22C55E] dark:text-[#22C55E] transition-all hover:bg-[#16A34A]/10 dark:hover:bg-[#22C55E]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16A34A]/40 dark:focus-visible:ring-[#22C55E]/40",
};
