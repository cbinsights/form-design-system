const fs = require('fs');
const path = require('path');
const glob = require('glob');
const SVGO = require('svgo');
const { svgoOptions, svgoPlugins } = require('./helpers/svgoConfig');
const { buildConfig } = require('../icons.config');

if (!fs.existsSync(buildConfig.raw.output)) {
  fs.mkdirSync(buildConfig.raw.output);
}

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
    ...svgoOptions,
    plugins: [...svgoPlugins, { cleanupIDs: { prefix: iconName } }],
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
