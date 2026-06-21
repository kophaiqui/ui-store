import type { DatePickerStyleConfig } from "./default";
export type { DatePickerStyleConfig };

export const gradientStyle: DatePickerStyleConfig = {
  trigger: "flex h-9 w-full items-center gap-2 rounded-xl border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm text-zinc-300 text-left shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition-all duration-150 hover:border-zinc-600 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/20 focus:border-fuchsia-500/60 disabled:cursor-not-allowed disabled:opacity-40",
  popup: "z-50 w-72 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 p-3 shadow-[0_24px_48px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.06)]",
  header: "mb-3 flex items-center justify-between",
  navBtn: "flex size-7 items-center justify-center rounded-lg text-zinc-500 transition-colors duration-100 hover:bg-zinc-800 hover:text-zinc-300 focus-visible:outline-none",
  monthYear: "text-sm font-semibold text-zinc-200",
  weekdays: "mb-1 grid grid-cols-7",
  weekday: "text-center text-[0.6875rem] font-medium text-zinc-600 py-1",
  grid: "grid grid-cols-7 gap-y-0.5",
  day: "flex size-8 cursor-pointer items-center justify-center rounded-lg text-xs text-zinc-400 transition-colors duration-100 hover:bg-fuchsia-500/10 hover:text-fuchsia-300 focus-visible:outline-none",
  daySelected: "bg-gradient-to-br from-fuchsia-600 to-pink-500 text-white font-medium hover:from-fuchsia-500 hover:to-pink-400 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]",
  dayToday: "font-semibold ring-1 ring-fuchsia-500/40",
  dayDisabled: "cursor-not-allowed opacity-30 hover:bg-transparent",
  dayOutsideMonth: "opacity-30",
  rangeStart: "bg-gradient-to-br from-fuchsia-600 to-pink-500 text-white rounded-r-none",
  rangeEnd: "bg-gradient-to-br from-fuchsia-600 to-pink-500 text-white rounded-l-none",
  rangeMiddle: "bg-fuchsia-500/15 rounded-none",
  label: "text-sm font-medium text-zinc-300 leading-none",
  description: "text-xs text-zinc-500 leading-relaxed",
  error: "text-xs text-red-400",
};
