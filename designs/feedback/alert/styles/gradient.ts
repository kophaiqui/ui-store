import type { AlertStyleConfig } from "./default";
export type { AlertStyleConfig };

export const gradientStyle: AlertStyleConfig = {
  base: "relative overflow-hidden flex items-start gap-3 rounded-xl border px-4 py-3",
  variants: {
    info: {
      bg:            "bg-blue-500/8",
      border:        "border-blue-500/25",
      titleColor:    "text-blue-300",
      descColor:     "text-blue-400/70",
      iconColor:     "text-blue-400",
      progressColor: "bg-blue-400",
    },
    success: {
      bg:            "bg-fuchsia-500/8",
      border:        "border-fuchsia-500/25",
      titleColor:    "text-fuchsia-300",
      descColor:     "text-fuchsia-400/70",
      iconColor:     "text-fuchsia-400",
      progressColor: "bg-fuchsia-400",
    },
    warning: {
      bg:            "bg-amber-500/8",
      border:        "border-amber-500/25",
      titleColor:    "text-amber-300",
      descColor:     "text-amber-400/70",
      iconColor:     "text-amber-400",
      progressColor: "bg-amber-400",
    },
    error: {
      bg:            "bg-red-500/8",
      border:        "border-red-500/25",
      titleColor:    "text-red-300",
      descColor:     "text-red-400/70",
      iconColor:     "text-red-400",
      progressColor: "bg-red-400",
    },
  },
  closeBtn: "shrink-0 flex items-center justify-center size-5 rounded opacity-60 hover:opacity-100 transition-opacity duration-100 focus:outline-none",
};
