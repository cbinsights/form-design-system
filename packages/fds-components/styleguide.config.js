const path = require('path');
const { createConfig, match, babel, postcss } = require('webpack-blocks');

/**
 * Creates configuration for a styleguide section.
 * @param {String} name display name of section
 * @param {String} slug directory name
 * @returns {Object} config object for `sections` config below
 */
const makeSection = (name, slug) => ({
  name: `${name}`,
  components: () => [`./src/components/${slug}/*.jsx`],
  content: `./src/components/${slug}/index.md`,
  sectionDepth: 1,
});

module.exports = {
  title: 'fds-components',

  // destination dir for static build
  styleguideDir: '../../docs/fds-components/',

  // expand props tables by default
  usageMode: 'expand',

  // define component groupings in documentation
  sections: [
    makeSection('Layout', 'layout'),
    makeSection('Media', 'media'),
    makeSection('Interactive', 'interactive'),
  ],

  // webpack require assets into styleguide
  require: [
    // always include our base stylesheet for fds-components
    path.join(__dirname, 'src/style/index.css'),

    // for the styleguide only, provide some additional debugging classes
    path.join(__dirname, 'src/style/debug.css'),
  ],

  // minimum possible webpack config to run/build styleguidist.
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
