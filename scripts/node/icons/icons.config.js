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
    pageName: 'Icons',
    slicePrefix: 'icon/',
  },

  // paths used by build scripts
  buildConfig: {
    svg: {
      src: `${ICONS_ROOT}/svg`,
      lib: `${PATH_ICONS_LIB}/svg`,
    },
    png: {
      src: `${ICONS_ROOT}/png`,
      lib: `${PATH_ICONS_LIB}/png`,
    },
    react: {
      src: `${ICONS_ROOT}/svg`,
      lib: `${PATH_ICONS_LIB}/react`,
      template: `${ICONS_ROOT}/templates/withFdsIconWrapper.jsx`,
    },
    docs: {
      input: `${PATH_ICONS_LIB}/svg`,
      template: `${ICONS_ROOT}/templates/docs.hbs`,
      assets: `${ICONS_ROOT}/templates/assets/`,
      css: `${ICONS_ROOT}/style/icons.css`,
      output: `${DOCS_ROOT}/icons`,
    },
  },
};
