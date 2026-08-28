export type { DatePickerStyleConfig } from "./default";
import type { DatePickerStyleConfig } from "./default";

export const auroraStyle: DatePickerStyleConfig = {
  trigger:
    "flex h-9 w-full items-center gap-2 rounded-lg border border-indigo-400/20 bg-indigo-950/50 px-3 py-2 text-sm text-left text-teal-50 transition-colors duration-150 hover:border-teal-400/30 focus:outline-none focus:ring-2 focus:ring-teal-400/40 focus:border-teal-400/40 disabled:cursor-not-allowed disabled:opacity-40",
  popup:
    "z-50 w-72 overflow-hidden rounded-xl border border-indigo-400/20 bg-[#0b1022]/95 backdrop-blur-xl shadow-[0_0_32px_rgba(99,102,241,0.15),0_8px_32px_rgba(0,0,0,0.5)] p-3",
  header: "mb-3 flex items-center justify-between",
  navBtn:
    "flex size-7 items-center justify-center rounded-md text-indigo-300/60 transition-colors duration-100 hover:bg-indigo-900/50 hover:text-teal-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400/40",
  monthYear: "text-sm font-medium text-teal-50",
  weekdays: "mb-1 grid grid-cols-7",
  weekday: "text-center text-[0.6875rem] font-medium text-indigo-300/50 py-1",
  grid: "grid grid-cols-7 gap-y-0.5",
  day: "flex size-8 cursor-pointer items-center justify-center rounded-md text-xs text-indigo-200/80 transition-colors duration-100 hover:bg-indigo-900/50 hover:text-teal-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400/40",
  daySelected: "bg-gradient-to-br from-teal-500 to-violet-500 text-white font-medium shadow-[0_0_10px_rgba(45,212,191,0.4)] hover:shadow-[0_0_14px_rgba(45,212,191,0.55)]",
  dayToday: "font-semibold ring-1 ring-teal-400/40",
  dayDisabled: "cursor-not-allowed opacity-30 hover:bg-transparent",
  dayOutsideMonth: "opacity-30",
  rangeStart: "bg-gradient-to-br from-teal-500 to-violet-500 text-white rounded-r-none",
  rangeEnd: "bg-gradient-to-br from-teal-500 to-violet-500 text-white rounded-l-none",
  rangeMiddle: "bg-teal-400/15 rounded-none",
  label: "text-sm font-medium text-indigo-200 leading-none",
  description: "text-xs text-indigo-300/50 leading-relaxed",
  error: "text-xs text-rose-300",
};
