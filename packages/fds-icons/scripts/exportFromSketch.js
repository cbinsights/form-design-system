const { exec } = require('child_process');
const path = require('path');
const pascalCase = require('pascal-case');

const PATH_SKETCH_FILE = path.normalize(process.argv[2]);
const SKETCH_PAGE_NAME = 'Icons';
const SKETCH_SLICE_PREFIX = 'Icon/';

/**
 * @param {Object} slices full slices data from sketchtool
 * @param {String} pageName name of page to get slices from
 * @param {String} slicePrefix include only slices with this prefix
 * @returns {Array} list of { id, name } objects for all slices in `pageName`
 */
const getSlicesByPage = (slices, pageName, slicePrefix) => slices
  .pages
  .filter((page) => page.name.toUpperCase() === pageName.toUpperCase())
  .pop()
  .slices
  .filter((slice) => slice.name.includes(slicePrefix))
  .map((slice) => {
    const { id, name } = slice;
    return { id, name };
  });

/**
 * @param {String} sliceName
 * @returns {String} icon name in PascalCase
 */
const getIconName = (sliceName) => pascalCase(
  sliceName.replace(SKETCH_SLICE_PREFIX, '')
);


exec(`sketchtool list slices "${PATH_SKETCH_FILE}"`, (error, result) => {
  if (error) throw new Error(`exec error: ${error}`);

  const slices = getSlicesByPage(
    JSON.parse(result),
    SKETCH_PAGE_NAME,
    SKETCH_SLICE_PREFIX
  );

  exec(
    `sketchtool export slices`
  )

});

