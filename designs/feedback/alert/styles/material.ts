export type { AlertStyleConfig, AlertVariant } from "./default";
import type { AlertStyleConfig } from "./default";

export const materialStyle: AlertStyleConfig = {
  base: "relative overflow-hidden flex items-start gap-3 rounded-2xl border px-4 py-3",
  variants: {
    info: {
      bg:            "bg-sky-100/70 dark:bg-sky-500/10",
      border:        "border-sky-300/50 dark:border-sky-400/20",
      titleColor:    "text-sky-800 dark:text-sky-300",
      descColor:     "text-sky-700/70 dark:text-sky-300/60",
      iconColor:     "text-sky-600 dark:text-sky-400",
      progressColor: "bg-sky-500",
    },
    success: {
      bg:            "bg-teal-100/70 dark:bg-teal-500/10",
      border:        "border-teal-300/50 dark:border-teal-400/20",
      titleColor:    "text-teal-800 dark:text-teal-300",
      descColor:     "text-teal-700/70 dark:text-teal-300/60",
      iconColor:     "text-teal-600 dark:text-teal-400",
      progressColor: "bg-teal-500",
    },
    warning: {
      bg:            "bg-amber-100/70 dark:bg-amber-500/10",
      border:        "border-amber-300/50 dark:border-amber-400/20",
      titleColor:    "text-amber-800 dark:text-amber-300",
      descColor:     "text-amber-700/70 dark:text-amber-300/60",
      iconColor:     "text-amber-600 dark:text-amber-400",
      progressColor: "bg-amber-500",
    },
    error: {
      bg:            "bg-rose-100/70 dark:bg-rose-500/10",
      border:        "border-rose-300/50 dark:border-rose-400/20",
      titleColor:    "text-rose-800 dark:text-rose-300",
      descColor:     "text-rose-700/70 dark:text-rose-300/60",
      iconColor:     "text-rose-600 dark:text-rose-400",
      progressColor: "bg-rose-500",
    },
  },
  closeBtn: "shrink-0 flex items-center justify-center size-5 rounded-full opacity-60 hover:opacity-100 transition-opacity duration-100 focus:outline-none",
};
