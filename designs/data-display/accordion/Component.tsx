"use client";
import { Accordion } from "@base-ui/react/accordion";
import { cn } from "@/lib/utils";
import { defaultStyle } from "./styles/default";
import type { AccordionStyleConfig } from "./styles/default";

export type { AccordionStyleConfig };

type AccordionItem = { value: string; title: string; content: string };

type Props = {
  styleConfig?: AccordionStyleConfig;
  items?: AccordionItem[];
  bordered?: boolean;
  iconPosition?: "left" | "right";
  multiple?: boolean;
  defaultOpen?: string;
  className?: string;
};

function ChevronIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden
      className="shrink-0 text-muted-foreground/70 transition-transform duration-200 ease-out group-aria-[expanded=true]:rotate-180"
    >
      <path d="M2.5 5L7 9.5L11.5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function UIAccordion({
  styleConfig = defaultStyle,
  items = [
    { value: "1", title: "What is Base UI?", content: "Unstyled, accessible primitives built by the MUI team." },
    { value: "2", title: "Works with Tailwind?", content: "Yes — style any state via data attributes and arbitrary variants." },
    { value: "3", title: "Production ready?", content: "Ships with full ARIA, keyboard nav, and focus management." },
  ],
  bordered = false,
  iconPosition = "right",
  multiple = false,
  defaultOpen,
  className,
}: Props) {
  const defaultValue = defaultOpen ? [defaultOpen] : undefined;
  return (
    <Accordion.Root
      multiple={multiple}
      defaultValue={defaultValue}
      className={cn(
        styleConfig.root,
        bordered && "rounded-lg border border-border overflow-hidden",
        className,
      )}
    >
      {items.map((item) => (
        <Accordion.Item key={item.value} value={item.value}>
          <Accordion.Header>
            <Accordion.Trigger
              className={cn(
                styleConfig.trigger,
                iconPosition === "right" ? "justify-between" : "gap-3 justify-start",
                bordered && "px-4",
              )}
            >
              {iconPosition === "left" && <ChevronIcon />}
              {item.title}
              {iconPosition === "right" && <ChevronIcon />}
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Panel
            className={cn(styleConfig.panel, bordered && "px-4")}
          >
            {item.content}
          </Accordion.Panel>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}

export { UIAccordion as default };
