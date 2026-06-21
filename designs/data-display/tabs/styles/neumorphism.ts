import type { TabsStyleConfig } from "./default";
export type { TabsStyleConfig };

export const neumorphismStyle: TabsStyleConfig = {
  list: "relative flex gap-1 p-1.5 rounded-2xl bg-[#e8ecf1] shadow-[inset_3px_3px_7px_rgba(163,177,198,0.5),inset_-3px_-3px_7px_rgba(255,255,255,0.7)]",
  indicator: "absolute inset-y-1.5 rounded-xl bg-[#e8ecf1] shadow-[4px_4px_8px_rgba(163,177,198,0.5),-4px_-4px_8px_rgba(255,255,255,0.7)] transition-all duration-200 ease-out",
  tab: "relative px-4 py-2 text-sm font-semibold text-slate-500 transition-colors duration-150 hover:text-slate-700 data-[selected]:text-slate-800 focus-visible:outline-none cursor-default select-none z-10",
  panel: "pt-4 text-sm text-slate-600 leading-relaxed focus-visible:outline-none",
};
