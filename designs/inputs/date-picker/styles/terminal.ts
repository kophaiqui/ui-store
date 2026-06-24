import type { DatePickerStyleConfig } from "./default";
export type { DatePickerStyleConfig } from "./default";

export const terminalStyle: DatePickerStyleConfig = {
  trigger: "flex h-9 w-full items-center gap-2 rounded-sm border border-[#16A34A] bg-white px-3 py-2 text-sm text-left font-mono text-[#065F46] dark:border-[#22C55E] dark:bg-transparent dark:text-[#22C55E] transition-all duration-100 hover:bg-[#16A34A]/5 dark:hover:bg-[#22C55E]/5 focus:outline-none focus:ring-2 focus:ring-[#16A34A]/40 dark:focus:ring-[#22C55E]/40 disabled:cursor-not-allowed disabled:opacity-40",
  popup: "z-50 w-72 overflow-hidden rounded-sm border border-[#16A34A] bg-white dark:border-[#22C55E] dark:bg-[#0F0F0F] shadow-sm dark:shadow-[0_0_12px_rgba(34,197,94,0.15)] p-3",
  header: "mb-3 flex items-center justify-between",
  navBtn: "flex size-7 items-center justify-center rounded-sm border border-[#16A34A] text-[#065F46] font-mono font-bold dark:border-[#22C55E] dark:text-[#22C55E] transition-all duration-100 hover:bg-[#16A34A] hover:text-white dark:hover:bg-[#22C55E] dark:hover:text-black focus-visible:outline-none",
  monthYear: "font-mono text-sm font-bold text-[#065F46] dark:text-[#22C55E] uppercase tracking-wide",
  weekdays: "mb-1 grid grid-cols-7",
  weekday: "text-center text-[0.6875rem] font-mono font-bold text-[#047857] dark:text-[#86EFAC] py-1 uppercase",
  grid: "grid grid-cols-7 gap-y-0.5",
  day: "flex size-8 cursor-pointer items-center justify-center rounded-sm font-mono text-xs text-[#065F46] dark:text-[#22C55E] font-bold transition-all duration-100 hover:bg-[#16A34A] hover:text-white dark:hover:bg-[#22C55E] dark:hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16A34A]/40 dark:focus-visible:ring-[#22C55E]/40",
  daySelected: "bg-[#16A34A] text-white dark:bg-[#22C55E] dark:text-black font-bold",
  dayToday: "font-bold ring-1 ring-[#16A34A] dark:ring-[#22C55E]",
  dayDisabled: "cursor-not-allowed opacity-30 hover:bg-transparent dark:hover:bg-transparent",
  dayOutsideMonth: "opacity-30",
  rangeStart: "bg-[#16A34A] text-white dark:bg-[#22C55E] dark:text-black rounded-r-none",
  rangeEnd: "bg-[#16A34A] text-white dark:bg-[#22C55E] dark:text-black rounded-l-none",
  rangeMiddle: "bg-[#16A34A]/15 dark:bg-[#22C55E]/15 rounded-none",
  label: "font-mono text-sm font-bold text-[#065F46] dark:text-[#22C55E] leading-none uppercase tracking-wide",
  description: "font-mono text-xs text-[#047857] dark:text-[#86EFAC] leading-relaxed",
  error: "font-mono text-xs text-red-600 dark:text-red-500 font-bold",
};
