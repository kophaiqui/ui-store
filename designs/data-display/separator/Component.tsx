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
        "shrink-0 bg-emerald-500/60",
        "data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full",
        // h-full stretches to the parent's height; min-h keeps it visible when
        // used on its own (e.g. in the preview) where no parent height exists.
        "data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-6 data-[orientation=vertical]:w-px",
        className,
      )}
      {...props}
    />
  );
}

export { UISeparator as default };
