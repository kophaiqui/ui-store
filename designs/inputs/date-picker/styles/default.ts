export type DatePickerStyleConfig = {
  trigger: string;
  popup: string;
  header: string;
  navBtn: string;
  monthYear: string;
  weekdays: string;
  weekday: string;
  grid: string;
  day: string;
  daySelected: string;
  dayToday: string;
  dayDisabled: string;
  dayOutsideMonth: string;
  rangeStart: string;
  rangeEnd: string;
  rangeMiddle: string;
  label: string;
  description: string;
  error: string;
};

export const defaultStyle: DatePickerStyleConfig = {
  trigger:
    "flex h-9 w-full items-center gap-2 rounded-lg border border-border bg-card px-3 py-2 text-sm text-left transition-colors duration-150 hover:border-input focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500 disabled:cursor-not-allowed disabled:opacity-40",
  popup:
    "z-50 w-72 overflow-hidden rounded-xl border border-border bg-card/95 backdrop-blur-md shadow-xl shadow-black/20 p-3",
  header: "mb-3 flex items-center justify-between",
  navBtn:
    "flex size-7 items-center justify-center rounded-md text-muted-foreground transition-colors duration-100 hover:bg-accent hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/40",
  monthYear: "text-sm font-medium text-foreground",
  weekdays: "mb-1 grid grid-cols-7",
  weekday: "text-center text-[0.6875rem] font-medium text-muted-foreground py-1",
  grid: "grid grid-cols-7 gap-y-0.5",
  day: "flex size-8 cursor-pointer items-center justify-center rounded-md text-xs text-foreground/90 transition-colors duration-100 hover:bg-accent hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/40",
  daySelected: "bg-emerald-500 text-zinc-950 font-medium hover:bg-emerald-400",
  dayToday: "font-semibold ring-1 ring-emerald-500/40",
  dayDisabled: "cursor-not-allowed opacity-30 hover:bg-transparent",
  dayOutsideMonth: "opacity-30",
  rangeStart: "bg-emerald-500 text-zinc-950 rounded-r-none",
  rangeEnd: "bg-emerald-500 text-zinc-950 rounded-l-none",
  rangeMiddle: "bg-emerald-500/15 rounded-none",
  label: "text-sm font-medium text-foreground/90 leading-none",
  description: "text-xs text-muted-foreground leading-relaxed",
  error: "text-xs text-red-400",
};
