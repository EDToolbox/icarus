/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  distDir: 'build',
  images: {
    unoptimized: true
  },
  experimental: {
    esmExternals: false
  }
}

module.exports = nextConfig