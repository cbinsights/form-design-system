/**
 * ---------------------------
 * Provides a count of FDS component imports from a given repo
 * ---------------------------
 */
const fs = require('fs');
const parser = require('@babel/parser');
const {
  FDS_PACKAGE_NAME,
  getSourceFilePaths,
} = require('./searchUtils.js');

if (!process.argv[2]) throw new Error('Missing target dir. Run `yarn stats:imports <TARGET_DIR>');

/**
 * @param {String} path filepath
 * @returns {Boolean} true if file contains an FDS import
 */
const hasFdsImport = (path) => fs.readFileSync(path).includes(FDS_PACKAGE_NAME);

/**
 * @param {String} path filepath
 * @returns {Object} AST for file
 */
const toAst = (path) => parser.parse(
  fs.readFileSync(path).toString(),
  {
    sourceType: 'module',
    plugins: [
      'jsx',
      'classProperties',
    ],
  }
);

/**
 * @param {Object} ast file ast
 * @returns {Array} list of FDS components imported in file
 */
const toComponentList = (ast) => ast.program.body
  .filter((node) => node.type === 'ImportDeclaration')        // only imports
  .filter((i) => i.source.value.includes(FDS_PACKAGE_NAME))  // only FDS imports
  .flatMap((i) => i.specifiers.map((s) => s.local.name));     // return a flat arr of local specifier names


getSourceFilePaths(process.argv[2], (files) => {
  const componentCountMap = files
    .filter(hasFdsImport)       // only convert files that actually have FDS imports
    .map(toAst)
    .flatMap(toComponentList)   // get component names from each file and merge into flat arr
    .reduce((acc,curr) => {     // count up the number of imports for each component in an obj
      if (!acc[curr]) acc[curr] = 0;
      acc[curr]++;
      return acc;
    }, {});

  const totalImports = Object.values(componentCountMap)
    .reduce((acc,curr) => acc + curr, 0);

  const sortedCounts = Object.entries(componentCountMap)
    .sort((a,b) => b[1] - a[1])
    .map((arr) => `  ${arr[1]}       ${arr[0]}`);

  console.log('\n IMPORTS    NAME');
  console.log('----------------------------------');
  sortedCounts.forEach((line) => console.log(line));
  console.log(`\nsource: ${process.argv[2]}`);
  console.log(` TOTAL: ${totalImports}`);
});
