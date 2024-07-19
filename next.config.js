// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [process.env.NEXT_PUBLIC_API_URL,`https://${process.env.NEXT_PUBLIC_API_URL}`],
  },
  rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${process.env.NEXT_PUBLIC_API_BASE_URL}/:path*`, // Utilisez la variable d'environnement ici
      },
      {
        source: '/api/proxy/:path*',
        destination: '/api/proxy/:path*', // Ceci empêche le rewrite pour la route proxy
      },
    ];
  },
};

module.exports = nextConfig;