export type { AlertStyleConfig, AlertVariant } from "./default";
import type { AlertStyleConfig } from "./default";

export const auroraStyle: AlertStyleConfig = {
  base: "relative overflow-hidden flex items-start gap-3 rounded-lg border px-4 py-3 backdrop-blur-sm",
  variants: {
    info: {
      bg:            "bg-indigo-500/10",
      border:        "border-indigo-400/25",
      titleColor:    "text-indigo-200",
      descColor:     "text-indigo-300/70",
      iconColor:     "text-indigo-300",
      progressColor: "bg-indigo-400",
    },
    success: {
      bg:            "bg-teal-500/10",
      border:        "border-teal-400/25",
      titleColor:    "text-teal-200",
      descColor:     "text-teal-300/70",
      iconColor:     "text-teal-300",
      progressColor: "bg-teal-400",
    },
    warning: {
      bg:            "bg-amber-500/10",
      border:        "border-amber-400/25",
      titleColor:    "text-amber-200",
      descColor:     "text-amber-300/70",
      iconColor:     "text-amber-300",
      progressColor: "bg-amber-400",
    },
    error: {
      bg:            "bg-rose-500/10",
      border:        "border-rose-400/25",
      titleColor:    "text-rose-200",
      descColor:     "text-rose-300/70",
      iconColor:     "text-rose-300",
      progressColor: "bg-rose-400",
    },
  },
  closeBtn: "shrink-0 flex items-center justify-center size-5 rounded opacity-60 hover:opacity-100 transition-opacity duration-100 focus:outline-none",
};
