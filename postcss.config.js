/* eslint-disable */

const plugins = [...require('./postcss.plugins')];

module.exports = (ctx) => {
  const isProd = Boolean(ctx.env === 'production');

  if (isProd) {
    plugins.push(require('cssnano'));
  }

  return {
    map: isProd ? { inline: false } : false,
    plugins,
  };
};
