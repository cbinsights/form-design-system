/**
 * Builds `dist/` for icons package.
 *
 * 1. optimize `src/svg` into `dist/raw`
 * 2. generate react components to `dist/react`
 * 3. generate docs to `<repo_root>/docs/fds-icons/index.html`
 */

const fs = require('fs');
const path = require('path');
const glob = require('glob');
const SVGO = require('svgo');
const { buildConfig } = require('../icons.config');

if (!fs.existsSync(buildConfig.output)) {
  fs.mkdirSync(buildConfig.output);
}

const svgo = new SVGO({
  floatPrecision: 4,
  plugins: [
    { cleanupAttrs: true },
    { removeDoctype: true },
    { removeXMLProcInst: true },
    { removeComments: true },
    { removeMetadata: true },
    { removeTitle: true },
    { removeDesc: true },
    { removeUselessDefs: true },
    { removeXMLNS: true },
    { removeEditorsNSData: true },
    { removeEmptyAttrs: true },
    { removeHiddenElems: true },
    { removeEmptyText: true },
    { removeEmptyContainers: true },
    { removeViewBox: true },
    { cleanupEnableBackground: true },
    { minifyStyles: true },
    { convertStyleToAttrs: true },
    { convertColors: true },
    { convertPathData: true },
    { convertTransform: true },
    { removeUnknownsAndDefaults: true },
    { removeNonInheritableGroupAttrs: true },
    { removeUselessStrokeAndFill: true },
    { removeUnusedNS: true },
    { cleanupIDs: true },
    { cleanupNumericValues: true },
    { cleanupListOfValues: true },
    { moveElemsAttrsToGroup: true },
    { moveGroupAttrsToElems: true },
    { collapseGroups: true },
    { removeRasterImages: true },
    { mergePaths: true },
    { convertShapeToPath: true },
    { sortAttrs: true },
    { removeDimensions: true },
    { removeAttrs: true },
    { removeElementsByAttr: true },
    { removeStyleElement: true },
    { removeScriptElement: true },
  ],
});

const optimizeFile = (filepath) => {
  const fileName = path.basename(filepath);
  const data = fs.readFileSync(filepath);
  console.info(`Optimizing ${fileName}`);
  svgo.optimize(data, { filepath }).then((result) => {
    fs.writeFileSync(`${buildConfig.output}/${fileName}`, result.data);
  });
};

glob(`${buildConfig.input}/**/*.svg`, {}, (error, files) => {
  if (error) throw new Error(`glob error: ${error}`);
  files.forEach(optimizeFile);
  console.info('\n---------------------------');
  console.info('SUCCESS - good job very nice');
});
