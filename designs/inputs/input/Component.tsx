"use client";
import { Input } from "@base-ui/react/input";
import { cn } from "@/lib/utils";

type Props = Omit<React.ComponentProps<typeof Input>, "size"> & {
  variant?: "outline" | "filled" | "ghost";
  size?: "sm" | "md" | "lg";
  error?: boolean | string;
  prefixIcon?: React.ReactNode;
  suffixIcon?: React.ReactNode;
};

const sizeMap = {
  sm: "h-7 text-xs px-2.5",
  md: "h-9 text-sm px-3",
  lg: "h-11 text-base px-4",
};

export function UIInput({
  variant = "outline",
  size = "md",
  error,
  prefixIcon,
  suffixIcon,
  className,
  ...props
}: Props) {
  const hasError = Boolean(error);

  const base = cn(
    "flex w-full rounded-md",
    sizeMap[size],
    "text-zinc-100 placeholder:text-zinc-500",
    "transition-all duration-150",
    "focus:outline-none focus:ring-2",
    "disabled:pointer-events-none disabled:opacity-40",
    "read-only:cursor-default",
    // variant
    variant === "outline" && cn(
      "border bg-zinc-900 shadow-[inset_0_1px_3px_rgba(0,0,0,0.3)]",
      hasError
        ? "border-red-500/70 focus:border-red-500/70 focus:ring-red-500/20"
        : "border-zinc-800 hover:border-zinc-700 focus:border-emerald-500/70 focus:ring-emerald-500/20",
    ),
    variant === "filled" && cn(
      "border-0 bg-zinc-800",
      hasError
        ? "ring-2 ring-red-500/40"
        : "hover:bg-zinc-700/80 focus:bg-zinc-700 focus:ring-emerald-500/20",
    ),
    variant === "ghost" && cn(
      "border-0 bg-transparent shadow-none",
      hasError
        ? "ring-2 ring-red-500/40"
        : "hover:bg-zinc-800/60 focus:bg-zinc-800/60 focus:ring-emerald-500/20",
    ),
  );

  if (!prefixIcon && !suffixIcon) {
    return (
      <div className="w-full">
        <Input className={cn(base, className)} {...props} />
        {typeof error === "string" && error && (
          <p className="mt-1 text-xs text-red-400">{error}</p>
        )}
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="relative flex items-center">
        {prefixIcon && (
          <span className="pointer-events-none absolute left-3 flex items-center text-zinc-500">
            {prefixIcon}
          </span>
        )}
        <Input
          className={cn(
            base,
            prefixIcon && "pl-8",
            suffixIcon && "pr-8",
            className,
          )}
          {...props}
        />
        {suffixIcon && (
          <span className="pointer-events-none absolute right-3 flex items-center text-zinc-500">
            {suffixIcon}
          </span>
        )}
      </div>
      {typeof error === "string" && error && (
        <p className="mt-1 text-xs text-red-400">{error}</p>
      )}
    </div>
  );
}

export { UIInput as default };
