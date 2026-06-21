export type { DatePickerStyleConfig } from "./default";
import type { DatePickerStyleConfig } from "./default";

export const minimalStyle: DatePickerStyleConfig = {
  trigger: "flex h-9 w-full items-center gap-2 rounded-none border-0 border-b border-border bg-transparent px-0 py-2 text-sm text-left transition-colors duration-150 hover:border-foreground/40 focus:outline-none focus:border-foreground disabled:cursor-not-allowed disabled:opacity-40",
  popup: "z-50 w-72 overflow-hidden rounded-none border border-border bg-background shadow-none p-3",
  header: "mb-3 flex items-center justify-between",
  navBtn: "flex size-7 items-center justify-center rounded-none text-muted-foreground transition-colors duration-100 hover:text-foreground focus-visible:outline-none",
  monthYear: "text-sm font-medium text-foreground",
  weekdays: "mb-1 grid grid-cols-7",
  weekday: "text-center text-[0.6875rem] font-medium text-muted-foreground py-1 uppercase tracking-wider",
  grid: "grid grid-cols-7 gap-y-0.5",
  day: "flex size-8 cursor-pointer items-center justify-center rounded-none text-xs text-foreground/80 transition-colors duration-100 hover:bg-muted hover:text-foreground focus-visible:outline-none",
  daySelected: "bg-foreground text-background font-medium hover:bg-foreground/90 rounded-none",
  dayToday: "font-semibold underline underline-offset-2",
  dayDisabled: "cursor-not-allowed opacity-30 hover:bg-transparent",
  dayOutsideMonth: "opacity-30",
  rangeStart: "bg-foreground text-background rounded-r-none",
  rangeEnd: "bg-foreground text-background rounded-l-none",
  rangeMiddle: "bg-muted/50 rounded-none",
  label: "text-sm font-medium text-foreground/90 leading-none",
  description: "text-xs text-muted-foreground leading-relaxed",
  error: "text-xs text-red-500",
};
