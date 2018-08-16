module.exports = ctx => ({
  map: ctx.options.map,
  plugins: [
    require('postcss-import'),
    require('autoprefixer'),
    require('postcss-preset-env'),
    require('cssnano'),
  ]
});
