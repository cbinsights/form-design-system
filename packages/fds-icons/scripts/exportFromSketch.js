/* eslint-disable no-console */
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
 * Collects duplicate slice names from sketch export. Returns empty array if none found.
 *
 * @param {Array} slices aray of slice objects `{ id, name }`
 * @returns {Array} list of icon names that are duplicated in the sketch file
 */
const getDuplicates = (slices) => {
  const names = slices.map(({ name }) => name);
  const checked = new Set();
  const duplicates = [];

  names.forEach((name) => {
    if (checked.has(name)) {
      duplicates.push(name);
    } else {
      checked.add(name);
    }
  });

  return duplicates;
};

/**
 * Gets all slices from a given sketch file page
 *
 * @param {Object} sketchData result from sketchtool
 * @param {String} pageName name of page to get slices from
 * @param {String} slicePrefix include only slices with this prefix
 * @returns {Array} list of { id, name } objects for all slices in `pageName`
 */
const getSlicesByPage = (sketchData, pageName, slicePrefix) =>
  sketchData.pages
    .filter((page) => page.name.toUpperCase() === pageName.toUpperCase())
    .pop()
    .slices.filter((slice) => slice.name.includes(slicePrefix))
    .map(({ id, name }) => ({ id, name }));

exec(`sketchtool list slices "${PATH_SKETCH_FILE}"`, (error, result) => {
  if (error) throw new Error(`exec error: ${error}`);

  const slices = getSlicesByPage(
    JSON.parse(result),
    SKETCH_PAGE_NAME,
    SKETCH_SLICE_PREFIX
  );
  const duplicates = getDuplicates(slices);
  const sliceIds = slices.map(({ id }) => id);

  // Stop the export if there are duplicate slice names in the sketch file.
  if (duplicates.length > 0) {
    throw new Error(`Found duplicate slice names in Sketch file: "${duplicates}".`);
  }

  // export all slices to SVG files
  exec(getExportCmd(PATH_SKETCH_FILE, PATH_SVG_DEST, sliceIds), (exportError) => {
    if (error) throw new Error(`exec error: ${exportError}`);
    console.info('Slices exported');

    // clean up the messy exports from sketch
    cleanExports();
  });
});
