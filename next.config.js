/** @type {import('next').NextConfig} */

const withVideos = require('next-videos')

const nextConfig = withVideos({
  reactStrictMode: true,
  swcMinify: true,

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack']
    })

    return config
  }
})

module.exports = nextConfig
