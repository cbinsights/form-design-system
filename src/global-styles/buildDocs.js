/* eslint-disable */
const fs = require('fs');
const path = require('path');
const postcss = require('postcss');
const mdcss = require('mdcss');

const PATH_SRC = path.relative(__dirname, 'lib/fds-styles.full.css');
const PATH_DEST = path.relative(__dirname, '../../docs/fds-styles/');

fs.readFile(PATH_SRC, (err, css) => {
  postcss([
    mdcss({
      destination: PATH_DEST,
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
  ])
    .process(css, { from: PATH_SRC })
    .then((result) => {
      console.log('success');
    });
});
