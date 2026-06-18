"use client";
import { Tooltip } from "@base-ui/react/tooltip";
import { cn } from "@/lib/utils";
import { defaultStyle } from "./styles/default";
import type { TooltipStyleConfig } from "./styles/default";

export type { TooltipStyleConfig };

type Props = {
  styleConfig?: TooltipStyleConfig;
  content?: React.ReactNode;
  children?: React.ReactNode;
  side?: "top" | "bottom" | "left" | "right";
  delay?: number;
  delayClose?: number;
  arrow?: boolean;
  maxWidth?: number;
  className?: string;
};

export function UITooltip({
  styleConfig = defaultStyle,
  content = "Tooltip text",
  children = "Hover me",
  side = "top",
  delay = 100,
  delayClose = 0,
  arrow = false,
  maxWidth,
  className,
}: Props) {
  return (
    <Tooltip.Provider delay={delay} closeDelay={delayClose}>
      <Tooltip.Root>
        <Tooltip.Trigger className={cn(styleConfig.trigger, className)}>
          {children}
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Positioner side={side} sideOffset={arrow ? 10 : 7}>
            <Tooltip.Popup
              className={styleConfig.popup}
              style={maxWidth ? { maxWidth } : undefined}
            >
              {arrow && (
                <Tooltip.Arrow
                  className={cn(
                    "data-[side=bottom]:top-[-4px] data-[side=top]:bottom-[-4px]",
                    "data-[side=left]:right-[-4px] data-[side=right]:left-[-4px]",
                  )}
                >
                  <svg
                    width="10"
                    height="5"
                    viewBox="0 0 10 5"
                    className="fill-card stroke-border/60 [[data-side=top]_&]:rotate-180 [[data-side=left]_&]:rotate-90 [[data-side=right]_&]:-rotate-90"
                    strokeWidth="1"
                  >
                    <path d="M0 5L5 0L10 5Z" />
                  </svg>
                </Tooltip.Arrow>
              )}
              {content}
            </Tooltip.Popup>
          </Tooltip.Positioner>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}

export { UITooltip as default };
