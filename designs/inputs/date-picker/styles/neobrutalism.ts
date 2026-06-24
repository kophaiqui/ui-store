import type { DatePickerStyleConfig } from "./default";
export type { DatePickerStyleConfig };

export const neobrutalismStyle: DatePickerStyleConfig = {
  trigger: "flex h-9 w-full items-center gap-2 rounded-none border-2 border-zinc-950 dark:border-white bg-white dark:bg-[#111111] px-3 py-2 text-sm font-medium text-zinc-950 dark:text-white text-left shadow-[3px_3px_0px_0px_#09090b] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,0.7)] transition-all duration-100 hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_#09090b] dark:hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,0.7)] focus:outline-none focus:translate-x-[2px] focus:translate-y-[2px] focus:shadow-[1px_1px_0px_0px_#09090b] dark:focus:shadow-[1px_1px_0px_0px_rgba(255,255,255,0.7)] disabled:cursor-not-allowed disabled:opacity-40",
  popup: "z-50 w-72 overflow-hidden rounded-none border-2 border-zinc-950 dark:border-white bg-white dark:bg-[#111111] p-3 shadow-[6px_6px_0px_0px_#09090b] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.7)]",
  header: "mb-3 flex items-center justify-between",
  navBtn: "flex size-7 items-center justify-center rounded-none border-2 border-zinc-950 dark:border-white text-zinc-950 dark:text-white transition-all duration-100 hover:bg-yellow-300 hover:border-zinc-950 focus-visible:outline-none shadow-[2px_2px_0px_0px_#09090b] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,0.7)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_#09090b] dark:hover:shadow-[1px_1px_0px_0px_rgba(255,255,255,0.7)]",
  monthYear: "text-sm font-black text-zinc-950 dark:text-white uppercase tracking-wide",
  weekdays: "mb-1 grid grid-cols-7",
  weekday: "text-center text-[0.6875rem] font-black text-zinc-500 dark:text-[#9CA3AF] py-1 uppercase",
  grid: "grid grid-cols-7 gap-y-0.5",
  day: "flex size-8 cursor-pointer items-center justify-center rounded-none text-xs font-medium text-zinc-800 dark:text-[#D1D5DB] transition-all duration-100 hover:bg-yellow-100 hover:border-zinc-950 border border-transparent focus-visible:outline-none",
  daySelected: "bg-yellow-300 text-zinc-950 font-black border-2 border-zinc-950 shadow-[1px_1px_0px_0px_#09090b] hover:bg-yellow-400",
  dayToday: "font-black border-2 border-zinc-950 dark:border-white",
  dayDisabled: "cursor-not-allowed opacity-30 hover:bg-transparent",
  dayOutsideMonth: "opacity-30",
  rangeStart: "bg-yellow-300 text-zinc-950 border-2 border-zinc-950 rounded-r-none",
  rangeEnd: "bg-yellow-300 text-zinc-950 border-2 border-zinc-950 rounded-l-none",
  rangeMiddle: "bg-yellow-100 dark:bg-yellow-300/20 rounded-none",
  label: "text-sm font-black text-zinc-950 dark:text-white uppercase tracking-wide leading-none",
  description: "text-xs font-medium text-zinc-600 dark:text-[#9CA3AF] leading-relaxed",
  error: "text-xs font-bold text-red-600 dark:text-red-400",
};
