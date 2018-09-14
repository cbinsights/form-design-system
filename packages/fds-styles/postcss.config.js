/* eslint-disable */
const plugins = [
  ...require('../../postcss.plugins'),
  require('mdcss')({
    destination: '../../docs/fds-styles/',
    assets: ['./assets', './lib'],
    theme: require('mdcss-theme-github')({
      title: 'fds-styles',
      css: [
        'primer.css',
        'style.css',
        'octicons/octicons.css',
        'https://fonts.googleapis.com/css?family=Roboto:300,400,700',
        'assets/doc.css',
      ],
      logo: 'assets/logo.png',
      examples: {
        css: ['lib/fds-styles.css', './assets/webfont.css'],
      },
    }),
  }),
  require('cssnano'),
];

module.exports = (ctx) => ({
  map: ctx.options.map,
  plugins,
});
