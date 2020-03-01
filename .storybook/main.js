const path = require('path')

module.exports = {
  stories: ['../stories/**/*.stories.(js|tsx)'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-backgrounds',
    '@storybook/addon-knobs',
    '@storybook/addon-a11y',
    '@storybook/addon-viewport',
  ],
  webpackFinal: async config => {
    config.module.rules = config.module.rules
      .filter(f => f.test.toString() !== '/\\.css$/')
      .filter(f => f.test.toString() !== '/\\.(mjs|jsx?)$/')

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
      test: /\.(mjs|jsx?|tsx?)$/,
      use: [
        {
          loader: 'babel-loader',
          options: {
            cacheDirectory: 'node_modules/.cache/storybook',
            presets: [
              [
                '@babel/preset-env',
                {
                  shippedProposals: true,
                  useBuiltIns: 'usage',
                  corejs: '3',
                },
              ],
              '@babel/preset-react',
              '@babel/preset-flow',
              '@babel/typescript',
            ],
            plugins: [
              '@babel/plugin-proposal-object-rest-spread',
              '@babel/plugin-proposal-class-properties',
              '@babel/plugin-syntax-dynamic-import',
              'babel-plugin-macros',
              '@babel/plugin-transform-react-constant-elements',
              'babel-plugin-add-react-displayname',
              [
                'babel-plugin-react-docgen',
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
    })

    config.resolve.extensions.push('.ts', '.tsx')

    console.dir(config, { depth: null })

    return config
  },
}
