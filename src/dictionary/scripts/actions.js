const fs = require('fs-extra');

// Custom "actions"
// Functions to run after building a distribution
module.exports = [
  {
    name: 'doc_assets',
    do: (dictionary, config) => {
      console.log('Copying assets for static docs');
      fs.copySync('doc/assets', `${config.buildPath}/assets`);
    },
    undo: (dictionary, config) => {
      console.log('Cleaning assets for static docs');
      fs.removeSync(`${config.buildPath}/assets`);
    }
  }
];
