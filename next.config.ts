import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  distDir: ".next-vercel",
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
