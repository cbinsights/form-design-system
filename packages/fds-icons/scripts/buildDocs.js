const fs = require('fs');
const path = require('path');
const glob = require('glob');
const Handlebars = require('handlebars');
const getComponentName = require('./helpers/getComponentName');
const { buildConfig } = require('../icons.config');

if (!fs.existsSync(buildConfig.docs.output)) {
  fs.mkdirSync(buildConfig.docs.output);
}

const template = Handlebars.compile(
  fs.readFileSync(path.join(__dirname, '/templates/docs.hbs')).toString()
);

const docsView = []; // template view for handlebars

glob(`${buildConfig.docs.input}/*.svg`, {}, (error, files) => {
  if (error) throw new Error(`glob error: ${error}`);

  files.forEach((filepath) => {
    const svg = fs.readFileSync(filepath).toString();
    docsView.push({
      svg,
      name: path.basename(filepath, '.svg'),
      componentName: getComponentName(filepath),
    });
  });

  fs.writeFileSync(
    `${buildConfig.docs.output}/index.html`,
    template({ icons: docsView })
  );
});
