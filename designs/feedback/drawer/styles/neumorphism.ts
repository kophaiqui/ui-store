import type { DrawerStyleConfig } from "./default";
export type { DrawerStyleConfig };

export const neumorphismStyle: DrawerStyleConfig = {
  backdrop: "fixed inset-0 z-[60] bg-[#e8ecf1]/70 backdrop-blur-sm data-[starting-style]:opacity-0 data-[ending-style]:opacity-0 transition-opacity duration-300",
  popup: "fixed bg-[#e8ecf1] focus:outline-none overflow-y-auto flex flex-col",
  positions: {
    right:  "inset-y-0 right-0 shadow-[-8px_0_24px_rgba(163,177,198,0.4)] data-[starting-style]:translate-x-full data-[ending-style]:translate-x-full transition-transform duration-300",
    left:   "inset-y-0 left-0 shadow-[8px_0_24px_rgba(163,177,198,0.4)] data-[starting-style]:-translate-x-full data-[ending-style]:-translate-x-full transition-transform duration-300",
    top:    "inset-x-0 top-0 shadow-[0_8px_24px_rgba(163,177,198,0.4)] data-[starting-style]:-translate-y-full data-[ending-style]:-translate-y-full transition-transform duration-300",
    bottom: "inset-x-0 bottom-0 shadow-[0_-8px_24px_rgba(163,177,198,0.4)] data-[starting-style]:translate-y-full data-[ending-style]:translate-y-full transition-transform duration-300",
  },
  sizes: { sm: "w-72", md: "w-96", lg: "w-[32rem]", full: "w-screen" },
  header: "flex items-start justify-between gap-4 border-b border-slate-200 p-5",
  title: "text-base font-semibold text-slate-800",
  description: "mt-0.5 text-sm text-slate-500",
  close: "flex size-7 shrink-0 items-center justify-center rounded-xl bg-[#e8ecf1] text-slate-500 shadow-[3px_3px_6px_rgba(163,177,198,0.5),-3px_-3px_6px_rgba(255,255,255,0.7)] transition-all hover:text-slate-700 hover:shadow-[1px_1px_3px_rgba(163,177,198,0.4),-1px_-1px_3px_rgba(255,255,255,0.6)] focus-visible:outline-none",
  loadingWrapper: "flex flex-1 items-center justify-center p-12",
};
