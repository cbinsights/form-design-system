/**
 * ---------------------------
 * Provides a count of FDS CSS class usage from a given repo
 * ---------------------------
 */
const fs = require('fs');

if (!process.argv[2])
  throw new Error('Missing target dir. Run `yarn stats:imports <TARGET_DIR>');

const CLASSES = require('./getUtilityClassNames')();
const { getSourceFilePaths } = require('./searchUtils');

/**
 * @param {String} fileContent
 * @returns {Object} map of searchWords to count of instances found ({ 'myClass': 6 })
 */
const toClassCountMap = (fileContent) => {
  const result = {};
  CLASSES.forEach((className) => {
    const numMatches = (fileContent.match(new RegExp(`${className}[\s'":]+`, 'g')) || [])
      .length;
    if (numMatches > 0) {
      result[className] = numMatches;
    }
  });
  return result;
};

getSourceFilePaths(process.argv[2], (files) => {
  // { 'className': 0, ...}
  const initialTotals = CLASSES.reduce((acc, curr) => {
    acc[curr] = 0;
    return acc;
  }, {});

  // get number of matches for each class on each file,
  // then reduce into the totals object
  const countsByClass = files
    .map((f) => fs.readFileSync(f).toString()) // array of file contents
    .filter((s) => s.includes('className')) // only files where we set classes
    .map(toClassCountMap) // convert each file to count of matches
    .filter((o) => Object.entries(o).length) // only include files with matches
    .reduce((totals, matchesInFile) => {
      Object.keys(matchesInFile).forEach((className) => {
        totals[className] = totals[className] + matchesInFile[className];
      });
      return totals;
    }, initialTotals);

  // results sorted DESC
  const sortedCounts = Object.fromEntries(
    Object.entries(countsByClass).sort((a, b) => b[1] - a[1])
  );

  // total number of FDS class usages
  const totalCount = Object.values(sortedCounts).reduce(
    (tally, classCount) => tally + classCount,
    0
  );

  // classes found 0 times
  const unusedClasses = Object.entries(sortedCounts)
    .filter(([key, value]) => value === 0)
    .map(([key, value]) => key);

  // most used classes in target repo
  const topClasses = Object.entries(sortedCounts)
    .slice(0, 20)
    .map(([key, value], i) => `${i + 1}. ${key} (${value})`);

  console.log(`\nSearched ${files.length} files in ${process.argv[2]}`);
  console.log(
    `\n------ Unused classes (${unusedClasses.length}) ------\n${unusedClasses.join(
      ', '
    )}`
  );
  console.log(`\n------ Most used classes ------\n${topClasses.join('\n')}`);
  console.log(`\n---------------------------------`);
  console.log(`TOTAL CLASS USAGE: ${totalCount}\n`);
});
