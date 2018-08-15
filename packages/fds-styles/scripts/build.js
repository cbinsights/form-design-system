const fs = require('fs-extra');
const path = require('path');
const Handlebars = require('handlebars');
const postcss = require('postcss');
const postcssPresetEnv = require('postcss-preset-env');
const postcssAtImport = require('postcss-import');

const PATH_SRC = path.resolve(process.cwd(), 'src/index.css');
const PATH_DIST = path.resolve(process.cwd(), 'dist');
const PATH_OUTPUT = path.resolve(PATH_DIST, 'narwhal-styles.css');
const PATH_DOC_SRC = path.resolve(process.cwd(), 'doc');
const PATH_DOC_BUILD = path.resolve(PATH_DOC_SRC, 'build');
const CSS_SRC = fs.readFileSync(PATH_SRC, 'utf-8');

/**
 * @description PostCSS plugins to run in turn
 */
const postcssPlugins = [postcssAtImport, postcssPresetEnv];

/**
 * Cleans and prepares file system for build artifacts.
 * Place any pre-compile tasks here.
 *
 * @param {Array} dirs directories to clean/create
 * @param {Function} cbFn callback
 * @returns {undefined}
 */
const bootstrapFs = (dirs, cbFn) => {
  dirs.forEach(dir => {
    fs.emptyDirSync(dir);
  });
  if (cbFn) cbFn();
};

/**
 * @param {Object} context context for template
 * @param {String} templatePath handlebars template
 * @returns {String} interpolated doc template
 */
/* eslint-disable no-unused-vars */
const compileDocs = (context, templatePath) => {
  const template = Handlebars.compile(fs.readFileSync(templatePath).toString());
  return template({ context });
};
/* eslint-enable no-unused-vars */

// 1) Prepare file system for build
// 2) Transform CSS source and build docs
bootstrapFs([PATH_DIST, PATH_DOC_BUILD, path.resolve(PATH_DOC_BUILD, 'assets')], () => {
  postcss(postcssPlugins)
    .process(CSS_SRC, {
      from: PATH_SRC,
      to: PATH_OUTPUT,
      map: { inline: false }
    })
    .then(result => {
      const { css, map } = result;

      // dist source map
      fs.writeFile(`${PATH_OUTPUT}.map`, map, err => {
        if (err) throw err;
      });

      // dist CSS
      fs.writeFile(PATH_OUTPUT, css, err => {
        if (err) throw err;

        // when compiled CSS is successfully written,
        // copy the file to documentation assets
        fs.copyFileSync(
          PATH_OUTPUT,
          path.resolve(PATH_DOC_BUILD, 'assets', 'narwhal-styles.css')
        );
      });
    });
});
