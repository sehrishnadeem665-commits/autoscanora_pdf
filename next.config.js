/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  transpilePackages: ['@paddle/paddle-js'],
  images: { unoptimized: true },
  headers: async () => {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "frame-ancestors 'self' https://buy.paddle.com https://checkout-service.paddle.com",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;