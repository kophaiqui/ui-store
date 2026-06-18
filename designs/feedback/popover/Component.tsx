"use client";
import { Popover } from "@base-ui/react/popover";
import { cn } from "@/lib/utils";
import { defaultStyle } from "./styles/default";
import type { PopoverStyleConfig } from "./styles/default";

export type { PopoverStyleConfig };

type Props = {
  styleConfig?: PopoverStyleConfig;
  trigger?: string;
  title?: string;
  content?: React.ReactNode;
  arrow?: boolean;
  width?: number;
  offset?: number;
  placement?: "top" | "bottom" | "left" | "right";
  className?: string;
};

export function UIPopover({
  styleConfig = defaultStyle,
  trigger = "Open Popover",
  title = "Popover",
  content = "This popover is anchored to its trigger. Add any content here.",
  arrow = false,
  width,
  offset = 8,
  placement = "bottom",
  className,
}: Props) {
  return (
    <Popover.Root>
      <Popover.Trigger className={cn(styleConfig.trigger, className)}>
        {trigger}
      </Popover.Trigger>

      <Popover.Portal>
        <Popover.Positioner sideOffset={arrow ? offset + 4 : offset} side={placement}>
          <Popover.Popup
            className={styleConfig.popup}
            style={{ width: width ?? 288 }}
          >
            {arrow && (
              <Popover.Arrow
                className={cn(
                  "data-[side=bottom]:top-[-4px] data-[side=top]:bottom-[-4px]",
                  "data-[side=left]:right-[-4px] data-[side=right]:left-[-4px]",
                )}
              >
                <svg width="10" height="5" viewBox="0 0 10 5" className="fill-background stroke-border" strokeWidth="1">
                  <path d="M0 5L5 0L10 5Z" />
                </svg>
              </Popover.Arrow>
            )}
            <div className="mb-1 flex items-center justify-between">
              <Popover.Title className={styleConfig.title}>{title}</Popover.Title>
              <Popover.Close className={styleConfig.close} aria-label="Close">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
                  <path d="M1 1L9 9M9 1L1 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </Popover.Close>
            </div>
            <Popover.Description className={styleConfig.description}>
              {content}
            </Popover.Description>
          </Popover.Popup>
        </Popover.Positioner>
      </Popover.Portal>
    </Popover.Root>
  );
}

export { UIPopover as default };
