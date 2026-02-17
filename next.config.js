/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
        port: '',
        pathname: '/**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    unoptimized: false, // Allow Next.js image optimization for localhost
  },
  compiler: {
    styledComponents: true,
  },
  trailingSlash: false,
  // Remove static export configuration for localhost development
  // output: 'export',
  // distDir: 'out',
  // basePath: '',
  // assetPrefix: '',
}

module.exports = nextConfig
