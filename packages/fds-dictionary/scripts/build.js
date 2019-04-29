const StyleDictionary = require('style-dictionary').extend(
  './style-dictionary.config.json'
);
const filters = require('./filters');
const transforms = require('./transforms');
const formats = require('./formats');
const actions = require('./actions');

const fancyLog = (msg) => {
  const logHR = `${new Array(msg.length).fill('~').join('')}`;
  console.log(`\n${logHR}`);
  console.log(msg);
  console.log(logHR);
};

filters.forEach((f) => {
  console.log(`Registering filter ${f.name}`);
  StyleDictionary.registerFilter(f);
});

transforms.forEach((t) => {
  console.log(`Registering transform ${t.name}`);
  StyleDictionary.registerTransform(t);
});

formats.forEach((f) => {
  console.log(`Registering format ${f.name}`);
  StyleDictionary.registerFormat(f);
});

actions.forEach((a) => {
  console.log(`Registering action ${a.name}`);
  StyleDictionary.registerAction(a);
});

fancyLog('💅 📖 Building distributions with style-dictionary 📖 💅');
StyleDictionary.buildAllPlatforms();
