export type EmptyStyleConfig = {
  wrapper: string;
  icon: string;
  title: string;
  description: string;
  actions: string;
};

export const defaultStyle: EmptyStyleConfig = {
  wrapper: "flex flex-col items-center justify-center gap-4 py-12 text-center",
  icon: "text-muted-foreground/40",
  title: "text-base font-medium text-foreground",
  description: "max-w-xs text-sm text-muted-foreground",
  actions: "flex items-center gap-3",
};
