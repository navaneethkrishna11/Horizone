import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   images: {
      unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // MockAPI uses this
      },
      {
        protocol: 'https',
        hostname: '**.mockapi.io',
      },
    
    ],
  },
};

export default nextConfig;


