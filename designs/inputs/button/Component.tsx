"use client";
import { Button } from "@base-ui/react/button";
import { cn } from "@/lib/utils";
import { defaultStyle } from "./styles/default";
import type { ButtonStyleConfig } from "./styles/default";

export type { ButtonStyleConfig };
export type ButtonVariant = "solid" | "outline" | "ghost" | "soft" | "link" | "destructive";
export type ButtonSize = "sm" | "md" | "lg";
export type ButtonShape = "default" | "pill" | "square";

type Props = Omit<React.ComponentProps<typeof Button>, "disabled"> & {
  styleConfig?: ButtonStyleConfig;
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

const spinnerSize: Record<ButtonSize, number> = { sm: 12, md: 14, lg: 16 };

const AUTO_ICON = (
  <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M3 8h10M9 4l4 4-4 4" />
  </svg>
);

function Spinner({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden className="shrink-0 animate-spin">
      <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.25" />
      <path d="M8 2a6 6 0 0 1 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function UIButton({
  styleConfig = defaultStyle,
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
  const s = styleConfig.sizes[size];
  const v = styleConfig.variants[variant];
  const isDisabled = disabled || loading;
  const effectiveShape = iconOnly ? "square" : shape;
  const centerLoading = loading && loadingPosition === "center";
  const startLoading = loading && loadingPosition === "start";

  const icon = iconProp === ("auto" as unknown) ? AUTO_ICON : iconProp;
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
        styleConfig.base,
        !isDisabled && !pressed && "active:scale-[0.97] active:-translate-y-px",
        loading && "cursor-wait",
        fullWidth && "w-full",
        effectiveShape === "default" && styleConfig.shapes.default,
        effectiveShape === "pill"    && styleConfig.shapes.pill,
        effectiveShape === "square"  && "rounded-none",
        variant !== "link" && (iconOnly ? cn(s.square, s.text) : cn(s.base, s.text)),
        variant === "link" && s.text,
        v.base,
        !isDisabled && !pressed && v.hover,
        v.focus,
        isDisabled && styleConfig.disabled,
        // pressed state: override the base variant colors via tailwind-merge
        pressed === true && variant === "solid"       && "bg-primary/80 shadow-inner translate-y-[1px]",
        pressed === true && variant === "outline"     && "border-primary bg-primary/10",
        pressed === true && variant === "ghost"       && "bg-muted text-foreground",
        pressed === true && variant === "soft"        && "bg-accent",
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
