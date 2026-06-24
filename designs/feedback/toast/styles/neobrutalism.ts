import type { ToastStyleConfig } from "./default";
export type { ToastStyleConfig };

export const neobrutalismStyle: ToastStyleConfig = {
  root: "relative overflow-hidden flex items-start gap-3 rounded-none border-2 border-zinc-950 dark:border-white px-4 py-3 bg-white dark:bg-[#111111] shadow-[4px_4px_0px_0px_#09090b] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.7)] data-[ending-style]:translate-x-[110%] data-[ending-style]:opacity-0 data-[starting-style]:translate-x-[110%] data-[starting-style]:opacity-0 transition-all duration-250 ease-out",
  viewport: "fixed bottom-4 right-4 z-[9999] flex flex-col gap-2 w-[340px] max-w-[calc(100vw-2rem)] focus:outline-none",
  closeBtn: "shrink-0 flex size-5 items-center justify-center rounded-none border border-zinc-950 dark:border-white text-zinc-700 dark:text-[#D1D5DB] hover:bg-yellow-300 hover:border-zinc-950 hover:text-zinc-950 transition-colors duration-100 focus:outline-none",
  variants: {
    default: { border: "border-zinc-950 dark:border-white",  progressColor: "bg-zinc-950 dark:bg-white",    titleColor: "text-zinc-900 dark:text-white",   descColor: "text-zinc-600 dark:text-[#D1D5DB]"  },
    success: { border: "border-zinc-950 dark:border-white",  progressColor: "bg-yellow-400",                titleColor: "text-zinc-900 dark:text-white",   descColor: "text-zinc-600 dark:text-[#D1D5DB]"  },
    error:   { border: "border-zinc-950 dark:border-white",  progressColor: "bg-red-500",                   titleColor: "text-zinc-900 dark:text-white",   descColor: "text-zinc-600 dark:text-[#D1D5DB]"  },
    warning: { border: "border-zinc-950 dark:border-white",  progressColor: "bg-orange-500",                titleColor: "text-zinc-900 dark:text-white",   descColor: "text-zinc-600 dark:text-[#D1D5DB]"  },
  },
};
