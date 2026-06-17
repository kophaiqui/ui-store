"use client";
import { Tooltip } from "@base-ui/react/tooltip";
import { cn } from "@/lib/utils";

type Props = {
  content?: React.ReactNode;
  children?: React.ReactNode;
  side?: "top" | "bottom" | "left" | "right";
  delay?: number;
  className?: string;
};

export function UITooltip({
  content = "Tooltip text",
  children = "Hover me",
  side = "top",
  delay = 100,
  className,
}: Props) {
  return (
    <Tooltip.Provider delay={delay}>
      <Tooltip.Root>
        <Tooltip.Trigger
          className={cn(
            "inline-flex items-center gap-1 text-sm text-foreground/90",
            "underline underline-offset-[3px] decoration-dashed decoration-muted-foreground/70",
            "hover:text-foreground hover:decoration-muted-foreground",
            "transition-colors duration-150 cursor-default select-none",
            "focus-visible:outline-none",
            className,
          )}
        >
          {children}
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Positioner side={side} sideOffset={7}>
            <Tooltip.Popup
              className={cn(
                "rounded-md border border-border/60 bg-card px-2.5 py-1.5",
                "text-xs text-foreground leading-snug",
                "shadow-[0_4px_20px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.04)]",
              )}
            >
              {content}
            </Tooltip.Popup>
          </Tooltip.Positioner>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}

export { UITooltip as default };
