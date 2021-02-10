/**
 * ---------------------------
 * Utility function for getting a list of all current helper classes in FDS
 * ---------------------------
 */
const fs = require('fs');
const path = require('path');
const css = require('css');
const { LIB_ROOT } = require('../constants');

/**
 * These characters indicate a selector that is not a basic utility class
 * (combinators, attribute selectors, etc)
 */
const SELECTOR_CHAR_DENYLIST = [' ', ':', '+', '['];

/**
 * Exclude inverted. We get too many false positives.
 */
const CLASSNAME_DENYLIST = ['inverted'];

const FDS_CSS = fs
  .readFileSync(path.resolve(LIB_ROOT, 'base-styles/base-styles.full.css'))
  .toString();

/**
 * @param {String} inputCSS
 * @returns {Array} array of selector strings from input css
 */
const _getSelectorsFromCss = (inputCss) => {
  let result = [];

  css
    .parse(inputCss)
    .stylesheet.rules.filter((r) => r.type === 'rule') // ignore comments
    .map((r) => r.selectors) // ignore declarations
    .forEach((selectors) => {
      // add selectors for each rule to flat array
      result = [...result, ...selectors];
    });

  return result;
};

/**
 * @returns {Array} list of all utility class names from FDS
 */
const getUtilityClassNames = () => {
  const selectors = _getSelectorsFromCss(
    fs.readFileSync(path.resolve(LIB_ROOT, 'base-styles/base-styles.full.css')).toString()
  );

  return selectors
    .filter((s) => s[0] === '.') // include only class selectors
    .filter(
      (
        s // filter out denied chars
      ) => !SELECTOR_CHAR_DENYLIST.some((ch) => s.includes(ch))
    )
    .filter(
      (
        s // filter out denied classes
      ) => !CLASSNAME_DENYLIST.some((classname) => s.includes(classname))
    )
    .map((s) => s.replace('.', '')); // remove dot (we're checking usage, not definition)
};

module.exports = getUtilityClassNames;
