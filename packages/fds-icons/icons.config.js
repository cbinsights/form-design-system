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
    input: path.resolve(__dirname, 'src/'),
    output: path.resolve(__dirname, 'dist/raw/'),
  },
};
