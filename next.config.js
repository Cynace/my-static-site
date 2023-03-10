/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/my-static-site',
  assetPrefix: '/my-static-site/',
  trailingSlash: true,
}

module.exports = nextConfig
