"use client";
import { Switch } from "@base-ui/react/switch";
import { cn } from "@/lib/utils";

type Props = React.ComponentProps<typeof Switch.Root> & {
  label?: string;
  size?: "sm" | "md" | "lg";
  labelPosition?: "left" | "right";
  loading?: boolean;
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

const spinnerSizeMap = { sm: 8, md: 10, lg: 12 };

function Spinner({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden
      className="shrink-0 animate-spin"
    >
      <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="2" strokeOpacity="0.3" />
      <path d="M8 2a6 6 0 0 1 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function UISwitch({ label, size = "md", labelPosition = "right", loading = false, className, ...props }: Props) {
  const track = trackMap[size];
  const thumb = thumbMap[size];

  const switchEl = (
    <Switch.Root
      disabled={loading || props.disabled}
      className={cn(
        "group relative inline-flex shrink-0 items-center rounded-full",
        "border-2 border-transparent",
        "bg-muted",
        "transition-colors duration-200",
        "data-[checked]:bg-emerald-500",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        "disabled:pointer-events-none disabled:opacity-40",
        loading && "cursor-wait",
        track,
        className,
      )}
      {...props}
    >
      <Switch.Thumb
        className={cn(
          "pointer-events-none flex items-center justify-center rounded-full",
          "bg-white shadow-[0_1px_3px_rgba(0,0,0,0.4)]",
          "translate-x-0 transition-transform duration-200 ease-out",
          thumb.size,
          thumb.translate,
        )}
      >
        {loading && <Spinner size={spinnerSizeMap[size]} />}
      </Switch.Thumb>
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
