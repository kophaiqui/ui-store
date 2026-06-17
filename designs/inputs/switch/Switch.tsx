"use client";
import { Switch } from "@base-ui/react/switch";
import { cn } from "@/lib/utils";
import type { SwitchStyleConfig } from "./styles/default";

export type { SwitchStyleConfig };
export type SwitchSize = "sm" | "md" | "lg";
export type LabelPosition = "left" | "right";

type Props = React.ComponentProps<typeof Switch.Root> & {
  label?: string;
  size?: SwitchSize;
  labelPosition?: LabelPosition;
  styleConfig: SwitchStyleConfig;
};

export function UISwitch({ styleConfig, label, size = "md", labelPosition = "right", className, ...props }: Props) {
  const s = styleConfig.sizes[size];

  const switchEl = (
    <Switch.Root
      className={cn(styleConfig.track, s.track, className)}
      {...props}
    >
      <Switch.Thumb className={cn(styleConfig.thumb, s.thumb, s.translate)} />
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
