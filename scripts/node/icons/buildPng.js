/**
 * Builds PNG files to `lib`.
 *
 * Currently only copies files, but this is where
 * we would opitmize them should we choose to do so.
 */

/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');
const glob = require('glob');
const { buildConfig } = require('./icons.config');

glob(`${buildConfig.png.src}/**/*.png`, {}, (error, files) => {
  if (error) throw new Error(`glob error: ${error}`);
  console.info(`Copying ${files.length} PNG files...`);
  files.forEach((filePath) => {
    fs.copyFileSync(filePath, `${buildConfig.png.lib}/${path.basename(filePath)}`);
  });
  console.info(`Successfully copied ${files.length} PNG files`);
});
