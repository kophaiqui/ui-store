"use client";
import { Avatar } from "@base-ui/react/avatar";
import { cn } from "@/lib/utils";
import { defaultStyle } from "./styles/default";
import type { AvatarStyleConfig, AvatarSize, AvatarStatus } from "./styles/default";

export type { AvatarStyleConfig, AvatarSize, AvatarStatus };

type Props = React.ComponentProps<typeof Avatar.Root> & {
  styleConfig?: AvatarStyleConfig;
  src?: string;
  alt?: string;
  fallback?: string;
  fallbackType?: "text" | "icon";
  size?: AvatarSize;
  shape?: "circle" | "square";
  status?: AvatarStatus;
  bordered?: boolean;
};

function UserIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10ZM12 14c-5.33 0-8 2.67-8 4v1h16v-1c0-1.33-2.67-4-8-4Z" />
    </svg>
  );
}

export function UIAvatar({
  styleConfig = defaultStyle,
  src,
  alt = "Avatar",
  fallback = "AB",
  fallbackType = "text",
  size = "md",
  shape = "circle",
  status,
  bordered = false,
  className,
  ...props
}: Props) {
  const { root, text } = styleConfig.sizes[size];
  const shapeClass = shape === "circle" ? styleConfig.shapes.circle : styleConfig.shapes.square;

  return (
    <div className="relative inline-flex shrink-0">
      <Avatar.Root
        className={cn(
          styleConfig.root,
          shapeClass,
          root,
          // bordered prop overrides the default ring-card with an accent ring
          bordered && "ring-2 ring-emerald-500/60",
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
          className={cn(styleConfig.fallback, text)}
          delay={0}
        >
          {fallbackType === "icon" ? (
            <UserIcon className="w-[55%] h-[55%] text-foreground/60" />
          ) : (
            fallback
          )}
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

export { UIAvatar as default };
