/** @type {import('next').NextConfig} */
const nextConfig = {

  images: {
    minimumCacheTTL: 7200 // 2 hours
  },

    async headers() {
        return [
          {
            source: '/:path*',
            headers: [
            {
              key: 'Strict-Transport-Security',
              value: 'max-age=63072000; includeSubDomains; preload'
            },
            {
              key: 'X-Frame-Options',
              value: 'SAMEORIGIN'
            },
            {
              key: 'X-Content-Type-Options',
              value: 'nosniff'
            }
            ],
          },
        ]
      },
}

module.exports = nextConfig
