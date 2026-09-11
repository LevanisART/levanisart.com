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
  sassOptions: {
    // Silence Dart Sass deprecation noise on every rebuild. `legacy-js-api`
    // and `import` originate from Next.js internals (not our stylesheet);
    // `mixed-decls` is legacy ordering in globals.scss.
    silenceDeprecations: ['legacy-js-api', 'import', 'mixed-decls'],
  },
  trailingSlash: false,
  // Remove static export configuration for localhost development
  // output: 'export',
  // distDir: 'out',
  // basePath: '',
  // assetPrefix: '',
}

module.exports = nextConfig
