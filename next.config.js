
/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env["NEXT_BASE_PATH"],
  assetPrefix: process.env["NEXT_BASE_PATH"],
  reactStrictMode: true,
  swcMinify: true,
}

const withMDX = require('@next/mdx')({
  ...nextConfig,
  extension: /\.mdx?$/,
  options: {
    // If you use remark-gfm, you'll need to use next.config.mjs
    // as the package is ESM only
    // https://github.com/remarkjs/remark-gfm#install
    remarkPlugins: [],
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
})
module.exports = withMDX({
  // Append the default value with md extensions
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
})
