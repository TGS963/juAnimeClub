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
      {
        protocol:'https',
        hostname: 'pbs.twimg.com',
      }
    ],
  }
}

module.exports = nextConfig