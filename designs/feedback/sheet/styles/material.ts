export type { SheetStyleConfig } from "./default";
import type { SheetStyleConfig } from "./default";

export const materialStyle: SheetStyleConfig = {
  backdrop:
    "fixed inset-0 z-[60] bg-black/40 backdrop-blur-[2px] data-[starting-style]:opacity-0 data-[ending-style]:opacity-0 transition-opacity duration-300",
  popup:
    "fixed z-[60] bg-white border-violet-200/40 dark:bg-[#1d1b20] dark:border-violet-800/30 focus:outline-none overflow-y-auto flex flex-col shadow-[0_8px_24px_rgba(103,80,164,0.18)] dark:shadow-[0_8px_24px_rgba(0,0,0,0.5)]",
  sides: {
    right: "inset-y-0 right-0 border-l data-[starting-style]:translate-x-full data-[ending-style]:translate-x-full transition-transform duration-300",
    left: "inset-y-0 left-0 border-r data-[starting-style]:-translate-x-full data-[ending-style]:-translate-x-full transition-transform duration-300",
    top: "inset-x-0 top-0 border-b data-[starting-style]:-translate-y-full data-[ending-style]:-translate-y-full transition-transform duration-300",
    bottom: "inset-x-0 bottom-0 border-t data-[starting-style]:translate-y-full data-[ending-style]:translate-y-full transition-transform duration-300",
  },
  sizes: {
    sm: "w-72",
    md: "w-96",
    lg: "w-[32rem]",
    full: "w-screen",
  },
  header: "flex items-start justify-between gap-4 border-b border-violet-200/40 dark:border-violet-800/30 p-5",
  title: "text-base font-semibold text-foreground",
  description: "mt-0.5 text-sm text-foreground/60",
  close:
    "flex size-7 shrink-0 items-center justify-center rounded-full text-foreground/50 transition-colors hover:text-foreground hover:bg-violet-100 dark:hover:bg-violet-500/10 focus-visible:outline-none",
  loadingWrapper: "flex flex-1 items-center justify-center p-12",
};
