import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'loremflickr.com', // MockAPI uses this
      },
      {
        protocol: 'https',
        hostname: '**.mockapi.io',
      },
    
    ],
  },
};

export default nextConfig;


