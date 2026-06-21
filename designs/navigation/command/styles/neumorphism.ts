import type { CommandStyleConfig } from "./default";
export type { CommandStyleConfig };

export const neumorphismStyle: CommandStyleConfig = {
  backdrop: "fixed inset-0 bg-[#e8ecf1]/70 backdrop-blur-sm data-[starting-style]:opacity-0 data-[ending-style]:opacity-0 transition-opacity duration-150",
  popup: "fixed left-1/2 top-[20%] -translate-x-1/2 w-full overflow-hidden rounded-3xl bg-[#e8ecf1] shadow-[12px_12px_24px_rgba(163,177,198,0.6),-12px_-12px_24px_rgba(255,255,255,0.8)] focus:outline-none data-[starting-style]:opacity-0 data-[starting-style]:-translate-x-1/2 data-[starting-style]:scale-95 data-[ending-style]:opacity-0 data-[ending-style]:scale-95 transition-[opacity,transform] duration-150",
  sizes: {
    sm: "max-w-sm",
    md: "max-w-lg",
    lg: "max-w-2xl",
  },
  search: "flex items-center gap-3 border-b border-slate-200 px-4 py-3",
  searchInput: "flex-1 bg-transparent text-sm text-slate-700 placeholder:text-slate-400 outline-none",
  list: "max-h-[320px] overflow-y-auto p-2",
  groupHeading: "px-3 py-1.5 text-[0.6875rem] font-semibold uppercase tracking-wider text-slate-400",
  item: "flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-all duration-100 select-none",
  itemSelected: "shadow-[inset_3px_3px_6px_rgba(163,177,198,0.4),inset_-3px_-3px_6px_rgba(255,255,255,0.6)] text-slate-800",
  itemDisabled: "opacity-40 cursor-not-allowed",
  itemIcon: "shrink-0 text-slate-400",
  itemLabel: "flex-1 font-semibold text-slate-700",
  itemDescription: "text-xs text-slate-500",
  itemShortcut: "ml-auto shrink-0 font-mono text-[0.6875rem] text-slate-500 bg-[#e8ecf1] rounded-lg px-1.5 py-0.5 shadow-[2px_2px_4px_rgba(163,177,198,0.4),-2px_-2px_4px_rgba(255,255,255,0.6)]",
  empty: "py-10 text-center text-sm text-slate-400",
  trigger: "inline-flex items-center gap-2 rounded-2xl bg-[#e8ecf1] px-4 py-1.5 text-sm font-semibold text-slate-600 shadow-[4px_4px_8px_rgba(163,177,198,0.5),-4px_-4px_8px_rgba(255,255,255,0.7)] transition-all duration-200 hover:shadow-[2px_2px_5px_rgba(163,177,198,0.4),-2px_-2px_5px_rgba(255,255,255,0.6)] active:shadow-[inset_2px_2px_5px_rgba(163,177,198,0.5),inset_-2px_-2px_5px_rgba(255,255,255,0.7)] focus-visible:outline-none",
};
