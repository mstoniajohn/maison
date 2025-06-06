const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.cdninstagram.com',
        port: '',
      },
    ],
    domains: [
      'res.cloudinary.com',
      'ibighit.com',
      'vitals.vercel-insights.com',
      'www.rockhouse.com',
      'images.ctfassets.net',
      'skylarknegril.com',
      'firebasestorage.googleapis.com',
      'scontent-ord5-2.cdninstagram.com',
      'scontent-ord5-1.cdninstagram.com',
      'content-lga3-2.cdninstagram.com',
      'scontent-lga3-2.cdninstagram.com',
      'scontent-lga3-1.cdninstagram.com',
      'cdninstagram.com',
      'localhost',
    ],
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  // typescript: {

  //   ignoreBuildErrors: true,
  // },
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
  webpack(config, { isServer }) {
    if (!isServer) {
      // Temporarily disable CSS minification for client-side builds
      config.optimization.minimize = false
    }
    swcMinify = false

    return config
  },
}

module.exports = nextConfig
