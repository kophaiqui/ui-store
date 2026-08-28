export type { AlertDialogStyleConfig } from "./default";
import type { AlertDialogStyleConfig } from "./default";

export const materialStyle: AlertDialogStyleConfig = {
  backdrop:
    "fixed inset-0 bg-black/40 backdrop-blur-[2px] data-[starting-style]:opacity-0 data-[ending-style]:opacity-0 transition-opacity duration-200",
  popup:
    "fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full rounded-3xl border border-violet-200/40 bg-white shadow-[0_8px_24px_rgba(103,80,164,0.20),0_2px_8px_rgba(103,80,164,0.12)] dark:border-violet-800/30 dark:bg-[#1d1b20] dark:shadow-[0_8px_24px_rgba(0,0,0,0.5),0_2px_8px_rgba(0,0,0,0.3)] p-6 focus:outline-none data-[starting-style]:opacity-0 data-[starting-style]:scale-95 data-[ending-style]:opacity-0 data-[ending-style]:scale-95 transition-[opacity,transform] duration-200",
  sizes: {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
  },
  title: "text-base font-semibold text-foreground",
  description: "mt-2 mb-5 text-sm text-foreground/60 leading-relaxed",
  footer: "flex items-center justify-end gap-2",
  cancelBtn:
    "rounded-full border border-transparent bg-transparent px-4 py-2 text-sm font-medium text-violet-700 dark:text-violet-300 transition-colors duration-150 hover:bg-violet-100 dark:hover:bg-violet-500/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/40",
  confirmBtn:
    "rounded-full bg-violet-600 px-4 py-2 text-sm font-medium text-white transition-colors duration-150 hover:bg-violet-700 dark:bg-violet-500 dark:hover:bg-violet-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/60 disabled:opacity-60 disabled:cursor-not-allowed",
  confirmBtnDestructive:
    "rounded-full bg-rose-600 px-4 py-2 text-sm font-medium text-white transition-colors duration-150 hover:bg-rose-700 dark:bg-rose-500 dark:hover:bg-rose-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500/60 disabled:opacity-60 disabled:cursor-not-allowed",
  trigger:
    "rounded-full border border-violet-300/60 bg-transparent px-4 py-2 text-sm font-medium text-violet-700 dark:border-violet-700/40 dark:text-violet-300 transition-colors duration-150 hover:bg-violet-50 dark:hover:bg-violet-500/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/40",
};
