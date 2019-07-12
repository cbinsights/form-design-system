/* eslint-disable */
const fs = require('fs');
const path = require('path');
const postcss = require('postcss');
const mdcss = require('mdcss');

const {
  STYLES_ROOT,
  LIB_ROOT,
  DOCS_ROOT,
} = require('../constants');

/* Reads from compiled CSS; Writes to docs dir */
const PATH_SRC = path.resolve(LIB_ROOT, 'base-styles', 'base-styles.full.css');
const PATH_DEST = path.resolve(DOCS_ROOT, 'fds-styles/');

fs.readFile(PATH_SRC, (err, css) => {
  postcss([
    mdcss({
      destination: PATH_DEST,
      assets: [
        path.resolve(STYLES_ROOT, 'public'),
        path.resolve(LIB_ROOT, 'base-styles'),
      ],
      theme: require('mdcss-theme-github')({
        title: 'fds-styles',
        css: [
          'primer.css',
          'style.css',
          'octicons/octicons.css',
          'https://fonts.googleapis.com/css?family=Roboto:300,400,700',
          path.resolve(STYLES_ROOT, 'public', 'doc.css'),
        ],
        logo: path.resolve(STYLES_ROOT, 'public', 'logo.png'),
        examples: {
          css: [
            path.resolve(LIB_ROOT, 'base-styles', 'fds-styles.css'),
            path.resolve(STYLES_ROOT, 'public', 'webfont.css')
          ],
        },
      }),
    }),
  ])
    .process(css, { from: PATH_SRC })
    .then((result) => {
      console.log('success');
    });
});
