// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['erp.adnencheres.com','https://erp.adnencheres.com'],
  },
  rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://erp.adnencheres.com/api/:path*', // URL réelle de votre API
      },
    ];
  },
};

module.exports = nextConfig;