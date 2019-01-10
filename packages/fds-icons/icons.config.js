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

  // options for building `src/` to `lib/`
  buildConfig: {
    raw: {
      input: path.resolve(__dirname, 'src/'),
      output: path.resolve(__dirname, 'lib/raw/'),
    },
    react: {
      input: path.resolve(__dirname, 'src/'),
      output: path.resolve(__dirname, 'lib/react/'),
    },
    docs: {
      input: path.resolve(__dirname, 'lib/raw/'),
      output: path.resolve(__dirname, '../../docs/fds-icons/'),
    },
  },
};
