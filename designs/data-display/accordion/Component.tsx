"use client";
import { Accordion } from "@base-ui/react/accordion";
import { cn } from "@/lib/utils";

type AccordionItem = { value: string; title: string; content: string };

type Props = {
  items?: AccordionItem[];
  className?: string;
};

export function UIAccordion({
  items = [
    {
      value: "1",
      title: "What is Base UI?",
      content:
        "Base UI is an open-source component library maintained by the MUI team, providing unstyled, accessible primitives for building design systems.",
    },
    {
      value: "2",
      title: "How does it work with Tailwind?",
      content:
        "Base UI components expose data attributes for state — combine them with Tailwind's arbitrary variant syntax to style any interactive state cleanly.",
    },
    {
      value: "3",
      title: "Is it production ready?",
      content:
        "Yes. Base UI ships with full ARIA compliance, keyboard navigation, and focus management out of the box.",
    },
  ],
  className,
}: Props) {
  return (
    <Accordion.Root className={cn("w-full divide-y divide-border", className)}>
      {items.map((item) => (
        <Accordion.Item key={item.value} value={item.value}>
          <Accordion.Header>
            <Accordion.Trigger
              className={cn(
                "group flex w-full items-center justify-between py-4",
                "text-sm font-medium text-foreground/90 hover:text-foreground",
                "transition-colors duration-150",
                "focus-visible:outline-none",
                "cursor-default select-none",
              )}
            >
              {item.title}
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                aria-hidden
                className="shrink-0 text-muted-foreground/70 transition-transform duration-200 ease-out group-aria-[expanded=true]:rotate-180"
              >
                <path
                  d="M2.5 5L7 9.5L11.5 5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Panel className="pb-4 text-sm text-muted-foreground leading-relaxed">
            {item.content}
          </Accordion.Panel>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}

export { UIAccordion as default };
