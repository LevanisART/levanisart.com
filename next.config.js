/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['i.ibb.co'],
    formats: ['image/avif', 'image/webp'],
    unoptimized: true, // Required for static export
  },
  compiler: {
    styledComponents: true,
  },
  trailingSlash: false,
  output: 'export',
  distDir: 'out',
  basePath: '',
  assetPrefix: '',
}

module.exports = nextConfig
