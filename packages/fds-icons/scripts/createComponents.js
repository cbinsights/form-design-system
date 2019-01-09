/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');
const glob = require('glob');
const svgr = require('@svgr/core').default;
const getComponentName = require('./helpers/getComponentName');
const { svgoOptions, svgoPlugins } = require('./helpers/svgoConfig');
const { buildConfig } = require('../icons.config');

const FDS_HOC_NAME = 'withFdsIconWrapper';

if (!fs.existsSync(buildConfig.react.output)) {
  fs.mkdirSync(buildConfig.react.output);
}

// copy our HOC for icon components to the build dir
fs.copyFileSync(
  path.join(__dirname, `templates/${FDS_HOC_NAME}.jsx`),
  path.join(buildConfig.react.output, `${FDS_HOC_NAME}.jsx`)
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
    componentName: getComponentName(iconName),
  }).then((component) => {
    fs.writeFileSync(`${buildConfig.react.output}/${iconName}.jsx`, component);
  });
};

glob(`${buildConfig.react.input}/*.svg`, {}, (error, files) => {
  if (error) throw new Error(`glob error: ${error}`);
  console.info('Creating react components');
  // files.forEach(svgToComponent);
  svgToComponent(files[0]);
  console.info('Success - react components created');
});
