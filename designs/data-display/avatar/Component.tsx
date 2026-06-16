"use client";
import { Avatar } from "@base-ui/react/avatar";
import { cn } from "@/lib/utils";

type Props = React.ComponentProps<typeof Avatar.Root> & {
  src?: string;
  alt?: string;
  fallback?: string;
  size?: "sm" | "md" | "lg" | "xl";
};

export function UIAvatar({
  src,
  alt = "Avatar",
  fallback = "AB",
  size = "md",
  className,
  ...props
}: Props) {
  return (
    <Avatar.Root
      className={cn(
        "relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full",
        "border border-zinc-700/60 bg-zinc-800",
        "ring-2 ring-zinc-900",
        size === "sm" && "size-8",
        size === "md" && "size-10",
        size === "lg" && "size-12",
        size === "xl" && "size-16",
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
          "flex h-full w-full items-center justify-center font-medium tracking-wide text-zinc-300 bg-zinc-800",
          size === "sm" && "text-[10px]",
          size === "md" && "text-xs",
          size === "lg" && "text-sm",
          size === "xl" && "text-base",
        )}
        delay={0}
      >
        {fallback}
      </Avatar.Fallback>
    </Avatar.Root>
  );
}

export { UIAvatar as default };
