/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [process.env.NEXT_PUBLIC_SERVER_DOMAIN],
  },
};

module.exports = nextConfig;
