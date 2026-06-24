import type { SonnerStyleConfig } from "./default";
export type { SonnerStyleConfig, SonnerToastType, SonnerPosition } from "./default";

export const retroStyle: SonnerStyleConfig = {
  viewport: "fixed z-[9999] flex max-h-screen flex-col gap-2 p-4 pointer-events-none",
  positions: {
    "top-left":      "top-0 left-0 items-start",
    "top-center":    "top-0 left-1/2 -translate-x-1/2 items-center",
    "top-right":     "top-0 right-0 items-end",
    "bottom-left":   "bottom-0 left-0 items-start",
    "bottom-center": "bottom-0 left-1/2 -translate-x-1/2 items-center",
    "bottom-right":  "bottom-0 right-0 items-end",
  },
  toast: "pointer-events-auto flex w-80 items-start gap-3 rounded-sm border-2 border-[#3d2410] bg-[#fdf6e3] px-4 py-3 shadow-[4px_4px_0px_0px_#3d2410] data-[starting-style]:opacity-0 data-[starting-style]:translate-y-2 data-[ending-style]:opacity-0 data-[ending-style]:translate-y-2 transition-[opacity,transform] duration-200 dark:border-[#A78BFA] dark:bg-[#161324] dark:shadow-[4px_4px_0px_0px_#A78BFA]",
  types: {
    default: "",
    success: "border-[#e8743b] dark:border-[#A78BFA]",
    error:   "border-red-700 dark:border-red-500",
    warning: "border-amber-600 dark:border-amber-400",
    info:    "border-blue-700 dark:border-blue-500",
  },
  title: "text-sm font-black text-[#2c1a0e] uppercase tracking-wide dark:text-[#F5F3FF]",
  message: "text-xs text-[#7a5230] font-medium leading-relaxed dark:text-[#A1A1AA]",
  action: "mt-1 text-xs font-black text-[#e8743b] hover:text-[#c4612a] transition-colors cursor-pointer uppercase dark:text-[#A78BFA] dark:hover:text-[#c4b5fd]",
  close: "ml-auto shrink-0 text-[#7a5230] hover:text-[#2c1a0e] transition-colors cursor-pointer dark:text-[#A1A1AA] dark:hover:text-[#F5F3FF]",
  trigger: "rounded-sm border-2 border-[#3d2410] bg-[#fdf6e3] px-4 py-2 text-sm font-bold text-[#2c1a0e] shadow-[3px_3px_0px_0px_#3d2410] transition-all hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_#3d2410] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e8743b]/40 dark:border-[#A78BFA] dark:bg-[#161324] dark:text-[#F5F3FF] dark:shadow-[3px_3px_0px_0px_#A78BFA] dark:hover:shadow-[2px_2px_0px_0px_#A78BFA] dark:focus-visible:ring-[#A78BFA]/40",
};
