/* eslint-disable */

const PATH_DOC_ASSETS = './src/base-styles/public';
const PATH_STYLES_LIB = './lib/base-styles';
const PATH_DEST = './docs/fds-styles';

/* mdcss plugin with options */
module.exports = require('mdcss')({
  destination: PATH_DEST,

  /* copies whole directories to PATH_DEST */
  assets: [
    PATH_DOC_ASSETS,
    PATH_STYLES_LIB,
  ],

  /* theme options paths are relative to PATH_DEST */
  theme: require('mdcss-theme-github')({
    title: 'Base styles',
    css: [
      'primer.css',
      'style.css',
      'octicons/octicons.css',
      'https://fonts.googleapis.com/css?family=Roboto:400,500,700',
      `public/doc.css`,
      `base-styles.full.css`,
    ],
    logo: 'public/logo.png',
    examples: {
      css: [
        'base-styles/base-styles.min.css',
        'public/webfont.css',
      ],
    },
  }),

});
