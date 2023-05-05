/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['i.scdn.co', "api.spotify.com", 'mosaic.scdn.co']
  },
}

module.exports = nextConfig
