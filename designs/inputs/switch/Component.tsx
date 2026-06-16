"use client";
import { Switch } from "@base-ui/react/switch";
import { cn } from "@/lib/utils";

type Props = React.ComponentProps<typeof Switch.Root> & { label?: string };

export function UISwitch({ label, className, ...props }: Props) {
  return (
    <label className="flex items-center gap-3 cursor-pointer select-none group">
      <Switch.Root
        className={cn(
          "group relative inline-flex h-[22px] w-10 shrink-0 items-center rounded-full",
          "border-2 border-transparent",
          "bg-zinc-800",
          "transition-colors duration-200",
          "data-[checked]:bg-emerald-500",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/40 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950",
          "disabled:pointer-events-none disabled:opacity-40",
          className,
        )}
        {...props}
      >
        <Switch.Thumb
          className={cn(
            "pointer-events-none block size-[18px] rounded-full",
            "bg-white shadow-[0_1px_3px_rgba(0,0,0,0.4)]",
            "translate-x-0 transition-transform duration-200 ease-out",
            "group-data-[checked]:translate-x-[18px]",
          )}
        />
      </Switch.Root>
      {label && (
        <span className="text-sm text-zinc-300 group-hover:text-zinc-100 transition-colors duration-150">
          {label}
        </span>
      )}
    </label>
  );
}

export { UISwitch as default };
