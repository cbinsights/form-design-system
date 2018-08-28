const plugins = [
  ...require('../../postcss.plugins'),
  require('mdcss')({
    destination: './.docs/',
    assets: ['./assets'],
    theme: require('mdcss-theme-github')({
      title: 'fd-styles',
      logo: 'assets/logo.png',
    })
  }),
  require('cssnano'),
];

module.exports = (ctx) => ({
  map: ctx.options.map,
  plugins,
});
