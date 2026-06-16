import createMDX from "@next/mdx";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import type { NextConfig } from "next";

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeHighlight],
  },
});

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
};

export default withMDX(nextConfig);
