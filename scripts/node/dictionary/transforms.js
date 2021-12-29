const { snakeCase } = require('snake-case');
const { getRgbComponents } = require('./util/color');
const { isCustomMedia, excludeCustomMedia } = require('./filters');

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
 * Returns name parts based on the recommended structure,
 * [CTI](https://amzn.github.io/style-dictionary/#/package_structure?id=category-type-item).
 *
 * Category - "color"
 * Type - "base"
 * Item - "red"
 *
 * Based on the category of a property, we can decide which parts of CTI
 * to include in the generated varaiable name.
 *
 * @param {Object} prop style-dictionary prop
 * @returns {Array} array of CTI parts to use in name
 */
const getNameParts = (prop) => {
  let nameParts;
  const { category, type, item } = getCTI(prop);

  switch (category) {
    case 'customMedia':
      nameParts = [item];
      break;
    case 'color':
      nameParts = [category, item];
      break;
    case 'layout':
      nameParts = [type, item];
      break;
    default:
      nameParts = [category, type, item];
      break;
  }

  return nameParts;
};

/**
 *
 * @param {Object} prop style-dictionary prop
 * @returns {String} "item" name of property
 */
const toItemName = (prop) => getCTI(prop).item;

/**
 * @param {Object} prop style-dictionary prop
 * @returns {String} name string in kebab format
 */
const toKebab = (prop) => getNameParts(prop).join('-');

/**
 * @param {Object} prop style-dictionary prop
 * @returns {String} name string in constant (snake) format
 */
const toConstant = (prop) => snakeCase(getNameParts(prop).join(' ')).toUpperCase();

/**
 * @param {Object} prop style-dictionary prop
 * @returns {String} name string containing item as lowercase object key
 */
const toItemObjectKey = (prop) => getCTI(prop).item.toLowerCase();

/**
 * @param {Object} prop style-dictionary prop
 * @returns {Object} map of distributions to var names for this prop
 */
const toVarNames = (prop) => ({
  varNames: {
    css: `var(--${toKebab(prop)})`,
    js: `${toConstant(prop)}`,
    human: `${getCTI(prop).item}`,
  },
});

/**
 * @param {Object} prop style-dictionary prop
 * @returns {String} raw RGB color value
 */
const toRgbComponents = (prop) => {
  const { r, g, b } = getRgbComponents(prop.original.value);
  return `${r} ${g} ${b}`;
};

/**
 * @param {Object} prop style-dictionary prop
 * @returns {Object} map of distributions to var names for this prop
 */
const toMqInfo = (prop) => ({
  mqInfo: {
    size: getCTI(prop).item,
    usage: `@media (--viewport-${getCTI(prop).item})`,
    query: prop.value,
    description: `targets viewports ${getCTI(prop).item} and larger`,
  },
});

// Custom transforms
module.exports = [
  {
    name: 'name/item',
    type: 'name',
    transformer: toItemName,
  },
  {
    name: 'name/custom/kebab',
    type: 'name',
    transformer: toKebab,
  },
  {
    name: 'name/custom/constant',
    type: 'name',
    transformer: toConstant,
  },
  {
    name: 'name/i/objectKey',
    type: 'name',
    transformer: toItemObjectKey,
  },
  {
    name: 'attribute/varNames',
    type: 'attribute',
    transformer: toVarNames,
    matcher: excludeCustomMedia.matcher,
  },
  {
    name: 'attribute/mqInfo',
    type: 'attribute',
    transformer: toMqInfo,
    matcher: isCustomMedia.matcher,
  },
  {
    name: 'value/rgbComponents',
    type: 'value',
    transformer: toRgbComponents,
  },
];
