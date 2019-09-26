module.exports = [
  require('postcss-import'),
  require('postcss-preset-env')({
    autoprefixer: {
      grid: true,
    },
    browsers: [
      'last 1 Chrome versions',
      'last 1 Firefox versions',
      'last 1 Edge versions',
      'last 2 Safari versions',
      'Explorer 11',
    ],
  }),
];
