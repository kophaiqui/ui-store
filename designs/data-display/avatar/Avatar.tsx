"use client";
import { Avatar } from "@base-ui/react/avatar";
import { cn } from "@/lib/utils";
import type { AvatarStyleConfig } from "./styles/default";

export type { AvatarStyleConfig };
export type AvatarSize = "xs" | "sm" | "md" | "lg" | "xl";
export type AvatarShape = "circle" | "square";
export type AvatarStatus = "online" | "offline" | "busy";

type Props = React.ComponentProps<typeof Avatar.Root> & {
  src?: string;
  alt?: string;
  fallback?: string;
  size?: AvatarSize;
  shape?: AvatarShape;
  status?: AvatarStatus;
  styleConfig: AvatarStyleConfig;
};

export function UIAvatar({ styleConfig, src, alt = "Avatar", fallback = "AB", size = "md", shape = "circle", status, className, ...props }: Props) {
  const { root, text } = styleConfig.sizes[size];

  return (
    <div className="relative inline-flex shrink-0">
      <Avatar.Root
        className={cn(
          styleConfig.root,
          shape === "circle" ? styleConfig.shapes.circle : styleConfig.shapes.square,
          root,
          className,
        )}
        {...props}
      >
        {src && <Avatar.Image src={src} alt={alt} className="aspect-square h-full w-full object-cover" />}
        <Avatar.Fallback className={cn(styleConfig.fallback, text)} delay={0}>
          {fallback}
        </Avatar.Fallback>
      </Avatar.Root>

      {status && (
        <span
          className={cn(
            "absolute bottom-0 right-0 rounded-full",
            styleConfig.status[status],
            styleConfig.statusSizes[size],
          )}
          aria-label={status}
        />
      )}
    </div>
  );
}
