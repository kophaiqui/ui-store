"use client";
import { Popover } from "@base-ui/react/popover";
import { cn } from "@/lib/utils";

type Props = {
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
      <Popover.Trigger
        className={cn(
          "inline-flex h-9 items-center justify-center gap-2 rounded-md border border-border bg-card px-4",
          "text-sm font-medium text-foreground",
          "shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]",
          "transition-all duration-150 hover:border-input hover:bg-muted",
          "active:scale-[0.97]",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          className,
        )}
      >
        {trigger}
      </Popover.Trigger>

      <Popover.Portal>
        <Popover.Positioner sideOffset={arrow ? offset + 4 : offset} side={placement}>
          <Popover.Popup
            className={cn(
              "z-50 rounded-xl border border-border bg-background p-4",
              "shadow-[0_8px_40px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.04)]",
            )}
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
              <Popover.Title className="text-sm font-semibold tracking-tight text-foreground">
                {title}
              </Popover.Title>
              <Popover.Close
                className="flex size-5 items-center justify-center rounded text-muted-foreground/70 hover:text-foreground/90 transition-colors duration-150 focus-visible:outline-none"
                aria-label="Close"
              >
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
                  <path
                    d="M1 1L9 9M9 1L1 9"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </Popover.Close>
            </div>
            <Popover.Description className="text-xs leading-relaxed text-muted-foreground">
              {content}
            </Popover.Description>
          </Popover.Popup>
        </Popover.Positioner>
      </Popover.Portal>
    </Popover.Root>
  );
}

export { UIPopover as default };
