export type { AlertStyleConfig, AlertVariant } from "./default";
import type { AlertStyleConfig } from "./default";

export const glassStyle: AlertStyleConfig = {
  base: "relative overflow-hidden flex items-start gap-3 rounded-xl border px-4 py-3 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]",
  variants: {
    info: {
      bg:            "bg-sky-400/8",
      border:        "border-sky-400/20",
      titleColor:    "text-sky-300",
      descColor:     "text-sky-300/60",
      iconColor:     "text-sky-400",
      progressColor: "bg-sky-400",
    },
    success: {
      bg:            "bg-emerald-400/8",
      border:        "border-emerald-400/20",
      titleColor:    "text-emerald-300",
      descColor:     "text-emerald-300/60",
      iconColor:     "text-emerald-400",
      progressColor: "bg-emerald-400",
    },
    warning: {
      bg:            "bg-amber-400/8",
      border:        "border-amber-400/20",
      titleColor:    "text-amber-300",
      descColor:     "text-amber-300/60",
      iconColor:     "text-amber-400",
      progressColor: "bg-amber-400",
    },
    error: {
      bg:            "bg-red-400/8",
      border:        "border-red-400/20",
      titleColor:    "text-red-300",
      descColor:     "text-red-300/60",
      iconColor:     "text-red-400",
      progressColor: "bg-red-400",
    },
  },
  closeBtn: "shrink-0 flex items-center justify-center size-5 rounded opacity-50 hover:opacity-100 transition-opacity duration-100 focus:outline-none",
};
