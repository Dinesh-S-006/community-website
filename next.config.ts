import type { NextConfig } from 'next';

const isProd = process.env.NODE_ENV === 'production';

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
  // Base path only for GitHub Pages production deployment
  basePath: isProd ? '/community-website' : '',
  // Remove basePath if deploying to username.github.io (custom domain or user site)
};

export default nextConfig;
