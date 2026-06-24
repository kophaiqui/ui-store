import type { DatePickerStyleConfig } from "./default";
export type { DatePickerStyleConfig };

export const gradientStyle: DatePickerStyleConfig = {
  trigger: "flex h-9 w-full items-center gap-2 rounded-xl border border-[#FCE7F3] bg-white px-3 py-2 text-sm text-[#0F172A] text-left shadow-sm transition-all duration-150 hover:border-[#7C3AED]/30 focus:outline-none focus:ring-2 focus:ring-[#7C3AED]/20 focus:border-[#7C3AED]/60 disabled:cursor-not-allowed disabled:opacity-40 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] dark:hover:border-zinc-600 dark:focus:ring-fuchsia-500/20 dark:focus:border-fuchsia-500/60",
  popup: "z-50 w-72 overflow-hidden rounded-2xl border border-[#FCE7F3] bg-white p-3 shadow-[0_8px_32px_rgba(0,0,0,0.1)] dark:border-zinc-800 dark:bg-zinc-900 dark:shadow-[0_24px_48px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.06)]",
  header: "mb-3 flex items-center justify-between",
  navBtn: "flex size-7 items-center justify-center rounded-lg text-[#64748B] transition-colors duration-100 hover:bg-[#7C3AED]/8 hover:text-[#7C3AED] focus-visible:outline-none dark:text-zinc-500 dark:hover:bg-zinc-800 dark:hover:text-zinc-300",
  monthYear: "text-sm font-semibold text-[#0F172A] dark:text-zinc-200",
  weekdays: "mb-1 grid grid-cols-7",
  weekday: "text-center text-[0.6875rem] font-medium text-[#64748B] py-1 dark:text-zinc-600",
  grid: "grid grid-cols-7 gap-y-0.5",
  day: "flex size-8 cursor-pointer items-center justify-center rounded-lg text-xs text-[#0F172A] transition-colors duration-100 hover:bg-[#7C3AED]/8 hover:text-[#7C3AED] focus-visible:outline-none dark:text-zinc-400 dark:hover:bg-fuchsia-500/10 dark:hover:text-fuchsia-300",
  daySelected: "bg-gradient-to-br from-[#7C3AED] to-[#EC4899] text-white font-medium hover:from-[#6D28D9] hover:to-[#DB2777] shadow-[0_2px_8px_rgba(124,58,237,0.3)] dark:from-fuchsia-600 dark:to-pink-500 dark:hover:from-fuchsia-500 dark:hover:to-pink-400 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]",
  dayToday: "font-semibold ring-1 ring-[#7C3AED]/40 dark:ring-fuchsia-500/40",
  dayDisabled: "cursor-not-allowed opacity-30 hover:bg-transparent",
  dayOutsideMonth: "opacity-30",
  rangeStart: "bg-gradient-to-br from-[#7C3AED] to-[#EC4899] text-white rounded-r-none dark:from-fuchsia-600 dark:to-pink-500",
  rangeEnd: "bg-gradient-to-br from-[#7C3AED] to-[#EC4899] text-white rounded-l-none dark:from-fuchsia-600 dark:to-pink-500",
  rangeMiddle: "bg-[#7C3AED]/10 rounded-none dark:bg-fuchsia-500/15",
  label: "text-sm font-medium text-[#0F172A] leading-none dark:text-zinc-300",
  description: "text-xs text-[#64748B] leading-relaxed dark:text-zinc-500",
  error: "text-xs text-red-600 dark:text-red-400",
};
