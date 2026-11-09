import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The whole site is static, so `next build` writes plain HTML/CSS/JS to ./out,
  // which the Cloudflare Worker serves as static assets (see wrangler.jsonc).
  output: "export",
  images: {
    // no image server on a static export: the photos in public/images are
    // already compressed to web sizes instead
    unoptimized: true,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
