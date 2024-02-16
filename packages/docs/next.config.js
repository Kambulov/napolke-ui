const withMDX = require('@next/mdx')({
  extension: /\.(md|mdx)?$/,
  options: {
    rehypePlugins: [
      require('@mapbox/rehype-prism'),
      require('rehype-join-line')
    ]
  }
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
            transpileOnly: true
          }
        }
      ]
    })

    return config
  }
})

