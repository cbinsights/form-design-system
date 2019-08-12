// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.
const path = require('path');

module.exports = async ({ config }) => {
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
    use: ['style-loader', 'postcss-loader'],
    include: path.resolve(__dirname, '../'),
  });
  return config;
};
