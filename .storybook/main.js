const path = require('path');
const webpack = require('webpack');

module.exports = {
  stories: [
    '../src/components/**/*.stories.mdx',
    '../src/components/**/*.stories.@(js|jsx|ts|tsx)',
    '../.storybook/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-docs',
    '@storybook/addon-controls',
    '@storybook/preset-scss',
    '@storybook/preset-typescript',
  ],
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.css$/,
      use: [
        {
          loader: 'postcss-loader',
          options: {
            // ident: 'postcss',
            sourceMap: true,
            // plugins: [
            //   require('postcss-import'),
            //   require('tailwindcss'),
            //   require('autoprefixer'),
            // ],
            postcssOptions: {
              config: path.resolve(__dirname, 'postcss.config.js'),
            },
            // config: {
            //   path: path.resolve(__dirname, 'postcss.config.js'),
            // },
          },
        },
      ],
      include: path.resolve(__dirname, '../'),
    });

    // config.module.rules.push({
    //   test: /\.css$/,
    //   loaders: [
    //     {
    //       loader: 'postcss-loader',
    //       options: {
    //         sourceMap: true,
    //         postcssOptions: {
    //           config: path.resolve(__dirname, './.storybook/postcss.config.js'),
    //         },
    //       },
    //     },
    //   ],

    //   include: path.resolve(__dirname, '../.storybook/'),
    // });

    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.__NEXT_IMAGE_OPTS': JSON.stringify({
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          domains: [],
          path: '/',
          loader: 'default',
        }),
      }),
    );

    config.devtool = 'source-maps';
    return config;
  },
};
