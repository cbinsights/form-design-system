module.exports = [
  require('postcss-import'),
  require('postcss-preset-env')({
    autoprefixer: {
      grid: true,
    }
  }),
];
