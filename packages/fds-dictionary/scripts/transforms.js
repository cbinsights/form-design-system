const _ = require('lodash');

const toKebab = prop => `${prop.attributes.category}-${prop.attributes.item}`;

const toConstant = prop => {
  const category = prop.path[0];
  const item = prop.path[2];
  return _.snakeCase([category, item].join(' ')).toUpperCase();
};

// Custom transforms
module.exports = [
  {
    name: 'name/ci/kebab',
    type: 'name',
    transformer: toKebab
  },
  {
    name: 'name/ci/constant',
    type: 'name',
    transformer: toConstant
  },
  {
    name: 'attribute/varNames',
    type: 'attribute',
    transformer: prop => ({
      varNames: {
        css: `var(--${toKebab(prop)})`,
        js: `${toConstant(prop)}`
      }
    })
  }
];
