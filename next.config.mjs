/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/:path((?!screens).*)',
        destination: '/screens/:path*',
      },
    ];
  },
};

export default nextConfig;