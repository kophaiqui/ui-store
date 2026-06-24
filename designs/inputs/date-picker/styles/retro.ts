import type { DatePickerStyleConfig } from "./default";
export type { DatePickerStyleConfig } from "./default";

export const retroStyle: DatePickerStyleConfig = {
  trigger: "flex h-9 w-full items-center gap-2 rounded-sm border-2 border-[#3d2410] bg-[#fdf6e3] px-3 py-2 text-sm text-left text-[#2c1a0e] font-medium shadow-[2px_2px_0px_0px_#3d2410] transition-all duration-100 hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_#3d2410] focus:outline-none focus:ring-2 focus:ring-[#e8743b]/40 focus:border-[#e8743b] disabled:cursor-not-allowed disabled:opacity-50",
  popup: "z-50 w-72 overflow-hidden rounded-sm border-2 border-[#3d2410] bg-[#fdf6e3] shadow-[5px_5px_0px_0px_#3d2410] p-3",
  header: "mb-3 flex items-center justify-between",
  navBtn: "flex size-7 items-center justify-center rounded-sm border-2 border-[#3d2410] text-[#2c1a0e] font-bold transition-all duration-100 hover:bg-[#e8743b] hover:translate-x-[1px] hover:translate-y-[1px] shadow-[2px_2px_0px_0px_#3d2410] hover:shadow-[1px_1px_0px_0px_#3d2410] focus-visible:outline-none",
  monthYear: "text-sm font-black text-[#2c1a0e] uppercase tracking-wide",
  weekdays: "mb-1 grid grid-cols-7",
  weekday: "text-center text-[0.6875rem] font-black text-[#7a5230] py-1 uppercase",
  grid: "grid grid-cols-7 gap-y-0.5",
  day: "flex size-8 cursor-pointer items-center justify-center rounded-sm text-xs text-[#2c1a0e] font-bold transition-all duration-100 hover:bg-[#e8743b] hover:shadow-[1px_1px_0px_0px_#3d2410] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e8743b]/40",
  daySelected: "bg-[#e8743b] text-[#2c1a0e] font-black border-2 border-[#3d2410] shadow-[2px_2px_0px_0px_#3d2410] hover:bg-[#d4612a]",
  dayToday: "font-black ring-2 ring-[#3d2410]",
  dayDisabled: "cursor-not-allowed opacity-30 hover:bg-transparent",
  dayOutsideMonth: "opacity-30",
  rangeStart: "bg-[#e8743b] text-[#2c1a0e] rounded-r-none border-2 border-[#3d2410]",
  rangeEnd: "bg-[#e8743b] text-[#2c1a0e] rounded-l-none border-2 border-[#3d2410]",
  rangeMiddle: "bg-amber-200 rounded-none",
  label: "text-sm font-black text-[#2c1a0e] leading-none uppercase tracking-wide",
  description: "text-xs text-[#7a5230] leading-relaxed",
  error: "text-xs text-red-700 font-bold",
};
