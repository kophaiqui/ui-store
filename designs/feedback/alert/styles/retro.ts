import type { AlertStyleConfig } from "./default";
export type { AlertStyleConfig, AlertVariant } from "./default";

export const retroStyle: AlertStyleConfig = {
  base: "relative overflow-hidden flex items-start gap-3 rounded-sm border-2 px-4 py-3 shadow-[3px_3px_0px_0px_#3d2410]",
  variants: {
    info: {
      bg:            "bg-blue-50",
      border:        "border-blue-800",
      titleColor:    "text-blue-900 font-black uppercase tracking-wide",
      descColor:     "text-blue-800 font-medium",
      iconColor:     "text-blue-800",
      progressColor: "bg-blue-800",
    },
    success: {
      bg:            "bg-[#fdf6e3]",
      border:        "border-[#3d2410]",
      titleColor:    "text-[#2c1a0e] font-black uppercase tracking-wide",
      descColor:     "text-[#7a5230] font-medium",
      iconColor:     "text-[#e8743b]",
      progressColor: "bg-[#e8743b]",
    },
    warning: {
      bg:            "bg-amber-50",
      border:        "border-amber-800",
      titleColor:    "text-amber-900 font-black uppercase tracking-wide",
      descColor:     "text-amber-800 font-medium",
      iconColor:     "text-amber-800",
      progressColor: "bg-amber-700",
    },
    error: {
      bg:            "bg-red-50",
      border:        "border-red-800",
      titleColor:    "text-red-900 font-black uppercase tracking-wide",
      descColor:     "text-red-800 font-medium",
      iconColor:     "text-red-800",
      progressColor: "bg-red-700",
    },
  },
  closeBtn: "shrink-0 flex items-center justify-center size-5 rounded-none border border-current opacity-60 hover:opacity-100 transition-opacity duration-100 focus:outline-none",
};
