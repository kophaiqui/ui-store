"use client";
import { Separator } from "@base-ui/react/separator";
import { cn } from "@/lib/utils";

export function UISeparator({
  className,
  ...props
}: React.ComponentProps<typeof Separator>) {
  return (
    <Separator
      className={cn(
        "shrink-0 bg-muted",
        "data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full",
        "data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        className,
      )}
      {...props}
    />
  );
}

export { UISeparator as default };
