export type SeparatorStyleConfig = {
  root: string;
};

export const defaultStyle: SeparatorStyleConfig = {
  root: "shrink-0 bg-muted data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
};
