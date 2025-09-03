import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.thesolaceinitiative.org',
      },
    ],
  },
};

export default nextConfig;
