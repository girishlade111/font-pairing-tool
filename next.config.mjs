/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/font-pairing-tool',
  assetPrefix: '/font-pairing-tool/',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig