export type { DialogStyleConfig } from "./default";
import type { DialogStyleConfig } from "./default";

export const materialStyle: DialogStyleConfig = {
  trigger: "inline-flex h-9 items-center justify-center gap-2 rounded-full border border-violet-300/60 bg-transparent px-4 text-sm font-medium text-violet-700 dark:border-violet-700/40 dark:text-violet-300 transition-all duration-150 hover:bg-violet-50 dark:hover:bg-violet-500/10 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
  backdrop: "fixed inset-0 z-40 bg-black/40 backdrop-blur-sm",
  popup: "fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-violet-200/40 bg-white p-6 shadow-[0_8px_24px_rgba(103,80,164,0.20),0_2px_8px_rgba(103,80,164,0.12)] dark:border-violet-800/30 dark:bg-[#1d1b20] dark:shadow-[0_8px_24px_rgba(0,0,0,0.5),0_2px_8px_rgba(0,0,0,0.3)]",
  title: "mb-2 text-base font-semibold tracking-tight text-foreground",
  description: "mb-6 text-sm leading-relaxed text-foreground/60",
  cancelBtn: "inline-flex h-8 items-center rounded-full px-3 text-sm text-violet-700 dark:text-violet-300 hover:bg-violet-100 dark:hover:bg-violet-500/10 transition-all duration-150 focus-visible:outline-none",
  confirmBtn: "inline-flex h-8 items-center rounded-full bg-violet-600 px-3 text-sm font-medium text-white hover:bg-violet-700 dark:bg-violet-500 dark:hover:bg-violet-400 transition-all duration-150 focus-visible:outline-none",
};
