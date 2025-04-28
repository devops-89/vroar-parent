import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  transpilePackages: ["mui-tel-input", "mui-one-time-password-input"],
};

export default nextConfig;
