/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.alphacoders.com',
        pathname: "/*/**"
      },
    ],
  }
}

module.exports = nextConfig