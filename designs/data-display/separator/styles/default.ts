export type SeparatorStyleConfig = {
  root: string;
};

export const defaultStyle: SeparatorStyleConfig = {
  root: "shrink-0 bg-muted-foreground/40 data-[orientation=horizontal]:h-0.5 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-[48px] data-[orientation=vertical]:w-0.5",
};
