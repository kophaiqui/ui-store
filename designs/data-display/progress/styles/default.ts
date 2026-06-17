export type ProgressStyleConfig = {
  track: string;
  indicator: string;
  label: string;
  value: string;
};

export const defaultStyle: ProgressStyleConfig = {
  track: "relative h-1.5 w-full overflow-hidden rounded-full bg-muted",
  indicator: "absolute inset-y-0 left-0 rounded-full bg-emerald-500/80 transition-all duration-500 ease-out",
  label: "text-xs font-medium text-muted-foreground",
  value: "text-xs font-mono text-muted-foreground",
};
