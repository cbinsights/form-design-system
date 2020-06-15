/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');
const glob = require('glob');
const svgr = require('@svgr/core').default;
const getComponentName = require('./helpers/getComponentName');
const { svgoOptions, svgoPlugins } = require('./helpers/svgoConfig');
const { buildConfig } = require('./icons.config');

const FDS_HOC_NAME = 'withFdsIconWrapper';

// copy our HOC for icon components to the build dir
fs.copyFileSync(
  buildConfig.react.template,
  path.join(buildConfig.react.lib, `${FDS_HOC_NAME}.jsx`)
);

/**
 * SVGR does not provide a clean interface for customizing the output
 * of react components. Defining our own HOC allows us to customize things
 * like props for color and className.
 *
 * @returns {String} file content for svgr-generated react component
 */
const svgrTempalte = (
  { template },
  opts,
  { imports, componentName, jsx }
) => template.ast`${imports}
import withFdsIconWrapper from './withFdsIconWrapper';
const ${componentName} = (props) => ${jsx};
export default withFdsIconWrapper(${componentName});
`;

/**
 * @param {String} iconName
 * @returns {Object} configuration for svgr
 */
const getSvgrConfig = (iconName) => ({
  plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx'],
  ext: 'jsx',
  prettier: false,
  svgo: true,
  svgoConfig: {
    svgoOptions,
    plugins: [...svgoPlugins, { cleanupIDs: { prefix: iconName } }],
  },
  expandProps: false,
  template: svgrTempalte,
});

/**
 * @param {String} filepath
 * @returns {undefined}
 */
const svgToComponent = (filepath) => {
  const svgData = fs.readFileSync(filepath);
  const iconName = getComponentName(filepath);

  svgr(svgData, getSvgrConfig(iconName), {
    componentName: iconName,
  }).then((component) => {
    fs.writeFileSync(`${buildConfig.react.lib}/${iconName}.jsx`, component);
  });
};

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
}

glob(`${buildConfig.react.src}/*.svg`, {}, (error, files) => {
  if (error) throw new Error(`glob error: ${error}`);
  console.info(`Creating ${files.length} react components`);
  fs.writeFileSync(`${buildConfig.react.lib}/index.js`, buildDestructured(files))
  files.forEach(svgToComponent);
  console.info(`Success - ${files.length} react components created`);
});
