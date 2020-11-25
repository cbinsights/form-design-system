const fs = require('fs-extra');
const path = require('path');
const glob = require('glob');
const { buildConfig } = require('./icons.config');

if (!fs.existsSync(buildConfig.docs.output)) {
  fs.mkdirSync(buildConfig.docs.output);
}

glob(`${buildConfig.docs.input}/*.svg`, {}, (error, files) => {

  const svgDefs = files
    .map((filepath) => ({
      name: path.basename(filepath, '.svg'),
      svg: fs.readFileSync(filepath).toString(),
    }));

  const content = `module.exports = ${JSON.stringify(svgDefs, null, 2)};`;

  fs.writeFileSync(`${buildConfig.docs.output}/iconManifest.js`, content);
});

