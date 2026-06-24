import type { AlertStyleConfig } from "./default";
export type { AlertStyleConfig, AlertVariant } from "./default";

export const terminalStyle: AlertStyleConfig = {
  base: "relative overflow-hidden flex items-start gap-3 rounded-sm border px-4 py-3",
  variants: {
    info: {
      bg:            "bg-sky-50 dark:bg-sky-400/5",
      border:        "border-[#0EA5E9] dark:border-[#38BDF8]",
      titleColor:    "font-mono font-bold uppercase tracking-wide text-sky-800 dark:text-[#38BDF8]",
      descColor:     "font-mono text-sky-700 dark:text-sky-300",
      iconColor:     "text-[#0EA5E9] dark:text-[#38BDF8]",
      progressColor: "bg-[#0EA5E9] dark:bg-[#38BDF8]",
    },
    success: {
      bg:            "bg-[#16A34A]/5 dark:bg-[#22C55E]/5",
      border:        "border-[#16A34A] dark:border-[#22C55E]",
      titleColor:    "font-mono font-bold uppercase tracking-wide text-[#065F46] dark:text-[#22C55E]",
      descColor:     "font-mono text-[#047857] dark:text-[#86EFAC]",
      iconColor:     "text-[#16A34A] dark:text-[#22C55E]",
      progressColor: "bg-[#16A34A] dark:bg-[#22C55E]",
    },
    warning: {
      bg:            "bg-amber-50 dark:bg-amber-400/5",
      border:        "border-amber-500 dark:border-amber-400",
      titleColor:    "font-mono font-bold uppercase tracking-wide text-amber-800 dark:text-amber-400",
      descColor:     "font-mono text-amber-700 dark:text-amber-300",
      iconColor:     "text-amber-500 dark:text-amber-400",
      progressColor: "bg-amber-500 dark:bg-amber-400",
    },
    error: {
      bg:            "bg-red-50 dark:bg-red-500/5",
      border:        "border-red-600 dark:border-red-500",
      titleColor:    "font-mono font-bold uppercase tracking-wide text-red-800 dark:text-red-400",
      descColor:     "font-mono text-red-700 dark:text-red-300",
      iconColor:     "text-red-600 dark:text-red-500",
      progressColor: "bg-red-600 dark:bg-red-500",
    },
  },
  closeBtn: "shrink-0 flex items-center justify-center size-5 rounded-none border border-current opacity-60 hover:opacity-100 transition-opacity duration-100 focus:outline-none",
};
