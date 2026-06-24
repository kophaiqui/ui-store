import type { DatePickerStyleConfig } from "./default";
export type { DatePickerStyleConfig };

export const neumorphismStyle: DatePickerStyleConfig = {
  trigger: "flex h-9 w-full items-center gap-2 rounded-2xl bg-[#e8ecf1] dark:bg-[#1E293B] px-4 py-2 text-sm text-slate-700 dark:text-[#E2E8F0] text-left shadow-[inset_3px_3px_7px_rgba(163,177,198,0.5),inset_-3px_-3px_7px_rgba(255,255,255,0.7)] dark:shadow-[inset_3px_3px_7px_rgba(0,0,0,0.5),inset_-3px_-3px_7px_rgba(255,255,255,0.03)] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400/30 dark:focus:ring-[#818CF8]/30 disabled:cursor-not-allowed disabled:opacity-40",
  popup: "z-50 w-72 overflow-hidden rounded-3xl bg-[#e8ecf1] dark:bg-[#1E293B] p-4 shadow-[8px_8px_16px_rgba(163,177,198,0.5),-8px_-8px_16px_rgba(255,255,255,0.7)] dark:shadow-[8px_8px_16px_rgba(0,0,0,0.5),-8px_-8px_16px_rgba(255,255,255,0.03)]",
  header: "mb-3 flex items-center justify-between",
  navBtn: "flex size-7 items-center justify-center rounded-xl bg-[#e8ecf1] dark:bg-[#1E293B] text-slate-500 dark:text-[#94A3B8] shadow-[3px_3px_6px_rgba(163,177,198,0.4),-3px_-3px_6px_rgba(255,255,255,0.6)] dark:shadow-[3px_3px_6px_rgba(0,0,0,0.4),-3px_-3px_6px_rgba(255,255,255,0.02)] transition-all duration-150 hover:text-slate-700 dark:hover:text-[#E2E8F0] hover:shadow-[1px_1px_3px_rgba(163,177,198,0.3),-1px_-1px_3px_rgba(255,255,255,0.5)] dark:hover:shadow-[1px_1px_3px_rgba(0,0,0,0.3),-1px_-1px_3px_rgba(255,255,255,0.02)] focus-visible:outline-none",
  monthYear: "text-sm font-semibold text-slate-700 dark:text-[#E2E8F0]",
  weekdays: "mb-1 grid grid-cols-7",
  weekday: "text-center text-[0.6875rem] font-semibold text-slate-400 dark:text-slate-500 py-1",
  grid: "grid grid-cols-7 gap-y-0.5",
  day: "flex size-8 cursor-pointer items-center justify-center rounded-xl text-xs text-slate-600 dark:text-[#94A3B8] transition-all duration-150 hover:shadow-[2px_2px_5px_rgba(163,177,198,0.4),-2px_-2px_5px_rgba(255,255,255,0.6)] dark:hover:shadow-[2px_2px_5px_rgba(0,0,0,0.4),-2px_-2px_5px_rgba(255,255,255,0.02)] focus-visible:outline-none",
  daySelected: "shadow-[inset_3px_3px_6px_rgba(163,177,198,0.5),inset_-3px_-3px_6px_rgba(255,255,255,0.7)] dark:shadow-[inset_3px_3px_6px_rgba(0,0,0,0.5),inset_-3px_-3px_6px_rgba(255,255,255,0.03)] text-blue-600 dark:text-[#818CF8] font-semibold",
  dayToday: "font-bold ring-2 ring-blue-400/30 dark:ring-[#818CF8]/30",
  dayDisabled: "cursor-not-allowed opacity-30 hover:shadow-none",
  dayOutsideMonth: "opacity-30",
  rangeStart: "shadow-[inset_3px_3px_6px_rgba(163,177,198,0.5),inset_-3px_-3px_6px_rgba(255,255,255,0.7)] dark:shadow-[inset_3px_3px_6px_rgba(0,0,0,0.5),inset_-3px_-3px_6px_rgba(255,255,255,0.03)] text-blue-600 dark:text-[#818CF8] rounded-r-none",
  rangeEnd: "shadow-[inset_3px_3px_6px_rgba(163,177,198,0.5),inset_-3px_-3px_6px_rgba(255,255,255,0.7)] dark:shadow-[inset_3px_3px_6px_rgba(0,0,0,0.5),inset_-3px_-3px_6px_rgba(255,255,255,0.03)] text-blue-600 dark:text-[#818CF8] rounded-l-none",
  rangeMiddle: "shadow-[inset_1px_1px_3px_rgba(163,177,198,0.3),inset_-1px_-1px_3px_rgba(255,255,255,0.5)] dark:shadow-[inset_1px_1px_3px_rgba(0,0,0,0.3),inset_-1px_-1px_3px_rgba(255,255,255,0.02)] rounded-none",
  label: "text-sm font-semibold text-slate-700 dark:text-[#E2E8F0] leading-none",
  description: "text-xs text-slate-500 dark:text-[#94A3B8] leading-relaxed",
  error: "text-xs text-red-500",
};
