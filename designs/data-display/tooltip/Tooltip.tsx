"use client";
import { Tooltip } from "@base-ui/react/tooltip";
import { cn } from "@/lib/utils";
import type { TooltipStyleConfig } from "./styles/default";

export type { TooltipStyleConfig };

type Props = {
  content?: React.ReactNode;
  children?: React.ReactNode;
  side?: "top" | "bottom" | "left" | "right";
  className?: string;
  styleConfig: TooltipStyleConfig;
};

export function UITooltip({ styleConfig, content = "Tooltip text", children = "Hover me", side = "top", className }: Props) {
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger className={cn(styleConfig.trigger, className)}>
          {children}
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Positioner side={side} sideOffset={7}>
            <Tooltip.Popup className={styleConfig.popup}>
              {content}
            </Tooltip.Popup>
          </Tooltip.Positioner>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}
