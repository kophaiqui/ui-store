import type { AlertStyleConfig } from "./default";
export type { AlertStyleConfig, AlertVariant } from "./default";

export const retroStyle: AlertStyleConfig = {
  base: "relative overflow-hidden flex items-start gap-3 rounded-sm border-2 px-4 py-3 shadow-[3px_3px_0px_0px_#3d2410] dark:shadow-[3px_3px_0px_0px_#A78BFA]",
  variants: {
    info: {
      bg:            "bg-blue-50 dark:bg-blue-950/30",
      border:        "border-blue-800 dark:border-blue-500",
      titleColor:    "text-blue-900 font-black uppercase tracking-wide dark:text-blue-300",
      descColor:     "text-blue-800 font-medium dark:text-blue-400",
      iconColor:     "text-blue-800 dark:text-blue-400",
      progressColor: "bg-blue-800 dark:bg-blue-500",
    },
    success: {
      bg:            "bg-[#fdf6e3] dark:bg-[#161324]",
      border:        "border-[#3d2410] dark:border-[#A78BFA]",
      titleColor:    "text-[#2c1a0e] font-black uppercase tracking-wide dark:text-[#F5F3FF]",
      descColor:     "text-[#7a5230] font-medium dark:text-[#A1A1AA]",
      iconColor:     "text-[#e8743b] dark:text-[#A78BFA]",
      progressColor: "bg-[#e8743b] dark:bg-[#A78BFA]",
    },
    warning: {
      bg:            "bg-amber-50 dark:bg-amber-950/30",
      border:        "border-amber-800 dark:border-amber-500",
      titleColor:    "text-amber-900 font-black uppercase tracking-wide dark:text-amber-300",
      descColor:     "text-amber-800 font-medium dark:text-amber-400",
      iconColor:     "text-amber-800 dark:text-amber-400",
      progressColor: "bg-amber-700 dark:bg-amber-500",
    },
    error: {
      bg:            "bg-red-50 dark:bg-red-950/30",
      border:        "border-red-800 dark:border-red-500",
      titleColor:    "text-red-900 font-black uppercase tracking-wide dark:text-red-300",
      descColor:     "text-red-800 font-medium dark:text-red-400",
      iconColor:     "text-red-800 dark:text-red-400",
      progressColor: "bg-red-700 dark:bg-red-500",
    },
  },
  closeBtn: "shrink-0 flex items-center justify-center size-5 rounded-none border border-current opacity-60 hover:opacity-100 transition-opacity duration-100 focus:outline-none",
};
