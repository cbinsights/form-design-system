/**
 * @module exportFromSketch
 *
 * Node script called by `yarn export`.
 * Exports all slices from an icons page in a sketch file.
 * The page name and slice prefix are configured in `icons.config.js`
 *
 * @usage `node exportFromSketch.js <sketch file path>`
 */
const { exec } = require('child_process');
const path = require('path');
const { sketchConfig } = require('../icons.config');
const cleanExports = require('./helpers/cleanExports');

if (!process.argv[2]) {
  throw new Error('Path to sketch file missing');
}

const PATH_SKETCH_FILE = path.normalize(process.argv[2]);
const PATH_SVG_DEST = sketchConfig.output;

const SKETCH_PAGE_NAME = sketchConfig.pageName;
const SKETCH_SLICE_PREFIX = sketchConfig.slicePrefix;

/**
 * Builds command to export icon slices as SVG files
 *
 * @param {String} sourcePath file path of sketch file
 * @param {String} destPath destination path for SVG exports
 * @param {Array} itemIds ids of slices to export as SVGs
 * @returns {String} bash command for sketchtool export
 */
const getExportCmd = (sourcePath, destPath, itemIds) =>
  [
    `sketchtool export slices "${sourcePath}"`,
    '--scales=1.0',
    `--output=${destPath}`,
    '--formats=svg',
    `--items=${itemIds}`,
  ].join(' ');

/**
 * Gets all slices from a given sketch file page
 *
 * @param {Object} slices full slices data from sketchtool
 * @param {String} pageName name of page to get slices from
 * @param {String} slicePrefix include only slices with this prefix
 * @returns {Array} list of { id, name } objects for all slices in `pageName`
 */
const getSlicesByPage = (slices, pageName, slicePrefix) =>
  slices.pages
    .filter((page) => page.name.toUpperCase() === pageName.toUpperCase())
    .pop()
    .slices.filter((slice) => slice.name.includes(slicePrefix))
    .map((slice) => slice.id);

exec(`sketchtool list slices "${PATH_SKETCH_FILE}"`, (error, result) => {
  if (error) throw new Error(`exec error: ${error}`);

  const sliceIds = getSlicesByPage(
    JSON.parse(result),
    SKETCH_PAGE_NAME,
    SKETCH_SLICE_PREFIX
  );

  // export all slices to SVG files
  exec(getExportCmd(PATH_SKETCH_FILE, PATH_SVG_DEST, sliceIds), (exportError) => {
    if (error) throw new Error(`exec error: ${exportError}`);

    // clean up the messy exports from sketch
    cleanExports();
  });
});
