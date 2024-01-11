const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    providerImportSource: '@mdx-js/react',
  },
})
module.exports = withMDX({
  // Append the default value with md extensions
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
  basePath: process.env.VERSION ? `/${process.env.VERSION}` : undefined,
  webpack: (config, { defaultLoaders }) => {
    config.module.rules.push({
      test: /\.tsx?$/,
      use: [
        defaultLoaders.babel,
        {
          loader: 'ts-loader',
          options: {
            transpileOnly: true,
          },
        },
      ],
    });

    return config;
  },
  async redirects() {
    return [
      {
        source: '/',
        permanent: true,
        destination: '/ru-ru',
      },
      {
        source: '/icons',
        permanent: true,
        destination: '/ru-ru/components/icons',
      },
      {
        source: '/ru-ru/customization',
        destination: '/ru-ru',
        permanent: true,
      },
      {
        source: '/en-us/customization',
        destination: '/en-us',
        permanent: true,
      },
      {
        source: '/en-us/guide/scaleable',
        destination: '/en-us/guide/scale',
        permanent: true,
      },
      {
        source: '/en-us/guide/scaleable',
        destination: '/en-us/guide/scale',
        permanent: true,
      },
    ]
  },
})