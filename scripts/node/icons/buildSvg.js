/**
 * Optimizes SVG files and builds to FDS `lib`
 */

const glob = require('glob');
const { optimize } = require('svgo');
const { buildConfig } = require('./icons.config');

/**
 * @param {String} filepath
 * @returns {undefined}
 */

const optimizeFile = (filepath) =>
  optimize(filepath, {
    path: filepath,
    multipass: true,
  });

glob(`${buildConfig.svg.src}/**/*.svg`, {}, (error, files) => {
  if (error) throw new Error(`glob error: ${error}`);
  console.info(`Optimizing ${files.length} SVG files...`);
  files.forEach(optimizeFile);
  console.info(`Successfully optimized ${files.length} SVG files`);
});
