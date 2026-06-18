"use client";
import { Separator } from "@base-ui/react/separator";
import { cn } from "@/lib/utils";
import { defaultStyle } from "./styles/default";
import type { SeparatorStyleConfig } from "./styles/default";

export type { SeparatorStyleConfig };

type Props = React.ComponentProps<typeof Separator> & {
  styleConfig?: SeparatorStyleConfig;
};

export function UISeparator({ styleConfig = defaultStyle, className, ...props }: Props) {
  return (
    <Separator
      className={cn(styleConfig.root, className)}
      {...props}
    />
  );
}

export { UISeparator as default };
