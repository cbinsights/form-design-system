const path = require('path');
const { createConfig, match, babel, postcss } = require('webpack-blocks');

module.exports = {
  // always include our base stylesheet for fds-components
  require: [path.join(__dirname, 'src/style/index.css')],

  // minimum possible config to run styleguidist.
  // babel and postcss loaders will read from base config
  // files in lerna project root
  webpackConfig: createConfig([
    match(['*.js', '*jsx', '!*node_modules*'], [babel()]),
    match(['*.css', '!*node_modules*'], [postcss()]),
  ]),

  // Writes correct import path for using components
  // from `lib` in consumer applications
  getComponentPathLine(componentPath) {
    const name = path.basename(componentPath, '.jsx');
    const dir = path.dirname(componentPath).replace('src', 'lib');
    return `import ${name} from 'fds-components/${dir}/${name}';`;
  },
};
