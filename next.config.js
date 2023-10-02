/** @type {import('next').NextConfig} */
const nextConfig = {
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
            }
            ],
          },
        ]
      },
}

module.exports = nextConfig
