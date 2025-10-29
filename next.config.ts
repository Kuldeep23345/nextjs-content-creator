import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  images: {
    domains: ["images.unsplash.com", "img.clerk.com", "ik.imagekit.io"],
  },
  reactCompiler: true,
};

export default nextConfig;
