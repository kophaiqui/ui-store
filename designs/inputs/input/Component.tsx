"use client";
import { Input } from "@base-ui/react/input";
import { cn } from "@/lib/utils";

export function UIInput({ className, ...props }: React.ComponentProps<typeof Input>) {
  return (
    <Input
      className={cn(
        "flex h-9 w-full rounded-md border border-zinc-800 bg-zinc-900 px-3",
        "text-sm text-zinc-100 placeholder:text-zinc-500",
        "shadow-[inset_0_1px_3px_rgba(0,0,0,0.3)]",
        "transition-all duration-150",
        "hover:border-zinc-700",
        "focus:outline-none focus:border-emerald-500/70 focus:ring-2 focus:ring-emerald-500/20",
        "disabled:pointer-events-none disabled:opacity-40",
        "read-only:bg-zinc-900/40 read-only:cursor-default",
        className,
      )}
      {...props}
    />
  );
}

export { UIInput as default };
