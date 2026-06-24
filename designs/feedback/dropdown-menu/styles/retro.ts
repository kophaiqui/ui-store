import type { DropdownMenuStyleConfig } from "./default";
export type { DropdownMenuStyleConfig } from "./default";

export const retroStyle: DropdownMenuStyleConfig = {
  trigger: "inline-flex h-9 items-center justify-center gap-2 rounded-sm border-2 border-[#3d2410] bg-[#fdf6e3] px-4 text-sm font-bold text-[#2c1a0e] shadow-[3px_3px_0px_0px_#3d2410] transition-all duration-100 hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_#3d2410] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e8743b]/40 data-[popup-open]:bg-amber-100",
  popup: "z-50 min-w-[180px] overflow-hidden rounded-sm border-2 border-[#3d2410] bg-[#fdf6e3] py-1 shadow-[5px_5px_0px_0px_#3d2410] data-[starting-style]:opacity-0 data-[starting-style]:scale-95 data-[ending-style]:opacity-0 data-[ending-style]:scale-95 transition-all duration-150 ease-out origin-[var(--transform-origin)]",
  item: "flex h-8 cursor-default select-none items-center gap-2 px-3 text-sm font-bold text-[#2c1a0e] transition-colors duration-100 focus-visible:outline-none data-[highlighted]:bg-[#e8743b] data-[highlighted]:text-[#2c1a0e]",
  itemDanger: "flex h-8 cursor-default select-none items-center gap-2 px-3 text-sm font-bold text-red-800 transition-colors duration-100 focus-visible:outline-none data-[highlighted]:bg-red-100 data-[highlighted]:text-red-900",
  separator: "my-1 h-[2px] bg-[#3d2410]/20 mx-2",
  shortcut: "ml-auto text-[10px] font-mono font-black text-[#7a5230] uppercase",
};
