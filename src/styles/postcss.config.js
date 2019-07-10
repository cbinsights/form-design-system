/* eslint-disable */

module.exports = (ctx) => {
  const isProdBuild = Boolean(ctx.env === 'production');

  const plugins = [...require('../../postcss.plugins')];

  if (isProdBuild) {
    plugins.push(require('cssnano'));
  }

  return {
    map: isProdBuild ? { inline: false } : false,
    plugins,
  };
};
