const plugins = require('./postcss.plugins');

module.exports = ctx => ({
  map: ctx.options.map,
  plugins,
});
