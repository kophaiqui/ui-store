export type { SheetStyleConfig } from "./default";
import type { SheetStyleConfig } from "./default";

export const auroraStyle: SheetStyleConfig = {
  backdrop:
    "fixed inset-0 z-[60] bg-[#05060f]/70 backdrop-blur-[3px] data-[starting-style]:opacity-0 data-[ending-style]:opacity-0 transition-opacity duration-300",
  popup:
    "fixed z-[60] bg-[#0b1022]/95 backdrop-blur-xl border-indigo-400/20 focus:outline-none overflow-y-auto flex flex-col shadow-[0_0_64px_rgba(99,102,241,0.15)]",
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
  header: "flex items-start justify-between gap-4 border-b border-indigo-400/15 p-5",
  title: "text-base font-semibold text-teal-50",
  description: "mt-0.5 text-sm text-indigo-300/60",
  close:
    "flex size-7 shrink-0 items-center justify-center rounded-md text-indigo-300/60 transition-colors hover:text-teal-200 hover:bg-indigo-900/50 focus-visible:outline-none",
  loadingWrapper: "flex flex-1 items-center justify-center p-12",
};
