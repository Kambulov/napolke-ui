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
})