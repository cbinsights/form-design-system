const fs = require('fs');
const path = require('path');
const glob = require('glob');
const SVGO = require('svgo');
const { buildConfig } = require('../icons.config');

if (!fs.existsSync(buildConfig.raw.output)) {
  fs.mkdirSync(buildConfig.raw.output);
}

const SVGO_OPTIONS = {
  floatPrecision: 4,
};

const SVGO_PLUGINS = [
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
  { removeViewBox: false },
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
  { removeAttrs: { attrs: '(fill|stroke)' } },
  { removeElementsByAttr: true },
  { removeStyleElement: true },
  { removeScriptElement: true },
];

/**
 * @param {String} filepath
 * @returns {undefined}
 */
const optimizeFile = (filepath) => {
  const fileName = path.basename(filepath);
  const iconName = path.basename(filepath, '.svg');
  const data = fs.readFileSync(filepath);

  // thanks to a poor design decision by SVGO, we must create
  // a new instance for each icon so IDs can be local-scope prefixed
  new SVGO({
    ...SVGO_OPTIONS,
    plugins: [...SVGO_PLUGINS, { cleanupIDs: { prefix: iconName } }],
  })
    .optimize(data, { filepath })
    .then((result) => {
      fs.writeFileSync(`${buildConfig.raw.output}/${fileName}`, result.data);
    });
};

glob(`${buildConfig.raw.input}/**/*.svg`, {}, (error, files) => {
  if (error) throw new Error(`glob error: ${error}`);
  console.info(`Optimizing ${files.length} SVG files...`);
  files.forEach(optimizeFile);
  console.info(`Successfully optimized ${files.length} files`);
});
