import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  experimental: {
    mdxRs: {
      mdxType: "gfm",
    },
  },
};

export default nextConfig;
