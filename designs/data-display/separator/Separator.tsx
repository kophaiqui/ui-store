"use client";
import { Separator } from "@base-ui/react/separator";
import { cn } from "@/lib/utils";
import type { SeparatorStyleConfig } from "./styles/default";

export type { SeparatorStyleConfig };

type Props = React.ComponentProps<typeof Separator> & {
  styleConfig: SeparatorStyleConfig;
};

export function UISeparator({ styleConfig, className, ...props }: Props) {
  return <Separator className={cn(styleConfig.root, className)} {...props} />;
}
