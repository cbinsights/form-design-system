/* eslint-disable no-console */
/**
 * @module cleanExports
 *
 * `sketchtool` exports SVG files based on their slice name.
 * For example, a slice named "Icon/plus" will be exported to
 * `<destination>/Icon/plus`. We have no control over this.
 *
 * This module exports a function that removes all dirs created
 * by sketchtool, and moves all SVG exports into `<destination>`
 * with a PascalCase file name.
 */
const fs = require('fs');
const path = require('path');
const glob = require('glob');
const rimraf = require('rimraf');
const { pascalCase } = require('pascal-case');
const { sketchConfig, buildConfig } = require('../icons.config');

const normalizePathToFile = (pathName) => {
  const ext = pathName.split('.')[1];
  let fileName = `${pascalCase(path.basename(pathName, ext))}.${ext}`;
  if (ext === 'png') {
    fileName = fileName.replace('_', '@'); // use standard PNG scale convention
  }
  return fileName;
};

/**
 * Moves files from `filePaths` arr one by one to a new destination and
 * normalizes file names
 *
 * @param {Array} filePaths absolute paths to all svgs exported from sketch
 * @param {String} destination desired destination for cleaned up exports
 * @param {Function} cbFn callback when move is complete
 */
const moveFiles = (filePaths, destination, cbFn) => {
  filePaths.forEach((filePath) => {
    const file = normalizePathToFile(filePath);
    fs.renameSync(filePath, `${destination}/${file}`);
  });
  cbFn();
};

/**
 * Cleans up nested dirs resulting from sketchtool export.
 *
 * @param {String} ext - file extension to clean up ('svg' or 'png')
 */
const cleanExports = (ext) => {
  // where the files belong
  const outputDir = buildConfig[ext].src;

  // where sketch actually puts files because of '/' in their name prefix
  const inputDir = path.join(outputDir, sketchConfig.slicePrefix);

  glob(`${inputDir}/**/*.${ext}`, {}, (error, files) => {
    if (error) throw new Error(`glob error: ${error}`);

    moveFiles(files, outputDir, () => {
      console.info(`SUCCESS - ${files.length} ${ext} icons written`);
      rimraf.sync(`${inputDir}`);
    });
  });
};

module.exports = {
  cleanExports,
  normalizePathToFile,
};
