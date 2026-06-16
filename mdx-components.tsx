import type { MDXComponents } from "mdx/types";

// mdxRs emits whitespace text nodes inside table elements, which is invalid HTML.
// These overrides suppress the hydration mismatch without changing visual output.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    table: ({ children, ...props }) => (
      <div className="my-4 overflow-x-auto">
        <table suppressHydrationWarning {...props}>{children}</table>
      </div>
    ),
    thead: ({ children, ...props }) => (
      <thead suppressHydrationWarning {...props}>{children}</thead>
    ),
    tbody: ({ children, ...props }) => (
      <tbody suppressHydrationWarning {...props}>{children}</tbody>
    ),
    tr: ({ children, ...props }) => (
      <tr suppressHydrationWarning {...props}>{children}</tr>
    ),
    ...components,
  };
}
