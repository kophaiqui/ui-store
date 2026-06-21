import type { DatePickerStyleConfig } from "./default";
export type { DatePickerStyleConfig };

export const neumorphismStyle: DatePickerStyleConfig = {
  trigger: "flex h-9 w-full items-center gap-2 rounded-2xl bg-[#e8ecf1] px-4 py-2 text-sm text-slate-700 text-left shadow-[inset_3px_3px_7px_rgba(163,177,198,0.5),inset_-3px_-3px_7px_rgba(255,255,255,0.7)] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400/30 disabled:cursor-not-allowed disabled:opacity-40",
  popup: "z-50 w-72 overflow-hidden rounded-3xl bg-[#e8ecf1] p-4 shadow-[8px_8px_16px_rgba(163,177,198,0.5),-8px_-8px_16px_rgba(255,255,255,0.7)]",
  header: "mb-3 flex items-center justify-between",
  navBtn: "flex size-7 items-center justify-center rounded-xl bg-[#e8ecf1] text-slate-500 shadow-[3px_3px_6px_rgba(163,177,198,0.4),-3px_-3px_6px_rgba(255,255,255,0.6)] transition-all duration-150 hover:text-slate-700 hover:shadow-[1px_1px_3px_rgba(163,177,198,0.3),-1px_-1px_3px_rgba(255,255,255,0.5)] focus-visible:outline-none",
  monthYear: "text-sm font-semibold text-slate-700",
  weekdays: "mb-1 grid grid-cols-7",
  weekday: "text-center text-[0.6875rem] font-semibold text-slate-400 py-1",
  grid: "grid grid-cols-7 gap-y-0.5",
  day: "flex size-8 cursor-pointer items-center justify-center rounded-xl text-xs text-slate-600 transition-all duration-150 hover:shadow-[2px_2px_5px_rgba(163,177,198,0.4),-2px_-2px_5px_rgba(255,255,255,0.6)] focus-visible:outline-none",
  daySelected: "shadow-[inset_3px_3px_6px_rgba(163,177,198,0.5),inset_-3px_-3px_6px_rgba(255,255,255,0.7)] text-blue-600 font-semibold hover:shadow-[inset_3px_3px_6px_rgba(163,177,198,0.5),inset_-3px_-3px_6px_rgba(255,255,255,0.7)]",
  dayToday: "font-bold ring-2 ring-blue-400/30",
  dayDisabled: "cursor-not-allowed opacity-30 hover:shadow-none",
  dayOutsideMonth: "opacity-30",
  rangeStart: "shadow-[inset_3px_3px_6px_rgba(163,177,198,0.5),inset_-3px_-3px_6px_rgba(255,255,255,0.7)] text-blue-600 rounded-r-none",
  rangeEnd: "shadow-[inset_3px_3px_6px_rgba(163,177,198,0.5),inset_-3px_-3px_6px_rgba(255,255,255,0.7)] text-blue-600 rounded-l-none",
  rangeMiddle: "shadow-[inset_1px_1px_3px_rgba(163,177,198,0.3),inset_-1px_-1px_3px_rgba(255,255,255,0.5)] rounded-none",
  label: "text-sm font-semibold text-slate-700 leading-none",
  description: "text-xs text-slate-500 leading-relaxed",
  error: "text-xs text-red-500",
};
