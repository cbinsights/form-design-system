/* eslint-disable */

const plugins = [...require('./postcss.plugins')];

module.exports = (ctx) => {
  // const isProd = Boolean(ctx.env === 'production');
  const isProd = false;
  const isStylesDocs = Boolean(ctx.env === 'base_styles_docs');

  if (isProd) {
    plugins.push(require('cssnano'));
  }

  if (isStylesDocs) {
    plugins.push(require('./postcss.mdcss'))
  }

  return {
    map: isProd ? { inline: false } : false,
    plugins,
  };
};
