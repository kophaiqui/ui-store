"use client";
import { Switch } from "@base-ui/react/switch";
import { cn } from "@/lib/utils";
import { defaultStyle } from "./styles/default";
import type { SwitchStyleConfig, SwitchSize } from "./styles/default";

export type { SwitchStyleConfig, SwitchSize };

type Props = React.ComponentProps<typeof Switch.Root> & {
  styleConfig?: SwitchStyleConfig;
  label?: string;
  size?: SwitchSize;
  labelPosition?: "left" | "right";
  loading?: boolean;
};

const spinnerSizeMap = { sm: 8, md: 10, lg: 12 };

function Spinner({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden className="shrink-0 animate-spin">
      <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="2" strokeOpacity="0.3" />
      <path d="M8 2a6 6 0 0 1 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function UISwitch({
  styleConfig = defaultStyle,
  label,
  size = "md",
  labelPosition = "right",
  loading = false,
  className,
  ...props
}: Props) {
  const sz = styleConfig.sizes[size];

  const switchEl = (
    <Switch.Root
      disabled={loading || props.disabled}
      className={cn(
        styleConfig.track,
        sz.track,
        loading && "cursor-wait",
        className,
      )}
      {...props}
    >
      <Switch.Thumb
        className={cn(styleConfig.thumb, sz.thumb, sz.translate)}
      >
        {loading && <Spinner size={spinnerSizeMap[size]} />}
      </Switch.Thumb>
    </Switch.Root>
  );

  if (!label) return switchEl;

  return (
    <label className={cn("flex items-center gap-3 cursor-pointer select-none group", labelPosition === "left" && "flex-row-reverse justify-end")}>
      {switchEl}
      <span className={styleConfig.label}>{label}</span>
    </label>
  );
}

export { UISwitch as default };
