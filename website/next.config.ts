import type { NextConfig } from "next";

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: [
      "bright",
      "eslint",
      "prettier",
      "postcss",
      "sharp",
      "typescript",
      "@vercel/analytics",
      "@vercel/speed-insights",
      "framer-motion",
      "lodash-es",
      "next",
      "react",
      "react-dom",
      "react-icons",
      "react-share",
    ],
    serverSourceMaps: false,
    webpackBuildWorker: true,
    webpackMemoryOptimizations: true,
  },
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  reactStrictMode: true,
};

export default withBundleAnalyzer(nextConfig);
