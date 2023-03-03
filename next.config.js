/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["weavement-public-images.s3.ap-northeast-2.amazonaws.com"],
    imageSizes: [16, 96, 128],
    deviceSizes: [640, 768, 1024, 1440],
  },
};

module.exports = nextConfig;
