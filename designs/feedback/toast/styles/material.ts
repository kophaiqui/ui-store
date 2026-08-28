export type { ToastStyleConfig, ToastVariant } from "./default";
import type { ToastStyleConfig } from "./default";

export const materialStyle: ToastStyleConfig = {
  root: "relative overflow-hidden flex items-start gap-3 rounded-2xl border px-4 py-3 bg-white dark:bg-[#1d1b20] shadow-[0_8px_24px_rgba(103,80,164,0.18)] dark:shadow-[0_8px_24px_rgba(0,0,0,0.5)] data-[ending-style]:translate-x-[110%] data-[ending-style]:opacity-0 data-[starting-style]:translate-x-[110%] data-[starting-style]:opacity-0 transition-all duration-250 ease-out",
  viewport: "fixed bottom-4 right-4 z-[9999] flex flex-col gap-2 w-[340px] max-w-[calc(100vw-2rem)] focus:outline-none",
  closeBtn: "shrink-0 flex size-5 items-center justify-center rounded-full text-foreground/40 hover:text-foreground/80 transition-colors duration-100 focus:outline-none",
  variants: {
    default: { border: "border-violet-200/50 dark:border-violet-800/30", progressColor: "bg-violet-400",  titleColor: "text-foreground",       descColor: "text-foreground/60"   },
    success: { border: "border-teal-300/50 dark:border-teal-700/30",     progressColor: "bg-teal-500",    titleColor: "text-foreground",       descColor: "text-foreground/60"   },
    error:   { border: "border-rose-300/50 dark:border-rose-700/30",     progressColor: "bg-rose-500",    titleColor: "text-foreground",       descColor: "text-foreground/60"   },
    warning: { border: "border-amber-300/50 dark:border-amber-700/30",   progressColor: "bg-amber-500",   titleColor: "text-foreground",       descColor: "text-foreground/60"   },
    info:    { border: "border-sky-300/50 dark:border-sky-700/30",       progressColor: "bg-sky-500",     titleColor: "text-foreground",       descColor: "text-foreground/60"   },
  },
};
