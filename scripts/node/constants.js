const path = require('path');

const REPO_ROOT = path.resolve(process.cwd());
const SRC = path.resolve(REPO_ROOT, 'src/');

module.exports = {
  REPO_ROOT,
  DICTIONARY_ROOT: path.resolve(SRC, 'dictionary'),
  ICONS_ROOT: path.resolve(SRC, 'icons'),
  STYLES_ROOT: path.resolve(SRC, 'styles'),
  COMPONENTS_ROOT: path.resolve(SRC, 'components'),
};
