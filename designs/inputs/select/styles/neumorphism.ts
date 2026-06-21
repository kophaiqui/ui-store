import type { SelectStyleConfig } from "./default";
export type { SelectStyleConfig };

export const neumorphismStyle: SelectStyleConfig = {
  trigger: "flex h-9 w-full items-center justify-between gap-2 rounded-2xl bg-[#e8ecf1] px-4 text-sm text-slate-700 shadow-[inset_3px_3px_7px_rgba(163,177,198,0.5),inset_-3px_-3px_7px_rgba(255,255,255,0.7)] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400/30 disabled:pointer-events-none disabled:opacity-40",
  icon: "shrink-0 text-slate-400",
  placeholder: "text-slate-400",
  popup: "z-50 min-w-[var(--anchor-width)] overflow-hidden rounded-2xl bg-[#e8ecf1] py-1.5 shadow-[8px_8px_16px_rgba(163,177,198,0.5),-8px_-8px_16px_rgba(255,255,255,0.7)]",
  item: "flex h-8 cursor-default select-none items-center px-4 mx-1 text-sm text-slate-600 rounded-xl transition-all duration-100 data-[highlighted]:shadow-[inset_2px_2px_5px_rgba(163,177,198,0.4),inset_-2px_-2px_5px_rgba(255,255,255,0.6)] data-[highlighted]:text-slate-800 data-[selected]:text-blue-600 data-[selected]:font-semibold",
};
