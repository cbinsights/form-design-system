/* eslint-disable */

const plugins = [...require('./postcss.plugins')];

module.exports = (ctx) => {
  const isProdBuild = Boolean(ctx.env === 'production');

  if (isProdBuild) {
    plugins.push(require('cssnano'));
  }

  return {
    map: isProdBuild ? { inline: false } : false,
    plugins,
  };
};
