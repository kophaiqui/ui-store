import type { MDXComponents } from "mdx/types";
import type { ReactNode } from "react";

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[`*_[\]()]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]/g, "");
}

function headingText(children: ReactNode): string {
  if (typeof children === "string") return children;
  if (Array.isArray(children)) return children.map(headingText).join("");
  if (children && typeof children === "object" && "props" in (children as object)) {
    return headingText((children as { props: { children?: ReactNode } }).props.children);
  }
  return "";
}

// mdxRs emits "\n" text nodes as direct children of table elements, which is
// invalid HTML and causes React to throw during render. Strip them out here.
function clean(children: ReactNode): ReactNode {
  if (Array.isArray(children)) {
    return children.filter((c) => !(typeof c === "string" && !c.trim()));
  }
  return children;
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h2: ({ children, ...props }) => {
      const id = slugify(headingText(children));
      return <h2 id={id} {...props}>{children}</h2>;
    },
    h3: ({ children, ...props }) => {
      const id = slugify(headingText(children));
      return <h3 id={id} {...props}>{children}</h3>;
    },
    table: ({ children, ...props }) => (
      <div className="my-4 overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-sm" {...props}>
          {clean(children)}
        </table>
      </div>
    ),
    thead: ({ children, ...props }) => (
      <thead className="border-b border-border bg-muted/40" {...props}>
        {clean(children)}
      </thead>
    ),
    tbody: ({ children, ...props }) => (
      <tbody className="divide-y divide-border" {...props}>
        {clean(children)}
      </tbody>
    ),
    tr: ({ children, ...props }) => <tr {...props}>{clean(children)}</tr>,
    th: ({ children, ...props }) => (
      <th className="px-4 py-2.5 text-left font-medium text-foreground" {...props}>
        {children}
      </th>
    ),
    td: ({ children, ...props }) => (
      <td className="px-4 py-2.5 text-muted-foreground" {...props}>
        {children}
      </td>
    ),
    ...components,
  };
}
