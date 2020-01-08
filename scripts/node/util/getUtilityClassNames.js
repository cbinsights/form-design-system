/**
 * ---------------------------
 * Generates a list of all utility classes from `base-styles`.
 * ---------------------------
 *
 * 1. parses built CSS from `base-styles` into AST
 * 2. filters AST by selectors
 * 3. writes a file containing utility class list to `lib/stats`
 */

const fs = require('fs');
const path = require('path');
const css = require('css');

const { LIB_ROOT } = require('../constants');

/**
 * These characters indicate a selector that is not a basic utility class
 * (combinators, attribute selectors, etc)
 */
const SELECTOR_CHAR_BLACKLIST = [' ', ':', '+', '[']

// Get CSS string from built file in `lib`
const inputCss = fs.readFileSync(path.resolve(LIB_ROOT, 'base-styles/base-styles.full.css')).toString();

// convert CSS into AST and collect all selectors into a flat array
let allSelectors = [];
css.parse(inputCss).stylesheet.rules
  .filter((r) => r.type === 'rule')  // ignore comments
  .map((r) => r.selectors)           // ignore declarations
  .forEach((selectors) => {          // add selectors for each rule to flat array
    allSelectors = [
      ...allSelectors,
      ...selectors
    ];
  });

// get just the utility classes
const utilityClasses = allSelectors
  .filter((s) => s[0] === '.')       // include only class selectors
  .filter((s) =>                     // filter out blacklisted chars
    !SELECTOR_CHAR_BLACKLIST.some((ch) => s.includes(ch))
  )
;

// write out a commonJS module with the array of utility classes
fs.writeFileSync(
  path.resolve(LIB_ROOT, 'stats', 'utilityClassNames.js'),
  `module.exports = ${JSON.stringify(utilityClasses, null, 2)};\n`
);
