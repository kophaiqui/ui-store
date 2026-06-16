"use client";
import { Checkbox } from "@base-ui/react/checkbox";
import { cn } from "@/lib/utils";

type Props = React.ComponentProps<typeof Checkbox.Root> & {
  label?: string;
};

export function UICheckbox({ label, className, ...props }: Props) {
  return (
    <label className="flex items-center gap-2.5 cursor-pointer select-none group">
      <Checkbox.Root
        className={cn(
          "relative flex size-[18px] shrink-0 items-center justify-center rounded",
          "border border-zinc-700 bg-zinc-900",
          "transition-all duration-150",
          "hover:border-zinc-600",
          "data-[checked]:border-emerald-500 data-[checked]:bg-emerald-500",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/40 focus-visible:ring-offset-1 focus-visible:ring-offset-zinc-950",
          "disabled:pointer-events-none disabled:opacity-40",
          className,
        )}
        {...props}
      >
        <Checkbox.Indicator className="flex items-center justify-center text-zinc-950">
          <svg width="10" height="7" viewBox="0 0 10 7" fill="none" aria-hidden>
            <path
              d="M1 3.5L3.5 6L9 1"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Checkbox.Indicator>
      </Checkbox.Root>
      {label && (
        <span className="text-sm text-zinc-300 group-hover:text-zinc-100 transition-colors duration-150">
          {label}
        </span>
      )}
    </label>
  );
}

export { UICheckbox as default };
