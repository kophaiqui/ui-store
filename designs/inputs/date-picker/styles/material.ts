export type { DatePickerStyleConfig } from "./default";
import type { DatePickerStyleConfig } from "./default";

export const materialStyle: DatePickerStyleConfig = {
  trigger:
    "flex h-9 w-full items-center gap-2 rounded-lg border border-violet-200/50 bg-violet-50/60 px-3 py-2 text-sm text-left transition-colors duration-150 hover:border-violet-300 focus:outline-none focus:ring-2 focus:ring-violet-500/30 focus:border-violet-500 dark:border-violet-800/30 dark:bg-violet-950/20 dark:hover:border-violet-700 dark:focus:ring-violet-400/30 dark:focus:border-violet-400 disabled:cursor-not-allowed disabled:opacity-40",
  popup:
    "z-50 w-72 overflow-hidden rounded-2xl border border-violet-200/40 bg-white dark:border-violet-800/30 dark:bg-[#1d1b20] shadow-[0_8px_24px_rgba(103,80,164,0.18)] dark:shadow-[0_8px_24px_rgba(0,0,0,0.5)] p-3",
  header: "mb-3 flex items-center justify-between",
  navBtn:
    "flex size-7 items-center justify-center rounded-full text-foreground/50 transition-colors duration-100 hover:bg-violet-100 dark:hover:bg-violet-500/15 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/40",
  monthYear: "text-sm font-medium text-foreground",
  weekdays: "mb-1 grid grid-cols-7",
  weekday: "text-center text-[0.6875rem] font-medium text-foreground/40 py-1",
  grid: "grid grid-cols-7 gap-y-0.5",
  day: "flex size-8 cursor-pointer items-center justify-center rounded-full text-xs text-foreground/80 transition-colors duration-100 hover:bg-violet-100 dark:hover:bg-violet-500/15 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/40",
  daySelected: "bg-violet-600 text-white font-medium hover:bg-violet-700 dark:bg-violet-500 dark:hover:bg-violet-400",
  dayToday: "font-semibold ring-1 ring-violet-500/50 dark:ring-violet-400/50",
  dayDisabled: "cursor-not-allowed opacity-30 hover:bg-transparent",
  dayOutsideMonth: "opacity-30",
  rangeStart: "bg-violet-600 text-white rounded-r-none dark:bg-violet-500",
  rangeEnd: "bg-violet-600 text-white rounded-l-none dark:bg-violet-500",
  rangeMiddle: "bg-violet-100 dark:bg-violet-500/15 rounded-none",
  label: "text-sm font-medium text-foreground/80 leading-none",
  description: "text-xs text-foreground/50 leading-relaxed",
  error: "text-xs text-rose-600 dark:text-rose-300",
};
