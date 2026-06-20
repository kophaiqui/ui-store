export type SkeletonStyleConfig = {
  base: string;
  pulse: string;
  wave: string;
  circle: string;
  rect: string;
  line: string;
  text: string;
};

export const defaultStyle: SkeletonStyleConfig = {
  base: "block bg-muted",
  pulse: "animate-pulse",
  wave: "animate-[shimmer_1.5s_ease-in-out_infinite]",
  circle: "rounded-full",
  rect: "rounded-md",
  line: "rounded-full",
  text: "rounded",
};
