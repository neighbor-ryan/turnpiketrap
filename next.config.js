/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env["NEXT_BASE_PATH"],
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
