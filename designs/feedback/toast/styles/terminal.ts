import type { ToastStyleConfig } from "./default";
export type { ToastStyleConfig, ToastVariant } from "./default";

export const terminalStyle: ToastStyleConfig = {
  root: "relative overflow-hidden flex items-start gap-3 rounded-sm border border-[#16A34A] px-4 py-3 bg-white dark:border-[#22C55E] dark:bg-[#0F0F0F] dark:shadow-[0_0_12px_rgba(34,197,94,0.15)] data-[ending-style]:translate-x-[110%] data-[ending-style]:opacity-0 data-[starting-style]:translate-x-[110%] data-[starting-style]:opacity-0 transition-all duration-250 ease-out",
  viewport: "fixed bottom-4 right-4 z-[9999] flex flex-col gap-2 w-[340px] max-w-[calc(100vw-2rem)] focus:outline-none",
  closeBtn: "shrink-0 flex size-5 items-center justify-center rounded-sm border border-[#16A34A]/30 dark:border-[#22C55E]/30 text-[#047857] dark:text-[#86EFAC] hover:text-[#065F46] dark:hover:text-[#22C55E] hover:bg-[#16A34A]/10 dark:hover:bg-[#22C55E]/10 transition-colors duration-100 focus:outline-none",
  variants: {
    default: { border: "border-[#16A34A] dark:border-[#22C55E]",   progressColor: "bg-[#16A34A] dark:bg-[#22C55E]",    titleColor: "font-mono text-[#065F46] dark:text-[#22C55E]",  descColor: "font-mono text-[#047857] dark:text-[#86EFAC]"  },
    success: { border: "border-[#16A34A] dark:border-[#22C55E]",   progressColor: "bg-[#16A34A] dark:bg-[#22C55E]",    titleColor: "font-mono text-[#065F46] dark:text-[#22C55E]",  descColor: "font-mono text-[#047857] dark:text-[#86EFAC]"  },
    error:   { border: "border-red-600 dark:border-red-500",        progressColor: "bg-red-600 dark:bg-red-500",         titleColor: "font-mono text-red-700 dark:text-red-400",       descColor: "font-mono text-red-600 dark:text-red-300"       },
    warning: { border: "border-amber-500 dark:border-amber-400",    progressColor: "bg-amber-500 dark:bg-amber-400",     titleColor: "font-mono text-amber-700 dark:text-amber-400",   descColor: "font-mono text-amber-600 dark:text-amber-300"   },
    info:    { border: "border-blue-600 dark:border-blue-400",      progressColor: "bg-blue-600 dark:bg-blue-400",       titleColor: "font-mono text-blue-700 dark:text-blue-400",     descColor: "font-mono text-blue-600 dark:text-blue-300"     },
  },
};
