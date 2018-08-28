const _ = require('lodash');

/**
 * @param {Object} prop style-dictionary prop
 * @returns {Object} CTI object
 */
const getCTI = (prop) => ({
  category: prop.path[0],
  type: prop.path[1],
  item: prop.path[2],
});

/**
 * @param {Object} prop style-dictionary prop
 * @returns {Array} array of CTI parts to use in name
 */
const getNameParts = (prop) => {
  let nameParts;
  const { category, type, item } = getCTI(prop);

  switch (category) {
    case 'color':
      nameParts = [category, item];
      break;
    default:
      nameParts = [category, type, item];
      break;
  }

  return nameParts;
};

/**
 * @param {Object} prop style-dictionary prop
 * @returns {String} name string in kebab format
 */
const toKebab = (prop) => getNameParts(prop).join('-');

/**
 * @param {Object} prop style-dictionary prop
 * @returns {String} name string in constant (snake) format
 */
const toConstant = (prop) => _.snakeCase(getNameParts(prop).join(' ')).toUpperCase();

// Custom transforms
module.exports = [
  {
    name: 'name/ci/kebab',
    type: 'name',
    transformer: toKebab,
  },
  {
    name: 'name/custom/constant',
    type: 'name',
    transformer: toConstant,
  },
  {
    name: 'attribute/varNames',
    type: 'attribute',
    transformer: (prop) => ({
      varNames: {
        css: `var(--${toKebab(prop)})`,
        js: `${toConstant(prop)}`,
      },
    }),
  },
];
