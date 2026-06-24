import type { SheetStyleConfig } from "./default";
export type { SheetStyleConfig };

export const neumorphismStyle: SheetStyleConfig = {
  backdrop: "fixed inset-0 z-[60] bg-[#e8ecf1]/70 dark:bg-[#0F172A]/70 backdrop-blur-sm data-[starting-style]:opacity-0 data-[ending-style]:opacity-0 transition-opacity duration-300",
  popup: "fixed z-[60] bg-[#e8ecf1] dark:bg-[#1E293B] focus:outline-none overflow-y-auto flex flex-col",
  sides: {
    right:  "inset-y-0 right-0 shadow-[-12px_0_24px_rgba(163,177,198,0.4)] dark:shadow-[-12px_0_24px_rgba(0,0,0,0.5)] data-[starting-style]:translate-x-full data-[ending-style]:translate-x-full transition-transform duration-300",
    left:   "inset-y-0 left-0 shadow-[12px_0_24px_rgba(163,177,198,0.4)] dark:shadow-[12px_0_24px_rgba(0,0,0,0.5)] data-[starting-style]:-translate-x-full data-[ending-style]:-translate-x-full transition-transform duration-300",
    top:    "inset-x-0 top-0 shadow-[0_12px_24px_rgba(163,177,198,0.4)] dark:shadow-[0_12px_24px_rgba(0,0,0,0.5)] data-[starting-style]:-translate-y-full data-[ending-style]:-translate-y-full transition-transform duration-300",
    bottom: "inset-x-0 bottom-0 shadow-[0_-12px_24px_rgba(163,177,198,0.4)] dark:shadow-[0_-12px_24px_rgba(0,0,0,0.5)] data-[starting-style]:translate-y-full data-[ending-style]:translate-y-full transition-transform duration-300",
  },
  sizes: { sm: "w-72", md: "w-96", lg: "w-[32rem]", full: "w-screen" },
  header: "flex items-start justify-between gap-4 border-b border-slate-200 dark:border-[#334155] p-5",
  title: "text-base font-semibold text-slate-800 dark:text-[#E2E8F0]",
  description: "mt-0.5 text-sm text-slate-500 dark:text-[#94A3B8]",
  close: "flex size-7 shrink-0 items-center justify-center rounded-xl bg-[#e8ecf1] dark:bg-[#1E293B] text-slate-400 dark:text-slate-500 shadow-[3px_3px_6px_rgba(163,177,198,0.5),-3px_-3px_6px_rgba(255,255,255,0.7)] dark:shadow-[3px_3px_6px_rgba(0,0,0,0.5),-3px_-3px_6px_rgba(255,255,255,0.03)] transition-all hover:text-slate-700 dark:hover:text-[#E2E8F0] hover:shadow-[1px_1px_3px_rgba(163,177,198,0.4),-1px_-1px_3px_rgba(255,255,255,0.6)] dark:hover:shadow-[1px_1px_3px_rgba(0,0,0,0.4),-1px_-1px_3px_rgba(255,255,255,0.02)] focus-visible:outline-none",
  loadingWrapper: "flex flex-1 items-center justify-center p-12",
};
