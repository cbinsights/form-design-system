const fs = require('fs-extra');
const path = require('path');
const glob = require('glob');
const Handlebars = require('handlebars');
const getComponentName = require('./helpers/getComponentName');
const { buildConfig } = require('../icons.config');

const PATH_TEMPLATE = path.join(__dirname, '/templates/docs.hbs');
const PATH_ASSETS = path.join(__dirname, '/templates/assets/');

if (!fs.existsSync(buildConfig.docs.output)) {
  fs.mkdirSync(buildConfig.docs.output);
}

Handlebars.registerHelper('json', (c) => JSON.stringify(c, null, 2));
const template = Handlebars.compile(fs.readFileSync(PATH_TEMPLATE).toString());

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
  fs.copySync(PATH_ASSETS, `${buildConfig.docs.output}/assets`);
  fs.copySync(
    path.join(__dirname, '../src/fds-icons.css'),
    `${buildConfig.docs.output}/assets/fds-icons.css`
  );
});
