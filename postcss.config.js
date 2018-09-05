const plugins = require('./postcss.plugins');

module.exports = ctx => ({
  map: false,
  plugins,
});
