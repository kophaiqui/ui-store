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
  loadingPosition?: "start" | "center";
  disabled?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  iconOnly?: boolean;
  fullWidth?: boolean;
  type?: "button" | "submit" | "reset";
  pressed?: boolean;
};

const sizeMap: Record<ButtonSize, { base: string; square: string; text: string }> = {
  sm: { base: "h-7 px-3 gap-1.5",  square: "size-7",  text: "text-xs" },
  md: { base: "h-9 px-4 gap-2",    square: "size-9",  text: "text-sm" },
  lg: { base: "h-11 px-6 gap-2.5", square: "size-11", text: "text-base" },
};

const AUTO_ICON = (
  <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M3 8h10M9 4l4 4-4 4" />
  </svg>
);

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
  loadingPosition = "start",
  disabled = false,
  icon: iconProp,
  iconPosition = "left",
  iconOnly = false,
  pressed,
  fullWidth = false,
  type = "button",
  className,
  ...props
}: Props) {
  const s = sizeMap[size];
  const isDisabled = disabled || loading;
  // "square" shape = no border-radius with normal sizing; only iconOnly forces fixed square size
  const effectiveShape = iconOnly ? "square" : shape;
  const centerLoading = loading && loadingPosition === "center";
  const startLoading = loading && loadingPosition === "start";

  // "auto" is a sentinel injected by the PropExplorer demo system
  const icon = iconProp === ("auto" as unknown) ? AUTO_ICON : iconProp;
  // When iconOnly with no icon provided, show the built-in fallback so the demo is meaningful
  const resolvedIcon = iconOnly && !icon ? AUTO_ICON : icon;

  const showSpinner = centerLoading || startLoading;
  const leadingIcon = !showSpinner && resolvedIcon && iconPosition === "left" ? resolvedIcon : null;
  const trailingIcon = !showSpinner && resolvedIcon && iconPosition === "right" ? resolvedIcon : null;

  return (
    <Button
      disabled={isDisabled}
      type={type}
      aria-pressed={pressed}
      className={cn(
        "inline-flex items-center justify-center font-medium whitespace-nowrap",
        "transition-all duration-150 ease-out",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        !isDisabled && "active:scale-[0.97] active:-translate-y-px",
        loading && "cursor-wait",
        fullWidth && "w-full",
        // border-radius: square = no radius, pill = full, default = md
        effectiveShape === "default" && "rounded-md",
        effectiveShape === "pill"    && "rounded-full",
        effectiveShape === "square"  && "rounded-none",
        // sizing: iconOnly forces fixed square size; shape="square" keeps normal h/px
        variant !== "link" && (iconOnly ? `${s.square} ${s.text}` : `${s.base} ${s.text}`),
        variant === "link" && s.text,
        variant === "solid" && cn(
          "text-primary-foreground",
          "focus-visible:ring-emerald-500/50",
          pressed === true
            ? "bg-primary/80 shadow-inner translate-y-[1px]"
            : cn(
                "bg-primary shadow-[0_1px_2px_rgba(0,0,0,0.4)]",
                !isDisabled && "hover:bg-primary/90 hover:shadow-[0_2px_6px_rgba(0,0,0,0.5)]",
              ),
          isDisabled && "opacity-40",
        ),
        variant === "outline" && cn(
          "bg-transparent text-foreground",
          "focus-visible:ring-emerald-500/50",
          pressed === true
            ? "border border-primary bg-primary/10"
            : cn(
                "border border-border",
                !isDisabled && "hover:border-input hover:bg-muted/60",
              ),
          isDisabled && "opacity-40",
        ),
        variant === "ghost" && cn(
          "focus-visible:ring-emerald-500/50",
          pressed === true
            ? "bg-muted text-foreground"
            : cn(
                "bg-transparent text-muted-foreground",
                !isDisabled && "hover:bg-muted hover:text-foreground",
              ),
          isDisabled && "opacity-40",
        ),
        variant === "soft" && cn(
          "text-foreground",
          "focus-visible:ring-emerald-500/50",
          pressed === true
            ? "bg-accent"
            : cn(
                "bg-muted",
                !isDisabled && "hover:bg-accent",
              ),
          isDisabled && "opacity-40",
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
      {centerLoading ? (
        <Spinner size={spinnerSize[size]} />
      ) : (
        <>
          {startLoading && <Spinner size={spinnerSize[size]} />}
          {leadingIcon}
          {!iconOnly && children}
          {trailingIcon}
        </>
      )}
    </Button>
  );
}

export { UIButton as default };
