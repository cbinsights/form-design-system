import path from 'path';
import { REPO_ROOT } from '../constants';

const StyleDictionary = require('style-dictionary').extend(
  path.resolve(REPO_ROOT, 'dictionary.config.json')
);

import { allFilters } from './filters';
import { transforms } from './transforms';
import { formats } from './formats';

const fancyLog = (msg: string) => {
  const logHR = `${new Array(msg.length).fill('~').join('')}`;
  console.log(`\n${logHR}`);
  console.log(msg);
  console.log(logHR);
};

transforms.forEach((t) => {
  console.log(`Registering transform ${t.name}`);
  StyleDictionary.registerTransform(t);
});

allFilters.forEach((f) => {
  console.log(`Registering filter ${f.name}`);
  StyleDictionary.registerFilter(f);
});

formats.forEach((f) => {
  console.log(`Registering format ${f.name}`);
  StyleDictionary.registerFormat(f);
});

fancyLog('💅 📖 Building distributions with style-dictionary 📖 💅');
StyleDictionary.buildAllPlatforms();
