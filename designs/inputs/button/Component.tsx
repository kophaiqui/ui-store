"use client";
import { Button } from "@base-ui/react/button";
import { cn } from "@/lib/utils";

export type ButtonVariant = "solid" | "outline" | "ghost" | "soft" | "link" | "destructive";
export type ButtonSize = "sm" | "md" | "lg";
export type ButtonShape = "default" | "pill" | "square";

type Props = Omit<React.ComponentProps<typeof Button>, "disabled"> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  shape?: ButtonShape;
  loading?: boolean;
  disabled?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
  type?: "button" | "submit" | "reset";
};

const sizeMap: Record<ButtonSize, { base: string; square: string; text: string }> = {
  sm: { base: "h-7 px-3 gap-1.5",  square: "size-7",  text: "text-xs" },
  md: { base: "h-9 px-4 gap-2",    square: "size-9",  text: "text-sm" },
  lg: { base: "h-11 px-6 gap-2.5", square: "size-11", text: "text-base" },
};

const spinnerSize: Record<ButtonSize, number> = { sm: 12, md: 14, lg: 16 };

function Spinner({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden
      className="shrink-0 animate-spin"
    >
      <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.25" />
      <path
        d="M8 2a6 6 0 0 1 6 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function UIButton({
  children = "Button",
  variant = "solid",
  size = "md",
  shape = "default",
  loading = false,
  disabled = false,
  icon,
  iconPosition = "left",
  fullWidth = false,
  type = "button",
  className,
  ...props
}: Props) {
  const s = sizeMap[size];
  const isDisabled = disabled || loading;

  const leadingIcon = !loading && icon && iconPosition === "left" ? icon : null;
  const trailingIcon = !loading && icon && iconPosition === "right" ? icon : null;

  return (
    <Button
      disabled={isDisabled}
      type={type}
      className={cn(
        "inline-flex items-center justify-center font-medium whitespace-nowrap",
        "transition-all duration-150 ease-out",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        !isDisabled && "active:scale-[0.97] active:-translate-y-px",
        loading && "cursor-wait",
        fullWidth && "w-full",
        shape === "default" && "rounded-md",
        shape === "pill"    && "rounded-full",
        shape === "square"  && "rounded-md",
        variant !== "link" && (shape === "square" ? `${s.square} ${s.text}` : `${s.base} ${s.text}`),
        variant === "link"  && s.text,
        variant === "solid" && cn(
          "bg-primary text-primary-foreground",
          "shadow-[0_1px_2px_rgba(0,0,0,0.4)]",
          !isDisabled && "hover:bg-primary/90 hover:shadow-[0_2px_6px_rgba(0,0,0,0.5)]",
          isDisabled && "opacity-40",
          "focus-visible:ring-emerald-500/50",
        ),
        variant === "outline" && cn(
          "border border-border bg-transparent text-foreground",
          !isDisabled && "hover:border-input hover:bg-muted/60",
          isDisabled && "opacity-40",
          "focus-visible:ring-emerald-500/50",
        ),
        variant === "ghost" && cn(
          "bg-transparent text-muted-foreground",
          !isDisabled && "hover:bg-muted hover:text-foreground",
          isDisabled && "opacity-40",
          "focus-visible:ring-emerald-500/50",
        ),
        variant === "soft" && cn(
          "bg-muted text-foreground",
          !isDisabled && "hover:bg-accent",
          isDisabled && "opacity-40",
          "focus-visible:ring-emerald-500/50",
        ),
        variant === "link" && cn(
          "bg-transparent text-foreground/90 underline-offset-4 px-0 rounded-none h-auto",
          !isDisabled && "hover:text-foreground hover:underline",
          isDisabled && "opacity-40",
          "focus-visible:ring-emerald-500/50",
        ),
        variant === "destructive" && cn(
          "bg-red-500/10 border border-red-500/20 text-red-400",
          !isDisabled && "hover:bg-red-500/20 hover:border-red-500/30 hover:text-red-300",
          isDisabled && "opacity-40",
          "focus-visible:ring-red-500/50",
        ),
        className,
      )}
      {...props}
    >
      {loading && <Spinner size={spinnerSize[size]} />}
      {leadingIcon}
      {children}
      {trailingIcon}
    </Button>
  );
}

export { UIButton as default };
