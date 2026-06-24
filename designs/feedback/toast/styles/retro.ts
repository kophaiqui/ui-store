import type { ToastStyleConfig } from "./default";
export type { ToastStyleConfig, ToastVariant } from "./default";

export const retroStyle: ToastStyleConfig = {
  root: "relative overflow-hidden flex items-start gap-3 rounded-sm border-2 border-[#3d2410] px-4 py-3 bg-[#fdf6e3] shadow-[4px_4px_0px_0px_#3d2410] data-[ending-style]:translate-x-[110%] data-[ending-style]:opacity-0 data-[starting-style]:translate-x-[110%] data-[starting-style]:opacity-0 transition-all duration-250 ease-out dark:border-[#A78BFA] dark:bg-[#161324] dark:shadow-[4px_4px_0px_0px_#A78BFA]",
  viewport: "fixed bottom-4 right-4 z-[9999] flex flex-col gap-2 w-[340px] max-w-[calc(100vw-2rem)] focus:outline-none",
  closeBtn: "shrink-0 flex size-5 items-center justify-center rounded-none border border-[#3d2410] text-[#7a5230] hover:text-[#2c1a0e] hover:bg-amber-100 transition-colors duration-100 focus:outline-none dark:border-[#A78BFA] dark:text-[#A1A1AA] dark:hover:text-[#F5F3FF] dark:hover:bg-[#A78BFA]/20",
  variants: {
    default: { border: "border-[#3d2410] dark:border-[#A78BFA]",   progressColor: "bg-[#7a5230] dark:bg-[#A78BFA]",  titleColor: "text-[#2c1a0e] dark:text-[#F5F3FF]",  descColor: "text-[#7a5230] dark:text-[#A1A1AA]"  },
    success: { border: "border-[#3d2410] dark:border-[#A78BFA]",   progressColor: "bg-[#e8743b] dark:bg-[#A78BFA]",  titleColor: "text-[#2c1a0e] dark:text-[#F5F3FF]",  descColor: "text-[#7a5230] dark:text-[#A1A1AA]"  },
    error:   { border: "border-red-800 dark:border-red-500",        progressColor: "bg-red-700 dark:bg-red-500",       titleColor: "text-red-900 dark:text-red-300",        descColor: "text-red-800 dark:text-red-400"        },
    warning: { border: "border-amber-800 dark:border-amber-500",    progressColor: "bg-amber-600 dark:bg-amber-400",   titleColor: "text-amber-900 dark:text-amber-300",    descColor: "text-amber-800 dark:text-amber-400"    },
  },
};
