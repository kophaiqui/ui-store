import type { AlertStyleConfig } from "./default";
export type { AlertStyleConfig };

export const neobrutalismStyle: AlertStyleConfig = {
  base: "relative overflow-hidden flex items-start gap-3 rounded-none border-2 border-zinc-950 dark:border-white px-4 py-3 shadow-[4px_4px_0px_0px_#09090b] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.7)]",
  variants: {
    info: {
      bg:            "bg-blue-100 dark:bg-blue-900/30",
      border:        "border-zinc-950 dark:border-white",
      titleColor:    "text-blue-900 dark:text-blue-300",
      descColor:     "text-blue-800 dark:text-blue-400",
      iconColor:     "text-blue-700 dark:text-blue-400",
      progressColor: "bg-blue-500",
    },
    success: {
      bg:            "bg-yellow-300 dark:bg-yellow-300/20",
      border:        "border-zinc-950 dark:border-white",
      titleColor:    "text-zinc-950 dark:text-yellow-300",
      descColor:     "text-zinc-800 dark:text-yellow-400",
      iconColor:     "text-zinc-950 dark:text-yellow-300",
      progressColor: "bg-zinc-950 dark:bg-yellow-400",
    },
    warning: {
      bg:            "bg-orange-200 dark:bg-orange-900/30",
      border:        "border-zinc-950 dark:border-white",
      titleColor:    "text-orange-950 dark:text-orange-300",
      descColor:     "text-orange-900 dark:text-orange-400",
      iconColor:     "text-orange-800 dark:text-orange-400",
      progressColor: "bg-orange-600",
    },
    error: {
      bg:            "bg-red-200 dark:bg-red-900/30",
      border:        "border-zinc-950 dark:border-white",
      titleColor:    "text-red-950 dark:text-red-300",
      descColor:     "text-red-900 dark:text-red-400",
      iconColor:     "text-red-800 dark:text-red-400",
      progressColor: "bg-red-600",
    },
  },
  closeBtn: "shrink-0 flex items-center justify-center size-5 rounded-none opacity-70 hover:opacity-100 transition-opacity duration-100 focus:outline-none",
};
