export type SliderStyleConfig = {
  track: string;
  indicator: string;
  thumb: string;
};

export const defaultStyle: SliderStyleConfig = {
  track: "relative h-1.5 w-full rounded-full bg-muted data-[disabled]:opacity-40",
  indicator: "absolute h-full rounded-full bg-emerald-500/80 data-[disabled]:bg-muted-foreground/40",
  thumb: "block size-[18px] rounded-full border-2 border-emerald-500 bg-background shadow-[0_0_0_3px_rgba(16,185,129,0.15)] transition-[box-shadow,transform] duration-100 hover:shadow-[0_0_0_5px_rgba(16,185,129,0.2)] active:scale-110 focus-visible:outline-none focus-visible:shadow-[0_0_0_5px_rgba(16,185,129,0.3)] data-[disabled]:cursor-not-allowed data-[disabled]:border-muted-foreground data-[disabled]:shadow-none",
};
