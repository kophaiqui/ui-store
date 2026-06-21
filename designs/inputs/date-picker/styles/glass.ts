export type { DatePickerStyleConfig } from "./default";
import type { DatePickerStyleConfig } from "./default";

export const glassStyle: DatePickerStyleConfig = {
  trigger: "flex h-9 w-full items-center gap-2 rounded-lg border border-white/15 bg-white/8 backdrop-blur-sm px-3 py-2 text-sm text-left shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition-all duration-150 hover:border-white/25 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-sky-400/20 focus:border-sky-400/40 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-40",
  popup: "z-50 w-72 overflow-hidden rounded-xl border border-white/10 bg-black/55 backdrop-blur-2xl shadow-[0_24px_48px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.06)] p-3",
  header: "mb-3 flex items-center justify-between",
  navBtn: "flex size-7 items-center justify-center rounded-lg text-foreground/50 transition-colors duration-100 hover:bg-white/10 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/40",
  monthYear: "text-sm font-medium text-foreground",
  weekdays: "mb-1 grid grid-cols-7",
  weekday: "text-center text-[0.6875rem] font-medium text-foreground/40 py-1",
  grid: "grid grid-cols-7 gap-y-0.5",
  day: "flex size-8 cursor-pointer items-center justify-center rounded-lg text-xs text-foreground/80 transition-colors duration-100 hover:bg-white/10 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/40",
  daySelected: "bg-sky-400/65 text-white font-medium hover:bg-sky-400/75 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]",
  dayToday: "font-semibold ring-1 ring-sky-400/40",
  dayDisabled: "cursor-not-allowed opacity-30 hover:bg-transparent",
  dayOutsideMonth: "opacity-20",
  rangeStart: "bg-sky-400/70 text-white rounded-r-none",
  rangeEnd: "bg-sky-400/70 text-white rounded-l-none",
  rangeMiddle: "bg-sky-400/15 rounded-none",
  label: "text-sm font-medium text-foreground/80 leading-none",
  description: "text-xs text-foreground/50 leading-relaxed",
  error: "text-xs text-red-300",
};
