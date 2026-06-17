import type { AvatarSize, AvatarStatus } from "../Avatar";

export type AvatarStyleConfig = {
  root: string;
  shapes: { circle: string; square: string };
  sizes: Record<AvatarSize, { root: string; text: string }>;
  fallback: string;
  status: Record<AvatarStatus, string>;
  statusSizes: Record<AvatarSize, string>;
};

export const defaultStyle: AvatarStyleConfig = {
  root: "relative inline-flex items-center justify-center overflow-hidden border border-border/60 bg-muted ring-2 ring-card",
  shapes: {
    circle: "rounded-full",
    square: "rounded-md",
  },
  sizes: {
    xs: { root: "size-6",  text: "text-[0.5625rem]" },
    sm: { root: "size-8",  text: "text-[0.625rem]" },
    md: { root: "size-10", text: "text-xs" },
    lg: { root: "size-12", text: "text-sm" },
    xl: { root: "size-16", text: "text-base" },
  },
  fallback: "flex h-full w-full items-center justify-center font-medium tracking-wide text-foreground/90 bg-muted",
  status: {
    online:  "bg-emerald-500",
    offline: "bg-muted-foreground",
    busy:    "bg-red-500",
  },
  statusSizes: {
    xs: "size-[7px] ring-[1.5px] ring-background",
    sm: "size-[9px] ring-2 ring-background",
    md: "size-[10px] ring-2 ring-background",
    lg: "size-3 ring-2 ring-background",
    xl: "size-3.5 ring-2 ring-background",
  },
};
