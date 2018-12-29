/* eslint-disable no-console */
const fs = require('fs');
const glob = require('glob');
const svgr = require('@svgr/core').default;
const getComponentName = require('./helpers/getComponentName');
const { svgoOptions, svgoPlugins } = require('./helpers/svgoConfig');
const { buildConfig } = require('../icons.config');

if (!fs.existsSync(buildConfig.react.output)) {
  fs.mkdirSync(buildConfig.react.output);
}

const getSvgrConfig = (iconName) => ({
  plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx'],
  ext: 'jsx',
  prettier: false,
  // TODO: use fds-dictionary to set color attr
  // replaceAttrValues: { 'fill': FDS.COLOR_CHARCOAL },
  svgo: true,
  svgoConfig: {
    svgoOptions,
    plugins: [...svgoPlugins, { cleanupIDs: { prefix: iconName } }],
  },
  svgProps: { className: 'fds-icon' },
});

/**
 * @param {String} filepath
 * @returns {undefined}
 */
const svgToComponent = (filepath) => {
  const svgData = fs.readFileSync(filepath);
  const iconName = getComponentName(filepath);

  svgr(svgData, getSvgrConfig(iconName), {
    componentName: getComponentName(iconName),
  }).then((component) => {
    fs.writeFileSync(`${buildConfig.react.output}/${iconName}.jsx`, component);
  });
};

glob(`${buildConfig.react.input}/*.svg`, {}, (error, files) => {
  if (error) throw new Error(`glob error: ${error}`);
  console.info('Creating react components');
  files.forEach(svgToComponent);
  console.info('Success - react components created');
});
