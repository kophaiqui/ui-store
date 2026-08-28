import type { SelectStyleConfig } from "./default";
export type { SelectStyleConfig } from "./default";

export const pixelStyle: SelectStyleConfig = {
  trigger: "flex h-9 w-full items-center justify-between gap-2 rounded-none border-2 border-[#06d6a0] bg-[#0d0d12] px-3 font-mono text-sm text-[#06d6a0] shadow-[3px_3px_0_0_#000] transition-all duration-100 hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0_0_#000] focus:outline-none disabled:pointer-events-none disabled:opacity-40",
  icon: "shrink-0 text-[#06d6a0]",
  placeholder: "text-[#06d6a0]/40 font-mono",
  popup: "z-50 min-w-[var(--anchor-width)] overflow-hidden rounded-none border-2 border-[#06d6a0] bg-[#0d0d12] py-1 shadow-[4px_4px_0_0_#000]",
  item: "flex h-8 cursor-default select-none items-center px-3 font-mono text-sm font-bold text-[#06d6a0]/80 uppercase tracking-wide transition-colors duration-100 data-[highlighted]:bg-[#06d6a0] data-[highlighted]:text-black data-[selected]:text-[#ffd166]",
};
