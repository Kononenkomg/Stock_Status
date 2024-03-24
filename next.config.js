/** @type {import('next').NextConfig} */

// we can change url for prod env here
const baseUrl = ''
const isProd = false
const assertPrefix = isProd ? baseUrl : ''

const nextConfig = {
  reactStrictMode: true,
  basePath: baseUrl,
  compiler: {
    styledComponents: {
      ssr: true,
    },
  },
  rewrites: async () => {
    return {
      beforeFiles: [
        {
          source: `${assertPrefix}/_next/:path*`,
          destination: '/_next/:path*',
        },
      ],
      fallback: [
        {
          source: `${baseUrl}/api/:path*`,
          destination: '/api/:path*',
        },
      ],
    }
  },
  async headers() {
    return [
      {
        // matching all API routes
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Credentials', value: 'true' },
          { key: 'Access-Control-Allow-Origin', value: '*' },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT',
          },
          {
            key: 'Access-Control-Allow-Headers',
            value:
              'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
