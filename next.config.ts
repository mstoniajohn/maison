// @ts-check

import { hostname } from 'os'

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.cdninstagram.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: '**.scontent-ord5-2.cdninstagram.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: '**.scontent-ord5-1.cdninstagram.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: '**.scontent-lga3-2.cdninstagram.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: '**.scontent-lga3-1.cdninstagram.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: '**.cdninstagram.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: '**.firebasestorage.googleapis.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: '**.skylarknegril.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: '**.images.ctfassets.net',
        port: '',
      },
      {
        protocol: 'https',
        hostname: '**.rockhouse.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: '**.vitals.vercel-insights.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: '**.ibighit.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: '**.res.cloudinary.com',
        port: '',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '',
      },
    ],

    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  async redirects() {
    return [
      {
        source: '/guests',
        destination: '/stay',
        permanent: true,
      },
      {
        source: '/request-your-vacation-guide',
        destination: '/negril-guide',
        permanent: true,
      },
      {
        source: '/blog/montego-bay-airport-to-negril',
        destination: '/blog/getting-from-montego-bay-airport-to-negril',
        permanent: true,
      },
      {
        source:
          '/blog/rockhouse-foundations-savanna-la-mar-inclusive-infant-academy',
        destination: '/blog/an-update-from-the-rockhouse-foundation',
        permanent: true,
      },
      {
        source: '/blog/best-places-to-eat-in-jamaica',
        destination: '/blog/best-restaurants-in-negril',
        permanent: true,
      },
      {
        source: '/blog/secluded-beaches-in-jamaica',
        destination: '/blog/best-beaches-in-negril',
        permanent: true,
      },
      {
        source: '/blog/waterfalls-in-negril-jamaica',
        destination: '/blog/best-waterfalls-in-negril',
        permanent: true,
      },
      {
        source: '/blog/golf-in-negril-jamaica',
        destination: '/blog/where-to-golf-in-jamaica',
        permanent: true,
      },
      {
        source: '/blog/negril-nightlife',
        destination: '/blog/best-nightlife-bars-in-negril',
        permanent: true,
      },
      {
        source: '/blog/snorkeling-in-negril-jamaica',
        destination: '/blog/best-snorkeling-in-negril',
        permanent: true,
      },

      // blog/events-in-negril-jamaica
      // {
      //   source: '/press-media',
      //   destination: '/awards-press',
      //   permanent: true,
      // },
      // {
      //   source: '/press-awards',
      //   destination: '/awards-press',
      //   permanent: true,
      // },
      // {
      //   source: '/blog-best-restaurants-in-jamaica',
      //   destination: '/blog/best-places-to-eat-in-jamaica',
      //   permanent: true,
      // },
      // {
      //   source: '/sleep',
      //   destination: '/all-guest-rooms',
      //   permanent: true,
      // },
      // {
      //   source: '/escape',
      //   destination: '/',
      //   permanent: true,
      // },
      // {
      //   source: '/rates',
      //   destination: '/book',
      //   permanent: true,
      // },
    ]
  },
  //   @ts-ignore
  webpack(config, { isServer }) {
    if (!isServer) {
      // Temporarily disable CSS minification for client-side builds
      config.optimization.minimize = false
    }
    // swcMinify = false

    return config
  },
}

module.exports = nextConfig
