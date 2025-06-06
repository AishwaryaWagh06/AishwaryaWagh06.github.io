/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '',
  assetPrefix: '',
  trailingSlash: true,
  distDir: 'out',
  images: {
    loader: 'custom',
    loaderFile: './src/image-loader.ts',
  }
}

module.exports = nextConfig 