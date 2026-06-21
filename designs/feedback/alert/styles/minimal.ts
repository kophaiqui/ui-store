export type { AlertStyleConfig, AlertVariant } from "./default";
import type { AlertStyleConfig } from "./default";

export const minimalStyle: AlertStyleConfig = {
  base: "relative overflow-hidden flex items-start gap-3 border-l-2 px-4 py-3 rounded-none bg-transparent",
  variants: {
    info: {
      bg:            "",
      border:        "border-blue-500",
      titleColor:    "text-foreground",
      descColor:     "text-muted-foreground",
      iconColor:     "text-blue-500",
      progressColor: "bg-blue-500",
    },
    success: {
      bg:            "",
      border:        "border-emerald-500",
      titleColor:    "text-foreground",
      descColor:     "text-muted-foreground",
      iconColor:     "text-emerald-500",
      progressColor: "bg-emerald-500",
    },
    warning: {
      bg:            "",
      border:        "border-amber-500",
      titleColor:    "text-foreground",
      descColor:     "text-muted-foreground",
      iconColor:     "text-amber-500",
      progressColor: "bg-amber-500",
    },
    error: {
      bg:            "",
      border:        "border-red-500",
      titleColor:    "text-foreground",
      descColor:     "text-muted-foreground",
      iconColor:     "text-red-500",
      progressColor: "bg-red-500",
    },
  },
  closeBtn: "shrink-0 flex items-center justify-center size-5 rounded-none opacity-50 hover:opacity-100 transition-opacity duration-100 focus:outline-none",
};
