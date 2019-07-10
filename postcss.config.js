/* eslint-disable */

const plugins = require('./postcss.plugins');

module.exports = (ctx) => {
  const isProdBuild = Boolean(ctx.env === 'production');

  const plugins = [...plugins];

  if (isProdBuild) {
    plugins.push(require('cssnano'));
  }

  return {
    map: isProdBuild ? { inline: false } : false,
    plugins,
  };
};
