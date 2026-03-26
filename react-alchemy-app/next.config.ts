import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config) {
    config.module?.rules?.push({
      test: /\.(md|zip|sh)$/,
      loader: "ignore-loader",
    });
    return config;
  },
};

export default nextConfig;