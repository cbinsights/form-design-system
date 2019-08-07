/**
 * Configuration for `fds-icons` build scripts
 */

const {
  ICONS_ROOT,
  LIB_ROOT,
  DOCS_ROOT,
} = require('../constants.js')

const PATH_ICONS_LIB = `${LIB_ROOT}/icons/`;

module.exports = {
  // Options for exporting icons from sketch
  sketchConfig: {
    output: `${ICONS_ROOT}/svg`,
    pageName: 'Icons',
    slicePrefix: 'icon/',
  },

  buildConfig: {
    raw: {
      input: `${ICONS_ROOT}/svg`,
      output: `${PATH_ICONS_LIB}/raw`,
    },
    react: {
      input: `${ICONS_ROOT}/svg`,
      template: `${ICONS_ROOT}/templates/withFdsIconWrapper.jsx`,
      output: `${PATH_ICONS_LIB}/react`,
    },
    docs: {
      input: `${PATH_ICONS_LIB}/raw`,
      template: `${ICONS_ROOT}/templates/docs.hbs`,
      assets: `${ICONS_ROOT}/templates/assets/`,
      css: `${ICONS_ROOT}/style/icons.css`,
      output: `${DOCS_ROOT}/fds-icons`,
    },
  },
};
