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
    // Serve originals directly instead of routing through the image optimizer.
    // Our project screenshots are very tall (some >20,000px), which exceeds the
    // optimizer/CDN max-dimension cap and causes broken images on the deployed
    // site. Bypassing optimization keeps full retina quality and renders them
    // reliably (also removes the image-optimizer attack surface).
    unoptimized: true,
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
