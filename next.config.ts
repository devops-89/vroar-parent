import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: false,
  transpilePackages: ["mui-tel-input", "mui-one-time-password-input"],
  images: {
    domains: [
      "vroar-prod.s3.us-west-1.amazonaws.com",
      "vroar-bucket.s3.us-west-1.amazonaws.com",
      "prod-mytreks.s3.amazonaws.com",
    ],
  },
};

export default nextConfig;
