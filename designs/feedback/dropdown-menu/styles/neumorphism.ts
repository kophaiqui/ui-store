import type { DropdownMenuStyleConfig } from "./default";
export type { DropdownMenuStyleConfig };

export const neumorphismStyle: DropdownMenuStyleConfig = {
  trigger: "inline-flex h-9 items-center justify-center gap-2 rounded-2xl bg-[#e8ecf1] px-4 text-sm font-semibold text-slate-700 shadow-[4px_4px_8px_rgba(163,177,198,0.5),-4px_-4px_8px_rgba(255,255,255,0.7)] transition-all duration-200 hover:shadow-[2px_2px_5px_rgba(163,177,198,0.4),-2px_-2px_5px_rgba(255,255,255,0.6)] active:shadow-[inset_2px_2px_5px_rgba(163,177,198,0.5),inset_-2px_-2px_5px_rgba(255,255,255,0.7)] focus-visible:outline-none data-[popup-open]:shadow-[inset_2px_2px_5px_rgba(163,177,198,0.5),inset_-2px_-2px_5px_rgba(255,255,255,0.7)]",
  popup: "z-50 min-w-[180px] overflow-hidden rounded-2xl bg-[#e8ecf1] py-1.5 shadow-[8px_8px_16px_rgba(163,177,198,0.5),-8px_-8px_16px_rgba(255,255,255,0.7)] data-[starting-style]:opacity-0 data-[ending-style]:opacity-0 transition-opacity duration-150 origin-[var(--transform-origin)]",
  item: "flex h-8 cursor-default select-none items-center gap-2 px-3 mx-1 text-sm font-medium text-slate-600 rounded-xl transition-colors duration-100 focus-visible:outline-none data-[highlighted]:shadow-[inset_2px_2px_5px_rgba(163,177,198,0.4),inset_-2px_-2px_5px_rgba(255,255,255,0.6)] data-[highlighted]:text-slate-800",
  itemDanger: "flex h-8 cursor-default select-none items-center gap-2 px-3 mx-1 text-sm font-medium text-red-500 rounded-xl transition-colors duration-100 focus-visible:outline-none data-[highlighted]:shadow-[inset_2px_2px_5px_rgba(163,177,198,0.4),inset_-2px_-2px_5px_rgba(255,255,255,0.6)] data-[highlighted]:text-red-600",
  separator: "my-1.5 h-px bg-slate-300/50 mx-3",
  shortcut: "ml-auto text-[10px] font-mono text-slate-400",
};
