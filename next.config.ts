import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.lummi.ai",
        port: "",
      },
    ],
  },
};

export default nextConfig;
