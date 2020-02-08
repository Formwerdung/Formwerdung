const path = require('path')

// Export a function. Accept the base config as the only param.
module.exports = {
  stories: ['../stories/**/*.stories.js'],
  addons: ['@storybook/addon-actions'],
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Log config
    console.dir(config)

    // Remove the existing css rule
    config.module.rules = config.module.rules
      .filter(f => f.test.toString() !== '/\\.css$/')
      .filter(f => f.test.toString() !== '/\\.(mjs|jsx?)$/')

    // Make whatever fine-grained changes you need
    config.module.rules.push({
      test: /\.css$/,
      use: [
        'style-loader',
        { loader: 'css-loader', options: { importLoaders: 1, modules: true } },
        {
          loader: 'postcss-loader',
          options: {
            config: {
              path: path.resolve(__dirname, '../'),
            },
          },
        },
      ],
      include: path.resolve(__dirname, '../'),
    })

    config.module.rules.push({
      test: /\.(mjs|jsx?)$/,
      use: [
        {
          loader: 'babel-loader',
          options: {
            cacheDirectory:
              '/Users/marin/Development/formwerdung/formwerdung-site/node_modules/.cache/storybook',
            presets: [
              [
                '/Users/marin/Development/formwerdung/formwerdung-site/node_modules/@babel/preset-env/lib/index.js',
                {
                  shippedProposals: true,
                  useBuiltIns: 'usage',
                  corejs: '3',
                },
              ],
              '/Users/marin/Development/formwerdung/formwerdung-site/node_modules/@babel/preset-react/lib/index.js',
              '/Users/marin/Development/formwerdung/formwerdung-site/node_modules/@babel/preset-flow/lib/index.js',
            ],
            plugins: [
              '/Users/marin/Development/formwerdung/formwerdung-site/node_modules/@storybook/core/node_modules/@babel/plugin-proposal-object-rest-spread/lib/index.js',
              '/Users/marin/Development/formwerdung/formwerdung-site/node_modules/@storybook/core/node_modules/@babel/plugin-proposal-class-properties/lib/index.js',
              '/Users/marin/Development/formwerdung/formwerdung-site/node_modules/@babel/plugin-syntax-dynamic-import/lib/index.js',
              [
                '/Users/marin/Development/formwerdung/formwerdung-site/node_modules/@storybook/core/node_modules/babel-plugin-emotion/dist/babel-plugin-emotion.cjs.js',
                { sourceMap: true, autoLabel: true },
              ],
              '/Users/marin/Development/formwerdung/formwerdung-site/node_modules/@storybook/core/node_modules/babel-plugin-macros/dist/index.js',
              '/Users/marin/Development/formwerdung/formwerdung-site/node_modules/@storybook/react/node_modules/@babel/plugin-transform-react-constant-elements/lib/index.js',
              '/Users/marin/Development/formwerdung/formwerdung-site/node_modules/babel-plugin-add-react-displayname/index.js',
              [
                '/Users/marin/Development/formwerdung/formwerdung-site/node_modules/babel-plugin-react-docgen/lib/index.js',
                {
                  DOC_GEN_COLLECTION_NAME: 'STORYBOOK_REACT_CLASSES',
                },
              ],
            ],
          },
        },
        {
          loader: 'astroturf/loader',
          options: {
            enableCssProp: true,
          },
        },
      ],
      include: ['/Users/marin/Development/formwerdung/formwerdung-site'],
      exclude: [
        '/Users/marin/Development/formwerdung/formwerdung-site/node_modules',
      ],
    })

    // Return the altered config
    return config
  },
}
