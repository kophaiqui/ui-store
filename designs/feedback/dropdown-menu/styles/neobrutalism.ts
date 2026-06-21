import type { DropdownMenuStyleConfig } from "./default";
export type { DropdownMenuStyleConfig };

export const neobrutalismStyle: DropdownMenuStyleConfig = {
  trigger: "inline-flex h-9 items-center justify-center gap-2 rounded-none border-2 border-zinc-950 bg-white px-4 text-sm font-bold text-zinc-950 shadow-[3px_3px_0px_0px_#09090b] transition-all duration-100 hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_#09090b] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none focus-visible:outline-none data-[popup-open]:translate-x-[3px] data-[popup-open]:translate-y-[3px] data-[popup-open]:shadow-none",
  popup: "z-50 min-w-[180px] overflow-hidden rounded-none border-2 border-zinc-950 bg-white py-1 shadow-[5px_5px_0px_0px_#09090b] data-[starting-style]:opacity-0 data-[ending-style]:opacity-0 transition-opacity duration-150 origin-[var(--transform-origin)]",
  item: "flex h-8 cursor-default select-none items-center gap-2 px-3 text-sm font-medium text-zinc-800 transition-colors duration-100 focus-visible:outline-none data-[highlighted]:bg-yellow-300 data-[highlighted]:text-zinc-950",
  itemDanger: "flex h-8 cursor-default select-none items-center gap-2 px-3 text-sm font-medium text-red-600 transition-colors duration-100 focus-visible:outline-none data-[highlighted]:bg-red-100 data-[highlighted]:text-red-700",
  separator: "my-1 h-[2px] bg-zinc-950/20 mx-2",
  shortcut: "ml-auto text-[10px] font-mono font-bold text-zinc-500",
};
