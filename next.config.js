/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["weavement-public-images.s3.ap-northeast-2.amazonaws.com"],
    images: {
      imageSizes: [16, 96, 128],
      deviceSizes: [640, 1200, 1920],
    },
  },
};

module.exports = nextConfig;
