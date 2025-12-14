import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.dicebear.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // Base path for GitHub Pages (will be your repo name)
  basePath: '/community-website',
  // Remove basePath if deploying to username.github.io (custom domain or user site)
};

export default nextConfig;
