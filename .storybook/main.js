const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.@(js|mdx)', '../guidelines/**/*.stories.@(js|mdx)'],
  addons: ['@storybook/addon-postcss', '@storybook/addon-essentials', '@storybook/addon-a11y'],
  webpackFinal: async (config) => {
    config.resolve.modules = [...(config.resolve.modules || []), path.resolve('./src')];

    config.resolve.alias = {
      ...config.resolve.alias,
      lib: path.resolve('./lib'),
    };

    return config;
  },
};
