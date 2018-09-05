/* eslint-disable */

const plugins = [...require('../../postcss.plugins'), require('cssnano')];

module.exports = (ctx) => ({
  map: false,
  plugins,
});
