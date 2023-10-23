// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [`${process.env.NEXT_PUBLIC_URL}`,`https://${process.env.NEXT_PUBLIC_URL}`],
  },
  rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `https://${process.env.NEXT_PUBLIC_URL}/api/:path*`, // URL réelle de votre API
      },
    ];
  },
};

module.exports = nextConfig;