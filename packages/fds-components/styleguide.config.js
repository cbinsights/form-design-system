const path = require('path');
const { createConfig, match, babel, css } = require('webpack-blocks');

module.exports = {
  // PostCSS is only used for styleguidist internal config. For our styles,
  // we load CSS that has already been compiled from `lib/`.
  require: [path.join(__dirname, 'lib/style/fds-components.css')],

  // minimum possible config to run styleguidist.
  // babel loader for JSX, css/style loader for our CSS imported from `lib/`
  webpackConfig: createConfig([
    match(['*.js', '*jsx', '!*node_modules*'], [babel()]),
    match(['*.css', '!*node_modules*'], [css()]),
  ]),

  // Writes correct import path for using components
  // from `lib` in consumer applications
  getComponentPathLine(componentPath) {
    const name = path.basename(componentPath, '.jsx');
    const dir = path.dirname(componentPath).replace('src', 'lib');
    return `import ${name} from 'fds-components/${dir}/${name}';`;
  },
};
