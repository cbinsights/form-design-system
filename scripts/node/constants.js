const path = require('path');

const CWD = process.cwd();

const REPO_ROOT = path.resolve(CWD);

module.exports = {
  REPO_ROOT,
  SRC_ROOT: path.resolve(CWD, 'src'),
  LIB_ROOT: path.resolve(CWD, 'lib'),
  DICTIONARY_ROOT: path.resolve(CWD, 'src', 'dictionary'),
  ICONS_ROOT: path.resolve(CWD, 'src', 'icons'),
  COMPONENTS_ROOT: path.resolve(CWD, 'src', 'components'),
};
