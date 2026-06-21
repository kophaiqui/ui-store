import type { AlertStyleConfig } from "./default";
export type { AlertStyleConfig };

export const neobrutalismStyle: AlertStyleConfig = {
  base: "relative overflow-hidden flex items-start gap-3 rounded-none border-2 border-zinc-950 px-4 py-3 shadow-[4px_4px_0px_0px_#09090b]",
  variants: {
    info: {
      bg:            "bg-blue-100",
      border:        "border-zinc-950",
      titleColor:    "text-blue-900",
      descColor:     "text-blue-800",
      iconColor:     "text-blue-700",
      progressColor: "bg-blue-500",
    },
    success: {
      bg:            "bg-yellow-300",
      border:        "border-zinc-950",
      titleColor:    "text-zinc-950",
      descColor:     "text-zinc-800",
      iconColor:     "text-zinc-950",
      progressColor: "bg-zinc-950",
    },
    warning: {
      bg:            "bg-orange-200",
      border:        "border-zinc-950",
      titleColor:    "text-orange-950",
      descColor:     "text-orange-900",
      iconColor:     "text-orange-800",
      progressColor: "bg-orange-600",
    },
    error: {
      bg:            "bg-red-200",
      border:        "border-zinc-950",
      titleColor:    "text-red-950",
      descColor:     "text-red-900",
      iconColor:     "text-red-800",
      progressColor: "bg-red-600",
    },
  },
  closeBtn: "shrink-0 flex items-center justify-center size-5 rounded-none opacity-70 hover:opacity-100 transition-opacity duration-100 focus:outline-none",
};
