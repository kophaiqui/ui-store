import type { DataTableStyleConfig } from "./default";
export type { DataTableStyleConfig } from "./default";

export const pixelStyle: DataTableStyleConfig = {
  wrapper: "flex w-full flex-col gap-3",
  table: "w-full border-collapse font-mono text-sm border-4 border-[#ef476f]",
  caption: "mb-2 text-left text-xs font-mono font-bold text-[#06d6a0] uppercase tracking-widest",
  thead: "border-b-4 border-[#ef476f] bg-[#ef476f]/10",
  th: "px-4 py-3 text-left text-xs font-mono font-bold uppercase tracking-widest text-[#ffd166] whitespace-nowrap border-r-2 border-[#ef476f]/40 last:border-r-0",
  tbody: "divide-y-2 divide-[#ef476f]/30",
  tr: "transition-colors duration-100",
  trClickable: "cursor-pointer hover:bg-[#06d6a0]/10",
  trSelected: "bg-[#ef476f]/15",
  td: "px-4 py-3 font-mono text-[#06d6a0] border-r-2 border-[#ef476f]/15 last:border-r-0",
  emptyRow: "px-4 py-10 text-center font-mono text-sm text-[#06d6a0]/60 uppercase",
  loadingCell: "h-4 rounded-none bg-[#ef476f]/10 animate-pulse",
  checkboxCell: "w-10 px-3",
  sortIcon: "ml-1.5 inline-block opacity-40",
  sortIconActive: "opacity-100 text-[#ffd166]",
  toolbar: "flex items-center justify-between gap-3",
  searchInput: "h-8 rounded-none border-2 border-[#06d6a0] bg-[#0d0d12] px-3 font-mono text-sm text-[#06d6a0] placeholder:text-[#06d6a0]/40 transition-all focus:outline-none focus:shadow-[3px_3px_0_0_#000] focus:-translate-x-[1px] focus:-translate-y-[1px]",
  columnToggle: "flex h-8 items-center gap-1.5 rounded-none border-2 border-[#06d6a0] bg-[#0d0d12] px-3 font-mono text-xs font-bold text-[#06d6a0] uppercase tracking-wide transition-all hover:bg-[#06d6a0]/10 focus-visible:outline-none",
  columnTogglePopup: "z-50 min-w-[160px] rounded-none border-2 border-[#06d6a0] bg-[#0d0d12] p-2 shadow-[4px_4px_0_0_#000]",
  pagination: "flex items-center justify-between gap-2",
  pageBtn: "flex h-7 min-w-[28px] items-center justify-center rounded-none border-2 border-[#06d6a0] bg-[#0d0d12] px-2 font-mono text-xs font-bold text-[#06d6a0] transition-all hover:bg-[#06d6a0]/10 disabled:cursor-not-allowed disabled:opacity-40 data-[active]:bg-[#ef476f] data-[active]:text-black data-[active]:border-[#ef476f]",
  pageInfo: "font-mono text-xs font-bold text-[#06d6a0]/70 uppercase",
};
