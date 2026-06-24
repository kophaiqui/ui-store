import type { AlertStyleConfig } from "./default";
export type { AlertStyleConfig };

export const neumorphismStyle: AlertStyleConfig = {
  base: "relative overflow-hidden flex items-start gap-3 rounded-2xl px-5 py-4 bg-[#e8ecf1] dark:bg-[#1E293B] shadow-[5px_5px_10px_rgba(163,177,198,0.5),-5px_-5px_10px_rgba(255,255,255,0.7)] dark:shadow-[5px_5px_10px_rgba(0,0,0,0.5),-5px_-5px_10px_rgba(255,255,255,0.03)]",
  variants: {
    info: {
      bg:            "",
      border:        "",
      titleColor:    "text-blue-700 dark:text-blue-300",
      descColor:     "text-blue-600 dark:text-blue-400",
      iconColor:     "text-blue-500 dark:text-blue-400",
      progressColor: "bg-blue-400",
    },
    success: {
      bg:            "",
      border:        "",
      titleColor:    "text-emerald-700 dark:text-emerald-300",
      descColor:     "text-emerald-600 dark:text-emerald-400",
      iconColor:     "text-emerald-500 dark:text-emerald-400",
      progressColor: "bg-emerald-400",
    },
    warning: {
      bg:            "",
      border:        "",
      titleColor:    "text-amber-700 dark:text-amber-300",
      descColor:     "text-amber-600 dark:text-amber-400",
      iconColor:     "text-amber-500 dark:text-amber-400",
      progressColor: "bg-amber-400",
    },
    error: {
      bg:            "",
      border:        "",
      titleColor:    "text-red-700 dark:text-red-300",
      descColor:     "text-red-600 dark:text-red-400",
      iconColor:     "text-red-500 dark:text-red-400",
      progressColor: "bg-red-400",
    },
  },
  closeBtn: "shrink-0 flex items-center justify-center size-5 rounded-full opacity-60 hover:opacity-100 transition-opacity duration-100 focus:outline-none",
};
