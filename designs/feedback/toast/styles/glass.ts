export type { ToastStyleConfig, ToastVariant } from "./default";
import type { ToastStyleConfig } from "./default";

export const glassStyle: ToastStyleConfig = {
  root: "relative overflow-hidden flex items-start gap-3 rounded-2xl border px-4 py-3 bg-white/[0.06] backdrop-blur-3xl backdrop-saturate-200 shadow-[0_8px_32px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.25),inset_1px_0_0_rgba(255,255,255,0.08)] data-[ending-style]:translate-x-[110%] data-[ending-style]:opacity-0 data-[starting-style]:translate-x-[110%] data-[starting-style]:opacity-0 transition-all duration-250 ease-out",
  viewport: "fixed bottom-4 right-4 z-[9999] flex flex-col gap-2 w-[340px] max-w-[calc(100vw-2rem)] focus:outline-none",
  closeBtn: "shrink-0 flex size-5 items-center justify-center rounded-lg text-gray-500 hover:text-gray-800 hover:bg-black/[0.06] dark:text-white/40 dark:hover:text-white dark:hover:bg-white/15 transition-colors duration-100 focus:outline-none",
  variants: {
    default: { border: "border-gray-200 dark:border-white/20",       progressColor: "bg-gray-300 dark:bg-white/40",    titleColor: "text-gray-900 dark:text-white",      descColor: "text-gray-600 dark:text-white/60"  },
    success: { border: "border-emerald-300/50 dark:border-emerald-300/30", progressColor: "bg-emerald-400",           titleColor: "text-gray-900 dark:text-white",      descColor: "text-gray-600 dark:text-white/60"  },
    error:   { border: "border-red-300/50 dark:border-red-300/30",   progressColor: "bg-red-400",                      titleColor: "text-gray-900 dark:text-white",      descColor: "text-gray-600 dark:text-white/60"  },
    warning: { border: "border-amber-300/50 dark:border-amber-300/30",progressColor: "bg-amber-400",                   titleColor: "text-gray-900 dark:text-white",      descColor: "text-gray-600 dark:text-white/60"  },
  },
};
