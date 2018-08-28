const plugins = [
  ...require('../../postcss.plugins'),
  require('mdcss')({
    destination: './.docs/'
  }),
  require('cssnano'),
];

module.exports = (ctx) => ({
  map: ctx.options.map,
  plugins,
});
