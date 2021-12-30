const path = require('path');
const { REPO_ROOT } = require('../constants');

const StyleDictionary = require('style-dictionary').extend(
  path.resolve(REPO_ROOT, 'dictionary.config.json')
);

const { allFilters } = require('./filters');
const transforms = require('./transforms');
const formats = require('./formats');

const fancyLog = (msg: string) => {
  const logHR = `${new Array(msg.length).fill('~').join('')}`;
  console.log(`\n${logHR}`);
  console.log(msg);
  console.log(logHR);
};

interface Filter {
  name: string;
  matcher: () => boolean;
}

allFilters.forEach((f: Filter) => {
  console.log(`Registering filter ${f.name}`);
  StyleDictionary.registerFilter(f);
});

transforms.forEach((t: Filter) => {
  console.log(`Registering transform ${t.name}`);
  StyleDictionary.registerTransform(t);
});

formats.forEach((f: Filter) => {
  console.log(`Registering format ${f.name}`);
  StyleDictionary.registerFormat(f);
});

fancyLog('💅 📖 Building distributions with style-dictionary 📖 💅');
StyleDictionary.buildAllPlatforms();
