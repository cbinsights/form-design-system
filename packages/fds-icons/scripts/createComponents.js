/* eslint-disable no-console */
const fs = require('fs');
const glob = require('glob');
const svgtojsx = require('svg-to-jsx');
const createIconComponent = require('./templates/iconComponent');
const getComponentName = require('./helpers/getComponentName');
const { buildConfig } = require('../icons.config');

if (!fs.existsSync(buildConfig.react.output)) {
  fs.mkdirSync(buildConfig.react.output);
}

/**
 * @param {String} filepath
 * @returns {undefined}
 */
const svgToComponent = (filepath) => {
  const svgData = fs.readFileSync(filepath);
  const iconName = getComponentName(filepath);

  svgtojsx(svgData).then((jsx) => {
    console.info(`Creating ${iconName} component`);
    fs.writeFileSync(
      `${buildConfig.react.output}/${iconName}.jsx`,
      createIconComponent(jsx, iconName)
    );
  });
};

glob(`${buildConfig.react.input}/*.svg`, {}, (error, files) => {
  if (error) throw new Error(`glob error: ${error}`);
  console.info('Creating react components');
  console.warn(files);
  files.forEach(svgToComponent);
  console.info('Success - react components created');
});
