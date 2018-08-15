module.exports = ctx => ({
  map: ctx.options.map,
  plugins: [
    require('postcss-import'),
    require('postcss-preset-env')
  ]
});
