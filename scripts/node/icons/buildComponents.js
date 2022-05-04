/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');
const glob = require('glob');
const toJsx = require('svg-to-jsx');
const getComponentName = require('./helpers/getComponentName');
const { buildConfig } = require('./icons.config');
const { optimize } = require('svgo');

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

  fs.promises
    .readFile(filepath)
    .then((svg) => optimize(svg, { path: filepath, multipass: true }))
    .then((optimized) => toJsx(optimized.data))
    .then((jsx) => {
      const content = TEMPLATE({
        componentName,
        svg: jsx,
        date: new Date(),
      });
      fs.writeFileSync(`${buildConfig.react.lib}/${componentName}.tsx`, content);
    })
    .catch((err) => {
      throw new Error(err);
    });
};

/**
 * Builds an `index.tsx` to make all icons exportable
 * with destructured statements
 *
 * @param {Array} files - all svg filepaths
 * @returns {String} index.tsx file content string
 */
const buildDestructured = (files) => {
  let importOutput = '';
  let exportOutput = '\nexport {\n';
  files.forEach((file) => {
    const name = path.basename(file, '.svg');
    importOutput += `import ${name}Icon from './${name}Icon';\n`;
    exportOutput += `  ${name}Icon,\n`;
  });
  exportOutput += '}';

  return importOutput + exportOutput;
};

glob(`${buildConfig.react.src}/*.svg`, {}, (error, files) => {
  if (error) throw new Error(`glob error: ${error}`);
  console.info(`Creating ${files.length} react components`);
  fs.writeFileSync(`${buildConfig.react.lib}/index.tsx`, buildDestructured(files));
  files.forEach(writeComponent);
});
