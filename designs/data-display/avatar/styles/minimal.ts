export type { AvatarStyleConfig, AvatarSize, AvatarStatus } from "./default";
import type { AvatarStyleConfig } from "./default";

export const minimalStyle: AvatarStyleConfig = {
  root: "relative inline-flex items-center justify-center overflow-hidden border border-border bg-transparent ring-0",
  shapes: {
    circle: "rounded-full",
    square: "rounded-none",
  },
  sizes: {
    xs: { root: "size-6",  text: "text-[0.5625rem]" },
    sm: { root: "size-8",  text: "text-[0.625rem]" },
    md: { root: "size-10", text: "text-xs" },
    lg: { root: "size-12", text: "text-sm" },
    xl: { root: "size-16", text: "text-base" },
  },
  fallback: "flex h-full w-full items-center justify-center font-medium tracking-wide text-foreground/80 bg-transparent",
  status: {
    online:  "bg-foreground",
    offline: "bg-muted-foreground/40",
    busy:    "bg-muted-foreground",
  },
  statusSizes: {
    xs: "size-[7px] ring-[1.5px] ring-background",
    sm: "size-[9px] ring-2 ring-background",
    md: "size-[10px] ring-2 ring-background",
    lg: "size-3 ring-2 ring-background",
    xl: "size-3.5 ring-2 ring-background",
  },
};
