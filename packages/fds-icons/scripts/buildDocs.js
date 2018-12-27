const fs = require('fs');
const path = require('path');
const glob = require('glob');
const Handlebars = require('handlebars');
const getComponentName = require('./helpers/getComponentName');
const { buildConfig } = require('../icons.config');

if (!fs.existsSync(buildConfig.docs.output)) {
  fs.mkdirSync(buildConfig.docs.output);
}

Handlebars.registerHelper('json', (c) => JSON.stringify(c, null, 2));
const template = Handlebars.compile(
  fs.readFileSync(path.join(__dirname, '/templates/docs.hbs')).toString()
);

glob(`${buildConfig.docs.input}/*.svg`, {}, (error, files) => {
  if (error) throw new Error(`glob error: ${error}`);

  // template view for handlebars
  const docsView = [];

  files.forEach((filepath) => {
    const svg = fs.readFileSync(filepath).toString();
    const componentName = getComponentName(filepath);

    docsView.push({
      svg,
      name: path.basename(filepath, '.svg'),
      importName: `import ${componentName} from 'fds-icons/dist/react/${componentName}';`,
    });
  });

  fs.writeFileSync(`${buildConfig.docs.output}/index.html`, template(docsView));
});
