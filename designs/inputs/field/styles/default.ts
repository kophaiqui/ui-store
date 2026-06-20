export type FieldStyleConfig = {
  root: string;
  label: string;
  description: string;
  error: string;
  control: string;
  horizontal: string;
};

export const defaultStyle: FieldStyleConfig = {
  root: "flex flex-col gap-1.5",
  label: "text-sm font-medium text-foreground/90 leading-none",
  description: "text-xs text-muted-foreground leading-relaxed",
  error: "text-xs text-red-400",
  control: "w-full",
  horizontal: "flex flex-row items-start gap-4",
};
