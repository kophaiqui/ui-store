export type { DropdownMenuStyleConfig } from "./default";
import type { DropdownMenuStyleConfig } from "./default";

export const auroraStyle: DropdownMenuStyleConfig = {
  trigger: "inline-flex h-9 items-center justify-center gap-2 rounded-md border border-indigo-400/20 bg-indigo-950/50 px-4 text-sm font-medium text-indigo-200 transition-all duration-150 hover:bg-indigo-900/50 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400/40 data-[popup-open]:bg-indigo-900/50",
  popup: "z-50 min-w-[180px] overflow-hidden rounded-lg border border-indigo-400/20 bg-[#0b1022]/95 backdrop-blur-xl py-1 shadow-[0_0_32px_rgba(99,102,241,0.15),0_8px_32px_rgba(0,0,0,0.5)] data-[starting-style]:opacity-0 data-[starting-style]:scale-95 data-[ending-style]:opacity-0 data-[ending-style]:scale-95 transition-all duration-150 ease-out origin-[var(--transform-origin)]",
  item: "flex h-8 cursor-default select-none items-center gap-2 px-3 text-sm text-indigo-200/80 transition-colors duration-100 focus-visible:outline-none data-[highlighted]:bg-teal-400/10 data-[highlighted]:text-teal-100",
  itemDanger: "flex h-8 cursor-default select-none items-center gap-2 px-3 text-sm text-rose-300 transition-colors duration-100 focus-visible:outline-none data-[highlighted]:bg-rose-500/10 data-[highlighted]:text-rose-200",
  separator: "my-1 h-px bg-indigo-400/15 mx-2",
  shortcut: "ml-auto text-[10px] font-mono text-indigo-300/40",
};
