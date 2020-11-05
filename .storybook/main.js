const path = require('path');

module.exports = {
  stories: [
    "../src/**/*.stories.@(js|mdx)",
    "../docs/**/*.stories.@(js|mdx)",
    "../guidelines/**/*.stories.@(js|mdx)"
  ],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-a11y"
  ],
  webpackFinal: async (config, { configType }) => {
      // Rey wrote this, blame him.
      // Essentially, we want to keep all the rest of the
      // rules present, add our own css rule, and ignore the existing css rule
      // that's in here
      newConfig = config.module.rules.filter((rule) => {
        return String(rule.test) !== '/\\.css$/';
      });
      config.module.rules = newConfig;
      config.module.rules.push({
        test: /\.css$/,
        include: path.resolve(__dirname, '../'),
        use: [
          'style-loader',
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: './'
              }
            }
          }
        ],
      });
      
      config.resolve.modules = [
        ...(config.resolve.modules || []),
        path.resolve('./src'),
      ]

      config.resolve.alias = {
        ...config.resolve.alias,
        "lib": path.resolve('./lib')
      }

      return config;
  
    }
};