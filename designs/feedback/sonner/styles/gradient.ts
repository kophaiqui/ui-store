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
  toast: "pointer-events-auto flex w-80 items-start gap-3 rounded-xl border border-[#FCE7F3] bg-white px-4 py-3 shadow-[0_4px_16px_rgba(0,0,0,0.08)] data-[starting-style]:opacity-0 data-[ending-style]:opacity-0 transition-[opacity] duration-200 dark:border-zinc-800 dark:bg-zinc-900/95 dark:backdrop-blur-md dark:shadow-[0_8px_32px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.06)]",
  types: {
    default: "",
    success: "border-emerald-300/50 dark:border-emerald-500/30",
    error:   "border-red-300/50 dark:border-red-500/30",
    warning: "border-amber-300/50 dark:border-amber-500/30",
    info:    "border-[#7C3AED]/30 dark:border-fuchsia-500/30",
  },
  title: "text-sm font-medium text-[#0F172A] dark:text-zinc-100",
  message: "text-xs text-[#64748B] leading-relaxed dark:text-zinc-400",
  action: "mt-1 text-xs font-medium text-[#7C3AED] hover:text-[#6D28D9] transition-colors cursor-pointer dark:text-fuchsia-400 dark:hover:text-fuchsia-300",
  close: "ml-auto shrink-0 text-[#64748B] hover:text-[#0F172A] transition-colors cursor-pointer dark:text-zinc-600 dark:hover:text-zinc-300",
  trigger: "rounded-xl border border-[#FCE7F3] bg-white px-4 py-2 text-sm font-medium text-[#0F172A] transition-all duration-150 hover:border-[#7C3AED]/30 hover:bg-[#FDF2F8] active:scale-[0.97] focus-visible:outline-none dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:border-zinc-600 dark:hover:bg-zinc-700",
};
