/**
 * Helpers for searching CBI repos for FDS code
 */
const glob = require('glob');
const path = require('path');
const { REPO_ROOT } = require('../constants.js');
const packageName = require(`${REPO_ROOT}/package.json`).name;

const SEARCH_DENYLIST = ['__tests__', '__spec__', '__snapshots__'];

module.exports = {
  /** import matcher */
  FDS_PACKAGE_NAME: packageName,

  /**
   * @param {String} dirPath directory to search for js/jsx files
   * @param {Function} cbFn invoked with list of file paths
   */
  getSourceFilePaths: (dirPath, cbFn) => {
    glob(`${path.resolve(dirPath)}/**/*.+(js|jsx)`, (error, files) => {
      const result = files.filter(
        (path) => !SEARCH_DENYLIST.some((word) => path.includes(word))
      );

      cbFn(result);
    });
  },
};
