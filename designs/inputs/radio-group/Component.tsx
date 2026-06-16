"use client";
import { RadioGroup } from "@base-ui/react/radio-group";
import { Radio } from "@base-ui/react/radio";
import { cn } from "@/lib/utils";

type Option = { label: string; value: string };
type Props = React.ComponentProps<typeof RadioGroup> & { options?: Option[] };

export function UIRadioGroup({
  options = [
    { label: "Option A", value: "a" },
    { label: "Option B", value: "b" },
    { label: "Option C", value: "c" },
  ],
  className,
  ...props
}: Props) {
  return (
    <RadioGroup className={cn("flex flex-col gap-2.5", className)} {...props}>
      {options.map((opt) => (
        <label
          key={opt.value}
          className="flex items-center gap-2.5 cursor-pointer select-none group"
        >
          <Radio.Root
            value={opt.value}
            className={cn(
              "relative flex size-[18px] shrink-0 items-center justify-center rounded-full",
              "border border-zinc-700 bg-zinc-900",
              "transition-all duration-150",
              "hover:border-zinc-600",
              "data-[checked]:border-emerald-500",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/40 focus-visible:ring-offset-1 focus-visible:ring-offset-zinc-950",
            )}
          >
            <Radio.Indicator className="flex items-center justify-center w-full h-full">
              <span className="block size-[8px] rounded-full bg-emerald-500" />
            </Radio.Indicator>
          </Radio.Root>
          <span className="text-sm text-zinc-300 group-hover:text-zinc-100 transition-colors duration-150">
            {opt.label}
          </span>
        </label>
      ))}
    </RadioGroup>
  );
}

export { UIRadioGroup as default };
