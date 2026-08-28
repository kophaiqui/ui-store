import type { ComboboxStyleConfig } from "./default";
export type { ComboboxStyleConfig } from "./default";

export const pixelStyle: ComboboxStyleConfig = {
  trigger:
    "flex min-h-9 w-full items-center justify-between rounded-none border-2 border-[#06d6a0] bg-[#0d0d12] px-3 py-1.5 font-mono text-sm text-[#06d6a0] shadow-[3px_3px_0_0_#000] transition-all duration-100 hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0_0_#000] focus-within:outline-none disabled:cursor-not-allowed disabled:opacity-40",
  inputGroup: "flex flex-1 flex-wrap items-center gap-1 min-w-0",
  input:
    "flex-1 min-w-[60px] bg-transparent font-mono text-sm text-[#06d6a0] placeholder:text-[#06d6a0]/40 outline-none",
  icon: "shrink-0 text-[#06d6a0] transition-transform duration-100 data-[popup-open]:rotate-180",
  popup:
    "z-50 min-w-[var(--anchor-width)] overflow-hidden rounded-none border-2 border-[#06d6a0] bg-[#0d0d12] shadow-[4px_4px_0_0_#000] py-1",
  item: "flex cursor-pointer items-center gap-2 px-3 py-2 font-mono text-sm text-[#06d6a0]/80 uppercase tracking-wide transition-colors duration-100 select-none data-[highlighted]:bg-[#06d6a0] data-[highlighted]:text-black data-[disabled]:opacity-40 data-[disabled]:cursor-not-allowed",
  itemIndicator: "ml-auto shrink-0 text-[#ffd166]",
  empty: "px-3 py-6 text-center font-mono text-sm text-[#06d6a0]/50 uppercase",
  chip: "flex items-center gap-1 rounded-none border-2 border-black bg-[#06d6a0] px-1.5 py-0.5 font-mono text-xs font-bold text-black",
  chipRemove:
    "text-black/70 hover:text-black transition-colors cursor-pointer leading-none",
  clear:
    "shrink-0 text-[#06d6a0]/60 hover:text-[#06d6a0] transition-colors cursor-pointer",
  placeholder: "text-[#06d6a0]/40 font-mono",
  label: "font-mono text-sm font-bold text-[#06d6a0] uppercase tracking-widest leading-none",
  description: "font-mono text-xs text-[#06d6a0]/60 leading-relaxed",
  error: "font-mono text-xs font-bold text-[#ef476f]",
};
