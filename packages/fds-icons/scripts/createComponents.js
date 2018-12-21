/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');
const glob = require('glob');
const createIconComponent = require('./templates/iconComponent');
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
  const iconName = `${path.basename(filepath, '.svg')}Icon`;
  console.info(`Creating ${iconName} component`);
  fs.writeFileSync(
    `${buildConfig.react.output}/${iconName}.jsx`,
    createIconComponent(svgData, iconName)
  );
};

glob(`${buildConfig.react.input}/*.svg`, {}, (error, files) => {
  if (error) throw new Error(`glob error: ${error}`);
  console.info('Creating react components');
  console.warn(files);
  files.forEach(svgToComponent);
  console.info('Success - react components created');
});
