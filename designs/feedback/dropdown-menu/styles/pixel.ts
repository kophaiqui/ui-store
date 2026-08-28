import type { DropdownMenuStyleConfig } from "./default";
export type { DropdownMenuStyleConfig } from "./default";

export const pixelStyle: DropdownMenuStyleConfig = {
  trigger: "inline-flex h-9 items-center justify-center gap-2 rounded-none border-2 border-[#06d6a0] bg-[#0d0d12] px-4 font-mono text-sm font-bold text-[#06d6a0] uppercase tracking-wide transition-all hover:bg-[#06d6a0]/10 focus-visible:outline-none data-[popup-open]:bg-[#06d6a0]/10",
  popup: "z-50 min-w-[180px] overflow-hidden rounded-none border-2 border-[#06d6a0] bg-[#0d0d12] py-1 shadow-[4px_4px_0_0_#000] data-[starting-style]:opacity-0 data-[ending-style]:opacity-0 transition-opacity duration-100 origin-[var(--transform-origin)]",
  item: "flex h-8 cursor-default select-none items-center gap-2 px-3 font-mono text-sm font-bold text-[#06d6a0]/80 uppercase tracking-wide transition-colors duration-100 focus-visible:outline-none data-[highlighted]:bg-[#06d6a0] data-[highlighted]:text-black",
  itemDanger: "flex h-8 cursor-default select-none items-center gap-2 px-3 font-mono text-sm font-bold text-[#ef476f] uppercase tracking-wide transition-colors duration-100 focus-visible:outline-none data-[highlighted]:bg-[#ef476f] data-[highlighted]:text-black",
  separator: "my-1 h-0.5 bg-[#06d6a0]/20 mx-2",
  shortcut: "ml-auto font-mono text-[10px] font-bold text-[#06d6a0]/50 uppercase",
};
