"use client";
import { Avatar } from "@base-ui/react/avatar";
import { cn } from "@/lib/utils";

type Props = React.ComponentProps<typeof Avatar.Root> & {
  src?: string;
  alt?: string;
  fallback?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  shape?: "circle" | "square";
  status?: "online" | "offline" | "busy";
};

const sizeMap = {
  xs: { root: "size-6", text: "text-[0.5625rem]" },
  sm: { root: "size-8", text: "text-[0.625rem]" },
  md: { root: "size-10", text: "text-xs" },
  lg: { root: "size-12", text: "text-sm" },
  xl: { root: "size-16", text: "text-base" },
};

const statusMap = {
  online: "bg-emerald-500",
  offline: "bg-muted-foreground",
  busy:   "bg-red-500",
};

const statusSizeMap = {
  xs: "size-[7px] ring-[1.5px]",
  sm: "size-[9px] ring-2",
  md: "size-[10px] ring-2",
  lg: "size-3 ring-2",
  xl: "size-3.5 ring-2",
};

export function UIAvatar({
  src,
  alt = "Avatar",
  fallback = "AB",
  size = "md",
  shape = "circle",
  status,
  className,
  ...props
}: Props) {
  const { root, text } = sizeMap[size];

  return (
    <div className="relative inline-flex shrink-0">
      <Avatar.Root
        className={cn(
          "relative inline-flex items-center justify-center overflow-hidden",
          "border border-border/60 bg-muted",
          "ring-2 ring-card",
          shape === "circle" ? "rounded-full" : "rounded-md",
          root,
          className,
        )}
        {...props}
      >
        {src && (
          <Avatar.Image
            src={src}
            alt={alt}
            className="aspect-square h-full w-full object-cover"
          />
        )}
        <Avatar.Fallback
          className={cn(
            "flex h-full w-full items-center justify-center font-medium tracking-wide text-foreground/90 bg-muted",
            text,
          )}
          delay={0}
        >
          {fallback}
        </Avatar.Fallback>
      </Avatar.Root>

      {status && (
        <span
          className={cn(
            "absolute bottom-0 right-0 rounded-full ring-background",
            statusMap[status],
            statusSizeMap[size],
          )}
          aria-label={status}
        />
      )}
    </div>
  );
}

export { UIAvatar as default };
