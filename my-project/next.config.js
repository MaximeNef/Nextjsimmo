/** @type {import('next').NextConfig} */
const nextTranslate = require("next-translate");

const nextConfig = nextTranslate({
  webpack: (config, { isServer, webpack }) => {
    return config;
  },
  reactStrictMode: true,
  experimental: {
    images: {
      layoutRaw: true,
    },
  },
});

module.exports = nextConfig;
