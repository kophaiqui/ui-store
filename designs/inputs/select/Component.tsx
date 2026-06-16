"use client";
import { Select } from "@base-ui/react/select";
import { cn } from "@/lib/utils";

type Option = { label: string; value: string };

type Props = {
  options?: Option[];
  placeholder?: string;
  className?: string;
};

export function UISelect({
  options = [
    { label: "Design System", value: "ds" },
    { label: "Component Library", value: "cl" },
    { label: "Style Guide", value: "sg" },
  ],
  placeholder = "Select an option",
  className,
}: Props) {
  return (
    <Select.Root>
      <Select.Trigger
        className={cn(
          "flex h-9 w-full items-center justify-between gap-2 rounded-md border border-zinc-800 bg-zinc-900 px-3",
          "text-sm text-zinc-100",
          "shadow-[inset_0_1px_3px_rgba(0,0,0,0.3)]",
          "transition-all duration-150 hover:border-zinc-700",
          "focus:outline-none focus:border-emerald-500/70 focus:ring-2 focus:ring-emerald-500/20",
          "disabled:pointer-events-none disabled:opacity-40",
          className,
        )}
      >
        <Select.Value
          placeholder={<span className="text-zinc-500">{placeholder}</span>}
        />
        <Select.Icon className="shrink-0 text-zinc-500">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
            <path
              d="M2.5 4.5L6 8L9.5 4.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Positioner sideOffset={4}>
          <Select.Popup
            className={cn(
              "z-50 min-w-[var(--anchor-width)] overflow-hidden rounded-lg",
              "border border-zinc-800 bg-zinc-950 py-1",
              "shadow-[0_8px_32px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.04)]",
            )}
          >
            {options.map((opt) => (
              <Select.Item
                key={opt.value}
                value={opt.value}
                className={cn(
                  "flex h-8 cursor-default select-none items-center px-3 text-sm text-zinc-300",
                  "transition-colors duration-100",
                  "data-[highlighted]:bg-zinc-800 data-[highlighted]:text-zinc-100",
                  "data-[selected]:text-emerald-400",
                )}
              >
                <Select.ItemText>{opt.label}</Select.ItemText>
                <Select.ItemIndicator className="ml-auto pl-2">
                  <svg width="10" height="7" viewBox="0 0 10 7" fill="none" aria-hidden>
                    <path
                      d="M1 3.5L3.5 6L9 1"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Select.ItemIndicator>
              </Select.Item>
            ))}
          </Select.Popup>
        </Select.Positioner>
      </Select.Portal>
    </Select.Root>
  );
}

export { UISelect as default };
