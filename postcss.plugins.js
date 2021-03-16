module.exports = [
  require('postcss-import'),
  require('postcss-preset-env')({
    features: {
      'custom-media-queries': true,
    },
    autoprefixer: {
      grid: true,
    },
  }),
];
