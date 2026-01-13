/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_PAGES === 'true'
const basePath = isGithubPages ? '/portofolio-i' : ''

const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  
  images: {
    unoptimized: true,
  },
  
  reactStrictMode: true,
  compress: true,
  
  // Untuk GitHub Pages
  output: isGithubPages ? 'export' : undefined,
  basePath: basePath,
  assetPrefix: basePath,
  trailingSlash: true,
  
  async headers() {
    return [
      {
        source: '/img/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
}

export default nextConfig
