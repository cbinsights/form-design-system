/**
 * Configuration for `fds-icons` build scripts
 */

const path = require('path');

module.exports = {
  // Options for exporting icons from sketch
  sketchConfig: {
    output: path.resolve(__dirname, 'src/'),
    pageName: 'Icons',
    slicePrefix: 'Icon/',
  },

  // options for building `src/` to `dist/`
  buildConfig: {
    raw: {
      input: path.resolve(__dirname, 'src/'),
      output: path.resolve(__dirname, 'dist/raw/'),
    },
    react: {
      input: path.resolve(__dirname, 'dist/raw/'),
      output: path.resolve(__dirname, 'dist/react/'),
    },
    docs: {
      input: path.resolve(__dirname, 'dist/raw/'),
      output: path.resolve(__dirname, '../../docs/fds-icons/'),
    },
  },
};
