const path = require('path');

module.exports = {
  stories: [
    '../src/**/*.stories.@(js|ts|mdx|tsx)',
    '../guidelines/**/*.stories.@(js|ts|mdx|tsx)',
  ],
  addons: [
    '@storybook/addon-postcss',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
  ],
  webpackFinal: async (config) => {
    config.resolve.modules = [...(config.resolve.modules || []), path.resolve('./src')];
    return config;
  },
};
