import type { DatePickerStyleConfig } from "./default";
export type { DatePickerStyleConfig } from "./default";

export const pixelStyle: DatePickerStyleConfig = {
  trigger:
    "flex h-9 w-full items-center gap-2 rounded-none border-2 border-[#06d6a0] bg-[#0d0d12] px-3 py-2 font-mono text-sm text-[#06d6a0] text-left shadow-[3px_3px_0_0_#000] transition-all duration-100 hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0_0_#000] focus:outline-none disabled:cursor-not-allowed disabled:opacity-40",
  popup:
    "z-50 w-72 overflow-hidden rounded-none border-2 border-[#06d6a0] bg-[#0d0d12] shadow-[6px_6px_0_0_#000] p-3",
  header: "mb-3 flex items-center justify-between",
  navBtn:
    "flex size-7 items-center justify-center rounded-none border-2 border-[#06d6a0] text-[#06d6a0] shadow-[2px_2px_0_0_#000] transition-all duration-100 hover:bg-[#ef476f] hover:text-black hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0_0_#000] focus-visible:outline-none",
  monthYear: "font-mono text-sm font-bold text-[#06d6a0] uppercase tracking-widest",
  weekdays: "mb-1 grid grid-cols-7",
  weekday: "text-center text-[0.6875rem] font-mono font-bold text-[#06d6a0]/50 py-1 uppercase",
  grid: "grid grid-cols-7 gap-y-0.5",
  day: "flex size-8 cursor-pointer items-center justify-center rounded-none font-mono text-xs font-bold text-[#06d6a0]/80 transition-all duration-100 hover:bg-[#06d6a0]/20 focus-visible:outline-none",
  daySelected: "bg-[#ef476f] text-black font-bold",
  dayToday: "font-bold ring-2 ring-[#06d6a0]",
  dayDisabled: "cursor-not-allowed opacity-30 hover:bg-transparent",
  dayOutsideMonth: "opacity-30",
  rangeStart: "bg-[#ef476f] text-black rounded-r-none",
  rangeEnd: "bg-[#ef476f] text-black rounded-l-none",
  rangeMiddle: "bg-[#ef476f]/20 rounded-none",
  label: "font-mono text-sm font-bold text-[#06d6a0] leading-none uppercase tracking-widest",
  description: "font-mono text-xs text-[#06d6a0]/60 leading-relaxed",
  error: "font-mono text-xs font-bold text-[#ef476f]",
};
