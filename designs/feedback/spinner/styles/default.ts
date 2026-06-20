export type SpinnerSize = "xs" | "sm" | "md" | "lg" | "xl";

export type SpinnerStyleConfig = {
  wrapper: string;
  svg: string;
  sizes: Record<SpinnerSize, { svgSize: string; strokeWidth: number }>;
  label: string;
};

export const defaultStyle: SpinnerStyleConfig = {
  wrapper: "inline-flex items-center gap-2",
  svg: "animate-spin text-muted-foreground",
  sizes: {
    xs: { svgSize: "12", strokeWidth: 2 },
    sm: { svgSize: "16", strokeWidth: 1.8 },
    md: { svgSize: "20", strokeWidth: 1.6 },
    lg: { svgSize: "28", strokeWidth: 1.5 },
    xl: { svgSize: "36", strokeWidth: 1.4 },
  },
  label: "text-sm text-muted-foreground",
};
