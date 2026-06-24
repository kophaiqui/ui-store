export type AlertVariant = "info" | "success" | "warning" | "error";

export type AlertStyleConfig = {
  base: string;
  variants: Record<AlertVariant, {
    bg: string;
    border: string;
    titleColor: string;
    descColor: string;
    iconColor: string;
    progressColor: string;
  }>;
  closeBtn: string;
};

export const defaultStyle: AlertStyleConfig = {
  base: "relative overflow-hidden flex items-start gap-3 rounded-lg border px-4 py-3",
  variants: {
    info: {
      bg:            "bg-blue-500/8",
      border:        "border-blue-500/20",
      titleColor:    "text-blue-700 dark:text-blue-300",
      descColor:     "text-blue-600 dark:text-blue-300/70",
      iconColor:     "text-blue-600 dark:text-blue-400",
      progressColor: "bg-blue-400",
    },
    success: {
      bg:            "bg-emerald-500/8",
      border:        "border-emerald-500/20",
      titleColor:    "text-emerald-700 dark:text-emerald-300",
      descColor:     "text-emerald-600 dark:text-emerald-300/70",
      iconColor:     "text-emerald-600 dark:text-emerald-400",
      progressColor: "bg-emerald-400",
    },
    warning: {
      bg:            "bg-amber-500/8",
      border:        "border-amber-500/20",
      titleColor:    "text-amber-700 dark:text-amber-300",
      descColor:     "text-amber-600 dark:text-amber-300/70",
      iconColor:     "text-amber-600 dark:text-amber-400",
      progressColor: "bg-amber-400",
    },
    error: {
      bg:            "bg-red-500/8",
      border:        "border-red-500/20",
      titleColor:    "text-red-700 dark:text-red-300",
      descColor:     "text-red-600 dark:text-red-300/70",
      iconColor:     "text-red-600 dark:text-red-400",
      progressColor: "bg-red-400",
    },
  },
  closeBtn: "shrink-0 flex items-center justify-center size-5 rounded opacity-60 hover:opacity-100 transition-opacity duration-100 focus:outline-none",
};
