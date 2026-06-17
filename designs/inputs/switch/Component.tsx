"use client";
import { Switch } from "@base-ui/react/switch";
import { cn } from "@/lib/utils";

type Props = React.ComponentProps<typeof Switch.Root> & {
  label?: string;
  size?: "sm" | "md" | "lg";
  labelPosition?: "left" | "right";
};

const trackMap = {
  sm: "h-[18px] w-8",
  md: "h-[22px] w-10",
  lg: "h-[26px] w-12",
};

const thumbMap = {
  sm: { size: "size-[14px]", translate: "group-data-[checked]:translate-x-[14px]" },
  md: { size: "size-[18px]", translate: "group-data-[checked]:translate-x-[18px]" },
  lg: { size: "size-[22px]", translate: "group-data-[checked]:translate-x-[22px]" },
};

export function UISwitch({ label, size = "md", labelPosition = "right", className, ...props }: Props) {
  const track = trackMap[size];
  const thumb = thumbMap[size];

  const switchEl = (
    <Switch.Root
      className={cn(
        "group relative inline-flex shrink-0 items-center rounded-full",
        "border-2 border-transparent",
        "bg-muted",
        "transition-colors duration-200",
        "data-[checked]:bg-emerald-500",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        "disabled:pointer-events-none disabled:opacity-40",
        track,
        className,
      )}
      {...props}
    >
      <Switch.Thumb
        className={cn(
          "pointer-events-none block rounded-full",
          "bg-white shadow-[0_1px_3px_rgba(0,0,0,0.4)]",
          "translate-x-0 transition-transform duration-200 ease-out",
          thumb.size,
          thumb.translate,
        )}
      />
    </Switch.Root>
  );

  if (!label) return switchEl;

  return (
    <label className={cn("flex items-center gap-3 cursor-pointer select-none group", labelPosition === "left" && "flex-row-reverse justify-end")}>
      {switchEl}
      <span className="text-sm text-foreground/90 group-hover:text-foreground transition-colors duration-150">
        {label}
      </span>
    </label>
  );
}

export { UISwitch as default };
