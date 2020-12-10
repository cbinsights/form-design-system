/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');
const glob = require('glob');
const toJsx = require('svg-to-jsx');
const getComponentName = require('./helpers/getComponentName');
const { buildConfig } = require('./icons.config');

// @function TEMPLATE
const TEMPLATE = require('handlebars').compile(
  fs.readFileSync(buildConfig.react.template).toString()
);

/**
 * writes a react component to `lib/react`
 * from an svg file
 *
 * @param {String} path to SVG file
 */
const writeComponent = async (filepath) => {
  const componentName = getComponentName(filepath);
  console.info(`Creating ${componentName}.jsx`);

  await toJsx(fs.readFileSync(filepath))
    .then((jsx) => {
      const content = TEMPLATE({
        componentName,
        svg: jsx
      });
      fs.writeFileSync(`${buildConfig.react.lib}/${componentName}.jsx`, content);
    })
    .catch((err) => {
      throw new Error(err);
    });
};

/**
 * Builds an `index.js` to make all icons exportable
 * with destructured statements
 *
 * @param {Array} files - all svg filepaths
 * @returns {String} index.js file content string
 */
const buildDestructured = (files) => {
  let importOutput = '';
  let exportOutput = '\nexport {\n'
  files.forEach(file => {
    const name = path.basename(file, '.svg');
    importOutput += `import ${name}Icon from './${name}Icon';\n`
    exportOutput += `  ${name}Icon,\n`
  })
  exportOutput += '}'

  return importOutput + exportOutput;
};

glob(`${buildConfig.react.src}/*.svg`, {}, (error, files) => {
  if (error) throw new Error(`glob error: ${error}`);
  console.info(`Creating ${files.length} react components`);
  fs.writeFileSync(`${buildConfig.react.lib}/index.js`, buildDestructured(files))
  files.forEach(writeComponent);
});
