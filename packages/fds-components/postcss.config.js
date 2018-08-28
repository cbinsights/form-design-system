const plugins = [...require('../../postcss.plugins'), require('cssnano')];

module.exports = (ctx) => ({
  map: ctx.options.map,
  plugins,
});
